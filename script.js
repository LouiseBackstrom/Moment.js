//language, Swedish
moment.locale("sv");

//Todays date
const a = moment().format('LLLL'); 
document.getElementById("date1").innerHTML = a;

//add 3 days
const b = moment().add(3, 'days').calendar();
document.getElementById("date2").innerHTML = b;