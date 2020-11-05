export const RGBToHex = (rgb) => {
  rgb[0] = rgb[0].toString(16);
  rgb[1] = rgb[1].toString(16);
  rgb[2] = rgb[2].toString(16);
  if (rgb[0].length === 1) rgb[0] = '0' + rgb[0];
  if (rgb[1].length === 1) rgb[1] = '0' + rgb[1];
  if (rgb[2].length === 1) rgb[2] = '0' + rgb[2];
  return '#' + rgb[0] + rgb[1] + rgb[2];
};
