import Discord from 'discord.js'
import { action } from './random'

export const shuffle = (
  message: Discord.Message,
  type: string,
  names: string[],
  teams = 1,
  members = 1
): void => {
  if (type === 'team') {
    const shuffleNames = action(names)
    const teamLength = Math.floor(names.length / teams)
    const outputText: string[] = []
    if (!(names.length % teams) && teams > 0) {
      for (let i = 1; i <= teams; i += 1) {
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
            name: `${teamLength}人のチームを${teams}チーム作ります`
          },
          description: outputText.join('\n')
        }
      }
      message.channel.send(embed)
    } else {
      const spare = shuffleNames.splice(0, 1)[0]
      for (let i = 1; i <= teams; i += 1) {
        outputText.push(`${i}つ目のチーム`)
        for (let n = 1; n <= teamLength; n += 1) {
          const l = shuffleNames.splice(0, 1)[0]
          outputText.push(l)
        }
        outputText.push('')
      }

      outputText.push('余り')
      outputText.push(spare)
      outputText.push('')
      const embed = {
        embed: {
          color: 16757683,
          author: {
            name: `${teamLength}人のチームを${teams}チーム作ります`
          },
          description: outputText.join('\n')
        }
      }
      message.channel.send(embed)
    }
  }
}

export default shuffle
