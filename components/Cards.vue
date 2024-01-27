<template>
  <div
    class="gap-[10px] grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] grid  items-center"
  >
    <Container v-for="(cardDetail, index) in cardDetails" :key="index">
      <div class="space-y-[10px]">
        <div class="flex justify-between items-center gap-[10px]">
          <div class="rounded-full p-[8px] border-[0.7px] border-[#E6E6E6]">
            <Icon name="BoxtickIcon" size="30" />
          </div>
          <!-- <BullishIcon /> -->
          <component :is="cardDetail.isUp ? 'BullishIcon' : 'BearishIcon'" />
        </div>

        <div class="space-y-[5px]">
          <p class="font-[500] leading-[26px] text-[18px] text-[#898989]">
            {{ cardDetail.title }}
          </p>
          <p class="font-[600] leading-[32px] text-[24px] text-[#3A3F51]">
            {{ cardDetail.amt }}
          </p>
        </div>
        <div class="flex items-center gap-[10px]">
          <div
            :class="[cardDetail.isUp ? ' bg-[#34CAA51F]' : 'bg-[#ED544E1F]']"
            class="rounded-full px-[8px] py-[4px] flex items-center justify-between gap-[4px]"
          >
            <Icon
              :name="cardDetail.isUp ? 'TrendingupIcon' : 'TrendingdownIcon'"
            />
            <span
              :class="[
                cardDetail.isUp ? 'text-customGreen-50' : 'text-[#ED544E]',
              ]"
              class="font-[500] leading-[16px] text-[12px]"
              >{{ cardDetail.percent }}</span
            >
          </div>
          <p class="font-[400] text-[14px] text-[#606060]">
            vs. previous month
          </p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts" setup>
const cardDetails = [
  {
    title: "Total Order",
    amt: "350",
    percent: "23.5%",
    isUp: true,
  },
  {
    title: "Total Refund",
    amt: "270",
    percent: "23.5%",
    isUp: false,
  },
  {
    title: "Average Sales",
    amt: "1567",
    percent: "23.5%",
    isUp: false,
  },
  {
    title: "Total Income",
    amt: "$350.000",
    percent: "23.5%",
    isUp: true,
  },
];
</script>

<style scoped></style>
