import React from "react";
import GenericList from "./GenericList";
import Confetti from "react-confetti";

interface SelectedListProps {
  selected: string[];
}

const SelectedList: React.FC<SelectedListProps> = ({ selected }) => {
  const showConfetti = selected.length > 0;

  return (
    <>
      {showConfetti && <Confetti />}
      <GenericList items={selected} title="Personas seleccionadas:" />
    </>
  );
};

export default SelectedList;
