import React from "react";
import { useState } from "react";
// hooks müssen in einer function aufgerufen werden
// State in Fuctinoal Components benutzen (war bisher nur in Class Components möglich)
// Funktion useState() liefert einen Array zurück
// Array Destructuring - 2 Konstante: 1.Wert der aktuelle State (Name)
// 2. Wert eine Funktion, mit der der State manipuliert wird (setName)
// Initialwert wird als Argument an useState() übergeben (primitive Datentypen, auch Arrays und Objekte möglich)
// wird der State geändert, aktualisiert React automatisch den Wert der State-Konstanten (hier count) und triggert ein Rendering der Komponente

function UsestateApp() {
  const [count, setCount] = useState(0);
  // console.log(count);

  return (
    <div className="App">
      <h1>Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UsestateApp;
