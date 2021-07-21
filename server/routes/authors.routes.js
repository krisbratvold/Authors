const authorsController = require("../controllers/authors.controller");

module.exports = (app) => {
    app.get("/api/authors/", authorsController.findAll);
    app.get("/api/authors/:id/", authorsController.getOne);
    app.post("/api/authors/new/", authorsController.create);
    app.put("/api/authors/update/:id", authorsController.update);
    app.delete("/api/authors/delete/:id", authorsController.delete);
};