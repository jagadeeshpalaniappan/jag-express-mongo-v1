const articleRoutes = require("../routes/article");

module.exports = (app) => {
  // ROOT:
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to jag-stocks-v1 API!" });
  });

  app.use("/api/articles", articleRoutes);
};
