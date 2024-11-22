export const currencyFormat = (amount: number) => {
  const str = amount.toString().split(".");
  if (str) {
    str[0] = str[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return str.join(".");
  }
};
