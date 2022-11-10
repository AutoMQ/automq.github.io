const algoliasearch = require('algoliasearch')
const fs = require('fs')
const path = require('path')
const fm = require('front-matter')
const Markdown = require("@markdoc/markdoc");
const slu = require("slugify")
const lodash = require('lodash')

const INPUT_FILE_EN = '../pages/docs/en'

function getNodeText(node) {
    let text = ''
    for (let child of node.children ?? []) {
        if (typeof child === 'string') {
            text += child
        }
        text += getNodeText(child)
    }
    return text
}

function collectHeadings(nodes) {
    let sections = []
    for (let node of nodes) {
        if (node.name === 'h2' || node.name === 'h3') {
            let title = getNodeText(node)
            if (title) {
                let id = slu(title)
                node.attributes.id = slu(id)
                if (node.name === 'h3') {
                    if (!sections[sections.length - 1]) {
                        continue
                        // throw new Error(
                        //     'Cannot add `h3` to table of contents without a preceding `h2`'
                        // )
                    }
                    sections[sections.length - 1].children.push({
                        ...node.attributes,
                        title,
                    })
                } else {
                    sections.push({...node.attributes, title, children: []})
                }
            }
        }

        sections.push(...collectHeadings(node.children ?? []))
    }
    return sections
}

function getObj(info, obj, level) {
    info.map(item => {
        const key = "lvl" + level
        const type = "lvl" + level
        const iH = obj.hierarchy
        iH[key] = item.id
        const iObj = {...obj, hierarchy: iH,title:item.title}
        algoliaSearch.push({...iObj, objectID: iObj.url + algoliaSearch.length, "type": type,"url":iObj.url + "#" + item.id})
        if (item.hasOwnProperty('children') && item.children.length > 0) {
            getObj(item.children, iObj, level + 1)
        }
    })
}

function fileDisplay(dirPath) {
    let filesList = fs.readdirSync(dirPath);
    let count = 0;
    for (let i = 0; i < filesList.length; i++) {
        // file information
        let fileObj = {};
        const filePath = path.join(dirPath, filesList[i]);
        const info = path.parse(filePath)
        fileObj.title = info.name
        fileObj.objectID = info.dir + "/" + info.name + algoliaSearch.length
        let stats = fs.statSync(filePath);
        let data, matter, docInfo
        if (!stats.isDirectory()) {
            data = fs.readFileSync(filePath, 'utf-8')
            matter = fm(data)
            docInfo = Markdown.transform(Markdown.parse(data))
            // fileObj.info = Markdown.transform(Markdown.parse(data))
            fileObj.title = matter.attributes.title
            fileObj.info = collectHeadings(docInfo.children)
        }
        if (stats.isDirectory()) {
            if (fs.existsSync(`${filePath}/index.md`)) {
                const
                    data = fs.readFileSync(`${filePath}/index.md`, 'utf-8'),
                    matter = fm(data)
                fileObj.title = matter.attributes.title
                fileObj.url = filePath.substring(8)
            }
            // dir
            fileObj.type = 'dir';
            fileObj.links = [];
            // stack
            fileDisplay(filePath)
            count++
        } else if (info.name !== "index") {
            // file
            fileObj.type = path.extname(filesList[i]).substring(1);
            fileObj.url = filePath.substring(8, filePath.length - 3)
            getObj(fileObj.info, {
                ...fileObj,
                hierarchy: {
                    lvl0: "Documentation",
                    lvl1: fileObj.title,
                    lvl2: null,
                    lvl3: null,
                    lvl4: null,
                    lvl5: null,
                    lvl6: null,
                }
            }, 2)
            count++
        }
    }
}

let algoliaSearch = []
fileDisplay(INPUT_FILE_EN, [])
algoliaSearch = lodash.uniqBy(algoliaSearch,"url")
// Connect and authenticate with your Algolia app
const client = algoliasearch('H615PFF29U', '7127b8019f7bc20fb9baed3e9e5cd3e9')

// Create a new index and add a record
const index = client.initIndex('test_index')
index.clearObjects()
index.saveObjects(algoliaSearch)



// fileDisplay(INPUT_FILE_EN, [])
// fs.writeFile(OUT_FILE, JSON.stringify(algoliaSearch), (error) => console.log(error))
