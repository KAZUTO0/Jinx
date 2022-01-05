import fetch from "node-fetch";
// import { createApi } from 'unsplash-js';
// import url from 'url';

export async function img(msg, args) {
    let url = `https://api.unsplash.com/photos/?client_id=${secrets.UNSPLASH}`;
    let response = await fetch(url);
    let json = await response.json();
    const index = Math.floor(Math.random() * Object.keys(json).length);
    let replymsg = json[index].urls.regular;
    msg.reply(replymsg);


    // step 2
    // const api = createApi({ accessKey: `${process.env.UNSPLASH}` });
    // let url = `https://api.unsplash.com`;
    // // unsplash.photos.get({ photoId: 'foo' }).then(result => {
    // //   switch (result.type) {
    // //     case 'error':
    // //       console.log('error occurred: ', result.errors[0]);
    // //     case 'success':
    // //       const photo = result.response;
    // //       console.log(photo);
    // //   }
    // // });
    // let pic = unsplash.search.getPhotos({
    //   query: 'cat',
    //   page: 1,
    //   perPage: 10,
    //   color: 'green',
    //   orientation: 'portrait',
    // });
    // console.log(unsplash.photos.list({}));
}
