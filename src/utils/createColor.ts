const createColor = (r: number, g: number, b: number, a?: number): string => {
  if (a) return `rgba(${r}, ${g}, ${b}, ${a})`;
  return `rgb(${r}, ${g}, ${b})`;
};

const createAlpha = (r: number, g: number, b: number, a: number): string => {
  return createColor(r, g, b, a);
};

const createAlphaFromString = (rgb: string, a: number): string => {
  const rgbArray = rgb.match(/\d+/g);
  if (rgbArray) {
    const [r, g, b] = rgbArray.map((x: string) => parseInt(x));
    return createAlpha(r, g, b, a);
  }

  return "";
};

export { createAlpha, createAlphaFromString, createColor };
