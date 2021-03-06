//Saurien is a easy usage discord bot
//This file updated in 05.06.2020
//by Radiaction

const Discord = require('discord.js');

exports.run = (Saurien, message, params) => {

	if (!message.guild) {
    const warning = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Warning :warning:', 'You can not use the command `serverInfo` in private messages')
    return message.author.sendEmbed(warning); }
    if (message.channel.type !== 'dm') {
      const server = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Server name:', message.guild.name)
    .addField('Server ID:', message.guild.id)
    .addField('Server area:', message.guild.region)
    .addField('Number of members:', message.guild.memberCount)
    .addField('Owner:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Number of channels:', message.guild.channels.size)
    .addField('Creation date:', message.guild.createdAt)
	console.log("serverInfo Commands Used By" + message.author.username)
    return message.channel.send(server);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'serverInfo'
};
