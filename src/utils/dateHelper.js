export const getYearList = () => {
  const years = [];
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 100; // Örn: Geçmişteki son 100 yıl
  const endYear = currentYear + 10; // Örn: Gelecekteki son 10 yıl

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
};

export const getMonthList = () => {
  return [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ];
};
