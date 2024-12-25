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

export const setRoles = [
  "President",
  "Vice President",
  "Secretary General",
  "Assistant Secretary",
  "Financial Secretary",
  "Treasurer",
  "Welfare & Social Secretary",
  "Legal Advisor",
  "Deputy Legal Advisor",
  "Publicity Secretary",
  "Auditor",
  "Member",
  "Others",
];
export const titles = [
  "Mr.",
  "Mrs.",
  "Miss.",
  "Ms.",
  "Dr.",
  "Prof.",
  "Pharm.",
  "Barr.",
  "Eng.",
  "Rev.",
  "Sir",
  "Lady",
  "Hon.",
  "Chief",
  "Capt.",
  "Col.",
  "Maj.",
  "Lt.",
  "Gen.",
  "Arch.",
  "Pastor",
  "Alhaji",
  "Hajia",
  "Prince",
  "Princess",
  "Dame",
];

export const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
export const formatDateWithoutDay = (isoDateString) => {
  const date = new Date(isoDateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
