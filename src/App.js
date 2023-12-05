import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button primary outline>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button success rounded>Success</Button>
      <Button warning rounded>Warning</Button>
      <Button danger outline>Danger</Button>
      <Button outline rounded>Outline</Button>
      <Button primary secondary>Error</Button>
    </div>
  );
}

export default App;
