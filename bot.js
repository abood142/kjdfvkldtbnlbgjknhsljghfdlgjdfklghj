const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`| Best|Day |`,"https://www.twitch.tv/NICKMERCS")
});
client.on('ready', () => {
    client.user.setStatus(" online");
 
 });
 
 
 client.on('message', message => {
if (message.content.split(' ')[0] == '*bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});


client.on("message", message => {
    var prefix = "*";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
                            let embed4 = new Discord.RichEmbed()
             .setDescription("**:white_check_mark: | جاري ارسال البرودكاست**")
           .addField("مرسل البرودكاست" , message.author)
          .addField("نص البرودكاست" ,args.join("  "))
                            .addField("عدد الاعضاء المرسل لهم :busts_in_silhouette:" ,` **[${message.guild.memberCount}]**`,true)
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            
                          }
});
   client.on('message', message => {
	var prefix = "*";
    if (message.content.startsWith(prefix + 'امسح')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك صلاحيات :<`).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``تم مسح الشات بنجاح``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });
client.login(process.env.BOT_TOKEN);
