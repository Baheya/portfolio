export const convertToPrimaryColorValues = (colorCodesArray) => {
  let primaryColorValues = [];
  colorCodesArray.result[0].map((colorCode) => {
    const stringValue = String(colorCode);
    primaryColorValues.push(stringValue);
  });
  return primaryColorValues;
};

export const convertToSecondaryColorValues = (colorCodesArray) => {
  let secondaryColorValues = [];
  colorCodesArray.result[2].map((colorCode) => {
    const stringValue = String(colorCode);
    secondaryColorValues.push(stringValue);
  });
  return secondaryColorValues;
};
