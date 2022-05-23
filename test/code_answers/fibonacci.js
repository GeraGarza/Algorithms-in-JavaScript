export const fibonacci = (element) =>
  // if (element < 0) throw new Error("Index cannot be negative");
  element < 3 ? 1 : fibonacci(element - 1) + fibonacci(element - 2);

export const _fibonacci = (element) => {
  const series = [1, 1];

  for (let i = 2; i < element; i++) {
    const a = series[i - 1];
    const b = series[i - 2];
    series.push(a + b);
  }

  return series[element - 1];
};
