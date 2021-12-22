import axios from "axios";
import { useState } from "react";
import UserCard from "./UserCard";

export default function Search() {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  async function getData(q = state) {
    let { data } = await axios.get(
      "https://api.github.com/search/users?q=" + q
    );
    console.log(data.items);
    setData(data.items);
  }
  function handleSearch() {
    getData();
  }
  return (
    <>
      <input
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
        placeholder="Type Something"
      />
      <button onClick={handleSearch}>Search</button>
      {data.map((item) => {
        return (
          <UserCard
            key={item.id}
            name={item.login}
            url={item.url}
            avatar={item.avatar_url}
          />
        );
      })}
    </>
  );
}
