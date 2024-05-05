<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32" id="features">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">
              Build and deploy easily
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >Build a no-code API</p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Upload your CSV file, connect your database, or paste your API
              endpoint, and you're good to go. We'll create a shareable link for
              your users to access your product, on your terms.
            </p>

            <div class="mt-12 max-w-lg lg:max-w-none">
              <ul class="space-y-8">
                <li
                  v-for="(item, idx) in features"
                  :key="idx"
                  class="flex gap-x-4"
                >
                  <div
                    class="flex-none w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center"
                  >
                    <Icon :name="item.icon" size="30"></Icon>
                  </div>
                  <div>
                    <h4 class="text-lg text-gray-800 font-semibold">
                      {{ item.title }}
                    </h4>
                    <p class="mt-3">
                      {{ item.desc }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          alt="Product screenshot"
          class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="2432"
          height="1442"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      features: [
        {
          icon: `mdi:clock-fast`,
          title: 'Quick setup',
          desc: "Connect your data sources in a few clicks to get started. We'll setup a custom API for your customers to access your product."
        },
        {
          icon: `ic:baseline-dashboard-customize`,
          title: 'Fully customizable',
          desc: 'Your API is completely customizable, from the endpoint to the user access and pricing, you have full control at all times.'
        }
      ]
    }
  }
}
</script>
