import { Router } from "express";

import {
  createProductController,
  deleteProductController,
  listProductsController,
  specificProductController,
  updateProductController,
} from "../controllers/products.controller";

import { schemaValidationMiddleware } from "../middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "../middlewares/token.middleware";

import { productSchema } from "../schemas/product.schema";

const routes = Router();

const productsRoutes = (): Router => {
  routes.post(
    "",
    schemaValidationMiddleware(productSchema),
    tokenMiddleware,
    createProductController
  );

  routes.get("", listProductsController);

  routes.patch("/:id", tokenMiddleware, updateProductController);

  routes.delete("/:id", tokenMiddleware, deleteProductController);

  routes.get("/:id", specificProductController);

  return routes;
};

export { productsRoutes };
