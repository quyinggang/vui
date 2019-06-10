import UiProgress from './progress';

UiProgress.install = function(Vue) {
  Vue.component(UiProgress.name, UiProgress);
};

export default UiProgress;
