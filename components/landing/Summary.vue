<template>
  <div class="bg-white" id="about">
    <div class="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00f3fe] to-[#4337fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
      <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Announcing our beta release.
            <a
              @click="navigateTo('/documentation/get-started/quickstart')"
              class="font-semibold text-indigo-600 hover:cursor-pointer"
              ><span class="absolute inset-0" aria-hidden="true" />Read more
            </a>
          </div>
        </div>
        <div class="text-center">
          <div class="items-center" id="about">
            <div class="grid justify-items-center">
              <div class="pl-10">
                <h1 class="text-5xl font-bold text-left">
                  Share & Sell your
                  <ol class="words">
                    <li v-for="(value, name, index) in products">
                      <span :class="value">{{ name }}</span>
                    </li>
                  </ol>
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  Easily share your data or software with your customers through
                  an API.
                  <br />
                  No code needed, plug your product and instantly let your users
                  subscribe to it.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                  <el-button
                    class="text-white bg-indigo-600 rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-indigo-500"
                    size="large"
                    @click="navigateTo('/app/signup')"
                    >Get Started</el-button
                  >
                  <a
                    @click="navigateTo('/documentation/get-started/quickstart')"
                    class="text-sm font-semibold leading-6 text-gray-900 hover:cursor-pointer"
                    >Learn more</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#00f3fe] to-[#4337fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const products = {
  'SQL database': 'text-blue-500',
  API: 'text-red-500',
  'CSV files': 'text-green-500'
}
</script>

<style>
@import url('~/assets/css/rolling_text.css');
</style>
