<template>
  <div class="ide-chat">
    <div class="chat-box">1</div>
  </div>
</template>
<script>
export default {
  name: 'Chat',
  provide() {
    return {
      contact: this.currentContacts
    };
  },
  data() {
    return {};
  }
};
</script>
