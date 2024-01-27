# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

      <!-- <ClientOnly>
          <UButton
            :icon="
              isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'
            "
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
          />

          <template #fallback>
            <div class="w-8 h-8" />
          </template>
        </ClientOnly>
        <div
          @click="isDark = !isDark"
          :class="isDark ? 'justify-end' : 'justify-start bg-customGreen-5x00'"
          class="w-[46px] h-[92px] border-2 rounded-full p-[6px] flex flex-col duration-300 relative cursor-pointer"
        >
          <div
            class="absolute bg-customGreen-100 rounded-full w-[30px] h-[30px] bottom-2 left-2 transition-all duration-300 ease-in-out flex justify-center items-center"
          ></div>
        </div>

        <div
          @click="isDark = !isDark"
          class="w-[46px] h-[92px] bg-gray-500 block  rounded-full p-2  relative cursor-pointer transition-colors duration-300"
        >
          <div
            class="absolute bg-white rounded-full w-8 h-8  left-[6px] transition-transform duration-300 ease-in-out"
            :class="{
              'transform translate-y-full ': isDark,
            }"
          ></div>
        </div> -->
