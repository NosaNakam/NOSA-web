export const dates = [];
const date = new Date();
const month = date.getMonth();
const currentYear = date.getFullYear();
if (month + 1 > 8) {
  for (let i = 1978; i <= currentYear; i++) {
    dates.push({
      graduationYear: `${i}`,
      value: `${i}`,
    });
  }
} else {
  for (let i = 1978; i < currentYear; i++) {
    dates.push({
      graduationYear: `${i}`,
      value: `${i}`,
    });
  }
}
