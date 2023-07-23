let city
let distance
let message 
let tip

function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    message = "This one is on me!"
  }
  else if (400 < distance && distance < 2000) {
    message = "That will be twenty bucks."
  }
  else if (distance > 2000 && distance < 2500) {
    message = "I will gladly take your thirty bucks."
  }
  else if (distance > 2500) {
    message = "No can do."
  }
  else {
    message = "Ok, sounds good."
  }
  return message
}

function ternaryCheckCity(city){
if (city === 'NYC') {
  message = 'Ok, sounds good.'
}
else if (city !== 'NYC') {
  message = "No go."
}
return message
}


function switchOnCharmFromTip(tip){
  if (tip === 'generous') {
    message = "Thank you so much."
  }
  else if (tip === 'not as generous') {
    message = "Thank you."
  }
  else {
    message = "Bye."
  }
  return message
}

console.log(switchOnCharmFromTip("hi"))
