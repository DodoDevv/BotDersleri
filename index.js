const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
  var lol = "Hazırım ve giriş yaptım"
  console.log(lol)
})

client.on('message', msg => {
  if (msg.content === "ping") {
    msg.channel.send('Pong!')
  }
})

client.login(config.token)
