import useRouterElement from '~/router'

function App() {
  const elements = useRouterElement()

  return <div>{elements}</div>
}

export default App
