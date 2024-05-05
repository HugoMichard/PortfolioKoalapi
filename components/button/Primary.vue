<template>
  <button
    :class="
      'rounded-lg font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 ' +
      props.width +
      ' p-' +
      props.padding
    "
    :style="'padding: ' + props.padding * 0.25 + 'rem'"
  >
    <slot />
  </button>
</template>
<script setup>
const props = defineProps({
  width: {
    type: String,
    required: false,
    default: 'w-fit'
  },
  padding: {
    type: Number,
    required: false,
    default: 2
  }
})
</script>
