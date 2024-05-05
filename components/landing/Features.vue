<template>
  <section class="relative py-28 bg-gray-900">
    <div
      class="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8"
    >
      <div class="max-w-xl">
        <h3 class="text-white text-3xl font-semibold sm:text-4xl">
          Simply share your product
        </h3>
        <p class="mt-3">
          No complexity, you share your product to your users in a few clicks and get to enjoy all the perks that come with Koalapi !
        </p>
      </div>
      <div class="mt-12 lg:mt-0">
        <ul class="grid gap-8 sm:grid-cols-2">
          <li v-for="(item, idx) in features" :key="idx" class="flex gap-x-4">
            <div
              class="flex-none w-12 h-12 bg-gray-700 text-blue-400 rounded-lg flex items-center justify-center"
            >
              <Icon :name="item.icon" size="30"></Icon>
            </div>
            <div>
              <h4 class="text-lg text-gray-100 font-semibold">
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
    <div
      class="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
      :style="{
        background:
          'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)'
      }"
    ></div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection',
  data () {
    return {
      features: [
        {
          icon: 'material-symbols:web',
          title: 'Share',
          desc:
            'Let your customers register, make requests, manage their subscriptions and monitor their usage with our free integrated customer portal.'
        },
        {
          icon: 'material-symbols:attach-money-rounded',
          title: 'Monetize',
          desc:
            'Free, recurring or one-off payments. Pick the monetization that suits your product.'
        },
        {
          icon: 'ic:baseline-monitor',
          title: 'Monitor',
          desc:
            'Your users usage can be easily monitored from our dashboard. Know exactly what is happening at all times !'
        },
        {
          icon: 'material-symbols:admin-panel-settings',
          title: 'Manage',
          desc:
            'Restrict access, invite users or directly generate API keys for your users'
        }
      ]
    }
  }
}
</script>
