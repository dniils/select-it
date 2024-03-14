const el = {
  appWorkspace: document.querySelector('.app__workspace') as HTMLDivElement,
  appTask: document.querySelector('.app__task') as HTMLHeadingElement,
  appTableContainer: document.querySelector(
    '.app__table-container'
  ) as HTMLDivElement,
  appEditor: document.querySelector('.app__editor') as HTMLFormElement,
  appHtmlView: document.querySelector('.app__html-view') as HTMLPreElement,
  input: document.querySelector('.app__input') as HTMLInputElement,
  completionMessage: document.querySelector(
    '.completion-message-overlay'
  ) as HTMLDivElement,
  completionMessageEmoji: document.querySelector(
    '.completion-message__emoji'
  ) as HTMLDivElement,
  sidebarLevels: document.querySelector('.sidebar__levels') as HTMLUListElement,
  resetButton: document.querySelector('.sidebar__btn') as HTMLButtonElement,
  showSolutionButton: document.querySelector('.app__btn') as HTMLButtonElement,
  enterButton: document.querySelector('.app__btn-enter') as HTMLButtonElement,
}

export { el }
