const djs = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const SlashCMD = require('./functions/slashcommands');
const fs = require('fs');
const client = new djs.Client({
    intents: [
        'Guilds',
        'GuildMembers',
        'GuildBans',
        'GuildEmojisAndStickers',
        'GuildIntegrations',
        'GuildWebhooks',
        'GuildInvites',
        'GuildVoiceStates',
        'GuildPresences',
        'GuildMessages',
        'MessageContent',
        'GuildScheduledEvents',
        'AutoModerationConfiguration',
        'AutoModerationExecution',
    ]
});
const slash = new SlashCMD(REST, Routes, client, djs.Collection, fs);
const token = "OTg5MDczOTAxNTIwODI2NDE4.Gjdadm._KUkswNgodLRr6OnzIqT7c7JuaL04mWaTmE3jc";
const Id = "989073901520826418";

client.on('ready', async () => {
    console.log('[ERUHLU]: Bot Hazır!');
    client.user.setPresence({
        activities: [
            {
                name: `Ghost Development tarafından yapıldı.`,
                type: "WATCHING"
            }
        ],
        status: "idle"
    });
});

slash.apply(token, Id);
  
client.on('interactionCreate', async (interaction) => {
    const cmdz = client.commands.get(interaction.commandName);
    return cmdz.exe(client, interaction);
});

client.login(token);