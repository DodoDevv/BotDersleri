const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
const config = require('./config.json')

  client.commands = new Discord.Collection()
  const komutlar = fs.readdirSync('./komutlar').filter(file => file.endsWith('.js'))

client.on('ready', () => {
  var lol = "Hazırım ve giriş yaptım"
  console.log(lol)
})

    // Discord JS - Command Handler (2021) [Bölüm #2] \\

    for(const file of komutlar) {
      const cmd = require(`./komutlar/${file}`)
      client.commands.set(cmd.name, cmd)
    }

client.on('message', msg => {
  const prefix = config.prefix
  if(msg.author.bot || !msg.content.startsWith(prefix)) return;
  
  const args = msg.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase()

  if(!cmd) return msg.channel.send('Öyle bir komut yok!')

  try{
    client.commands.get(cmd).execute(client, msg, args)
  }catch(e){
    console.log(e)
  }
})

client.login(config.token)
