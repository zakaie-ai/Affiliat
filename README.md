# ZAKAIE | صفحة تسجيل المسوّقين

## هيكل الملفات
```
index.html        الصفحة
css/style.css     التصميم
js/main.js        الحركات + الفيديو + إرسال الواتساب
assets/logo.png   اللوجو
assets/bg.mp4     فيديو الخلفية
assets/frames.json  صور بديلة لو الفيديو ما اشتغل
```

## الرفع على GitHub Pages
1. أنشئ Repository جديد على GitHub (مثلا `zakaie`).
2. ارفع محتوى المجلد كما هو (ملف `index.html` لازم يكون في الجذر).
3. من Settings ثم Pages اختر Branch: main وFolder: / (root) ثم Save.
4. بعد دقيقة يظهر الرابط: `https://USERNAME.github.io/zakaie/`

## تغيير رقم الواتساب
افتح `js/main.js` وغيّر السطر:
`var TEAM_WHATSAPP = "249902375181";`
(بالصيغة الدولية بدون + أو 00).
