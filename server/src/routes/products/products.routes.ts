import { Router } from "express";

import { listAllProductsController } from "../../controllers/products/listAllProducts.controller";
import { createProductController } from "../../controllers/products/createProduct.controller";
import { deleteProductController } from "../../controllers/products/deleteProduct.controller";
import { updateProductController } from "../../controllers/products/updateProduct.controller";

import { tokenMiddleware } from "../../middlewares/token.middleware";


const routes = Router()

const productsRoutes = () => {

    routes.post("", tokenMiddleware, createProductController)

    routes.get("", listAllProductsController)

    routes.patch("/:id", tokenMiddleware, updateProductController)

    routes.delete("/:id", tokenMiddleware, deleteProductController)

    return routes
}

export { productsRoutes }
