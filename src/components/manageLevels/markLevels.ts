import { el } from '../app/domElements'
import { state as s } from '../app/state'

function markLevels(): void {
  const lvlListItems = Array.from(
    el.sidebarLevels.childNodes
  ) as HTMLLIElement[]

  lvlListItems.forEach((l) => {
    if (l.textContent && s.levelsCompleted.includes(+l.textContent)) {
      l.style.color = 'greenyellow'
    } else if (
      l.textContent &&
      s.levelsCompletedWithHelp.includes(+l.textContent)
    ) {
      l.style.color = 'var(--yellow-100)'
    } else l.style.color = 'var(--blue-600)'
  })
}

export { markLevels }
