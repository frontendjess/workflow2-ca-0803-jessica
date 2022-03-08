// @ts-check

function makeUppercase(str: string): string {
    return str.toUpperCase();
}

function replaceSpaces(str: string): string {
    return str.replace(/\s/g, "_");
}

function limitLength(len: number, str: string): string {
    return str.substr(0, len);
}

export { makeUppercase, replaceSpaces, limitLength}