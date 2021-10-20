const express = require("express");
const bodyParser = require("body-parser");

const promotionsRouter = express.Router();

promotionsRouter.use(bodyParser.json());

promotionsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the promotions to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the promotions: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete((req, res, next) => {
    res.end("Deleting all promotions");
  });

promotionsRouter
  .route("/:promotionId")
  .get((req, res, next) => {
    res.end(
      `Will send details of the promotions ${req.params.promotionId} to you!`
    );
  })
  .post((req, res, next) => {
    `Will update the dish: ${req.params.promotionId} ${JSON.stringify(
      req.body
    )}`;
  })
  .put((req, res, next) => {
    res.write("Updating the promotion: " + req.params.promotionId + "\n");
    res.end(`Will update the promotion: ${JSON.stringify(req.body)}`);
  })
  .delete((req, res, next) => {
    res.end("Deleting promotions:" + req.params.promotionId);
  });

module.exports = promotionsRouter;
