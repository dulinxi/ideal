import Chat from './src/main';

Chat.install = function(Vue) {
  Vue.component(Chat.name, Chat);
};

export default Chat;
