import { Router } from "express";

import { ProductsControllers } from "../controllers/products.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { productSchema } from "../schemas/product.schema";

const routes = Router();

const productsRoutes = (): Router => {
  routes.post(
    "",
    schemaValidationMiddleware(productSchema),
    tokenMiddleware,
    new ProductsControllers().create
  );

  routes.get("", new ProductsControllers().listAll);

  routes.patch("/:id", tokenMiddleware, new ProductsControllers().update);

  routes.delete("/:id", tokenMiddleware, new ProductsControllers().delete);

  routes.get("/:id", new ProductsControllers().specific);

  return routes;
};

export { productsRoutes };
