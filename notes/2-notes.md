# To kill the process

```tsx
import { useApp } from "ink";

const App = () => {
  const { exit } = useApp();

  return null;
};
```

```tsx
const { waitUntilExit } = render(<MyApp />);

await waitUntilExit();

console.log("App exited");
```
