// theme/index.js
// from https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project
import { extendTheme } from "@chakra-ui/react";

/*
色卡生成器 https://themera.vercel.app/ （更多见：https://chakra-ui.com/docs/theming/theme#colors）
默认颜色会使用 500，子元素，或者变化元素，会取用这个颜色的其他色号来生成。
比如在夜间模式，会自动换上数值更大的明亮版本（但这样会不会导致一些偏差？）
*/
const overrides = {
  colors: {
    primary: {
      50: "#E9FDE8",
      100: "#C0F9BE",
      200: "#98F594",
      300: "#70F16A",
      400: "#47ED40",
      500: "#1FE916",
      600: "#19BA12",
      700: "#128C0D",
      800: "#0C5D09",
      900: "#062F04",
    },
    secondary: {
      50: "#E5F3FF",
      100: "#B8DDFF",
      200: "#8AC7FF",
      300: "#5CB1FF",
      400: "#2E9BFF",
      500: "#0085FF",
      600: "#006ACC",
      700: "#005099",
      800: "#003566",
      900: "#001B33",
    },
  },
};

export default extendTheme(overrides);
