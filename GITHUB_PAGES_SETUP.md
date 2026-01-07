# راهنمای فعال‌سازی GitHub Pages

## مراحل فعال‌سازی:

### 1. ساخت فایل `vite.config.ts` (اگر وجود ندارد)
اطمینان حاصل کنید که `base` در فایل `vite.config.ts` به درستی تنظیم شده است:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Number-Theory/',
})
```

### 2. ساخت فایل `.github/workflows/deploy.yml`
یک فایل workflow برای GitHub Actions ایجاد کنید:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 3. تنظیمات GitHub Repository

1. به repository خود در GitHub بروید
2. روی **Settings** کلیک کنید
3. در منوی سمت چپ، **Pages** را انتخاب کنید
4. در بخش **Source**، **GitHub Actions** را انتخاب کنید
5. تغییرات را ذخیره کنید

### 4. Push کردن کد

```bash
git add .
git commit -m "Setup GitHub Pages"
git push origin main
```

### 5. بررسی Deploy

- به تب **Actions** در repository خود بروید
- workflow را اجرا شده ببینید
- پس از اتمام، سایت شما در آدرس زیر در دسترس خواهد بود:
  `https://par3aheydari.github.io/Number-Theory/`

## نکات مهم:

- اطمینان حاصل کنید که `basename` در `App.tsx` با نام repository شما مطابقت دارد
- اگر نام repository شما متفاوت است، آن را در `vite.config.ts` و `App.tsx` تغییر دهید
- ممکن است اولین deploy چند دقیقه طول بکشد

## عیب‌یابی:

اگر سایت کار نمی‌کند:
1. بررسی کنید که workflow در Actions اجرا شده باشد
2. مطمئن شوید که `base` در `vite.config.ts` درست است
3. بررسی کنید که فایل‌های در پوشه `dist` build شده باشند

