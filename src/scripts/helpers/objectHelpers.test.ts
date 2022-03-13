import { createProduct } from "./objectHelpers"

it('checking if createProduct function works', () => {
    expect(createProduct(100, 'test product', 'title of test product')).toStrictEqual({
        id: 100,
        code: 'TEST PRODUCT',
        title: 'title_of_tes'
    });
})