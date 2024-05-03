import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(color) {
    setColors([{ ...color, id: uid() }, ...colors]);
  }

  const handleDeleteColor = (id) => {
    const updatedColors = colors.filter((color) => color.id !== id);
    setColors(updatedColors);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />

      {colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDelete={() => handleDeleteColor(color.id)}
          />
        );
      })}
    </>
  );
}

export default App;
