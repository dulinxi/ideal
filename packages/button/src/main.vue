<template>
  <button :class="['i-button']">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'IButton'
};
</script>
