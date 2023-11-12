import React from "./react.js";

export const Component = () => {
  const [count, setCount] = React.useState(1)
  const [text, setText] = React.useState('apple')

  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
  }
}

const App = React.render(Component)
App.click()
