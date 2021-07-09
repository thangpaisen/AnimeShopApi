const productsRouter = require("./products");
const categoriesRouter = require("./categories");

function route(app) {

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
}

module.exports = route;
