import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionsService{

  async getQuestions(url){
    let res = await api.get(url)
    ProxyState.questions = res.data.results.map(q => new Question(q))
    ProxyState.next = res.data.next || ''
  }
}


export const questionsService = new QuestionsService