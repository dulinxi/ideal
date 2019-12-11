import Chat from '../packages/chat/index.js';

const components = [
    Chat
];

const install = function(Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}
if(typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '0.0.1',
    Chat
}