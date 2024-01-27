import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        customGreen: {
          50: "#34CAA5",
          100: "#34CAA5",
          200: "#34CAA5",
          300: "#34CAA5",
          400: "#34CAA5",
          500: "#34CAA5",
          600: "#34CAA5",
          700: "#34CAA5",
          800: "#34CAA5",
          900: "#34CAA5",
          950: "#34CAA5",
        },
        customGray: {
          50: "#9CA4AB",
          100: "#787486",
          200: "#898989", 
          300: "#C3CED9",
          400: "#A3A3A3",
          500: "#91A6B9",
          600: "#525252",
          700: "#737373",
          800: "#51697F",
          900: "#415466",
          950: "#26282C",
        },
        customRed: {
          500: "#ED544E",
        },
      },
    },
  },
};
