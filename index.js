const express = require("express");

const app = express();

app.use(express.json());

app.post("/v1/update", (req, res) => {
  setTimeout(() => {
    // trả lại những gi redux kêu
    res.status(200).json(req.body);
  }, [2000]);
});

app.listen(8000, () => {
  console.log("Server is listening on port ...");
});
