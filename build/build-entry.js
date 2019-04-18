/**
 * 动态生成src/index.js
 */
const components = require('../components.json');
const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;
const uppercamelcase = require('uppercamelcase');

const OUT_PATH = path.resolve(__dirname, '../src/index.js');
const componentNames = Object.keys(components);
const endIndex = componentNames.length - 1;
let formatComponentNames = [];
let importTemplate = '';

// 生成导入组件模板
componentNames.forEach((name, i) => {
  const componentName = uppercamelcase(name);
  formatComponentNames.push(componentName);
  const importText = `import ${componentName} from '.${components[name]}';`;
  importTemplate = `${importTemplate}${importText}${i !== endIndex ? endOfLine : ''}`;
}, '');

const formatArray = function(data) {
  data = data.toString();
  return data.replace(/,/g, `,${endOfLine}  `);
};
formatComponentNames = formatArray(formatComponentNames);

// 生成components变量定义模板
const defineTemplate = `
const components = [
  ${formatComponentNames}
];
`;

// Vue插件install函数模板
const install = function install(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// 浏览器环境直接通过script引入Vue自动安装函数模板
const autoInstallTemplate = `
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}`;

// 导出模板
const createExportTemplate = function() {
  return `
module.exports.default = module.exports = {
  install,
  ${formatComponentNames}
};`;
};

const getTotalTemplate = function() {
  let template = '';
  const allTemplates = [
    importTemplate,
    defineTemplate,
    install.toString(),
    autoInstallTemplate, 
    createExportTemplate()
  ];
  allTemplates.forEach((tpl, i) => {
    template = `${template}${tpl}${endOfLine}`;
  });
  return template;
};

fs.writeFileSync(OUT_PATH, getTotalTemplate());
console.log('[build entry] DONE:', OUT_PATH);
