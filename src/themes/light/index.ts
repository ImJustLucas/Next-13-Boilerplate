import { Theme } from "@typesDef/themes";
import { createColor } from "@utils/createColor";

const light: Theme = {
  id: 0,
  name: "light",
  colors: {
    primary: "#00b4d8",
    secondary: "#90e0ef",

    background: {
      primary:
        "linear-gradient(123deg, #FFF 23.25%, #C5F1FB 48.67%, #F1F6F6 76.07%)",
      secondary: createColor(246, 6, 123, 0.2),
      contrast: "",
    },
    text: {
      primary: "#2b2d42",
      secondary: createColor(141, 149, 157),
      contrast: "#2b2d42",
    },
    button: {
      background: "",
      text: "",
      outline: "",
    },
  },
};

export default light;
