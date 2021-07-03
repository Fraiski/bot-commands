//Adapt to client or bot, depending on what you have put (const client = new Discord.Client() or const bot = new Discord.Client())

const start = process.hrtime();
const diff = process.hrtime(start);

const capil = `Client : **${(Math.round(diff[0] *10) + (diff[1] / 100)).toFixed(2)}ms**
\nAPI Latency : **${Math.round(client.ws.ping).toFixed(2)}ms**`

const embed = new Discord.MessageEmbed()
.setColor('DARK_PURPLE')
.setTitle(`Pong !`)
.setDescription(capil)
.setFooter(`Source: Fraiski Github`, client.user.displayAvatarURL())
.setTimestamp()

message.channel.send(embed)