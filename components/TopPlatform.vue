<template>
  <Container>
    <div class="flex justify-between gap-[10px] pb-[20px]">
      <p class="text-[#26282C] font-[600] leading-[26px] text-[18px]">
        Top Platform
      </p>
      <p
        class="text-customGreen-50 font-[500] leading-[26px] text-[18px] cursor-pointer"
      >
        See All
      </p>
    </div>
    <div class="space-y-[20px]">
      <div
        v-for="(topPlatform, index) in topPlatforms"
        :key="index"
        class="flex flex-col gap-[16px]"
      >
        <p class="text-[#26282C] font-[600] leading-[26px] text-[18px]">
          {{ topPlatform.name }}
        </p>
        <!-- progress -->

        <div class="rounded-[40px] bg-[#F5F5F5] h-[12px]">
          <div
            :class="topPlatform.color"
            class="rounded-[40px] h-[12px]"
          ></div>
        </div>

        <div
          class="flex justify-between gap-[10px] text-[#525252] font-[600] leading-[26px] text-[18px]"
        >
          <p class="">{{ topPlatform.amount }}</p>
          <p class="">{{ topPlatform.percent }}</p>
        </div>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
const topPlatforms = [
  {
    name: "Book Bazaar",
    amount: "$2,500,000",
    percent: "+15%",
    color: "bg-[#6160DC] max-w-[15%]",
  },

  {
    name: "Artisan Aisle",
    amount: "$1,800,000",
    percent: "+10%",
    color: "bg-[#54C5EB] max-w-[10%]",
  },

  {
    name: "Toy Troop",
    amount: "$1,200,000",
    percent: "+8%",
    color: "bg-[#FFB74A]  max-w-[8%]",
  },

  {
    name: "XStore",
    amount: "$600,000",
    percent: "+5%",
    color: "bg-[#FF4A55]  max-w-[5%]",
  },
];
</script>

<style scoped></style>
