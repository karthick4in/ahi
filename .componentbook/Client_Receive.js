const net = require("net"), fs = require("fs"), remote_server = process.argv[2];
let socket;
const AdmZip = require('adm-zip');
var CONFIG = require("../component.json");
// socket = remote_server ? net.connect(8000, remote_server) : net.connect(8000);
socket =  net.connect(CONFIG["server"]["port"] , CONFIG["server"]["host"]);

let ostream = fs.createWriteStream("./test.zip");
let date = new Date(), size = 0, elapsed;
CONFIG["component"]["key"] = CONFIG["server"]["key"]; 
socket.write(JSON.stringify(CONFIG["component"]))
socket.on('data', chunk => {
    size += chunk.length;
    elapsed = new Date() - date;
    socket.write(`\r${(size / (1024 * 1024)).toFixed(2)} MB of data was sent. Total elapsed time is ${elapsed / 1000} s`)
    process.stdout.write(`\r${(size / (1024 * 1024)).toFixed(2)} MB of data was sent. Total elapsed time is ${elapsed / 1000} s`);
    ostream.write(chunk);

    var zip = new AdmZip("./test.zip");
    zip.extractAllTo(/*target path*/ "./src/componentbook/", /*overwrite*/ true);

});
socket.on("end", () => {
    console.log(`\nFinished getting file. speed was: ${((size / (1024 * 1024)) / (elapsed / 1000)).toFixed(2)} MB/s`);
    // process.exit();
});