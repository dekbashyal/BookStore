import express from "express";
import {
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../controllers/productControllers.js";
import { checkAdmin } from "../middlewares/checkUser.js";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/post").post(createProduct);
router.route("/products/:id").get(getProductById);

router
  .route("/admin/:id")
  .put(checkAdmin("admin"), updateProduct)
  .delete(checkAdmin("admin"), deleteProduct);

export default router;
