
// @ts-ignore
export const api = axios.create({
  // NOTE insure the casing of URL is all caps
  baseURL: 'https://opentdb.com/api.php?amount=1&category=20&difficulty=easy&type=multiple'
})