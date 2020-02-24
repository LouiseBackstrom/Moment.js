//language, Swedish
moment.locale("sv");

//todays date
const a = moment().format('LLLL'); 
document.getElementById("date1").innerHTML = a;

//add 3 days
const b = moment().add(3, 'days').calendar();
document.getElementById("date2").innerHTML = b;

//subtract 6 days
const c = moment().subtract(6, 'days').calendar();
document.getElementById("date3").innerHTML = c;

//how long since 20110224
const d = moment("20110224", "YYYYMMDD").fromNow();
document.getElementById("date4").innerHTML = d;

//how many hours ago since this this day started
const e = moment().startOf('day').fromNow();
document.getElementById("date5").innerHTML = e;

//how many hours until a new day starts
const f = moment().endOf('day').fromNow();
document.getElementById("date6").innerHTML = f;

//how many days in February
const g = moment("2012-02", "YYYY-MM").daysInMonth();
document.getElementById("date7").innerHTML = g;

//weekdays
const i = moment.weekdays();
document.getElementById("date8").innerHTML = i;
