<template>
  <span :class="['i-avatar', { 'i-avatar-circle': shape === 'circle' }]">
    <img src="" alt="" />
  </span>
</template>
<script>
export default {
  name: 'IAvatar',
  props: {
    size: {
      type: [Number, String]
    },
    shape: {
      type: String,
      default: 'circle'
    }
  },
  data() {
    return {};
  }
};
</script>
