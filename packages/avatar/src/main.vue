<template>
  <span>avatar</span>
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
