export default class Question{
  constructor({difficulty, question, correct_answer}){
    this.difficulty = difficulty
    this.question = question
    this.correctAnswer = correct_answer

  }


get Template(){
  return `
  <p class="text-center"> Difficulty: ${this.difficulty} </p>
  <h2> ${this.question} </h2>
  <div class="py-4"> <button type="button" class="btn btn-primary btn-lg" id="reveal" onclick="app.questionsController.reveal()"> Reveal Answer </button> </div>
  <h1 id="answer" hidden>-<b>${this.correctAnswer}</b> </h1>
  `
}
}