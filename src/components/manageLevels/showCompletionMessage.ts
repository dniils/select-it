import { el } from '../app/domElements'
import { state as s } from '../app/state'
import { addAnimation } from '../helpers/addAnimation'
import { renderLvl } from '../render/renderLevel'

function showCompletionMessage(): void {
  el.input.blur()

  el.completionMessage.style.transform = 'translateY(0)'
  addAnimation(el.completionMessageEmoji, 'pulsate-animation')

  el.completionMessage.addEventListener('click', () => {
    el.completionMessage.style.transform = 'translateY(-100%)'
    // lvl = 1
    s.finalMsgClicked = true
    renderLvl()
  })

  s.gameHasBeenWon = true
}

export { showCompletionMessage }
