import Aside from '../packages/aside/index.js';
import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Content from '../packages/content/index.js';
import Footer from '../packages/footer/index.js';
import Header from '../packages/header/index.js';
import Layout from '../packages/layout/index.js';
import Radio from '../packages/radio/index.js';
import RadioButton from '../packages/radio-button/index.js';
import RadioGroup from '../packages/radio-group/index.js';

const components = [
  Aside,
  Button,
  ButtonGroup,
  Content,
  Footer,
  Header,
  Layout,
  Radio,
  RadioButton,
  RadioGroup
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
  Aside,
  Button,
  ButtonGroup,
  Content,
  Footer,
  Header,
  Layout,
  Radio,
  RadioButton,
  RadioGroup
};
