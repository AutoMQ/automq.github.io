import { promises as fsp, Dirent as dir } from 'fs';
import path from 'path';
import fm from 'front-matter';
import { remark } from 'remark';
import remarkhtml from 'remark-html';
import remarkToc from 'remark-toc'
import { fromMarkdown } from 'mdast-util-from-markdown'

import * as dateformat from './dateformat';

const fileExt = 'md';
var fs = require("fs");
var list = [];
function listFile(dir) {
    var arr = fs.readdirSync(dir);
    arr.forEach(function (item) {
        var fullpath = path.join(dir, item);
        var stats = fs.statSync(fullpath);
        if (stats.isDirectory()) {
            listFile(fullpath);
        } else {
            list.push(fullpath);
        }
    });
    return list;
}

// return absolute path to folder
function absPath(dir) {
    return (
        path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir)
    );
}
// return array of files by type in a directory and remove extensions
export async function getFileIds(dir = './') {
    let file_list = listFile(dir).filter(item => !item.endsWith('_layout.md') && !item.endsWith('DS_Store'))
    let file_menu = []
    file_menu = file_list.map(item => {
        let current = item.split('/')
        let length = current.length
        current = current.slice(1)
        current[length - 2] = current[length - 2].substring(0, current[length - 2].length - 3)
        current = current.slice(1);
        return current
    })
    return file_menu
}


export async function getFileData(dir = './', id,type) {
    const
        file = path.join(absPath(dir), `${id}.${fileExt}`),
        stat = await fsp.stat(file),
        data = await fsp.readFile(file, 'utf8'),
        matter = fm(data),
        html = (await remark().use(remarkToc).use(remarkhtml).process(matter.body)).toString();
    const date = matter.attributes.date || stat.ctime;
    if(matter.attributes.tags)matter.attributes.tags = matter.attributes.tags.split(',')
    matter.attributes.date = date.toUTCString();
    matter.attributes.dateYMD = dateformat.ymd(date);
    matter.attributes.dateFriendly = dateformat.friendly(date);
    // word count
    const
        roundTo = 10,
        readPerMin = 200,
        numFormat = new Intl.NumberFormat('en'),
        count = matter.body.replace(/\W/g, ' ').replace(/\s+/g, ' ').split(' ').length,
        words = Math.ceil(count / roundTo) * roundTo,
        mins = Math.ceil(count / readPerMin);
    matter.attributes.wordcount = `${numFormat.format(mins)} minutes read`;
    if(type == 1){
        return {
            id,
            ...matter.attributes
        };
    }
    return {
        id,
        html,
        ...matter.attributes
    };
}

export async function getSideBar(dir = 'content', name = '_layout') {
    const
        file = path.join(absPath(dir), `${name}.${fileExt}`),
        data = await fsp.readFile(file, 'utf8'),
        matter = fm(data);
    const json = (fromMarkdown(matter.body))
    const side_bar = json.children
        .filter((item) => {
            return (item.type == 'heading' && (item.depth == 2 || item.depth == 3 || item.depth == 4)) || item.type == 'thematicBreak'
        })
        .map(item => {
            let level = 1
            if (item.type == 'thematicBreak') {
                return {
                    level: 1,
                    type: item.type,
                    displayChildren: false
                }
            } else {
                level = item.depth - 1
            }
            const child = item.children[0];
            let path = "";
            let title = "";
            let type = "text";
            let displayChildren = false;

            if (child.type !== "text") {
                type = 'page-link'
                path = child.url
                title = child.children[0].value;
            } else {
                title = child.value;
            }
            return {
                level,
                title,
                path,
                type,
                displayChildren,
            };
        })
    return side_bar
}
// return sorted array of all posts for indexes
export async function getAllFiles(dir) {
    const
        now = dateformat.ymd(new Date()),
        files = await getFileIds(dir),
        data = await Promise.allSettled(files.map(id => getFileData(dir, id)));
    return data
        .filter(md => md.value && md.value.dateYMD <= now)
        .map(md => md.value)
        .sort((a, b) => (a.dateYMD < b.dateYMD ? 1 : -1));
}