import React from "react";

interface SelectionInputProps {
  numToSelect: number;
  setNumToSelect: React.Dispatch<React.SetStateAction<number>>;
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  people: string[];
}

const SelectionInput: React.FC<SelectionInputProps> = ({ numToSelect, setNumToSelect, setSelected, people }) => {
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
    <div className="mt-6">
      <label className="mr-4">Número a seleccionar:</label>
      <input
        type="number"
        value={numToSelect}
        onChange={handleNumToSelectChange}
        className="border border-gray-300 p-2 rounded mr-4"
      />
      <button onClick={handleSelection} className="bg-green-500 text-white px-4 py-2 rounded">
        Seleccionar
      </button>
    </div>
  );
};

export default SelectionInput;
