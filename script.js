const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextIcon = document.querySelectorAll(".icons span");
  // prevNextIcon = [<span></span>, <span></span>]

// getting new date cuurent year & month
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();
console.log("date =", date);
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
  for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
    // liTag += `<li classs="inactive">${lastDateoflastMonth - i + 1}</li>`;
    liTag = liTag + `<li class="inactive">${lastDateoflastMonth - i + 1}</li>`;
    // liTag = "<li class="inactive">29</li>" + "<li class="inactive">30</li>"
    // liTag = "<li class="inactive">29</li><li class="inactive">30</li><li class="inactive">31</li>"
    // 29
    // 30
    // 31
  }
  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === new Date().getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag = liTag + `<li class="${isToday}">${i}</li>`;
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
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
      console.log("currMonth =", currMonth)
      console.log("currYear =", currYear)
      // creating a new date of current year & month and pass it as date value
      date = new Date(currYear, currMonth);
      console.log("date =", date)
      currYear = date.getFullYear(); // updating current year with new date year
      currMonth = date.getMonth(); // updating current month with new date month
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});




