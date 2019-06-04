import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Content from '../packages/content/index.js';
import Header from '../packages/header/index.js';
import Aside from '../packages/aside/index.js';
import Footer from '../packages/footer/index.js';
import Layout from '../packages/layout/index.js';
import Radio from '../packages/radio/index.js';

const components = [
  Button,
  ButtonGroup,
  Content,
  Header,
  Aside,
  Footer,
  Layout,
  Radio
];

function install(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  ButtonGroup,
  Content,
  Header,
  Aside,
  Footer,
  Layout,
  Radio
};
