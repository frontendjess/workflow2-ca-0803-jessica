# Create react app with template typescript

# Installed Jest, Babel and Lodash

For Feu2 workflow 2 CA:

Question 1. Converted all functions in `scripts/helpers/stringHelpers.ts`

Question 2. Converted the function in `scrips/helpers/objectHelpers.ts` to TypeScript

Question 3. Converted `scripts/index.ts` to TypeScript. Used the interface `ProductValues` imported from `objectHelpers.ts` as the type of the `newProduct` variable.

Question 4. Wrote passing tests for all functions found in `scripts/helpers/stringHelpers.ts` and `scrips/helpers/objectHelpers.ts`. The test files are `scripts/helpers/stringHelpers.test.ts`and `scripts/helpers/objectHelpers.test.ts`.

Question 5. Used the Rick and Morty GraphQl Api `https://rickandmortyapi.com/graphql`

In `scripts/Query.js` made a GraphQl API call that returns an array of results, used lodash method `orderBy` to sort the key ID results in descending order. It's looped through the results using 5 object properties within a div that has a classname of `Results`.
