import React, { useContext, useEffect } from "react";

import { ToggleContainer } from "@styles/components/ThemeToggle.styled";

import { GlobalThemeContext } from "@contexts/GlobalTheme";
import useThemeDetector from "@hooks/useThemeDetector";

export const ThemeToggleButton: React.FC = () => {
  const theme = useContext(GlobalThemeContext);
  const [loading, setLoading] = React.useState(true);
  const isDarkTheme = useThemeDetector();

  const startTimeout = () => {
    setTimeout(() => {
      setLoading(false);
    }, 50);
  };

  useEffect(() => {
    setLoading(true);
    startTimeout();
  }, [isDarkTheme]);

  const handleSwitchTheme = () => {
    if (!theme) return;
    theme.switchTheme();
  };

  startTimeout();

  return (
    <>
      {!loading && (
        <ToggleContainer
          className="container"
          title={isDarkTheme ? "Activate light mode" : "Activate dark mode"}
          aria-label={
            isDarkTheme ? "Activate light mode" : "Activate dark mode"
          }
        >
          <input
            type="checkbox"
            defaultChecked={isDarkTheme}
            onChange={handleSwitchTheme}
          />
          <div />
        </ToggleContainer>
      )}
    </>
  );
};
