<template>
  <div class="i-message-group">
    <i-avatar></i-avatar>
    <i-message-item :message="message"></i-message-item>
  </div>
</template>
<script>
import IMessageItem from './message-item';
export default {
  components: {
    IMessageItem
  },
  props: {
    message: {
      type: Object
    }
  }
};
</script>
