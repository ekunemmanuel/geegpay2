<script setup>
const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "amount",
    label: "Amount",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "invoice",
    label: "Invoice",
  },
];

const lastOrders = [
  {
    avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
    name: "Marcus Bergson",
    date: "Nov 15, 2023",
    amount: "$80,000",
    status: "Paid",
    invoice: "View",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/904724?v=4",
    name: "Jaydon Vaccaro",
    date: "Nov 15, 2023",
    amount: "$150,000",
    status: "Refund",
    invoice: "View",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
    name: "Corey Schleifer",
    date: "Nov 14, 2023",
    amount: "$87,000",
    status: "Paid",
    invoice: "View",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/904724?v=4",
    name: "Cooper Press",
    date: "Nov 14, 2023",
    amount: "$100,000",
    status: "Refund",
    invoice: "View",
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/739984?v=4",
    name: "Phillip Lubin",
    date: "Nov 13, 2023",
    amount: "$78,000",
    status: "Paid",
    invoice: "View",
  },
];
const ui = {
  th: {
    base: "text-left rtl:text-right",
    padding: "pb-[20px] pt-[14px]",
    color: "text-[#9CA4AB] text-[16px] font-[500] dark:text-white",
    font: "font-semibold",
    size: "text-sm",
  },
  divide: "divide-[#EDF2F6] dark:divide-gray-700",
  thead: "",
  tbody: "divide-[#EDF2F6] dark:divide-gray-800",
};
</script>

<template>
  <Container>
    <div class="flex justify-between gap-[10px]">
      <p class="text-[#26282C] font-[600] leading-[26px] text-[18px]">
        Last Orders
      </p>
      <p
        class="text-customGreen-50 font-[500] leading-[26px] text-[18px] cursor-pointer"
      >
        See All
      </p>
    </div>
    <UTable :rows="lastOrders" :columns="columns" :ui="ui">
      <template #name-data="{ row }">
        <div class="flex gap-[10px] items-center">
          <UAvatar :src="row.avatar" :alt="row.name" />
          <span class="text-[#3A3F51] font-[500] leading-[24px] text-[16px]">{{
            row.name
          }}</span>
        </div>
      </template>

      <template #date-data="{ row }">
        <div class="flex gap-[10px] items-center">
          <span class="text-[#737373] font-[400] leading-[24px] text-[16px]">{{
            row.date
          }}</span>
        </div>
      </template>

      <template #amount-data="{ row }">
        <div class="flex gap-[10px] items-center">
          <span class="text-[#0D062D] font-[500] leading-[24px] text-[16px]">{{
            row.amount
          }}</span>
        </div>
      </template>

      <template #status-data="{ row }">
        <div class="flex gap-[10px] items-center">
          <span
            :class="[
              row.status == 'Paid' ? 'text-[#34CAA5]' : 'text-[#ED544E]',
            ]"
            class="font-[400] leading-[24px] text-[16px]"
            >{{ row.status }}</span
          >
        </div>
      </template>

      <template #invoice-data="{ row }">
        <div class="flex gap-[6px] items-center cursor-pointer">
          <Icon name="DocumentdownloadIcon" size="20" />
          <span class="text-[#3A3F51] font-[500] leading-[24px] text-[14px]">{{
            row.invoice
          }}</span>
        </div>
      </template>
    </UTable>
  </Container>
</template>
