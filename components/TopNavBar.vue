<template>
  <div
    class="bg-white dark:bg-gray-900 px-[20px] py-[10px] sticky top-0 flex justify-between items-center gap-[20px]"
  >
    <div class="flex items-center gap-[20px]">
      <div @click="isOpen = true" class="block lg:hidden">
        <Icon name="pajamas:hamburger" size="20" />
      </div>
      <span class="text-[20px] font-[600] leading-[28px] text-[#26282C]"
        >Dashboard</span
      >
    </div>
     <div class="flex items-center justify-end gap-[20px] max-w-[1200px] w-full ">
      <div class="max-w-[500px] flex-1 sel">
        <UInput
          v-model="search"
          name="search"
          placeholder="Search..."
          icon="i-heroicons-magnifying-glass-20-solid"
          autocomplete="off"
          :ui="inputUi"
          class=""
        >
          <template #trailing>
            <UButton
              v-show="search !== ''"
              color="gray"
              variant="link"
              icon="i-heroicons-x-mark-20-solid"
              :padded="false"
              @click="search = ''"
            />
          </template>
        </UInput>
      </div>
      <div class="px-[16px] py-[12px] flex gap-[10px] items-center">
        <Icon name="CalendarIcon" />
        <span class="text-[14px] font-[500] leading-[22px] text-[#26282C]"
          >November 15, 2023</span
        >
      </div>
      <div>
        <Icon name="BellIcon" size="50" />
      </div>
      <div
        class="px-[8px] py-[6px] flex gap-[10px] items-center rounded-full border-[#DADDDD] border"
      >
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
          size="lg"
        />
        <div class="flex flex-col gap-[5px]">
          <span class="text-[#26282C] font-[400] text-[16px] text-right"
            >Justin Bergson</span
          >
          <span class="text-[#787486] font-[400] text-[14px] text-right"
            >Justin@gmail.com</span
          >
        </div>

        <Icon name="ArrowdownIcon" />
      </div>
    </div> 
  
  </div>
  <USlideover :ui="slideOverUi" v-model="isOpen" side="left">
    <div class="flex items-center justify-between p-[20px]">
      <div class="block lg:hidden">
        <Icon name="LogoIcon" size="40" />
      </div>
      <UButton
        color="gray"
        variant="ghost"
        icon="i-heroicons-x-mark-20-solid"
        class="-my-1"
        @click="isOpen = false"
      />
    </div>
    <Sidebar class="h-[calc(100vh-80px)]" />
  </USlideover>
</template>

<script lang="ts" setup>
const search = ref("");
const inputUi = {
  rounded: "rounded-full",
  padding: {
    "2xs": "p-[16px]",
    xs: "p-[16px]",
    sm: "p-[16px]",
    md: "p-[16px]",
    lg: "p-[16px]",
    xl: "p-[16px]",
  },
  icon: {
    trailing: {
      pointer: "",
    },
  },
  base: "max-w-[400px] w-full",
};
const isOpen = ref(false);
const slideOverUi = {
  // background: "bg-white dark:bg-customGray-200/50",
};
// const width = ref(window.innerWidth);

// const updateWidth = () => {
//   width.value = window.innerWidth;
// };

// onMounted(() => {
//   window.addEventListener("resize", updateWidth);
// });

// onUnmounted(() => {
//   window.removeEventListener("resize", updateWidth);
// });

// const isWidth1024 = computed(() => width.value === 1024);
</script>

<style scoped></style>
