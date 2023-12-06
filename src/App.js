import {GoBell, GoClockFill, GoHomeFill} from "react-icons/go";
import { MdDangerous } from "react-icons/md";
import Button from "./components/Button";

function App() {

  const handleClick = () => {
    console.log("Click!");
  }

  const handleMouseOver = () => {
    console.log("Mouse Over!");
  }

  return (
    <div>
      <Button primary outline className="mb-5">
        <GoBell />
        Primary
      </Button>
      <Button secondary onClick={handleClick}>
        <GoClockFill />
        Secondary
      </Button>
      <Button success rounded>
        <GoHomeFill />
        Success
      </Button>
      <Button warning rounded onMouseOver={handleMouseOver}>Warning</Button>
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
