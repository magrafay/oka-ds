export const truncateMiddle = (str: string) => {
  if (str.length > 20) {
    return str.substr(0, 8) + "....." + str.substr(str.length - 8, str.length);
  }
  return str;
};

export const truncateText = (str: string, length: number, position?: string) => {
  if (str.length > 20) {
    return position === "center"
      ? str.substr(0, length) + "....." + str.substr(str.length - length, str.length)
      : position === "start"
      ? "....." + str.substr(0, length)
      : str.substr(0, length) + ".....";
  }
  return str;
};
