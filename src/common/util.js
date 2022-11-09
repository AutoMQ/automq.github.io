import path from 'path'
let fs = require("fs")
import fm from 'front-matter'
import moment from 'moment'

export function getFileData(el) {
    if(!fs.statSync(el).isDirectory()){
        const
            data = fs.readFileSync(el,'utf-8'),
            matter = fm(data)
        const href = el.slice(10,el.length - 3);
        matter.attributes.href = href
        const
            roundTo = 10,
            readPerMin = 200,
            numFormat = new Intl.NumberFormat('en'),
            count = matter.body.replace(/\W/g, ' ').replace(/\s+/g, ' ').split(' ').length,
            words = Math.ceil(count / roundTo) * roundTo,
            mins = Math.ceil(count / readPerMin);
        if(matter.attributes.published_at) matter.attributes.published_at = moment(new Date(matter.attributes.published_at)).format('MMM DD YYYY')
        if(matter.attributes.tags) matter.attributes.tags = matter.attributes.tags.split(',')
        matter.attributes.readtime = `${numFormat.format(mins)} minutes read`;
        return matter.attributes
    }
}


async function listFile(list, dir) {
    let arr = fs.readdirSync(dir)
    arr.forEach(function (item) {
        if(item !== 'index.json.json.jsx'){
            let filePath = path.join(dir, item)
            let stats = fs.statSync(filePath)
            if (stats.isDirectory()) {
                listFile(list, filePath)
            } else {
                list.push(filePath)
            }
        }

    })
    return list
}

export async function getMdInfoList(dir) {
    let dirList = []
    let infoList = []
    dirList = await listFile(dirList, dir)
    for (const el of dirList) {
        const element = getFileData(el)
        infoList.push(element)
    }
    return infoList
}

export function postTagStyle(tag) {
    switch (tag) {
        case "Announcement":
            return "bg-indigo-100 text-indigo-800";
        case "Education":
            return "bg-green-100 text-green-800";
        default:
            return "bg-blue-100 text-blue-800";
    }
}
