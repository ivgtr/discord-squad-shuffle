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

  if (
    (message.content.startsWith('!t') && message.guild) ||
    (message.content.startsWith('!m') && message.guild)
  ) {
    if (!message.mentions.members) return
    if (!message.member) return
    if (message.mentions.members.size <= 1) {
      const start = message.content.split(' ')[0] || 'error'
      const num = Number(message.content.split(' ')[1] || 1)
      let pattern: string
      switch (start) {
        case '!t':
          pattern = 'team'
          break
        case '!m':
          pattern = 'member'
          break
        default:
          pattern = 'error'
          break
      }
      if (!message.mentions.members.size) {
        const { member } = message
        if (!member.voice.channel) {
          message.channel.send(
            '発言者はボイスチャンネルに参加するかメンションで指定してください'
          )
          return
        }
        const names = member.voice.channel.members.map((m) => m.displayName)
        shuffle(message, pattern, names, num)
      } else {
        const member = message.mentions.members.first()
        if (!member) return
        if (!member.voice.channel) return
        const names = member.voice.channel.members.map((m) => m.user.tag)
        shuffle(message, pattern, names, num)
      }
    } else {
      message.channel.send('メンバーは1人を指定してください')
    }
  }
})

client.login(process.env.DISCORD_TOKEN)
