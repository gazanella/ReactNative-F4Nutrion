import { Keyboard } from "react-native";

/* Função que retorna o dia atual. */
function getCurrentDate() {
  let date = new Date();
  const day_week = date.getDay();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const month_array = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const week_array = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  date = `${week_array[day_week]}, ${month_array[month]} ${day}th ${year}`;
  return date;
}

/* Função que faz o teclado ser abaixado após 200 milésimos. */
function keyboardDismiss() {
  setTimeout(() => {
    Keyboard.dismiss();
  }, 200);
}

export { getCurrentDate, keyboardDismiss };