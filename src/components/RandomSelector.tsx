// components/RandomSelector.tsx
import React, { useState } from "react";

interface RandomSelectorProps {}

const RandomSelector: React.FC<RandomSelectorProps> = () => {
  const [person, setPerson] = useState<string>("");
  const [people, setPeople] = useState<string[]>([]);
  const [numToSelect, setNumToSelect] = useState<number>(0);
  const [selected, setSelected] = useState<string[]>([]);

  const handlePersonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson(e.target.value);
  };

  const handleAddPerson = (e: React.MouseEvent) => {
    e.preventDefault();

    if (person.trim() !== "") {
      setPeople([...people, person]);
      setPerson("");
    }
  };

  const handleNumToSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumToSelect(parseInt(e.target.value, 10));
  };

  const handleSelection = (e: React.MouseEvent) => {
    e.preventDefault();

    if (numToSelect > people.length) {
      alert("El número a seleccionar no puede ser mayor al total de personas.");
      return;
    }

    const selectedArray: string[] = [];
    while (selectedArray.length < numToSelect) {
      const randomIndex = Math.floor(Math.random() * people.length);
      const selectedPerson = people[randomIndex];
      if (!selectedArray.includes(selectedPerson)) {
        selectedArray.push(selectedPerson);
      }
    }
    setSelected(selectedArray);
  };

  return (
    <div>
      <form>
        <label>
          Agregar persona:
          <input type="text" value={person} onChange={handlePersonChange} />
        </label>
        <button onClick={handleAddPerson}>Agregar</button>
      </form>
      <div>
        <h3>Listado de personas:</h3>
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
      </div>
      <div>
        <label>
          Número a seleccionar:
          <input type="number" value={numToSelect} onChange={handleNumToSelectChange} />
        </label>
        <button onClick={handleSelection}>Seleccionar</button>
      </div>
      <div>
        {selected.length > 0 && (
          <div>
            <h2>Personas seleccionadas:</h2>
            <ul>
              {selected.map((person, index) => (
                <li key={index}>{person}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomSelector;
