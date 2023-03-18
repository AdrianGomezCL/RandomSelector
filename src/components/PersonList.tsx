import React from "react";
import GenericList from "./GenericList";

interface PersonListProps {
  people: string[];
}

const PersonList: React.FC<PersonListProps> = ({ people }) => {
  return <GenericList items={people} title="Listado de personas:" listItemClassName="bg-white shadow rounded p-4" />;
};

export default PersonList;