import { el } from '../app/domElements'
import { state as s } from '../app/state'
import { addAnimation } from '../helpers/addAnimation'
import { submitEventHandler } from '../handlers/submitEventHandler'
import { highlightCurrentLevel } from '../manageLevels/highlightCurrentLevel'
import { manageResetButtonAvailability } from '../manageLevels/manageResetButtonAvailability'
import levels from '../app/levels'

function renderLvl(): void {
  highlightCurrentLevel()
  manageResetButtonAvailability()
  el.input.value = ''
  el.appTask.textContent = levels[s.lvl].task
  el.appTableContainer.innerHTML = levels[s.lvl].html
  el.appHtmlView.textContent = levels[s.lvl].html
  s.helpUsed = false
  el.input.disabled = false

  localStorage.setItem('level', s.lvl.toString())

  // Control focus on input
  if (s.gameHasBeenWon) s.finalMsgClicked ? el.input.focus() : el.input.blur()
  else el.input.focus()

  const correctAnswer = Array.from(
    levels[s.lvl].answer.map((s) =>
      Array.from(el.appTableContainer.querySelectorAll(s))
    )
  ).flat()

  correctAnswer.forEach((el) => addAnimation(el, 'pulsate-animation'))

  el.appEditor.addEventListener('submit', (e) =>
    submitEventHandler(e, correctAnswer)
  )
}

export { renderLvl }
