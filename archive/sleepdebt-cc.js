function getSleepHours(day){
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday'){
    return 8;
  } else if (day === 'wednesday'){
    return 8;
  } else if (day === 'thursday'){
    return 8;
  } else if (day === 'friday'){
    return 8;
  } else if (day === 'saturday'){
    return 8;
  } else if (day === 'sunday'){
    return 8;
  }
}

function getActualSleepHours(){
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 
}

function getIdealSleepHours(){
  let idealHours = 9;
  return idealHours * 7;
}

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){
    console.log("You got the perfect amount of sleep this week!");
  } else if (actualSleepHours > idealSleepHours){
    console.log("You got more than the needed amount of sleep this week! It was " + (actualSleepHours - idealSleepHours) + " extra hours of sleep!");
  } else if (actualSleepHours < idealSleepHours){
    console.log("You got less than the needed amount of sleep this week! It was " + (idealSleepHours - actualSleepHours) + " hours less sleep!");
  }
}

console.log(getSleepHours('thursday'));
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
calculateSleepDebt()