export const factorial = (number) =>
  number < 2 ? 1 : number * factorial(number - 1);

export const factorialize = (number) => {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};
