const multer = require("multer");
const fs = require("fs"); //cek direktori

module.exports = {
  uploader: (directory, filenamePrefix) => {
    //lokasi penyimpanan gambar

    let defaultDir = "./public";

    // fungsi untuk menyimpan file

    //disktorage berfungsi menyimpan file ke direktori backend
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        const pathDir = defaultDir + directory;

        //cek dulu direktorinya
        if (fs.existsSync(pathDir)) {
          console.log("Directori ada");
          cb(null, pathDir);
        } else {
          fs.mkdir(pathDir, { recursive: true }, (err) => cb(err, pathDir));
        }
      },

      filename: (req, file, cb) => {
        let ext = file.originalname.split(".");

        let filename = filenamePrefix + Date.now() + "." + ext[ext.length - 1];

        cb(null, filename);
      },
    });

    const fileFilter = (req, file, cb) => {
      const ext = /\.(jpg|jpeg|png|gif|jfif|pdf|txt|JPG|JPEG|PNG)/;

      if (!file.originalname.match(ext)) {
        return cb(new Error("You file type are denied"), false);
      }
      cb(null, true);
    };
    return multer({
      storage,
      fileFilter,
    });
  },
};
