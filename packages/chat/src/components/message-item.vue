<template>
  <div
    :class="[
      'i-message',
      {
        'i-type-text': message.type === 'text'
      },
      {
        'i-type-image': message.type === 'image'
      },
      {
        'i-type-file': message.type === 'file'
      }
    ]"
  >
    <span v-if="message.type === 'text'">
      {{ message.content.text }}
    </span>
    <img
      v-else-if="message.type === 'image'"
      class="i-message-image"
      :src="message.content.src"
    />
    <div v-if="message.type === 'file'">
      <div>文件名: 考勤记录.xls</div>
      <div>文件大小{{ message.content.size }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: Object,
      default: () => {
        return {
          type: 'text',
          content: {
            text: '这是你发给我的消息呢!'
          }
        };
      }
    }
  }
};
</script>
