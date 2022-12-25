import { Router } from "express";

import { listAllProductsController } from "controllers/products/listAllProducts.controller";
import { createProductController } from "controllers/products/createProduct.controller";
import { deleteProductController } from "controllers/products/deleteProduct.controller";
import { updateProductController } from "controllers/products/updateProduct.controller";

import { schemaValidationMiddleware } from "middlewares/schemaValidation.middleware";
import { tokenMiddleware } from "middlewares/token.middleware";

import { productSchema } from "schemas/product.schemas";

const routes = Router();

const productsRoutes = () => {
  routes.post(
    "",
    schemaValidationMiddleware(productSchema),
    tokenMiddleware,
    createProductController
  );

  routes.get("", listAllProductsController);

  routes.patch("/:id", tokenMiddleware, updateProductController);

  routes.delete("/:id", tokenMiddleware, deleteProductController);

  return routes;
};

export { productsRoutes };
