export const translations = {
  en: {
    nav: {
      home: "Home",
      gcdLcm: "GCD & LCM Calculator",
      primeChecker: "Prime Checker",
      primeList: "Prime Numbers List",
      article: "Number Theory in Cryptography"
    },
    home: {
      title: "Prime Numbers & Number Theory",
      subtitle: "Explore the fascinating world of prime numbers and their applications in cryptography",
      description: "This website provides tools and educational content about prime numbers and number theory, with a focus on cryptographic applications."
    },
    gcdLcm: {
      title: "GCD & LCM Calculator",
      description: "Calculate the Greatest Common Divisor (GCD) and Least Common Multiple (LCM) of two numbers",
      number1: "First Number",
      number2: "Second Number",
      gcd: "GCD",
      lcm: "LCM",
      calculate: "Calculate",
      result: "Result",
      placeholder1: "Enter first number",
      placeholder2: "Enter second number"
    },
    primeChecker: {
      title: "Prime Number Checker & Generator",
      description: "Check if a number is prime or generate prime numbers",
      checkMode: "Check Mode",
      generateMode: "Generate Mode",
      enterNumber: "Enter a number to check",
      isPrime: "is a prime number",
      isNotPrime: "is not a prime number",
      numberLength: "Number Length (digits)",
      generate: "Generate Prime",
      generateRandom: "Generate Random Prime",
      checking: "Checking...",
      factors: "Prime Factors",
      placeholder: "Enter a number",
      placeholderStart: "Enter starting number",
      check: "Check"
    },
    primeList: {
      title: "Prime Numbers List",
      description: "View prime numbers within a specified range",
      from: "From",
      to: "To",
      showPrimes: "Show Primes",
      noPrimes: "No prime numbers found in this range",
      found: "Found",
      primes: "prime numbers",
      placeholderFrom: "From",
      placeholderTo: "To",
      loading: "Loading..."
    },
    article: {
      title: "Number Theory in Cryptography",
      content: `
# Number Theory in Cryptography

## Introduction

Number theory, the branch of mathematics that deals with properties of integers, plays a crucial role in modern cryptography. Prime numbers, in particular, form the foundation of many cryptographic systems that secure our digital communications.

## Prime Numbers

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Examples include 2, 3, 5, 7, 11, 13, and so on.

### Properties of Prime Numbers

- **Fundamental Theorem of Arithmetic**: Every integer greater than 1 can be uniquely expressed as a product of prime numbers.
- **Infinitude**: There are infinitely many prime numbers (proven by Euclid).
- **Distribution**: Prime numbers become less frequent as numbers get larger, but they never completely disappear.

## Applications in Cryptography

### RSA Encryption

RSA (Rivest-Shamir-Adleman) is one of the most widely used public-key cryptosystems. It relies on the difficulty of factoring large composite numbers into their prime factors.

**How RSA Works:**

1. Choose two large prime numbers, p and q
2. Calculate n = p × q
3. Calculate φ(n) = (p-1)(q-1)
4. Choose an encryption key e such that gcd(e, φ(n)) = 1
5. Calculate the decryption key d such that e × d ≡ 1 (mod φ(n))

The security of RSA depends on the computational difficulty of factoring n into p and q.

### Diffie-Hellman Key Exchange

The Diffie-Hellman protocol allows two parties to establish a shared secret key over an insecure channel. It uses modular exponentiation and relies on the discrete logarithm problem.

### Elliptic Curve Cryptography (ECC)

ECC uses the algebraic structure of elliptic curves over finite fields. The security of ECC is based on the elliptic curve discrete logarithm problem, which is believed to be harder than the regular discrete logarithm problem.

## GCD and LCM in Cryptography

### Greatest Common Divisor (GCD)

The GCD of two numbers is the largest number that divides both. The Euclidean algorithm efficiently computes GCD and is used in:

- Finding modular inverses
- Key generation in RSA
- Solving linear congruences

### Least Common Multiple (LCM)

LCM is used in various cryptographic protocols, particularly in timing attacks and side-channel analysis.

## Prime Number Generation

Generating large prime numbers is essential for cryptographic applications. Methods include:

1. **Probabilistic Tests**: Miller-Rabin test, Solovay-Strassen test
2. **Deterministic Tests**: AKS primality test (polynomial time)
3. **Prime Sieves**: Sieve of Eratosthenes for finding primes up to a limit

## Security Considerations

- **Key Size**: Larger keys provide better security but require more computation
- **Prime Quality**: Primes must be randomly generated and sufficiently large
- **Side-Channel Attacks**: Implementation must protect against timing and power analysis

## Conclusion

Number theory provides the mathematical foundation for modern cryptography. Understanding prime numbers, GCD, LCM, and related concepts is essential for anyone working in cybersecurity or cryptography.

The tools on this website allow you to explore these concepts interactively and gain a deeper understanding of how mathematics secures our digital world.
      `
    },
    footer: {
      github: "View on GitHub",
      madeWith: "Made with"
    }
  },
  fa: {
    nav: {
      home: "خانه",
      gcdLcm: "ماشین حساب ب.م.م و ک.م.م",
      primeChecker: "بررسی عدد اول",
      primeList: "فهرست اعداد اول",
      article: "نظریه اعداد در رمزنگاری"
    },
    home: {
      title: "اعداد اول و نظریه اعداد",
      subtitle: "کشف دنیای شگفت‌انگیز اعداد اول و کاربردهای آن‌ها در رمزنگاری",
      description: "این وب‌سایت ابزارها و محتوای آموزشی درباره اعداد اول و نظریه اعداد ارائه می‌دهد، با تمرکز بر کاربردهای رمزنگاری."
    },
    gcdLcm: {
      title: "ماشین حساب ب.م.م و ک.م.م",
      description: "محاسبه بزرگ‌ترین مقسوم‌علیه مشترک (ب.م.م) و کوچک‌ترین مضرب مشترک (ک.م.م) دو عدد",
      number1: "عدد اول",
      number2: "عدد دوم",
      gcd: "ب.م.م",
      lcm: "ک.م.م",
      calculate: "محاسبه",
      result: "نتیجه",
      placeholder1: "عدد اول را وارد کنید",
      placeholder2: "عدد دوم را وارد کنید"
    },
    primeChecker: {
      title: "بررسی و تولید عدد اول",
      description: "بررسی اول بودن یک عدد یا تولید اعداد اول",
      checkMode: "حالت بررسی",
      generateMode: "حالت تولید",
      enterNumber: "یک عدد برای بررسی وارد کنید",
      isPrime: "یک عدد اول است",
      isNotPrime: "یک عدد اول نیست",
      numberLength: "طول عدد (رقم)",
      generate: "تولید عدد اول",
      generateRandom: "تولید عدد اول تصادفی",
      checking: "در حال بررسی...",
      factors: "عوامل اول",
      placeholder: "یک عدد وارد کنید",
      placeholderStart: "عدد شروع را وارد کنید",
      check: "بررسی"
    },
    primeList: {
      title: "فهرست اعداد اول",
      description: "مشاهده اعداد اول در یک بازه مشخص",
      from: "از",
      to: "تا",
      showPrimes: "نمایش اعداد اول",
      noPrimes: "هیچ عدد اولی در این بازه یافت نشد",
      found: "یافت شد",
      primes: "عدد اول",
      placeholderFrom: "از",
      placeholderTo: "تا",
      loading: "در حال بارگذاری..."
    },
    article: {
      title: "نظریه اعداد در رمزنگاری",
      content: `
# نظریه اعداد در رمزنگاری

## مقدمه

نظریه اعداد، شاخه‌ای از ریاضیات که با ویژگی‌های اعداد صحیح سروکار دارد، نقش مهمی در رمزنگاری مدرن ایفا می‌کند. اعداد اول به‌طور خاص، پایه و اساس بسیاری از سیستم‌های رمزنگاری هستند که ارتباطات دیجیتال ما را امن می‌کنند.

## اعداد اول

عدد اول یک عدد طبیعی بزرگ‌تر از 1 است که هیچ مقسوم‌علیه مثبتی جز 1 و خودش ندارد. مثال‌ها شامل 2، 3، 5، 7، 11، 13 و غیره هستند.

### ویژگی‌های اعداد اول

- **قضیه اساسی حساب**: هر عدد صحیح بزرگ‌تر از 1 را می‌توان به‌طور یکتا به‌صورت حاصل‌ضرب اعداد اول بیان کرد.
- **بی‌نهایت بودن**: تعداد اعداد اول بی‌نهایت است (اثبات شده توسط اقلیدس).
- **توزیع**: اعداد اول با بزرگ شدن اعداد، کمتر می‌شوند اما هرگز کاملاً ناپدید نمی‌شوند.

## کاربردها در رمزنگاری

### رمزنگاری RSA

RSA (Rivest-Shamir-Adleman) یکی از پرکاربردترین سیستم‌های رمزنگاری کلید عمومی است. این سیستم بر دشواری تجزیه اعداد مرکب بزرگ به عوامل اول آن‌ها متکی است.

**نحوه کار RSA:**

1. دو عدد اول بزرگ p و q را انتخاب کنید
2. n = p × q را محاسبه کنید
3. φ(n) = (p-1)(q-1) را محاسبه کنید
4. کلید رمزنگاری e را طوری انتخاب کنید که gcd(e, φ(n)) = 1
5. کلید رمزگشایی d را طوری محاسبه کنید که e × d ≡ 1 (mod φ(n))

امنیت RSA به دشواری محاسباتی تجزیه n به p و q بستگی دارد.

### تبادل کلید دیفی-هلمن

پروتکل دیفی-هلمن به دو طرف اجازه می‌دهد یک کلید مشترک را از طریق یک کانال ناامن ایجاد کنند. این پروتکل از توان‌رسانی پیمانه‌ای استفاده می‌کند و بر مسئله لگاریتم گسسته متکی است.

### رمزنگاری منحنی بیضوی (ECC)

ECC از ساختار جبری منحنی‌های بیضوی روی میدان‌های متناهی استفاده می‌کند. امنیت ECC بر اساس مسئله لگاریتم گسسته منحنی بیضوی است که اعتقاد بر این است که از مسئله لگاریتم گسسته معمولی سخت‌تر است.

## ب.م.م و ک.م.م در رمزنگاری

### بزرگ‌ترین مقسوم‌علیه مشترک (ب.م.م)

ب.م.م دو عدد، بزرگ‌ترین عددی است که هر دو را تقسیم می‌کند. الگوریتم اقلیدسی به‌طور کارآمد ب.م.م را محاسبه می‌کند و در موارد زیر استفاده می‌شود:

- یافتن معکوس پیمانه‌ای
- تولید کلید در RSA
- حل هم‌نهشتی‌های خطی

### کوچک‌ترین مضرب مشترک (ک.م.م)

ک.م.م در پروتکل‌های رمزنگاری مختلف، به‌ویژه در حملات زمان‌بندی و تحلیل کانال جانبی استفاده می‌شود.

## تولید اعداد اول

تولید اعداد اول بزرگ برای کاربردهای رمزنگاری ضروری است. روش‌ها شامل:

1. **تست‌های احتمالاتی**: تست میلر-رابین، تست سولووی-اشتراسن
2. **تست‌های قطعی**: تست اول بودن AKS (زمان چندجمله‌ای)
3. **غربال‌های اول**: غربال اراتوستن برای یافتن اعداد اول تا یک حد

## ملاحظات امنیتی

- **اندازه کلید**: کلیدهای بزرگ‌تر امنیت بهتری ارائه می‌دهند اما به محاسبات بیشتری نیاز دارند
- **کیفیت عدد اول**: اعداد اول باید به‌طور تصادفی تولید شوند و به اندازه کافی بزرگ باشند
- **حملات کانال جانبی**: پیاده‌سازی باید در برابر تحلیل زمان‌بندی و توان محافظت کند

## نتیجه‌گیری

نظریه اعداد پایه ریاضی رمزنگاری مدرن را فراهم می‌کند. درک اعداد اول، ب.م.م، ک.م.م و مفاهیم مرتبط برای هر کسی که در امنیت سایبری یا رمزنگاری کار می‌کند ضروری است.

ابزارهای موجود در این وب‌سایت به شما امکان می‌دهند این مفاهیم را به‌صورت تعاملی کاوش کنید و درک عمیق‌تری از چگونگی امن کردن دنیای دیجیتال ما توسط ریاضیات به دست آورید.
      `
    },
    footer: {
      github: "مشاهده در گیت‌هاب",
      madeWith: "ساخته شده با"
    }
  }
};

export type Language = 'en' | 'fa';
export type TranslationKey = keyof typeof translations.en;
