const express = require("express");
const app = express();
const questionRouter = require("./routes/questionRoutes");
const TopicRouter = require("./routes/topicRoutes");
const AccountRouter = require("./routes/accountRoutes");
const AdminRouter = require("./routes/adminRoutes");
const StudentRouter = require("./routes/studentRoutes");
const TestRouter = require("./routes/testRoutes");
const FinishTestRouter = require("./routes/finishTestRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const Urls = require("./setting/staticUrls");

app.use(cors());
app.listen(Urls.serverPort, () =>
  console.log(
    `YahalomTests server is running at ${Urls.serverDomain}:${Urls.serverPort}`
  )
);

app.use(bodyParser.json());

app.use("/api/Questions", questionRouter);
app.use("/api/Topics", TopicRouter);
app.use("/api/Accounts", AccountRouter);
app.use("/api/Admins", AdminRouter);
app.use("/api/Tests", TestRouter);
app.use("/api/FinishTest", FinishTestRouter);
app.use("/api/Students", StudentRouter);
