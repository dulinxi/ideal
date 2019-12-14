<template>
  <div class="i-chat">
    <div class="i-chat__menubar">
      <div></div>
      <div>
        <i-button><i class="i-icon-plus"></i></i-button>
      </div>
    </div>
    <div class="i-chat__side"></div>
    <div v-if="hasCurrent" class="i-chat__default"></div>
    <div v-else class="i-chat__main">
      <div class="i-message-header">
        <i-chat-header />
      </div>
      <div class="i-message-list">
        <i-message-content></i-message-content>
      </div>
      <div class="i-message-box"></div>
    </div>
  </div>
</template>
<script>
import IMessageContent from './components/message-content';
import IChatHeader from './components/chat-header';
export default {
  name: 'IChat',
  components: {
    IChatHeader,
    IMessageContent
  },
  props: {
    user: {
      type: Object
    },
    messages: {
      type: Array
    },
    toolbar: {
      type: Object
    }
  },
  provide() {
    return {
      contact: this.currentContacts
    };
  },
  data() {
    return {
      hasCurrent: false
    };
  },
  methods: {
    // message post
    post() {},
    sendMessage() {},
    typingStart() {},
    typingend() {}
  }
};
</script>
