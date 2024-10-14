import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Trichy", "Coimbatore", "Chennai", "Bangalore", "Mumbai"];
  const heading = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleButtonClick = () => {
    setShowAlert(true);
  };
  const handleAlertClose = () => {
    setShowAlert(false);
  };
  let [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert onClose={handleAlertClose}>
          <b>Primary</b> Alert
        </Alert>
      )}
      <Button name="Submit" color="primary" onClick={handleButtonClick} />
    </>
  );

  // {
  //   /* <ListGroup
  //     items={items}
  //     heading={heading}
  //     onSelectItem={handleSelectItem}
  //   /> */
  //   }
}

export default App;
