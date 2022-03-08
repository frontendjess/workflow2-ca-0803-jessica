// @ts-check

import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers";

// id is a number
// code is an uppercase string
// title is a string with spaces replaced with underscores and a maximum length of 12 characters
interface ProductValues {
    id: number,
    code: string,
    title: string
}

function createProduct(id: number, code: string, title: string): ProductValues {
	return {
		id: id,
		code: makeUppercase(code),
		title: limitLength(12, replaceSpaces(title)),
	};
}

export default createProduct;