// Elements
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const dayOut = document.getElementById('dayOut');
const monthOut = document.getElementById('monthOut');
const yearOut = document.getElementById('yearOut');
const DayError = document.querySelector('.day-error');
const MonthError = document.querySelector('.month-error');
const YearError = document.querySelector('.year-error');
const calculateBtn = document.getElementById('calculateBtn');
const InputRequiredError = 'This field is required';
const InputDayError = 'Must be a valid day';
const InputMonthError = 'Must be a valid month';
const InputYearError = 'Must be in the past';
const errorStyle = '0.5px solid var(--Light-red)';


function CheckDayInput()
{
    let value = day.value;
    if(value == '')
    {
        DayError.innerHTML = InputRequiredError;
        return false;
    }
    else if(value < 1 || value > 31)
    {
        DayError.innerHTML = InputDayError;
        return false;
    }
    else
    {
        DayError.innerHTML = '';
        return true;
    }
}
function CheckMonthInput()
{
    let value = month.value;
    if(value == '')
    {
       MonthError.innerHTML = InputRequiredError;
        return false;
    }
    else if(value < 1 || value > 12)
    {
        MonthError.innerHTML = InputMonthError;
        return false;
    }
    else
    {
        MonthError.innerHTML = '';
        return true;
    }
}
function CheckYearInput() {
    let value = year.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if (value == '') {
        YearError.innerHTML = InputRequiredError;
        return false;
    }
    else if (value > currentYear) {
        YearError.innerHTML = InputYearError;
        return false;
    }
    else {
        YearError.innerHTML = '';
        return true;
    }
}
function calculateAge(birthday){
    var birthdate = new Date(birthday);
    var today = new Date();

    var years = today.getFullYear() - birthdate.getFullYear();
   var months = today.getMonth() - birthdate.getMonth();
   var days = today.getDate() - birthdate.getDate();

 if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months === 0) {
      months = 11;
    } else {
      months = 12 + months;
    }
    days = 30 + days;
  }

    yearOut.innerHTML = years;
    monthOut.innerHTML = months;
    dayOut.innerHTML = days;
}
calculateBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let day1 = CheckDayInput();
    let month1 = CheckMonthInput();
    let year1 = CheckYearInput();
    if(!day1 || !month1 || !year1) return
    let birthday = `${month.value}/${day.value}/${year.value}`;
    console.log(birthday)
    calculateAge(birthday);
})
