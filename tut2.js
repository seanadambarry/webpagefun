"use strict";

let user = {
    name: prompt('What is your name?'),
    yearBorn : prompt('What year were you born?'),
    age : 0,
};

const currentYear = 2020;
user.age = currentYear - user.yearBorn;
alert(user.age);
alert(`Hello ${user.name}, you are ${user.age} years old!`);

let whatKnow = prompt(`What would you like to know about ${user.name}?`, "name or age");

if (whatKnow == 'name' || whatKnow == 'age') {
    alert( user[whatKnow]);
} else {
    alert('no specific detail found');
}
