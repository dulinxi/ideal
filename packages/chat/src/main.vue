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
      </div>
      <div class="i-message-box">
        editor
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IChat',
  provide() {
    return {
      contact: this.currentContacts
    };
  },
  data() {
    return {
      hasCurrent: false
    };
  }
};
</script>
