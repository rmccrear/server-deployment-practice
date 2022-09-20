const app = require("./src/server.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Ready');
})
