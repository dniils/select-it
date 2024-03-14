import { el } from './domElements'
import { renderLvl } from '../render/renderLevel'
import { renderLvlsList } from '../render/renderLevelsList'
import { markLevels } from '../manageLevels/markLevels'
import { showSolution } from '../manageLevels/showSolution'
import { resetEventHandler } from '../handlers/resetEventHandler'

function init(): void {
  el.showSolutionButton?.addEventListener('click', () => showSolution())
  el.resetButton?.addEventListener('click', () => resetEventHandler())
  renderLvlsList()
  markLevels()
  renderLvl()
}

export { init }
