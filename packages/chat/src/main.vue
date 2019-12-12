<template>
  <div class="chat-wrapper">
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
<style lang="scss" scoped>
.chat-wrapper {
  width: 800px;
  height: 550px;
  background: #eee;
  .chat-box {
    position: relative;
    display: flex;
    widows: 100%;
    height: 100%;
  }
}
</style>
