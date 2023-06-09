export function formatCash (n){
    if (n < 1e3) return + (n/1e3);
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "k"
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "m";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "b";
    if (n >= 1e12) return +(n / 1e12).toFixed(2) + "t";
  }