import {LoremIpsum} from 'lorem-ipsum'
import shortid from 'shortid'

import {Note} from '@/models'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const capitalizeFirstLetter = (str: string) =>
  str[0].toUpperCase() + str.slice(1)

function makeNotes(data: Note[] = []): Note[] {
  for (let i = 0; i < 100; i++) {
    data.push({
      id: shortid.generate(),
      title: capitalizeFirstLetter(
        lorem.generateWords(Math.round(Math.random() * 10) + 2)
      ),
      body: capitalizeFirstLetter(
        lorem.generateSentences(Math.round(Math.random() * 3) + 1)
      )
    })
  }

  return data
}

const Notes = makeNotes()

export default Notes
