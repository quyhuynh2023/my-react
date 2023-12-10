import { useState } from "react";
import Button from "./components/Button";
import TextField from "./components/TextField";
function App() {
  const [list, setList] = useState([{}]);
  console.log(list);

  return (
    <div>
      {list.length > 0 &&
        list.map((_, index) => {
          return (
            <div key={index}>
              {index > 0 && (
                <div>
                  <input
                    onChange={(event) => {
                      console.log(
                        "%ctrigger inherit info from previous entry",
                        "background: #222; color: #bada55"
                      );

                      let prevItem = {};

                      const newList = list.map((tempItem, tempIndex) => {
                        if (index === tempIndex + 1) {
                          event.target.checked
                            ? (prevItem = { ...tempItem })
                            : (prevItem = {});
                        }

                        if (index === tempIndex) {
                          const { name, ...clone } = prevItem;
                          return tempItem?.name
                            ? { ...clone, name: tempItem?.name }
                            : { ...clone };
                        } else {
                          return { ...tempItem };
                        }
                      });
                      setList(newList);
                    }}
                    type="checkbox"
                    id={index}
                  />
                  <label htmlFor={index}>
                    inherit info from previous entry
                  </label>
                </div>
              )}

              <TextField
                value={list[index].name || ""}
                onChange={(event) => {
                  const newList = list.map((tempItem, tempIndex) => {
                    return index === tempIndex
                      ? { ...tempItem, name: event.target.value }
                      : { ...tempItem };
                  });
                  setList(newList);
                }}
                label="Name"
              />
              <br />
              <TextField
                value={list[index].address || ""}
                onChange={(event) => {
                  const newList = list.map((tempItem, tempIndex) => {
                    return index === tempIndex
                      ? { ...tempItem, address: event.target.value }
                      : { ...tempItem };
                  });
                  setList(newList);
                }}
                label="Address"
              />
              <br />
              <Button
                onClick={() => {
                  const newList = list.filter((_, i) => i !== index);
                  setList(newList);
                }}
                ripple="#0990ff"
                variant="outlined"
              >
                delete
              </Button>
            </div>
          );
        })}

      <Button
        onClick={() => {
          setList([...list, {}]);
        }}
        ripple="#ffffff"
      >
        create new
      </Button>
    </div>
  );
}
export default App;
