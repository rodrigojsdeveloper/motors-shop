import { Router } from "express";

import { ProductsController } from "../controllers/products.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { productSchema } from "../schemas/product.schema";

const routes = Router();

const productsRoutes = (): Router => {
  routes.post(
    "",
    schemaValidationMiddleware(productSchema),
    tokenMiddleware,
    new ProductsController().create
  );

  routes.get("", new ProductsController().listAll);

  routes.patch("/:id", tokenMiddleware, new ProductsController().update);

  routes.delete("/:id", tokenMiddleware, new ProductsController().deactive);

  routes.post("/:id", tokenMiddleware, new ProductsController().active);

  routes.get("/:id", new ProductsController().specific);

  return routes;
};

export { productsRoutes };
