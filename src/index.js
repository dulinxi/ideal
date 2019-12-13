import Button from '../packages/button/index.js';
import Chat from '../packages/chat/index.js';
import RichEditor from '../packages/rich-editor/index.js';
const components = [Button, Chat, RichEditor];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '0.0.1',
  install,
  Button,
  Chat,
  RichEditor
};
