import { state as s } from '../app/state'
import { markLevels } from '../manageLevels/markLevels'
import { addAnimation } from '../helpers/addAnimation'
import { checkGameWin } from '../manageLevels/checkGameWin'
import { el } from '../app/domElements'

function correctAnswerHandler(userAnsw: Element[]): void {
  el.input.disabled = true

  if (!s.levelsCompleted.includes(s.lvl)) {
    if (s.helpUsed) {
      s.levelsCompletedWithHelp.push(s.lvl)
      localStorage.setItem(
        'levels-completed-with-help',
        JSON.stringify(s.levelsCompletedWithHelp)
      )
    } else {
      s.levelsCompleted.push(s.lvl)
      localStorage.setItem(
        'levels-completed',
        JSON.stringify(s.levelsCompleted)
      )
    }
  }

  markLevels()

  userAnsw.forEach((el) => addAnimation(el, 'correct-choice-animation'))

  setTimeout(() => {
    checkGameWin()
  }, 400)
}

export { correctAnswerHandler }
