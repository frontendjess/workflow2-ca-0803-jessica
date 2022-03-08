// @ts-check
import createProduct from "./helpers/objectHelpers";

interface ProductValues {
    id: number,
    code: string,
    title: string
}

const newProduct: ProductValues = createProduct(12, "d f g", "This is the title of the product, it will be truncated");

console.log(newProduct);


export default newProduct; 
