
import "./App.css";
import CascasingDroupdown from "./components/CascasingDroupdown";
import CheckBox from "./components/CheckBox";
import ControlledComponent from "./components/ControlledComponent";
import GroupCheckBox from "./components/GroupCheckBox";
import Input from "./components/Input";
import RadioBtn from "./components/RadioBtn";
import SelectDropDown from "./components/SelectDropDown";
import SingleFormCheckbox from "./components/SingleFormCheckbox";

function App() {
  
  return (
    <>
     <ControlledComponent/>
     <br />
     <br />
     <Input/>
     <br />
     <br />
     <CheckBox/>
     <br />
     <br />
     <GroupCheckBox/>
     <br />
     <br />
     <SingleFormCheckbox/>
     <br />
     <br />
     <RadioBtn/>
     <br />
     <br />
     <SelectDropDown/>
     <br /><br />
     <CascasingDroupdown/>
    </>
  );
}

export default App;
