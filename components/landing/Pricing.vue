<template>
  <section class="pt-14 pb-8" id="premium">
    <div class="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div class="relative max-w-xl mx-auto text-center">
        <h3 class="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Pricing for all goals
        </h3>
        <div class="mt-3 max-w-xl">
          <p>Choose your pricing depending on your needs and goals</p>
        </div>
      </div>
      <div class="mt-8 grid justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(premium, index) in subscriptions"
          :key="index"
          class="relative flex flex-col items-stretch rounded-xl border-2 mt-6"
          :class="{ 'mt-10': premium.isMostPop }"
        >
          <PremiumCard :subscription="premium"></PremiumCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const subscriptions = [
  {
    id: 1,
    title: 'free',
    description: 'Get started for free',
    is_fixed: true,
    price: 0.0,
    nb_users: 3,
    nb_calls_per_user: 10,
    nb_sources: 2,
    nb_apis: 1,
    nb_endpoints: 1,
    nb_pricings: 1,
    percent_for_koalapi: 15,
    has_file_integration: true,
    has_api_integration: true,
    has_sql_integration: true,
    link: ' '
  },
  {
    id: 2,
    title: 'lite',
    description: 'For personal use and limited sharing',
    price: 29.99,
    nb_users: 10,
    nb_calls_per_user: 1000,
    nb_sources: 5,
    nb_apis: 3,
    nb_endpoints: 10,
    nb_pricings: 2,
    isMostPop: true,
    percent_for_koalapi: 15,
    has_file_integration: true,
    has_api_integration: true,
    has_sql_integration: true,
    frequency: 'month',
    link: 'https://buy.stripe.com/test_bIY4gQdn03Gwch214c'
  },
  {
    id: 3,
    title: 'pro',
    description: 'Recommended for monetized products',
    price: 99.99,
    nb_users: 1000,
    nb_calls_per_user: 10000,
    nb_sources: 20,
    nb_apis: 10,
    nb_endpoints: 30,
    nb_pricings: 3,
    percent_for_koalapi: 5,
    has_file_integration: true,
    has_api_integration: true,
    has_sql_integration: true,
    frequency: 'month',
    link: 'https://buy.stripe.com/test_cN29Ba82Gfpe4OA14d'
  }
]
</script>
