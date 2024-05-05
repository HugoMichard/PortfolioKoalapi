<template>
  <span
    v-if="props.subscription.isMostPop"
    class="absolute top-0 left-0 right-0 mx-auto w-32 -mt-5 px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold"
  >
    Most popular
  </span>
  <div class="p-8 space-y-4 border-b">
    <span class="text-indigo-600 font-medium capitalize">
      {{ props.subscription.title }}
    </span>
    <div class="text-gray-800 text-3xl font-semibold">
      {{ props.subscription.price }} €
      <span
        v-if="props.subscription.frequency"
        class="text-xl text-gray-600 font-normal"
        >/ {{ props.subscription.frequency }}</span
      >
    </div>
    <p>
      {{ props.subscription.description }}
    </p>
    <PremiumStripePayment :subscription="subscription"></PremiumStripePayment>
  </div>
  <div class="p-8 space-y-3">
    <div class="pb-2 text-gray-800 font-medium">Features</div>
    <div
      v-for="(plainText, key) of props.is_premium
        ? premiumMapping
        : pricingMapping"
      :key="featureIndex"
      class="flex"
    >
      <div class="w-16">
        <Icon
          v-if="typeof subscription[key] === 'boolean'"
          :name="subscription[key] ? 'ic:round-check' : 'ic:outline-close'"
          :color="subscription[key] ? 'green' : 'red'"
          size="25"
        ></Icon>
        <span
          v-else-if="typeof subscription[key] === 'number'"
          class="font-bold ml-1"
          ><span>{{ subscription[key] }}</span
          ><span v-if="key === 'percent_for_koalapi'">%</span></span
        >
        <Icon v-else name="ic:outline-close" color="red" size="25"></Icon>
      </div>
      <div>
        <span class="text-lg text-slate-500">{{ plainText }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subscription: {
    type: Object,
    required: true
  },
  is_active: {
    type: Boolean,
    required: true
  },
  is_premium: {
    type: Boolean,
    required: false,
    default: true
  }
})

const premiumMapping = {
  nb_users: 'Customers',
  nb_calls_per_user: 'Calls per customer',
  nb_apis: 'APIs',
  nb_sources: 'Datasources',
  nb_endpoints: 'Endpoints per API',
  nb_pricings: 'Possible pricings per API',
  has_file_integration: 'File connection',
  has_api_integration: 'API connection',
  has_sql_integration: 'SQL databases connection',
  percent_for_koalapi: 'Service fees on earnings'
}

const pricingMapping = {
  nb_calls: 'Calls per month'
}
</script>

<style>
.no-padding-card > .el-card__body {
  padding: 0px !important;
}

.slate-background {
  background-color: #f9fafb;
}

.slate-text {
  color: #f9fafb;
}
</style>
