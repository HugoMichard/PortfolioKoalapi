<template>
  <section class="py-12 relative">
    <div
      class="relative z-10 max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex"
    >
      <div class="flex-1 max-w-lg">
        <h3 class="text-gray-800 text-2xl font-semibold sm:text-3xl">
          Ready to dive in ?
        </h3>
        <p class="mt-2 text-gray-600 text-xl">Create your free API today</p>
      </div>
      <div class="flex-1 mt-6 md:mt-0">
        <div class="flex gap-3 items-end mt-4 md:justify-end">
          <a
            @click="navigateTo('/app/signup')"
            class="hover:cursor-pointer inline-block py-2 px-4 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 rounded-lg shadow-md hover:shadow-none"
          >
            Get started
          </a>
          <a
            @click="navigateTo('/documentation/get-started/quickstart')"
            class="hover:cursor-pointer inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
