export function maxProfit(prices) {
  let minBuyPrice = prices[0] < prices[1] ? prices[0] : prices[1],
    maxSellPrice = prices[0] < prices[1] ? prices[1] : prices[2];
  let maxProfit = maxSellPrice - minBuyPrice;
  let tempBuyPrice = minBuyPrice;

  for (let index = 2; index < prices.length; index++) {
    const sellPrice = prices[index];

    if (minBuyPrice > sellPrice) tempBuyPrice = prices[index];
    else {
      const profit = sellPrice - minBuyPrice;
      if (profit > maxProfit)
        (maxProfit = profit),
          (maxSellPrice = sellPrice),
          (minBuyPrice = tempBuyPrice);
    }
  }

  return [minBuyPrice, maxSellPrice];
}
