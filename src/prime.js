export function addUpPrimes(n) {
  // using the seive of Eratosthenes get all primes
  const list = [];

  for (let i = 2; i <= n; i++) {
    list[i] = { index: i, value: true };
  }

  // our limit
  const limit = Math.sqrt(n);

  //run	over	the	list,	starting	at	2
  for (let i = 2; i <= 10; i++) {
    for (let x = i + i; x <= n; x += i) {
      // set all multiples of i to false
      list[x] = false;
    }
  }

  // using reduce, filter out all false values and return a new array with the number
  const newList = list.reduce((acc, curr) => {
    if (curr !== false) {
      acc.push(curr.index);
    }
    return acc;
  }, []);

  // add up primes
  // return newList.reduce((prev, curr) => prev + curr);
  return newList;
}
