import { el } from '../app/domElements'

function triggerEnterButtonAnimation(): void {
  el.enterButton.style.borderBottom = '0px'
  setTimeout(() => {
    el.enterButton.style.borderBottom = '2px solid var(--gray-100)'
  }, 50)
}

export { triggerEnterButtonAnimation }
