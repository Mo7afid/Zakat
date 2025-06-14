// script.js

document.getElementById('zakatForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // جلب القيم المدخلة وتحويلها إلى أرقام
  const gold = parseFloat(document.getElementById('gold').value) || 0;
  const cash = parseFloat(document.getElementById('cash').value) || 0;
  const stocks = parseFloat(document.getElementById('stocks').value) || 0;
  const debts = parseFloat(document.getElementById('debts').value) || 0;
  const liabilities = parseFloat(document.getElementById('liabilities').value) || 0;

  // النصاب الحالي (مثلاً حسب سعر الذهب = 650 درهم للغرام * 85 غرام)
  // يمكنك تحديث قيمة النصاب حسب سعر الذهب الحقيقي
  const goldPricePerGram = 650;
  const nisab = goldPricePerGram * 85;

  // حساب المال الصافي = مجموع الأصول - الخصوم (الديون التي على المستخدم)
  const totalAssets = gold + cash + stocks + debts;
  const netWealth = totalAssets - liabilities;

  const resultDiv = document.getElementById('result');

  if (netWealth < nisab) {
    resultDiv.textContent = `مالك لم يبلغ النصاب (النصاب = ${nisab.toFixed(2)} درهم). لا تجب الزكاة.`;
    return;
  }

  // نسبة الزكاة العامة 2.5%
  const zakat = netWealth * 0.025;

  resultDiv.textContent = `الزكاة المستحقة: ${zakat.toFixed(2)} درهم (النصاب = ${nisab.toFixed(2)} درهم)`;
});