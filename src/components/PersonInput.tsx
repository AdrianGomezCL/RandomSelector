import React from "react";

interface PersonInputProps {
  person: string;
  setPerson: React.Dispatch<React.SetStateAction<string>>;
  people: string[];
  setPeople: React.Dispatch<React.SetStateAction<string[]>>;
}

const PersonInput: React.FC<PersonInputProps> = ({ person, setPerson, people, setPeople }) => {
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

  return (
    <form className="flex items-center mb-6">
      <label className="mr-4">Agregar persona:</label>
      <input
        type="text"
        value={person}
        onChange={handlePersonChange}
        className="border border-gray-300 p-2 rounded mr-4"
      />
      <button onClick={handleAddPerson} className="bg-blue-500 text-white px-4 py-2 rounded">
        Agregar
      </button>
    </form>
  );
};

export default PersonInput;
