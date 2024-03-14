import { el } from '../app/domElements'
import { state as s } from '../app/state'
import { renderLvl } from './renderLevel'

function renderLvlsList(): void {
  const lvls = s.levelsAvailable

  if (el.sidebarLevels.childNodes.length === 0)
    lvls.forEach((l) => {
      const lvlListItem = document.createElement('li')
      lvlListItem.classList.add('sidebar__level')
      lvlListItem.textContent = l
      el.sidebarLevels.appendChild(lvlListItem)
      lvlListItem.addEventListener('click', () => {
        s.lvl = +l
        renderLvl()
      })
    })
}

export { renderLvlsList }
