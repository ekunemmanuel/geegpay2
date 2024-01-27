<template>
  <Container>
    <div class="flex justify-between gap-[10px]">
      <p class="text-[#26282C] font-[600] leading-[26px] text-[18px]">
        Sales Trends
      </p>
      <div class="flex gap-[10px] items-center">
        <p
          class="text-[#3A3F51] font-[500] leading-[22px] text-[14px] cursor-pointer"
        >
          Short by :
        </p>
        <USelectMenu v-model="selected" :options="people" :ui="ui" />
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
const people = [
  "Weekly",
  "Monthly",
  "Yearly",
];

const selected = ref(people[0]);

const ui = {
  rounded: "rounded-full",
  option: {
    rounded: "rounded-full",
  },
};
</script>

<style scoped></style>
