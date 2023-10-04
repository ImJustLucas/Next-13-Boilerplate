type Size = {
  extraTitle: string;
  title: string;
  large: string;
  medium: string;
  normal: string;
  small: string;
  tiny: string;
};

export type MainTheme = {
  family: {
    primary: string;
  };
  weight: {
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
  };
  /* Default as Smartphones (landscape) */
  size: Size & {
    /* Desktops and laptops */
    desktop: Size;
  };
  breakpoint: {
    /* Desktops and laptops */
    desktop: string;
    /* iPads (landscape) */
    laptop: string;
    /* iPads (portrait) */
    tablet: string;
    /* Smartphones (landscape) */
    mobile: string;
  };
};
