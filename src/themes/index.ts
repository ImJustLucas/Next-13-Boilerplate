import { Theme } from "@typesDef/themes";

import dark from "./dark";
import light from "./light";
import main from "./main";

const complete = (theme: Theme) => {
  return { ...main, ...theme };
};

const themes = { dark: complete(dark), light: complete(light) };

export default themes;
