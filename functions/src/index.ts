import functions = require("firebase-functions");
import express = require("express");
import { connectDb } from "./db/index";
import bodyParser = require("body-parser");
import routes from "./routes"
import cors = require("cors");
const app = express();
app.get("/some-data", (request: any, response: any) => {
response.send("Hello world");
});
exports.app = functions.https.onRequest(app);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

connectDb().then(async () => {
  app.listen(3001, () => console.log("Listening on http://localhost:3001"));
});

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
