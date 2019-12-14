<template>
  <div class="i-message-content">
    <div class="i-message-group">
      <i-avatar></i-avatar>
      <div>朱丽叶</div>
      <i-message-item></i-message-item>
    </div>
    <div class="i-message-group">
      <i-avatar></i-avatar>
      <i-message-item :message="message"></i-message-item>
    </div>
  </div>
</template>
<script>
import IMessageItem from './message-item';
export default {
  components: {
    IMessageItem
  },
  data() {
    return {
      message: {
        type: 'image',
        content: {
          src: 'https://demos.telerik.com/kendo-ui/content/chat/doctor4.jpg'
        }
      }
    };
  }
};
</script>
