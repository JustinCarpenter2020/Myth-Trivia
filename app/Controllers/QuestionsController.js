import { ProxyState } from "../AppState.js";
import {questionsService} from "../Services/QuestionsService.js";

function _drawQuestions(){
  let template = ""
  const questions = ProxyState.questions
  questions.forEach(q => template += q.Template)
  document.getElementById("app").innerHTML = template
}
function _drawNext() {

  // @ts-ignore
  document.getElementById("next").disabled = ProxyState.next.length >= 10
}
function _drawAnswer(){
  document.getElementById("reveal").hidden = true
  document.getElementById("answer").hidden = false 
}

export default class QuestionController{
  constructor(){
    ProxyState.on('questions', _drawQuestions)
    ProxyState.on('next', _drawNext)
    ProxyState.on('reveal', _drawAnswer)
    questionsService.getQuestions('');
  }
  next() {
    questionsService.getQuestions(ProxyState.next)
  }
  reveal() {
    _drawAnswer()
  }
}