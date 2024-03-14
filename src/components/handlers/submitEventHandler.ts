import { el } from '../app/domElements'
import { compareNodes } from '../helpers/compareNodes'
import { correctAnswerHandler } from './correctAnswerHandler'
import { falseAnswerHandler } from './falseAnswerHandler'
import { triggerEnterButtonAnimation } from '../helpers/triggerEnterButtonAnimation'

function submitEventHandler(e: Event, rightAnswer: Element[]): void {
  e.preventDefault()
  triggerEnterButtonAnimation()

  let userAnswer: Element[]

  try {
    userAnswer = Array.from(
      el.appTableContainer.querySelectorAll(el.input.value)
    )
  } catch {
    userAnswer = []
  }

  const result = compareNodes(userAnswer, rightAnswer)

  if (result) correctAnswerHandler(userAnswer)
  else if (!result) falseAnswerHandler(userAnswer)

  // console.log(`user's input: ${input.value}`)
  // console.log(userAnswer)
  // console.log(rightAnswer)
  // console.log(result)
}

export { submitEventHandler }
