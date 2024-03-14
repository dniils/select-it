import { state as s } from '../app/state'
import levels from '../app/levels'
import { el } from '../app/domElements'

function showSolution(): void {
  el.input.value = ''

  const correctAnswer = levels[s.lvl].answer.join(', ')
  let currentIndex = 0

  const intervalId = setInterval(() => {
    el.input.value += correctAnswer[currentIndex]
    currentIndex++

    if (currentIndex === correctAnswer.length) {
      clearInterval(intervalId)
      el.input.disabled = false
      el.input.focus()
      el.showSolutionButton?.removeAttribute('disabled')
    }
  }, 50)

  el.input.blur()
  el.input.disabled = true
  el.showSolutionButton?.setAttribute('disabled', '')
  s.helpUsed = true
}

export { showSolution }
