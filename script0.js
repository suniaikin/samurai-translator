const word0 = "Whats Up?";
const word0translation = "Привет";

const word1 = "Bye";
const word1translation = "Пока";

const word2 = "Programmer";
const word2translation = "Программист";

const wordsCount = 3;

const finishSuccessMessage = "Отлично! Хороший результат.";
const finishUnsuccessMessage = "Бестолочь, попробуй еще раз!";

let correctAnswerCount = 0;
const correctAnswersMinimumPercent = 50

//-----------------------

const userAnswer0 = prompt(word0) // 0
if (userAnswer0 === word0translation) {
    correctAnswerCount++;
	document.write ("Верно!")
} else {
	document.write("Бестолочь!");
}

const userAnswer1 = prompt(word1) // 0
if (userAnswer1 === word1translation) {
    correctAnswerCount++;
	document.write ("Верно!")
} else {
	document.write("Бестолочь!");
}

const userAnswer2 = prompt(word2) // 0
if (userAnswer2 === word2translation) {
    correctAnswerCount++;
	document.write ("Верно!")
} else {
	document.write("Бестолочь!");
}

const userCorrectAnswerPercent = 100

if (correctAnswerCount/wordsCount*userCorrectAnswerPercent > correctAnswersMinimumPercent) {
	document.write("<br>", finishSuccessMessage)
}  else {
	document.write("<br>", finishUnsuccessMessage)
}
