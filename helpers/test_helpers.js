let date = new Date();
let curDay = date.getDay();
let curHours = date.getHours();
let curMinutes = date.getMinutes();
let curSeconds = date.getSeconds();

let millisecondsBack = ( curHours * 60 * 60 * 1000) + (curMinutes * 60 * 1000) + (curSeconds * 1000);
if(filteringbyWeek){
  let daysElapsed = 0;
  while (curDay !== 1){
    curDay = (curDay === 0) ? 6 : curDay - 1;
    daysElapsed += 1;
  }
  millisecondsBack += daysElapsed * 24 * 60 * 60 * 1000;
}

// console.log(new Date( date.getTime() - millisecondsBack ).toDateString());
console.log(date.getTime() - millisecondsBack);
