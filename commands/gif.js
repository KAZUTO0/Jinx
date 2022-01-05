import fetch from "node-fetch";

export async function gif(msg, args) {
    let keywords = "kitten";
    if (args.length > 0) {
        keywords = args.join(' ');
      }
  
      let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${secrets.TENOR}&contentfilter=off`;
      let response = await fetch(url);
      let json = await response.json();
      const index = Math.floor(Math.random() * json.results.length);
      msg.reply(json.results[index].url);
}
