<template>
  <div class="common-layout disconnected-layout">
    <div class="p-6">
      <HeaderLogo url="/landing"></HeaderLogo>
    </div>
    <el-container class="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-4 items-center px-10">
      <div class="items-center justify-center flex">
        <div class="w-full max-w-md">
          <slot />
        </div>
      </div>
      <div class="p-0 overflow-hidden">
        <el-image src="/PortfolioKoalapi/images/login.jpg" fit="fill"></el-image>
      </div>
    </el-container>
  </div>
</template>

<style>
html,
body,
#__nuxt,
#__layout {
  height: 100vh !important;
}
</style>
