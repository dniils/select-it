import { el } from '../app/domElements'
import { state as s } from '../app/state'

function manageResetButtonAvailability(): void {
  if (s.levelsCompleted.length || s.levelsCompletedWithHelp.length)
    el.resetButton?.removeAttribute('disabled')
  else el.resetButton?.setAttribute('disabled', '')
}

export { manageResetButtonAvailability }
