<template>
  <div>
    <h1 class="mb-12 text-center text-3xl font-semibold">Create an account</h1>
    <el-form
      :model="loggingInUser"
      label-width="120px"
      label-position="top"
      require-asterisk-position="right"
    >
      <el-form-item label="Email" prop="email">
        <el-input v-model="loggingInUser.email" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="loggingInUser.password" type="password" />
      </el-form-item>
      <el-form-item label="Password Confirmation" prop="confirm_password">
        <el-input v-model="loggingInUser.confirm_password" type="password" />
      </el-form-item>
    </el-form>

    <ButtonLogin @click="signUp()">Sign up</ButtonLogin>
    <div class="flex justify-center mt-5 items-center">
      <span class="text-s text-zinc-500">Already have an account ?</span>
      <span
        class="text-s ml-3 font-bold hover:cursor-pointer"
        @click="navigateTo('/app/login')"
      >
        Sign in
      </span>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'disconnected'
})

const loggingInUser = ref({})
const signUp = async () => {
  ElMessage.error({
    message:
      'Koalapi development has been stopped and the app is no longer available. Please make an issue here https://github.com/HugoMichard/PortfolioKoalapi to ask for access'
  })
}
</script>
