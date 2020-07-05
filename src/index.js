const admin = require("firebase-admin"),
  express = require("express"),
  cors = require("cors"),
  app = express(),
  port = process.env.PORT || 3333,
  bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./controllers/produtoController")(app);

app.listen(port, () => {
  console.log("JobinServer rodando na porta: " + port);
});
