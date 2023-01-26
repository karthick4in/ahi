const net = require("net"), fs = require("fs");
const AdmZip = require('adm-zip');
const KEY = "karthick";
var PORT= 8000;
server = net.createServer(socket => {

    //  console.log(socket);
    // socket.pipe(process.stdout);
    socket.on('data', function (jsonStr) {
        console.log("Componet - ", jsonStr + "");
        if (!jsonStr + "".length)
            return 0;
        const file = new AdmZip();
        var jsonObj = {};
        try {
            var jsonObj = JSON.parse(jsonStr + "")
        } catch (e) {
            // socket.write("Something wrong..!");
            // socket.end();
            return 0;
        }
        var importComp = jsonObj["import"];
        var importProject = jsonObj["project"];
        if (jsonObj["key"] != KEY) {
            socket.write("KEY is invalid");
            socket.end();
            return 0;
        }
        var fileName = importProject["name"] + "_" + importProject["version"] + '.zip';
        // var importComp = [
        //     "Button",
        //     "Header"
        // ];
        importComp.forEach((directoryName, index) => {
            // console.log(directoryName, index)
            var serverPath = "";
            console.log(serverPath + directoryName, directoryName);
            var path = __dirname+"/../src/stories/" + directoryName;
            file.addLocalFolder(path, directoryName);
            // console.log(serverPath + directoryName, directoryName);
        })
        fs.writeFileSync(__dirname+'/.temp/' + fileName, file.toBuffer());

        var istream = fs.createReadStream(__dirname+"/.temp/" + fileName);

        istream.on("readable", function () {
            let data;
            while (data = this.read()) {
                socket.write(data);
            }
        })

        istream.on("end", function () {
            socket.end();
        })
    });

    socket.on("end", () => {
        console.log("Transfer is Done !");
        // server.close(() => { console.log("\nTransfer is done!") });
    })
})
console.log("Server Running on : localhost " ,PORT);
server.listen( PORT, '0.0.0.0');
console.log(__dirname)