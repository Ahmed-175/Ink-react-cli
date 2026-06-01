# FlexBox

Ink uses an engine called Yoga. It is a Flexbox layout engine.

By default, when you write code like this, the `Box` behaves like this in CSS:

```css id="q8n2l1"
display: flex;
```

For example, code like this:

```tsx
<Box>
  <Text>A</Text>
  <Text>B</Text>
</Box>
```

Output:

```bash
A B
```

When you change the default value to `<Box flexDirection="column">`, it behaves like writing CSS:

```css id="kq8q7m"
display: block;
```

---

# `<Text>`

This component is used to display text and apply styles such as bold, underline, italic, or strikethrough.

```tsx
import { render, Text } from "ink";

const Example = () => (
  <>
    <Text color="green">I am green</Text>
    <Text color="black" backgroundColor="white">
      I am black on white
    </Text>
    <Text color="#ffffff">I am white</Text>
    <Text bold>I am bold</Text>
    <Text italic>I am italic</Text>
    <Text underline>I am underline</Text>
    <Text strikethrough>I am strikethrough</Text>
    <Text inverse>I am inversed</Text>
  </>
);

render(<Example />);
```

> `<Text>` allows only text nodes and nested `<Text>` components inside it. For example, the `<Box>` component can't be used inside `<Text>`.

---

# Width

**Type:** `number | string`

The width of the element in spaces. It can also be set as a percentage, which will be calculated based on the width of the parent element.
