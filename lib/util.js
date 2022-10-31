export const getCatacory = (path, props) => {
    return path.startsWith('/docs/api') ? props.side_bar_api
        : path.startsWith('/docs/cli') ? props?.side_bar_cli :
            path.startsWith('/docs/how-to') ? props?.side_bar_how : props?.side_bar_doc;
}

export const getPath = (path) => {
    const indexId = path.indexOf('#');
    const indexHtml = path.indexOf('.')
    const current = ''
    console.log(path);
    if (indexId > -1) {
        current = path.slice(0, indexId);
    } else if (indexHtml > -1) {
        current = path.slice(0, indexHtml)
    } else {
        current = path
    }

    return current
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