import { showCompletionMessage } from './showCompletionMessage'
import { goToNextLevel } from './goToNextLevel'
import { state as s } from '../app/state'

function checkGameWin(): void {
  if (
    !s.gameHasBeenWon &&
    s.levelsCompleted.length === s.levelsAvailable.length
  )
    showCompletionMessage()
  else goToNextLevel()
}

export { checkGameWin }
