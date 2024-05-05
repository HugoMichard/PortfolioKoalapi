<template>
  <el-affix :offset="0">
    <el-menu class="flex items-center" mode="horizontal" :ellipsis="false">
      <HeaderLogo url="/documentation/get-started/quickstart"></HeaderLogo>
      <div class="flex-grow" />
      <NuxtLink to="/app/login">
        <el-menu-item index="5">Go to the App</el-menu-item>
      </NuxtLink>
    </el-menu>
  </el-affix>
</template>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
