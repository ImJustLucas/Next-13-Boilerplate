import { Theme } from "@typesDef/themes";

import light from "./light";
import main from "./main";

const complete = (theme: Theme) => {
  return { ...main, ...theme };
};

const themes = { light: complete(light) };

export default themes;
