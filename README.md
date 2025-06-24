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
1. getByRole                          getAllByRole
2. getByLabelText                     getAllByLabelText
3. getByPlaceholderText               getAllByPlaceholderText
4. getByText                          getAllByText
5. getByDisplayValue                  getAllByDisplayValue
6. getByAltText                       getAllByAltText
7. getByTitle                         getAllByTitle
8. getByTestId                        getAllByTestId




/**
     * TextMatch: is the type of the first argument used in RTL queries
     * which can be : 
     *      1)String 
     *      2)Regex 
     *      3)Function
     */
