// mise dans le google cloud des images et fichiers
const util = require("util");
const gc = require("../config/index"); // de là viens la config google cloud
const bucket = gc.bucket("my-babyplace");

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadDoc = (file) =>
  new Promise((resolve, reject) => {
    let { originalname, buffer } = file;

    // nouveau nom
    const date = new Date();
    originalname = `${Math.round(
      Math.random() * 10000
    )}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}-qws-${originalname}`;

    // mise dans google cloud
    const blob = bucket.file(originalname.replace(/ /g, "_"));
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    // vérifie si c'est bon + renvoie le lien
    blobStream
      .on("finish", () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(publicUrl); // renvoie le lien
      })
      .on("error", () => {
        reject(`Unable to upload image, something went wrong`);
      })
      .end(buffer);
  });

module.exports = uploadDoc;
