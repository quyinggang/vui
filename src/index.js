import Button from '../packages/button/index.js';

const components = [
  Button
];

function install(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

module.exports.default = module.exports = {
  install,
  Button
};
