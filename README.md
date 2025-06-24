# Learn Testing in React + TypeScript + Vite

## Step 1: Install the Required Dependencies:

npm install -D vitest @vitest/coverage-v8 @vitest/ui @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event jsdom

## Step 2: Create Configuration Files :
Next, let’s create the necessary configuration files.

Create a vite.setup.ts file in your project root:
```js
import '@testing-library/jest-dom'
```

## Step 3: Next, create a vitest.config.ts file:

```js
import { defineConfig, configDefaults } from 'vitest/config'


export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './vitest.setup.ts',
    exclude: [...configDefaults.exclude, '**/e2e/**'], // Example: Exclude e2e tests
    coverage: {
      provider: 'v8', // Use Vite's default coverage provider
      reporter: ['text', 'json', 'html']
    }
  }
})
```

## Step 4: Next, update the tsconfig.json file with:

```js
{
  "compilerOptions": {
    // ...other existing code
    "types": [...other types, "vitest/globals"] // Add Jest types
  },
  "include": [...others included, "__tests__/*.test.tsx","__tests__/*.test.ts"],
}
```

## Step 5: Finally, update your package.json Scripts
```js
"scripts": {
  "test": "vitest",
  "test:coverage": "vitest run --coverage",
  "test:coverage-ui": "vitest --ui --coverage.enabled=true",
}
```

### Priority Order of RTL Queries
1. getByRole                          
2. getByLabelText                     
3. getByPlaceholderText               
4. getByText                          
5. getByDisplayValue                  
6. getByAltText                       
7. getByTitle                         
8. getByTestId                        



**/**
 * TextMatch: is the type of the first argument used in RTL queries
 * which can be : 1)String 2)Regex 3)Function
 * 
 * queryBy: Returns the matching node for the query and returns null if no match  found, it is useful for asseting an element that is not present
 * 
 * queryAllBy: Returns an array of all matching nodes for the query and returns an empty array if no match found
 ** /**

 To handle Apperance/Disapperance of the code we need to add test cases using findBy/findAllBy

 **findBy:** 1)Returns a promise which resolves when an element is found matching the given query 2)The promise is rejected if no element is found or if more than 1 element is found after a timeout of 1000ms
