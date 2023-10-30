const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 3010;

app.get("/", function (req, res) {
    res.send("Node server is up & running for Node Day1 Task - NodeJS File System!!!");
});

app.get("/createFile", (req, res) => {
    const { time, file } = TimeStamp();
    console.log(time, file);
    fs.writeFileSync(`./newFiles/${file}.txt`, time, (err) => {
      if (err) console.log(err);
      else console.log(`File created successfully`);
    });
    res.send(`File created successfully`);
  });
  
  app.get("/readFile", (req, res) => {
    fs.readdir(`./newFiles`, (err, files) => {
      if (files.length == 0) {
        res.send(`No files in the directory`);
      } else {
        let fileList = `Files in directory <br>`;
        files.forEach((file) => {
          fileList += file + "<br>";
        });
        res.send(fileList);
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`This API by Rajalakshmi is listening on port ${PORT}`);
  });

function TimeStamp() {
    var d = Date.now();
    var date = new Date(d);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var time = `${hrs}:${mins}:${secs}`;
    var file = `${day}-${month}-${year}_${hrs}-${mins}-${secs}`;
  
    return { time, file };
  }