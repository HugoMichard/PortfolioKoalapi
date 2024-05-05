<template>
  <div class="logo" @click="() => navigateTo(props.url)">
    <el-image
      src="/PortfolioKoalapi/images/logo.png"
      class="hover:cursor-pointer logoInHeader"
    >
    </el-image>
    <span class="ml-3 font-bold text-2xl">KoalAPI</span>
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true
  }
})
</script>

<style>
.logoInHeader {
  height: 50px !important;
}

.logo {
  display: flex;
  align-items: center;
}
</style>
