import { Theme } from "@typesDef/themes";
import { createColor } from "@utils/createColor";

const light: Theme = {
  id: 0,
  colors: {
    primary: "#00b4d8",
    secondary: "#90e0ef",

    background: {
      primary: "#ffffff",
      secondary: createColor(246, 6, 123, 0.2),
      contrast: "",
    },
    text: {
      primary: "#2b2d42",
      secondary: createColor(141, 149, 157),
      contrast: createColor(255, 255, 255),
    },
    button: {
      background: "",
      text: "",
      outline: "",
    },
  },
};

export default light;
