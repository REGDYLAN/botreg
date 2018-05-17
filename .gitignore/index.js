/* Inclure - BOT REGDYLAN */

const discord = require("discord.js");

/* Variables - BOT REGDYLAN */

const clientDiscord = new discord.Client();
const PREFIX = "@";

/* Evenement - BOT REGDYLAN */

clientDiscord.on("ready", () => {
    console.log("Prêt à travailler!");
    //clientDiscord.channels.get("415567638530490378").send("Bot allumé!");
});

clientDiscord.on("message", message => {
    if(message.content[0] === PREFIX) {
        let spliteMessage = message.content.split(' '); 
        if(spliteMessage[0] === "@hello") {
            //message.reply("Bonjour! Comment tu vas?");
            message.channel.send("Bonjour! Comment tu vas?");
            //clientDiscord.channels.get("415567638530490378").send("Commande exécuté par: " + message.author.username);
        }
        else if(spliteMessage[0] === "@commande") {
            if(spliteMessage.length === 2) {
                message.channel.send("Le paramètre: " + spliteMessage[1]);
            }
            else
                message.reply("Problème dans les paramètres");
        }
        else if(spliteMessage[0] === "@markdown") {
            message.channel.send(
`**Coucou**, c'est *moi*! ***Le bot REGDYLAN***

~~Coucou!~~
 __kikou__
`);
            message.channel.send("`Code`");
        }

        else if(message.content === "@rich1") {
            message.channel.send({embed: {
                color: 3447003,
                description: 'Salut moi c est le Bot!'
            }});

        }
    }
});

clientDiscord.on("guildMemberAdd", member => {
    member.createDM().then(channel => {
        return channel.send("Bienvenue sur DestinyLife " + member.displayName);
    }).catch(console.error);

})

/* Connexion - BOT REGDYLAN */

clientDiscord.login(process.ENV.token);
