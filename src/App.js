import Sidebar from "../src/components/Sidebar";
import Route from "../src/components/Route";
import AccordionPage from "../src/pages/AccordionPage";
import ButtonPage from "../src/pages/ButtonPage";
import DropdownPage from "../src/pages/DropdownPage";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
