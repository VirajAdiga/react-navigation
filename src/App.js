import {GoBell, GoClockFill, GoHomeFill} from "react-icons/go";
import { MdDangerous } from "react-icons/md";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button primary outline>
        <GoBell />
        Primary
      </Button>
      <Button secondary>
        <GoClockFill />
        Secondary
      </Button>
      <Button success rounded>
        <GoHomeFill />
        Success
      </Button>
      <Button warning rounded>Warning</Button>
      <Button danger outline>
        <MdDangerous />
        Danger
      </Button>
      <Button outline rounded>Outline</Button>
      <Button primary secondary>Error</Button>
    </div>
  );
}

export default App;
