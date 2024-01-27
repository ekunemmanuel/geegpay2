<template>
  <!-- <div class="min-h-screen grid grid-cols-[auto,1fr]">
    <Sidebar />

    <div class=" bg-[#f7f7f7] ">
      <slot />
    </div>
  </div> -->

   <div class="flex min-h-screen bg-white dark:bg-gray-900/30">
    <Sidebar class="hidden lg:block sticky top-0" />

    <div class="flex-grow bg-[#f1f1f1] dark:bg-slate-50/70">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
