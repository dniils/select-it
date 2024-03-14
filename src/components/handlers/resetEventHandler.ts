import { state as s } from '../app/state'
import { manageResetButtonAvailability } from '../manageLevels/manageResetButtonAvailability'
import { markLevels } from '../manageLevels/markLevels'
import { renderLvl } from '../render/renderLevel'

function resetEventHandler(): void {
  s.lvl = 1
  s.levelsCompleted = []
  s.levelsCompletedWithHelp = []
  s.gameHasBeenWon = false
  s.finalMsgClicked = false
  localStorage.setItem('level', s.lvl.toString())
  localStorage.removeItem('levels-completed')
  localStorage.removeItem('levels-completed-with-help')
  manageResetButtonAvailability()
  markLevels()
  renderLvl()
}

export { resetEventHandler }
