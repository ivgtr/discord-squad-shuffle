import Discord from 'discord.js'
import shuffle from './shuffle'

require('dotenv').config()

const client = new Discord.Client()

client.on('ready', () => {
  const { user } = client
  if (user) {
    console.log(`${user.username} でログインしています。`)
  }
})

client.on('message', async (message) => {
  // 自分の発言を無視
  if (message.author.bot) return

  if (message.content.startsWith('!t') && message.guild) {
    if (!message.mentions.members) return
    if (!message.member) return
    if (message.mentions.members.size <= 1) {
      const teams = Number(message.content.split(' ')[1] || 1)
      if (!message.mentions.members.size) {
        const { member } = message
        if (!member.voice.channel) {
          message.channel.send(
            '発言者はボイスチャンネルに参加するかメンションで指定してください'
          )
          return
        }
        const names = member.voice.channel.members.map((m) => m.displayName)
        shuffle(message, 'team', names, teams, 0)
      } else {
        const member = message.mentions.members.first()
        if (!member) return
        if (!member.voice.channel) return
        const names = member.voice.channel.members.map((m) => m.user.tag)
        shuffle(message, 'team', names, teams, 0)
      }
    } else {
      message.channel.send('メンバーは1人を指定してください')
    }
  }
  // if (!member.voice.channel) {
  //   channel.send(
  //     '発言者はボイスチャンネルに参加するかメンションで指定してください'
  //   )
  // }
  // const tags = member.voice.channel.members.map((m) => m.displayName)
  // message.channel.send(tags.join('\n'))
})

// client.on('message', async (message) => {
//   if (message.content.startsWith('!members') && message.guild) {
//     if (message.mentions.members.size !== 1)
//       return message.channel.send('メンバーを1人指定してください')
//     const member = message.mentions.members.first()
//     if (!member.voice.channel)
//       return message.channel.send(
//         '指定したメンバーがボイスチャンネルに参加していません'
//       )
//     const tags = member.voice.channel.members.map((member) => member.user.tag)
//     message.channel.send(tags.join('\n'))
//   }
// })

client.login(process.env.DISCORD_TOKEN)
