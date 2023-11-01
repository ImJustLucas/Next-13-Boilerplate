import { Theme } from "@typesDef/themes";
import { createColor } from "@utils/createColor";

const dark: Theme = {
  id: 0,
  name: "dark",
  colors: {
    primary: "#90e0ef",
    secondary: "#caf0f8",

    background: {
      primary: "linear-gradient(123deg, #2B2D42 0%, #023E8A 50%, #2B2D42 100%)",
      secondary: createColor(30, 31, 32, 0.2),
      contrast: "",
    },
    text: {
      primary: "#2b2d42",
      secondary: createColor(141, 149, 157),
      contrast: "#f8f9fa",
    },
    button: {
      background: "",
      text: "",
      outline: "",
    },
  },
};

export default dark;
