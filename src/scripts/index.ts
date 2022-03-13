// @ts-check
import { ProductValues, createProduct } from "./helpers/objectHelpers";

const newProduct: ProductValues = createProduct(12, "d f g", "This is the title of the product, it will be truncated");

console.log('this is newProduct', newProduct);

export default newProduct; 
