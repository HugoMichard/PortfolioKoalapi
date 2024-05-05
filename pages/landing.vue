<template>
  <div>
    <landing-summary></landing-summary>
    <landing-main-feature></landing-main-feature>
    <landing-features></landing-features>
    <landing-pricing></landing-pricing>
    <landing-newsletter></landing-newsletter>
    <landing-footer></landing-footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'landing'
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
