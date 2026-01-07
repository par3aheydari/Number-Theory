# Prime Numbers & Number Theory Website

یک وب‌سایت دوزبانه (فارسی/انگلیسی) برای اعداد اول و نظریه اعداد با تمرکز بر کاربردهای رمزنگاری.

A bilingual (Persian/English) website about prime numbers and number theory with a focus on cryptographic applications.

## Features

- 🌐 **Bilingual Support**: Full Persian and English translations
- 🔢 **GCD & LCM Calculator**: Calculate greatest common divisor and least common multiple
- ✓ **Prime Number Checker**: Check if a number is prime with factorization
- 🎲 **Prime Number Generator**: Generate random prime numbers with configurable length
- 📋 **Prime Numbers List**: View all prime numbers within a specified range
- 📚 **Educational Article**: Comprehensive guide about number theory in cryptography
- 🌙 **Dark Theme**: Beautiful dark theme with modern UI/UX
- 📱 **Responsive Design**: Works perfectly on all devices

## Technologies

- React 19
- TypeScript
- Vite
- React Router
- CSS3 with gradients and animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Deployment to GitHub Pages

1. Update the GitHub repository URL in `src/components/Footer.tsx` (replace `yourusername` with your GitHub username)

2. Make sure `vite.config.ts` has the correct `base` path (should match your repository name)

3. Push your code to the `main` branch

4. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy to GitHub Pages

5. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

## Project Structure

```
src/
├── components/      # Reusable components (Navbar, Footer)
├── pages/          # Page components
├── i18n/           # Internationalization (translations)
├── utils/          # Utility functions (prime, math)
└── App.tsx         # Main app component
```

## Pages

- **Home**: Landing page with feature cards
- **GCD & LCM Calculator**: Calculate greatest common divisor and least common multiple
- **Prime Checker**: Check if numbers are prime or generate prime numbers
- **Prime List**: View prime numbers in a range
- **Article**: Educational content about number theory in cryptography

## License

MIT
