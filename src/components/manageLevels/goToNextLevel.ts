import { state as s } from '../app/state'
import { renderLvl } from '../render/renderLevel'

function goToNextLevel(): void {
  const levelsRemaining = s.levelsAvailable
    .map(Number)
    .filter((level) => !s.levelsCompleted.includes(level))

  if (levelsRemaining.length) {
    const nextLevel = levelsRemaining.find((level) => level > s.lvl)
    s.lvl = nextLevel !== undefined ? nextLevel : levelsRemaining[0]
  } else {
    s.lvl = s.lvl < s.levelsAmount ? s.lvl + 1 : 1
  }

  localStorage.setItem('level', s.lvl.toString())

  renderLvl()
}

export { goToNextLevel }
