<template>
  <div>
    <button
      class="px-3 py-3 w-full rounded-lg font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150"
      @click="subscribe"
      :disabled="props.is_active"
    >
      {{ props.is_active ? 'Subscribed' : 'Subscribe' }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  subscription: {
    type: Object,
    required: true
  },
  is_active: {
    type: Boolean,
    required: true
  }
})

const subscribe = () => {
  navigateTo('/app/login')
}
</script>

<style>
.stripe-card {
  min-width: 350px; /* Minimum width for each div */
  flex: 1; /* Distribute available space evenly among the divs */
}
</style>
