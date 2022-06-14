import {LoremIpsum} from 'lorem-ipsum'
import shortid from 'shortid'

import {Book} from '@/models'

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

const capitalizeFirstLetter = (str: string) =>
  str[0].toUpperCase() + str.slice(1)

function makeBooks(data: Book[] = []): Book[] {
  for (let i = 0; i < 100; i++) {
    data.push({
      id: shortid.generate(),
      name: capitalizeFirstLetter(
        lorem.generateWords(Math.round(Math.random() * 10) + 2)
      )
    })
  }

  return data
}

export default makeBooks()
