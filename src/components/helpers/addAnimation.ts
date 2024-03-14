function addAnimation(el: Element, animationClass: string): void {
  el.classList.add(animationClass)

  if (animationClass !== 'pulsate-animation')
    setTimeout(() => el.classList.remove(animationClass), 400)
}

export { addAnimation }
