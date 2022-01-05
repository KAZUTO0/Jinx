
// import fetch from "node-fetch";
// let prefix = "luv";


import {chat} from "./commands/chat.js";
import {gif} from "./commands/gif.js";
import {img} from "./commands/images.js";

const commands = {chat, gif, img};

export async function commandHandler(msg) {
    let tokens = msg.cleanContent.split(" ");
    let command = tokens.shift();

    if (command.charAt(0) === "!") {
      command = command.substring(1);
      commands[command](msg, tokens);
    }
  }