module.exports = {
  name: 'ping',
  description: 'Botun gecikmesini gösteren komut.',
  execute(client, msg, args) {
    msg.reply(`:ping_pong: Pong!
    Pingim: **${client.ws.ping}ms**`)
  }
}
