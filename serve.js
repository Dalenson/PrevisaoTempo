const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");

app.use(express.static(__dirname));

app.get("/", function(req, res){
  res.sendFile(__dirname+'/index.html');
});

app.get("/meuip", async function(req, res) {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    res.json(response.data); // Retorna: { ip: "xxx.xxx.xxx.xxx" }
  } catch (error) {
    console.error("Erro ao obter IP:", error);
    res.status(500).json({ erro: "Não foi possível obter o IP" });
  }
});

app.get("/tempo", async (req, res) => {
  const { woeid } = req.query;
  if (!woeid) return res.status(400).json({ erro: "WOEID não informado" });

  try {
    const response = await axios.get("https://api.hgbrasil.com/weather", {
      params: { woeid }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao consultar tempo" });
  }
});

app.get("/cidade", async (req, res) => {
  const { ip } = req.query;
  if (!ip) return res.status(400).json({ erro: "IP não informado" });

  try {
    const response = await axios.get("https://api.hgbrasil.com/weather?key=4a5ef733&user_ip="+ip);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao consultar cidade" });
  }
});

app.get("/geoip", async (req, res) => {
  const { ip } = req.query;
  if (!ip) return res.status(400).json({ erro: "IP não informado" });

  try {
    console.log(ip)
    const response = await axios.get("https://api.hgbrasil.com/geoip?key=4a5ef733&address='"+ip, {params:{"address":ip}});
    console.log(response.data)
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao consultar GeoIP" });
  }
});

app.get("/imagens", async (req, res) => {
  const page = Math.floor(Math.random() * (10000 - 1)) + 1;
  try {
    const response = await axios.get("https://api.pexels.com/v1/curated", {
      headers: {
        Authorization: "563492ad6f91700001000001ef09a161ef5d4cffb94691717af73edd"
      },
      params: {
        query: "clouds",
        per_page: page
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar imagens" });
  }
});

app.listen(process.env.PORT || 5000);