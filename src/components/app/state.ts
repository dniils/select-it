import levels from './levels'

const levelsAvailable: string[] = Object.keys(levels)
const levelsAmount: number = levelsAvailable.length

let lvl: number
let levelsCompleted: number[] = []
let levelsCompletedWithHelp: number[] = []
let gameHasBeenWon = false
let finalMsgClicked = false
const helpUsed = false

const storedLevel = Number(localStorage.getItem('level'))
const storedLevelsCompleted: string | null =
  localStorage.getItem('levels-completed')
const storedLevelsCompletedWithHelp: string | null = localStorage.getItem(
  'levels-completed-with-help'
)

if (storedLevel) lvl = storedLevel
else {
  lvl = 1
  localStorage.setItem('level', lvl.toString())
}

if (storedLevelsCompleted) levelsCompleted = JSON.parse(storedLevelsCompleted)
if (storedLevelsCompletedWithHelp)
  levelsCompletedWithHelp = JSON.parse(storedLevelsCompletedWithHelp)

if (levelsCompleted.length === levelsAvailable.length) {
  gameHasBeenWon = true
  finalMsgClicked = true
}

const state = {
  lvl: lvl,
  levelsAvailable: levelsAvailable,
  levelsAmount: levelsAmount,
  gameHasBeenWon: gameHasBeenWon,
  finalMsgClicked: finalMsgClicked,
  helpUsed: helpUsed,
  levelsCompleted: levelsCompleted,
  levelsCompletedWithHelp: levelsCompletedWithHelp,
}

export { state }
