<template>
  <section class="pt-14 pb-8" id='premium'>
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
const subscriptions = [{"id": 1, "name": "free", "price": 0.0, "nb_message": 30, "nb_qa": 5, "nb_url": 1, "nb_doc": 1, "max_doc_size": 1, "has_pdf": true, "has_csv": false, "memory": 0, "refresh_frequency": "monthly", "link": " "}, {"id": 2, "name": "lite", "price": 29.99, "nb_message": 500, "nb_qa": 20, "nb_url": 3, "nb_doc": 3, "max_doc_size": 3, "has_pdf": true, "has_csv": false, "memory": 0, "refresh_frequency": "weekly", "link": "https://buy.stripe.com/test_14k8zP7Ked3A2S4aEH"}, {"id": 3, "name": "pro", "price": 99.99, "nb_message": 3000, "nb_qa": 50, "nb_url": 10, "nb_doc": 10, "max_doc_size": 5, "has_pdf": true, "has_csv": false, "memory": 0, "refresh_frequency": "daily", "link": "https://buy.stripe.com/test_bIYbM12pU7JgcsEcMQ"}]
</script>
