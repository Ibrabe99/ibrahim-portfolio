# Ibrahim Banour (إبراهيم بالنور) — Personal Portfolio

بورتفوليو شخصي احترافي ثنائي اللغة (عربي `RTL` / إنجليزي `LTR`) مع نظام انتقال الصفحات التفاعلي بعجلة الماوس (3D Page-Flip & View Transitions) ودعم الوضع الليلي والنهاري.

---

## تشغيل المشروع محلياً (Run Locally)

```bash
cd ibrahim-portfolio
npm install
npm run dev
```

لبناء نسخة الإنتاج (Production Build):

```bash
npm run build
```

---

## تعديل البيانات أو إضافة مشاريع جديدة

كل البيانات والنصوص (بالعربي وبالإنجليزي) موجودة في ملف واحد منظم:
- [`src/data/portfolioData.js`](./src/data/portfolioData.js)
- صور ولقطات شاشة المشاريع والـ CV موجودة داخل مجلد: [`public/`](./public/)

---

## طريقة الرفع على Vercel وربط الدومين (`www.ibrahim.ly`) مجاناً

1. ارفع مجلد `ibrahim-portfolio` إلى حسابك على GitHub (`https://github.com/Ibrabe99`).
2. ادخل إلى موقع [vercel.com](https://vercel.com) وسجل الدخول بحساب GitHub.
3. اضغط **Add New Project** واختر المستودع (Repository) الخاص بالبورتفوليو ثم اضغط **Deploy**.
4. لربط الدومين `ibrahim.ly`:
   - من لوحة تحكم المشروع في Vercel ادخل إلى **Settings -> Domains**.
   - اكتب `ibrahim.ly` و `www.ibrahim.ly` واضغط **Add**.
   - ضع سجلات الـ DNS (`A Record` و `CNAME`) التي يعطيها لك Vercel في لوحة تحكم الدومين الخاص بك، وسيتم تفعيل الموقع مع شهادة `HTTPS/SSL` مجاناً تلقائياً.
# ibrahim-portfolio
# ibrahim-portfolio
