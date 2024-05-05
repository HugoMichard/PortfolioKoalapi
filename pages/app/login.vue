<template>
  <div>
    <h1 class="mb-12 text-center text-3xl font-semibold">Login</h1>
    <el-form
      :model="form"
      label-width="120px"
      label-position="top"
      require-asterisk-position="right"
    >
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
    </el-form>

    <ButtonLogin @click="login()">Login</ButtonLogin>
    <div class="flex justify-center mt-5 items-center">
      <span class="text-s text-zinc-500">First time ?</span>
      <span
        class="text-s ml-3 font-bold hover:cursor-pointer"
        @click="navigateTo('/app/signup')"
        >Create an account</span
      >
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'disconnected'
})

const form = reactive({ email: '', password: '' })

const login = async () => {
  ElMessage.error({
    message:
      'Koalapi development has been stopped and the app is no longer available. Please make an issue here https://github.com/HugoMichard/PortfolioKoalapi to ask for access'
  })
}
</script>
