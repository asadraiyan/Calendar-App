const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll(".icons span");
  // console.log(currentDate, daysTag, prevNextIcon);

// getting new date cuurent year & month
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();
// console.log(date, currYear, currMonth);
const months = [
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
const renderCalendar = () => {
  let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), //getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //getting last day of month
    lastDateoflastMonth = new Date(currYear, currMonth, 0).getDate(); //getting last date of previous month
    console.log(firstDayofMonth,  lastDateofMonth,  lastDayofMonth,  lastDateoflastMonth );
  let liTag = "";
  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li classs="inactive">${lastDateoflastMonth - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDay() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li>${i}</li>`;
    // console.log(i);
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li classs="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    // adding click events on both icons
    // console.log(icon);
    // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});




