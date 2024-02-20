{
  /*import Message from "../Message";*/
}
{
  /*import { MouseEvent } from "react";*/
}
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  {
    /*Conditional rendering 
  const getMessage = () => {
  return items.length === 0 && <p>No items found </p>;
  }; */
  }

  {
    /*  const handleClick = (event: MouseEvent) => console.log(event);
     */
  }

  return (
    <>
      <h1> {heading} </h1>
      {/*{getMessage()}*/}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
              {
                /*onClick={handleClick}*/
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
