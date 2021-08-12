const Card = ({ name, joined }) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>Joined: {joined}</p>
    </div>
  );
};

export { Card };
