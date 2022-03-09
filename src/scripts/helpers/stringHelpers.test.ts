import { makeUppercase, replaceSpaces, limitLength } from "./stringHelpers";

it('checking if makeUppercase function works', () => {
    expect(makeUppercase('testing this string')).toBe('TESTING THIS STRING');
})

it('checking if replaceSpaces function works', () => {
    expect(replaceSpaces('testing this string')).toBe('testing_this_string');
})

it('checking if limitLength functino works', () => {
    expect(limitLength(4, 'testing this string')).toBe('test');
})