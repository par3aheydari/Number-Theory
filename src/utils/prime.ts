// Prime number utilities

export function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

export function getPrimeFactors(n: number): number[] {
  const factors: number[] = [];
  let d = 2;
  
  while (d * d <= n) {
    if (n % d === 0) {
      factors.push(d);
      n /= d;
    } else {
      d++;
    }
  }
  
  if (n > 1) {
    factors.push(n);
  }
  
  return factors;
}

export function generatePrimesInRange(start: number, end: number): number[] {
  const primes: number[] = [];
  for (let i = Math.max(2, start); i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

export function generateRandomPrime(length: number): number {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  
  let attempts = 0;
  while (attempts < 10000) {
    const candidate = Math.floor(Math.random() * (max - min + 1)) + min;
    if (isPrime(candidate)) {
      return candidate;
    }
    attempts++;
  }
  
  // Fallback: try sequential search
  for (let i = min; i <= max; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
  
  return 2; // Fallback
}

export function generateNextPrime(n: number): number {
  let candidate = n + 1;
  while (!isPrime(candidate)) {
    candidate++;
  }
  return candidate;
}
