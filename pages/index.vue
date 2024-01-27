<template>
  <div>
    <div class="sticky top-0 z-10 ">
      <TopNavBar />
    </div>
    <div class="space-y-[20px] p-[20px]">
      <div
        class="lg:grid gap-[20px] lg:grid-cols-[minmax(300px,1fr),minmax(200px,500px)] flex flex-col-reverse"
      >
        <div class="">
          <SalesTrend />
        </div>
        <div class="">
          <Cards />
        </div>
      </div>
      <div
        class="grid gap-[20px] lg:grid-cols-[minmax(300px,1fr),minmax(200px,500px)] grid-cols-1"
      >
        <div class="">
          <LastOrder />
        </div>
        <div class="">
          <TopPlatform />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Dashboard",
});
</script>

<style scoped></style>
