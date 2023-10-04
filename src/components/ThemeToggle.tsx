import React from "react";
import { ToggleContainer } from "@styles/components/ThemeToggle.styled";

type ThemeToggleButtonProps = {
  isDark: boolean;
  onChange: () => void;
  invertedIconLogic?: boolean;
};

export const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  isDark,
  onChange,
  invertedIconLogic = false,
}) => (
  <ToggleContainer
    className="container"
    title={isDark ? "Activate light mode" : "Activate dark mode"}
    aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
  >
    <input
      type="checkbox"
      defaultChecked={invertedIconLogic ? !isDark : isDark}
      onChange={onChange}
    />
    <div />
  </ToggleContainer>
);
