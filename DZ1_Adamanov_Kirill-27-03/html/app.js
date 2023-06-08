var month = prompt("Введите месяц (на русском)");
var day = parseInt(prompt("Введите день (число)"), 10);


if (
  (month === "март" && day >= 21 && day <= 31) ||
  (month === "апрель" && day <= 19 && day <= 30)
) {
  console.log("Ваш знак зодиака - овен");
} else if (
  (month === "апрель" && day >= 20 && day <= 30) ||
  (month === "май" && day <= 20 && day <= 31)
) {
  console.log("Ваш знак зодиака - телец");
} else if (
  (month === "январь" && day >= 20 && day <= 31) ||
  (month === "февраль" && day <= 19 && day <= 28)
) {
  console.log("Ваш знак зодиака - водолей");
} else if (
  (month === "февраль" && day >= 20 && day <= 29) ||
  (month === "март" && day <= 20 && day <= 31)
) {
  console.log("Ваш знак зодиака - рыбы");
} else if (
  (month === "май" && day >= 21 && day <= 31) ||
  (month === "июнь" && day <= 20 && day <= 30)
) {
  console.log("Ваш знак зодиака - близнецы");
} else if (
  (month === "июнь" && day >= 21 && day <= 30) ||
  (month === "июль" && day <= 22 && day <= 31)
) {
  console.log("Ваш знак зодиака - рак");
} else if (
  (month === "июль" && day >= 23 && day <= 31) ||
  (month === "август" && day <= 22 && day <= 31)
) {
  console.log("Ваш знак зодиака - лев");
} else if (
  (month === "август" && day >= 23 && day <= 31) ||
  (month === "сентябрь" && day <= 23 && day <= 30)
) {
  console.log("Ваш знак зодиака - дева");
} else if (
  (month === "сентябрь" && day >= 23 && day <= 30) ||
  (month === "октябрь" && day <= 23 && day <= 31)
) {
  console.log("Ваш знак зодиака - весы");
} else if (
  (month === "октябрь" && day >= 24 && day <= 31) ||
  (month === "ноябрь" && day <= 22 && day <= 30)
) {
  console.log("Ваш знак зодиака - скорпион");
} else if (
  (month === "ноябрь" && day >= 23 && day <= 31) ||
  (month === "декабрь" && day <= 21 && day <= 31)
) {
  console.log("Ваш знак зодиака - стрелец");
} else if (
  (month === "декабрь" && day >= 21 && day <= 31) ||
  (month === "январь" && day <= 19 && day <= 31)
) {
  console.log("Ваш знак зодиака - козерог");
} else {
  console.log("Не удалось определить ваш знак зодиака");
}


