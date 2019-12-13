import RichEditor from './src/main';

RichEditor.install = function(Vue) {
  Vue.component(RichEditor.name, RichEditor);
};

export default RichEditor;
