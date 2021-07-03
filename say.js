let tosay = args.join(" ");

if (!tosay) return message.channel.send(`Please enter an arguments!`);

message.channel.send(tosay);