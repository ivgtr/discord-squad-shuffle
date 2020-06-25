import Discord from 'discord.js'
import { action } from './random'

export const shuffle = (
  message: Discord.Message,
  type: string,
  names: string[],
  num = 1,
  members = 1
): void => {
  if (type === 'team') {
    const shuffleNames = action(names)
    const teamLength = Math.floor(names.length / num)
    const outputText: string[] = []
    if (!(names.length % num) && num > 0) {
      for (let i = 1; i <= num; i += 1) {
        outputText.push(`${i}つ目のチーム`)
        for (let n = 1; n <= teamLength; n += 1) {
          const l = shuffleNames.splice(0, 1)[0]
          outputText.push(l)
        }
        outputText.push('')
      }

      const embed = {
        embed: {
          color: 16757683,
          author: {
            name: `${num}チームを作ります`
          },
          description: outputText.join('\n')
        }
      }
      message.channel.send(embed)
    } else {
      const spare = names.length - teamLength * num
      const spareArray: string[] = []
      for (let i = 1; i <= spare; i += 1) {
        spareArray.push(shuffleNames.splice(0, 1)[0])
      }
      for (let i = 1; i <= num; i += 1) {
        outputText.push(`${i}つ目のチーム`)
        for (let n = 1; n <= teamLength; n += 1) {
          const l = shuffleNames.splice(0, 1)[0]
          outputText.push(l)
        }
        outputText.push('')
      }

      outputText.push('余り')
      for (let i = 0; i < spareArray.length; i += 1) {
        outputText.push(spareArray[i])
      }
      outputText.push('')
      const embed = {
        embed: {
          color: 16757683,
          author: {
            name: `${teamLength}人のチームを${num}チーム作ります`
          },
          description: outputText.join('\n')
        }
      }
      message.channel.send(embed)
    }
  } else if (type === 'member') {
    const shuffleNames = action(names)
    const teamLength = Math.floor(names.length / num)
    const outputText: string[] = []
    if (!(names.length % num) && num > 0) {
      for (let i = 1; i <= teamLength; i += 1) {
        outputText.push(`${i}つ目のチーム`)
        for (let n = 1; n <= num; n += 1) {
          const l = shuffleNames.splice(0, 1)[0]
          outputText.push(l)
        }
        outputText.push('')
      }

      const embed = {
        embed: {
          color: 16757683,
          author: {
            name: `${num}人のチームを${teamLength}チーム作ります`
          },
          description: outputText.join('\n')
        }
      }
      message.channel.send(embed)
    } else {
      const spare = names.length - teamLength * num
      const spareArray: string[] = []
      for (let i = 1; i <= spare; i += 1) {
        spareArray.push(shuffleNames.splice(0, 1)[0])
      }

      for (let i = 1; i <= teamLength; i += 1) {
        outputText.push(`${i}つ目のチーム`)
        for (let n = 1; n <= num; n += 1) {
          const l = shuffleNames.splice(0, 1)[0]
          outputText.push(l)
        }
        outputText.push('')
      }

      outputText.push('余り')
      for (let i = 0; i < spareArray.length; i += 1) {
        outputText.push(spareArray[i])
      }
      outputText.push('')
      const embed = {
        embed: {
          color: 16757683,
          author: {
            name: `${num}人のチームを${teamLength}チーム作ります`
          },
          description: outputText.join('\n')
        }
      }
      message.channel.send(embed)
    }
  }
}

export default shuffle
