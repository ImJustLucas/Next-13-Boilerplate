import React from "react";
import { Theme } from "@typesDef/themes";
import { ThemeProvider } from "styled-components";

import themes from "../themes";

const GlobalThemeContext = React.createContext({
  globalTheme: themes.light,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setGlobalTheme: (_theme: Theme) => undefined,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalThemeProvider = (props: any) => {
  const [globalTheme, setGlobalTheme] = React.useState(themes.light);

  return (
    <GlobalThemeContext.Provider
      value={{ globalTheme, setGlobalTheme }}
      {...props}
    >
      <ThemeProvider theme={globalTheme}>{props.children}</ThemeProvider>
    </GlobalThemeContext.Provider>
  );
};

export { GlobalThemeContext, GlobalThemeProvider };
