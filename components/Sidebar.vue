<template>
  <div class="bg-white dark:bg-gray-900/70 sticky top-0 z-[10] lg:w-20 flex flex-col duration-300">
    <!-- fisrt half -->
    <div>
      <!-- Logo -->
      <div class="p-[20px] lg:block hidden">
        <Icon name="LogoIcon" size="40" />
      </div>
      <div class="space-y-[16px]">
        <SidebarIcon
          v-for="(icon, index) in icons"
          :key="index"
          :name="icon.name"
          :icon="icon.icon"
          class=" cursor-pointer hover:bg-customGreen-50/40 duration-300 group-hover:justify-start group-hover:pl-[20px] group-hover:text-opacity-50"
          size="24"
        />
      </div>

      <div
        class="flex justify-center items-start p-[20px] my-[16px] flex-col gap-[10px]"
      >
        <div>
          <input type="checkbox" id="switch" /><label
            @click="isDark = !isDark"
            class="flex flex-col justify-between py-[12px] px-[12px]"
            for="switch"
          >
            <div><Icon name="SunIcon" size="20" /></div>
            <div><Icon name="MoonIcon" size="20" /></div>
          </label>
        </div>
      </div>
    </div>

    <!-- bottom half -->

    <div class="mt-auto">
      <div class="space-y-[16px]">
        <SidebarIcon
          v-for="(icon, index) in bottomIcons"
          :key="index"
          :name="icon.name"
          :icon="icon.icon"
          class="p-[10px]"
          size="24"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "#components";
import type { VNodeProps } from "nuxt/dist/app/compat/vue-demi";
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "light";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const icons = [
  {
    name: "Dashboard",
    icon: "DashboardIcon",
  },
  {
    name: "TrendUp",
    icon: "TrendUpIcon",
  },
  {
    name: "Profile",
    icon: "ProfileIcon",
  },
  {
    name: "Discount",
    icon: "DiscountshapeIcon",
  },
  {
    name: "Box",
    icon: "BoxIcon",
  },
  {
    name: "Info",
    icon: "InfoIcon",
  },
];
const bottomIcons = [
  {
    name: "Arrow right",
    icon: "ArrowrightIcon",
  },
  {
    name: "Settings",
    icon: "SettingsIcon",
  },
  {
    name: "Logout",
    icon: "LogoutIcon",
  },
];
const SidebarIcon = (
  props: VNodeProps & {
    name?: string;
    size?: string;
    class?: string;
    icon: string;
  }
) => {
  return h(
    "div",
    {
      class: `${props.class} flex lg:justify-center gap-[10px] items-center px-[20px] py-[10px] lg:p-[10px]`,
      // { class: [props.class, "flex justify-center items-center w-full"] },
    },
    [
      h(Icon, { name: props.icon, size: props.size }),
      h("span", { class: "lg:hidden" }, props.name),
    ]
  );
};
</script>

<style>
input[type="checkbox"] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  width: 46px;
  height: 92px;
  /* border: 1px solid #ccc; */
  display: block;
  border-radius: 100px;
  position: relative;
  padding: 8px;
  background-color: #f3f3f3;
}

label:after {
  content: "";
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input + label::after {
  @apply bg-customGreen-100/50;
}

input:checked + label:after {
  bottom: calc(100% - 8px);
  transform: translateY(100%);
}

label:active::after {
  height: 40px;
}
</style>
