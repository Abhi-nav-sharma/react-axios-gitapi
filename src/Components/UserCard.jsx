const UserCard = ({ name, url, avatar, id }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        border: "1px solid black",
        padding: "1rem"
      }}
    >
      <img width="50" src={avatar} alt={id} />
      <div>
        <div>{name}</div>
        <div>{url}</div>
      </div>
    </div>
  );
};
export default UserCard;
