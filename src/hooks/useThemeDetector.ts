import React from "react";

const useThemeDetector = (): boolean => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  if (typeof window !== "undefined") {
    const getCurrentTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      setIsDarkTheme(getCurrentTheme());
    }, [getCurrentTheme]);
  }

  React.useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mqListener = (e: any) => {
      setIsDarkTheme(e.matches);
    };

    darkThemeMq.addListener(mqListener);
    return () => darkThemeMq.removeListener(mqListener);
  }, []);
  return isDarkTheme;
};

export default useThemeDetector;
