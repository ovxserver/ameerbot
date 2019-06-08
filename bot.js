const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});


const prefixac = 'me!';
client.on('message', message => {
 let rebel = message.content.split(` `).slice(1).join(' ');
if(message.author.id !== '420655491794862094') return ;
if (message.content.startsWith(prefixac + 'setp')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}setp Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel,{ type: 'PLAYING' });
message.channel.send("**تـــ تغيير الحالة ــم**");} 
if (message.content.startsWith(prefixac + 'setl')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}setl Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel, { type: 'LISTENING' });
message.channel.send("**تـــ تغيير الحالة ــم**");}
if (message.content.startsWith(prefixac + 'sets')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}sets Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel, { type: 'STREAMING', url:'https://twitch.tv/rebel711' });
message.channel.send("**تـــ تغيير الحالة ــم**");}     
if (message.content.startsWith(prefixac + 'setw')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}setw Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel, { type: 'WATCHING' });
message.channel.send("**تـــ تغيير الحالة ــم**");}
if (message.content.startsWith(prefixac + 'say')) {
message.delete();
if(!rebel) return message.channel.send(`**ex ? ${prefixac}say Hi everyone**`).then(m => m.delete(3000));
const embed = new Discord.RichEmbed()
.setColor("RANDOM").setDescription(rebel);
message.channel.send(embed)}
if (message.content.startsWith(prefixac + 'avatar')) {
var rebel2 = message.mentions.users.first() || message.author;
const embed = new Discord.RichEmbed().setColor("RANDOM").setImage(`${rebel2.avatarURL}`);
message.channel.send(embed);}
if (message.content.startsWith(prefixac + 'server')) {
    if(!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 سيـرفر ايــدي**", "**"+message.guild.id+"**",true)
    .addField("**👑 سيــرفر اونـر**", "**"+message.guild.owner+"**" ,true)
    .addField("**✅ الشــات الاســاســي**" , "**"+message.guild.DefaultChannel+"**" ,true)
    .addField("**🌍 المـوقع**" , "**"+message.guild.region+"**",true)
    .addField('**💬 عدد الرومــات الكتابيــة**',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
    .addField("**📣 عدد الرومــات الصوتــية**", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
    .addField("**🤔 عدد ايــام انشــاء السيــرفر**", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
    .addField("**👔 الــرتــب**",`**[${message.guild.roles.size}]** Role `,true)
    .addField("**💠 مســتوى حمــاية الســيرفر**", ` ** [ ${verificationLevels[message.guild.verificationLevel]} ] ** `,true)
    
    .addField("👥عدد الاعضــاء",`
    **${message.guild.memberCount}**`)
    .setThumbnail(message.guild.iconURL)
    .setColor('RANDOM')
    message.channel.sendEmbed(embed)
if (message.content === `${prefixac}help`) {
message.delete();
const embed = new Discord.RichEmbed().setColor("RANDOM").setDescription(`**
${prefixac}setp ⇏ لتغيير حالتك إلى \`PLAYING\`
ex ? ${prefixac}setp Hi
${prefixac}setl ⇏ لتغيير حالتك إلى \`LISTENING\`
ex ? ${prefixac}setl Hi
${prefixac}sets ⇏ لتغيير حالتك إلى \`STREAMING\`
ex ? ${prefixac}sets Hi
${prefixac}setw ⇏ لتغيير حالتك إلى \`WATCHING\`
ex ? ${prefixac}setw Hi
${prefixac}embed ⇏ لتكرار كلامك بأمبيد
ex ? ${prefixac}say Hi everyone
${prefixac}avatar ⇏ لعرض صورتك أو صورة أي شخص تمنشنه
ex ? ${prefixac}avatar @rebel
**`);
message.channel.sendEmbed(embed).then(m => m.delete(17000));}
});


client.login(process.env.TOKEN);// لا تغير فيها شيء 

