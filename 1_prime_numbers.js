function isPrime(n) {
  for(let i = 2; i <= Math.sqrt(n); i++)
      if(n % i === 0) return false;
  return true;
}

let number = 2;

while (number <= 100) {
  if (isPrime(number)) console.log(number);
  number++;
  }
