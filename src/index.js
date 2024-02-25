const app = require("./app");
const connectDB = require("./db/dbconfig");
let server;
connectDB();

server = app.listen(5050, () => {
  console.log(`Listening to port 5050`);
});
const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server Closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
