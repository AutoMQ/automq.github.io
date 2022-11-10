const {getMdInfoList} = require("../common/util");
const f_t = require('../constant/foot_topic.json')
const fs = require("fs");
const DIST_PATH = '../constant/topic/index.js'
let file_content = String()

f_t.map(item => {
    try {
        const {filePath,title} = item
        const list = getMdInfoList(filePath)
        file_content += 'export const ' + title + '= ' + JSON.stringify(list)
        file_content += "\n"

    }catch (e) {
        console.log(e)
    }
})

fs.writeFile(DIST_PATH, file_content, err => {
    if (!err) console.log("success~");
});



