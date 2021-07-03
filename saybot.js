if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Sorry, you don't have permissions!`);
//You can change the permissions !

let tosay = args.join(" ");

if (!tosay) return message.channel.send(`Please enter an arguments!`);

message.channel.send(tosay);