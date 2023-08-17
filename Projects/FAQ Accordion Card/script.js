let questions = document.querySelectorAll('.question-container');

questions.forEach(element => {
  element.addEventListener('click', () => {
    resetAnswers();
    showAnswer(element);
  })
})

function showAnswer(question){
  question.querySelector('.question img').classList.add('question-img__reverse');
  question.querySelector('.answer').classList.add('answer-visible');
}

function resetAnswers(){
  questions.forEach(element => {
    element.querySelector('.question img').classList.remove('question-img__reverse');
    element.querySelector('.answer').classList.remove('answer-visible');
  })
}