const fs = require('fs')
const path = require('path')
const fm = require('front-matter')

const INPUT_FILE_ZH = '../pages/docs/zh'
const INPUT_FILE_EN = '../pages/docs/en'
const OUTPUT_FILE_ZH = '../constant/zh/navigation.js'
const OUTPUT_FILE_EN = '../constant/en/navigation.js'

let fileTree_zh ,fileTree_en

function fileDisplay(dirPath, arr) {
    let filesList = fs.readdirSync(dirPath);
    let count = 0;
    for (let i = 0; i < filesList.length; i++) {
        // file information
        let fileObj = {};
        const filePath = path.join(dirPath, filesList[i]);
        const info = path.parse(filePath)
        let data, matter
        fileObj.name = info.name
        fileObj.title = info.name
        let stats = fs.statSync(filePath);
        if (!stats.isDirectory()) {
            data = fs.readFileSync(filePath, 'utf-8')
            matter = fm(data)
            fileObj.title = matter.attributes.title
            fileObj.rank = matter.attributes.rank ?? 99
        }
        if (stats.isDirectory()) {
            if (fs.existsSync(`${filePath}/index.md`)) {
                data = fs.readFileSync(`${filePath}/index.md`, 'utf-8')
                matter = fm(data)
                fileObj.href = filePath.substring(8)
                fileObj.title = matter.attributes.title
                fileObj.rank = matter.attributes.rank ?? 99
            }
            // dir
            fileObj.type = 'dir';
            fileObj.links = [];
            arr.push(fileObj);
            // stack
            fileDisplay(filePath, arr[count].links);
            count++

        } else if (info.name !== "index") {
            // file
            fileObj.type = path.extname(filesList[i]).substring(1);
            fileObj.href = filePath.substring(8, filePath.length - 3)
            count++
            arr.push(fileObj);
        }
    }
    return arr
}

// get the fileTree
fileTree_zh = fileDisplay(INPUT_FILE_ZH, [])
fileTree_en = fileDisplay(INPUT_FILE_EN, [])


// create the new file
fs.writeFile(OUTPUT_FILE_ZH, 'export const zh_navigation = ' + JSON.stringify(fileTree_zh), err => {
    if (!err) console.log("success~");
});

fs.writeFile(OUTPUT_FILE_EN, 'export const en_navigation = ' + JSON.stringify(fileTree_en), err => {
    if (!err) console.log("success~");
});

