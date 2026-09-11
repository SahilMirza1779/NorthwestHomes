export const formatPrice = (baseGbpDay, baseGbpMonth, currency) => {
  let rate = 1;
  let symbol = '£';

  if (currency === 'USD') {
    rate = 1.3; // 1 GBP = ~1.3 USD
    symbol = '$';
  } else if (currency === 'INR') {
    rate = 108; // 1 GBP = ~108 INR
    symbol = '₹';
  }

  const convertedDay = Math.round(baseGbpDay * rate);
  const convertedMonth = Math.round(baseGbpMonth * rate);

  return `${symbol}${convertedDay}/day | ${symbol}${convertedMonth.toLocaleString()}/mo`;
};