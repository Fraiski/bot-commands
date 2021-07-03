let mention = message.mentions.users.first();

let embed1 = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(`Your avatar`)
.setImage(message.author.displayAvatarURL({dynamic: true, size: 512 }))
.setFooter(`Source: Fraiski Github`, client.user.displayAvatarURL())
.setTimestamp()

let embed2 = new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(`Here is ${mention.username} avatar`)
.setImage(mention.displayAvatarURL({dynamic: true, size: 512 }))
.setFooter(`Source: Fraiski Github`, client.user.displayAvatarURL())
.setTimestamp()

if (!mention) return message.channel.send(embed1);
if (mention) return message.channel.send(embed2);