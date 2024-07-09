


// transcribe.mjs
// import express from 'express';
// import fileUpload from 'express-fileupload';
// import { exec } from 'child_process';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fs from 'fs';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const router = express.Router();
// router.use(fileUpload());

// // Ensure the uploads directory exists
// const uploadsDir = path.join(__dirname, '..', 'uploads');
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// router.post('/', (req, res) => {
//   if (req.files && req.files.video) {
//     const videoFile = req.files.video;
//     const videoPath = path.join(__dirname, '..', 'uploads', videoFile.name);

//     console.log("Saving file to:", videoPath); // Log the path

//     videoFile.mv(videoPath, err => {
//       if (err) {
//         console.error("Failed to move file:", err); // Log file move error
//         return res.status(500).send({ error: "Failed to upload video." });
//       }

//       exec(`python3 server/video_to_text.py --file ${videoPath}`, (error, stdout, stderr) => {
//         fs.unlinkSync(videoPath); // Clean up the uploaded file
//         if (error) {
//           console.error("Execution Error:", stderr); // Log Python script error
//           return res.status(500).send({ error: stderr });
//         }
//         res.send({ transcription: stdout.trim() }); // Trim any extra whitespace
//       });
//     });
//   } else if (req.body.url) {
//     exec(`python3 server/video_to_text.py --url ${req.body.url}`, (error, stdout, stderr) => {
//       if (error) {
//         console.error("Execution Error:", stderr); // Log Python script error
//         return res.status(500).send({ error: stderr });
//       }
//       res.send({ transcription: stdout.trim() }); // Trim any extra whitespace
//     });
//   } else {
//     res.status(400).send({ error: 'No video file or URL provided' });
//   }
// });

// export default router;
import express from 'express';
import fileUpload from 'express-fileupload';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
router.use(fileUpload());

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

router.post('/', (req, res) => {
  if (req.files && req.files.video) {
    const videoFile = req.files.video;
    const videoPath = path.join(__dirname, '..', 'uploads', videoFile.name);
    const audioPath = path.join(__dirname, '..', 'uploads', 'extracted_audio.mp3');

    console.log("Saving file to:", videoPath); // Log the path

    videoFile.mv(videoPath, err => {
      if (err) {
        console.error("Failed to move file:", err); // Log file move error
        return res.status(500).send({ error: "Failed to upload video." });
      }

      exec(`python3 server/video_to_text.py --file ${videoPath}`, (error, stdout, stderr) => {
        fs.unlinkSync(videoPath); // Clean up the uploaded file
        if (error) {
          console.error("Execution Error:", stderr); // Log Python script error
          return res.status(500).send({ error: stderr });
        }
        res.send({ transcription: stdout.trim(), audioUrl: '/uploads/extracted_audio.mp3' }); // Return the audio URL
      });
    });
  } else if (req.body.url) {
    exec(`python3 server/video_to_text.py --url ${req.body.url}`, (error, stdout, stderr) => {
      if (error) {
        console.error("Execution Error:", stderr); // Log Python script error
        return res.status(500).send({ error: stderr });
      }
      res.send({ transcription: stdout.trim(), audioUrl: '/uploads/extracted_audio.mp3' }); // Return the audio URL
    });
  } else {
    res.status(400).send({ error: 'No video file or URL provided' });
  }
});

export default router;








// import express from 'express';
// import multer from 'multer';
// import { exec } from 'child_process';
// import path from 'path';
// import fs from 'fs';

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// router.post('/', upload.single('video'), (req, res) => {
//   const videoPath = req.file.path;
//   const audioPath = `${videoPath}.wav`;
//   const scriptPath = path.resolve('server/video_to_text.py');

//   exec(`python3 ${scriptPath} ${videoPath} ${audioPath}`, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return res.status(500).send('Error processing video transcription');
//     }

//     // Send the result back
//     res.send({ text: stdout.trim() });

//     // Clean up the files
//     fs.unlink(videoPath, () => {});
//     fs.unlink(audioPath, () => {});
//   });
// });




