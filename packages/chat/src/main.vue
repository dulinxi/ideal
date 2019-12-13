<template>
  <div class="i-chat">
    <div class="i-chat__menubar">
      <div></div>
      <div>
        <i-button>+</i-button>
      </div>
    </div>
    <div class="i-chat__side"></div>
    <div v-if="hasCurrent" class="i-chat__default"></div>
    <div v-else class="i-chat__main">
      <div class="i-message-header">
        top
      </div>
      <div class="i-message-list">
        main
        <i-message-group></i-message-group>
      </div>
      <div class="i-message-box">
        editor
      </div>
    </div>
  </div>
</template>
<script>
import IMessageGroup from './components/i-message-group';
export default {
  name: 'IChat',
  components: {
    IMessageGroup
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
