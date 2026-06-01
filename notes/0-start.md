# Start Your First Ink App

To start your app, you should have Node.js >= 20.

```bash
npm i react ink
```

Create the `src` folder and create a file called `App.tsx`.

```ts
// src/App.tsx
import { Box, render, Text } from 'ink'
import React from 'react'

const App = () => {
    return (
        <Box>
            <Text>Hello World</Text>
        </Box>
    )
}

render(<App />)
```

Then, in `package.json`, add this script:

```json
"scripts": {
  "dev": "tsx src/App.tsx"
}
```

The `App.tsx` file is the main entry point of your entire project.

To start your project, open the terminal and run:

```bash
npm run dev
```
