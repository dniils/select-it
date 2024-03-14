interface Level {
  html: string
  task: string
  answer: string[]
}

const levels: Record<number, Level> = {
  1: {
    html: '<div class="table">\n<plate></plate>\n<plate></plate>\n</div>',
    task: 'Select the plates',
    answer: ['plate'],
  },
  2: {
    html: '<div class="table">\n<apple></apple>\n<plate>\n<apple></apple>\n</plate>\n</div>',
    task: 'Select apple on the plate',
    answer: ['plate apple'],
  },
  3: {
    html: '<div class="table">\n<plate></plate>\n<plate></plate>\n<plate class="small"></plate>\n<plate></plate>\n</div>',
    task: 'Select the small plate',
    answer: ['plate.small'],
  },
  4: {
    html: '<div class="table">\n<plate class="small"></plate>\n<plate>\n<orange></orange>\n</plate>\n<orange class="small"></orange>\n</div>',
    task: 'Select the small plate and the orange on the plate',
    answer: ['plate.small', 'plate orange'],
  },
  5: {
    html: '<div class="table">\n<plate>\n<orange></orange>\n</plate>\n<apple></apple>\n<plate>\n<orange></orange>\n</plate>\n<plate>\n<apple></apple>\n</plate>\n<orange></orange>\n</div>',
    task: 'Select fruits on the plates',
    answer: ['plate *'],
  },
  6: {
    html: '<div class="table">\n<orange class="small"></orange>\n<orange></orange>\n<plate></plate>\n<orange class="small"></orange>\n<apple class="small"></apple>\n<orange></orange>\n</div>',
    task: 'Select the orange right after the plate',
    answer: ['plate + orange'],
  },
  7: {
    html: '<div class="table">\n<plate></plate>\n<plate class="small"></plate>\n<plate></plate>\n<plate></plate>\n<plate class="small"></plate>\n</div>',
    task: 'Select the last plate',
    answer: ['plate:last-child'],
  },
  8: {
    html: '<div class="table">\n<apple></apple>\n<apple class="small"></apple>\n<apple></apple>\n<apple></apple>\n<apple class="small"></apple>\n</div>',
    task: 'Select the third apple',
    answer: ['apple:nth-child(3)'],
  },
  9: {
    html: '<div class="table">\n<orange class="small"></orange>\n<orange></orange>\n<orange></orange>\n<orange class="small"></orange>\n<orange class="small"></orange>\n<orange></orange>\n<orange></orange>\n</div>',
    task: 'Select every 3rd orange starting from the 1st',
    answer: ['orange:nth-child(3n+1)'],
  },
  10: {
    html: '<div class="table">\n<apple class=small></apple>\n<plate>\n<orange></orange>\n</plate>\n<orange></orange>\n<orange class="small"></orange>\n<apple></apple>\n</div>',
    task: 'Select the fruits that are not on the plate',
    answer: ['.table > orange', '.table > apple'],
  },
  11: {
    html: '<div class="table">\n<plate class="small">\n<orange></orange>\n</plate>\n<plate class="small">\n<apple class=small></apple>\n</plate>\n<plate class="small">\n<orange class="small"></orange>\n</plate>\n<plate>\n<apple></apple>\n</plate>\n</div>',
    task: 'Select everything that is on a plate except the small apple',
    answer: ['plate *:not(apple.small)'],
  },
}

export default levels
