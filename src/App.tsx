import ListGroup from "./componente/ListGroup";

function App() {
  let items = ["Paris", "Amsterdam", "Valetta", "Berlin", "Roma"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {/*Exemplu passing children; textul sa fie child of the div comp
      
      <div> 
        <Alert>
        Hello <it> tuturor </it>
        </Alert>
      </div>
      
      
      */}
    </div>
  );
}

export default App;
