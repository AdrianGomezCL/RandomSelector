import React, { useState } from "react";
import PersonInput from "./PersonInput";
import PersonList from "./PersonList";
import SelectionInput from "./SelectionInput";
import SelectedList from "./SelectedList";

interface RandomSelectorProps {}

const RandomSelector: React.FC<RandomSelectorProps> = () => {
  const [person, setPerson] = useState<string>("");
  const [people, setPeople] = useState<string[]>([]);
  const [numToSelect, setNumToSelect] = useState<number>(0);
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="container mx-auto my-10">
      <div className="flex">
        <div className="w-1/2">
          <PersonInput person={person} setPerson={setPerson} setPeople={setPeople} people={people} />
          <PersonList people={people} />
        </div>
        <div className="w-1/2">
          <SelectionInput numToSelect={numToSelect} setNumToSelect={setNumToSelect} setSelected={setSelected} people={people} />
          <SelectedList selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default RandomSelector;
