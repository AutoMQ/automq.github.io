const path = require('path')
const fs = require("fs")
const fm = require('front-matter')
const moment = require('moment')

const errorList = ['index.jsx','index.js','.DS_Store']

function getFileData(el) {
    const stat = fs.statSync(el)
    if(!stat.isDirectory()){
        const
            data = fs.readFileSync(el,'utf-8'),
            matter = fm(data)
        const href = el.slice(9,el.length - 3);
        let hrefList = href.split('/')
        if(hrefList[0] === ""){
            hrefList = hrefList.slice(1)
        }
        matter.attributes.href = hrefList.join('/')
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

function listFile(list, dir) {
    let arr = fs.readdirSync(dir)
    arr.forEach(function (item) {
        if(!errorList.includes(item)){
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

function getMdInfoList(dir) {
    let dirList = []
    let infoList = []
    dirList = listFile(dirList, dir)
    for (const el of dirList) {
        const element = getFileData(el)
        infoList.push(element)
    }
    return infoList
}

function postTagStyle(tag) {
    switch (tag) {
        case "Announcement":
            return "bg-indigo-100 text-indigo-800";
        case "Education":
            return "bg-green-100 text-green-800";
        default:
            return "bg-blue-100 text-blue-800";
    }
}

module.exports = {
    getMdInfoList,
    postTagStyle
}
