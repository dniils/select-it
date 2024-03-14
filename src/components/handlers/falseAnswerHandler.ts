import { addAnimation } from '../helpers/addAnimation'
import { el } from '../app/domElements'

function falseAnswerHandler(userAnsw: Element[]): void {
  userAnsw.forEach((el) => addAnimation(el, 'wrong-answer-animation'))

  if (userAnsw.length === 0)
    addAnimation(el.appWorkspace, 'wrong-answer-animation')

  el.input.focus()
}

export { falseAnswerHandler }
