let en = require("./en/common.en.json");
let zh = require("./zh/common.zh.json");

const i18n = {
    translations: {
        en: en,
        zh: zh,
    },
    defaultLang: "en",
    useBrowserDefault: true,
};

module.exports = i18n;