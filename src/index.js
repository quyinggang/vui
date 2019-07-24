import Aside from '../packages/aside/index.js';
import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import CheckButton from '../packages/check-button/index.js';
import CheckGroup from '../packages/check-group/index.js';
import Checkbox from '../packages/checkbox/index.js';
import Content from '../packages/content/index.js';
import Footer from '../packages/footer/index.js';
import Header from '../packages/header/index.js';
import Input from '../packages/input/index.js';
import Layout from '../packages/layout/index.js';
import Progress from '../packages/progress/index.js';
import Radio from '../packages/radio/index.js';
import RadioButton from '../packages/radio-button/index.js';
import RadioGroup from '../packages/radio-group/index.js';
import Slider from '../packages/slider/index.js';
import Switch from '../packages/switch/index.js';
import Tag from '../packages/tag/index.js';
import Textarea from '../packages/textarea/index.js';
import Upload from '../packages/upload/index.js';

const components = [
  Aside,
  Button,
  ButtonGroup,
  CheckButton,
  CheckGroup,
  Checkbox,
  Content,
  Footer,
  Header,
  Input,
  Layout,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Slider,
  Switch,
  Tag,
  Textarea,
  Upload
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
  CheckButton,
  CheckGroup,
  Checkbox,
  Content,
  Footer,
  Header,
  Input,
  Layout,
  Progress,
  Radio,
  RadioButton,
  RadioGroup,
  Slider,
  Switch,
  Tag,
  Textarea,
  Upload
};
