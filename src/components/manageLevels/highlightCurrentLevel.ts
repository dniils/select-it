import { el } from '../app/domElements'
import { state as s } from '../app/state'

function highlightCurrentLevel(): void {
  const lvlListItems = Array.from(
    el.sidebarLevels.childNodes
  ) as HTMLLIElement[]
  lvlListItems.forEach((l) => {
    l.classList.remove('sidebar__level_current')
    if (l.textContent && +l.textContent === s.lvl)
      l.classList.add('sidebar__level_current')
  })
}

export { highlightCurrentLevel }
