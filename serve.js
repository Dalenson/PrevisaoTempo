const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(cors({
  origin: 'https://foo.com'
}));

app.use(express.static(__dirname));

app.get("/", function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.listen(process.env.PORT || 5000);