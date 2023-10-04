import { Theme } from "@typesDef/themes";
import { createColor } from "@utils/createColor";

const dark: Theme = {
  id: 0,
  colors: {
    primary: createColor(245, 6, 123),
    secondary: createColor(123, 107, 221),

    background: {
      primary: createColor(30, 31, 32),
      secondary: createColor(30, 31, 32, 0.2),
      contrast: "",
    },
    text: {
      primary: createColor(255, 255, 255),
      secondary: createColor(150, 150, 150),
      contrast: createColor(0, 0, 0),
    },
    button: {
      background: "",
      text: "",
      outline: "",
    },
  },
};

export default dark;
