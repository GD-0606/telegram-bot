const express = require("express");
const taskRoutes = require("./authRoutes");
const router = express.Router();
const defaultRoutes = [
  {
    path: "/auth",
    route: taskRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
