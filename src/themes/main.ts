import { MainTheme } from "@typesDef/themes/main-theme";

const main: MainTheme = {
  family: {
    primary: "Figtree, sans-serif",
  },
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  size: {
    extraTitle: "40px",
    title: "32px",
    large: "25px",
    medium: "20px",
    normal: "15px",
    small: "15px",
    tiny: "12px",

    desktop: {
      extraTitle: "64px",
      title: "48px",
      large: "40px",
      medium: "35px",
      normal: "20px",
      small: "18px",
      tiny: "12px",
    },
  },
  breakpoint: {
    /* Desktops and laptops */
    desktop: "1824px",
    /* iPads (landscape) */
    laptop: "1224px",
    /* iPads (portrait) */
    tablet: "1024px",
    /* Smartphones (landscape) */
    mobile: "768px",
  },
};

export default main;
