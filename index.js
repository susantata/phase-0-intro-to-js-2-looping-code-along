function writeCards(name, event) {
  let newArray =[]
  for (let i=0; i < name.length; i++) {
    newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
  return newArray;  
}
function countDown () {
  let countDown = 0;
  while (countDown < 11) {
    console.log(countDown++);
  }
}
