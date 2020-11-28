require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();

String.prototype.equalsIgnoreCase = function (compareString) {
    return this.toUpperCase() === compareString.toUpperCase();
};

client.on('message', (message) => {
    if (message.author.bot) return;
    console.log(`[${message.author.tag}]: ${message.content}`);

    if (message.content.equalsIgnoreCase("imran hensem?")){
        message.channel.send('benar!');
    }

    if (message.content.equalsIgnoreCase("woi bot!")){
        return message.reply('mende yal');
    }
});

client.login(process.env.BOT_TOKEN);
