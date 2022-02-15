export const calculateFeeAndProfit = (price) => {
  const fee = Math.round((price / 100) * 5);
  const profit = price - fee;

  return { fee: fee, profit: profit };
};
