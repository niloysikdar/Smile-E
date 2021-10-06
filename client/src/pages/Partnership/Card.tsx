import { FC } from "react";

interface CardPropType {
  name: string;
  joined: string;
}

const Card: FC<CardPropType> = ({ name, joined }) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>Joined: {joined}</p>
    </div>
  );
};

export { Card };
