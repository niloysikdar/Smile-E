const Card = ({ name, joined }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Joined: {joined}</p>
    </div>
  );
};

export { Card };
