type ButtonTheme = {
  background: string;

  text: string;
  outline: string;
};

export type Theme = {
  id: number;
  colors: {
    primary: string;
    secondary: string;

    background: {
      primary: string;
      secondary: string;
      contrast: string;
    };

    text: {
      primary: string;
      secondary: string;
      contrast: string;
    };

    button: ButtonTheme;
  };
};
