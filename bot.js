console.log('working');
import {online} from "./server.js";
import {} from 'dotenv/config'
import Discord from "discord.js";

// globalThis.fetch = fetch (if needed)

// I would strongly recommend moving to ESM. ESM can still import CommonJS packages, but CommonJS packages cannot import ESM packages synchronously.In the nearest parent package.json file, add the top-level "type" field with a value of "module". This will ensure that all .js and .mjs files are interpreted as ES modules. You can interpret individual files as CommonJS by using the .cjs extension.
/* require('dotenv').config();
   const fetch = require('node-fetch');
   const Discord = require('discord.js'); */

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
client.login(process.env.TOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
  console.log('🎉');
}

/*import {gotMessage} from './commands.js';
const commandHandler = gotMessage(); */
// import * as commandHandler from '/commands.js';
// const commandHandler = require("./commands");
import {commandHandler} from "./commands.js";
client.on('message', commandHandler);
