const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./apiRoutes");

router.use(apiRoutes);

module.exports = { htmlRoutes, apiRoutes };
