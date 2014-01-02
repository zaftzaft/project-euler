function isLeapYear(year){
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function ofDays(year, month){
  var d = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return month === 2 && isLeapYear(year) && 29 || d[month-1];
}

var day = 1;
var sundays = 0;

for(var y = 1900, m = 1;;m++){
  day += ofDays(y, m) - 18;
  if(day % 7 === 0){
    sundays++;
  }
  if(m === 12){
    if(y === 2000){
      break;
    }
    y++;
    m = 0;
  }
}
console.log(sundays);
