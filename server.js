const express = require("express");

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/products", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const mockData = [
    "HD Video Player",
    "SuperHD Video Player",
    "SuperPlasma 50",
    "SuperLED 50",
    "SuperLED 42",
    "SuperLCD 55",
    "SuperLCD 42",
    "SuperPlasma 65",
    "SuperLCD 70",
    "DesktopLED 21",
    "DesktopLCD 21",
    "DesktopLCD 19",
    "Projector Plus",
    "ExcelRemote IR",
    "ExcelRemote Bluetooth",
    "ExcelRemote IP",
  ];

  const { search } = req.query;

  const filteredData = search
    ? mockData.filter((item) => item.includes(search))
    : mockData;

  res.json({
    totalCount: filteredData.length,
    data: filteredData,
  });
});

app.listen(3100, () => {
  console.log(`Backend ist listening on port 3100`);
});
