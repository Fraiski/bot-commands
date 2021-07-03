let tosay = args.join(" ");

if (!tosay) return message.channel.send(`Please enter an arguments!`);

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setDescription(tosay)

message.channel.send(embed);