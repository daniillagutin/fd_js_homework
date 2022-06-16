function guessNumber() {
  const randomNum = Math.floor(Math.random() * 10);
  console.log(randomNum);
  const guess = prompt("Please enter a number between 0 and 10");
  // console.log('Your guess is:' + guess);

  if (guess < randomNum) {
    window.alert("Your guess is too low");
  } else if (guess > randomNum) {
    window.alert("Your guess is too high");
  } else if (guess == randomNum) {
    window.alert("You guessed it. You win!!");
  } else {
    window.alert("Error");
  }
}
