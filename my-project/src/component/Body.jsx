import { useState } from "react";
import { RestaurantCard, WithPromotedLabel } from "../component/RestaurantCard";
import useMainCard from "../utils/useMainCard";
import { Link } from "react-router-dom";

function Body() {
  const [searchText, setSearchText] = useState("");

  const { restroList, searchFilter, setSearchFilter } = useMainCard();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = restroList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setSearchFilter(filteredData);
  };

  const RestaurantwithPromoted = WithPromotedLabel(RestaurantCard);

  return (
    <>
      {" "}
      <form className="mt-10 ml-10" onSubmit={handleSubmit}>
        <input
          className="bg-gray-100 border-2"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="pl-2">Search</button>
      </form>
      <div className="flex flex-wrap">
        {searchFilter.map((restrocard) => (
          <Link
            key={restrocard.info.id}
            to={`/reataurants/${restrocard.info.id}`}
          >
            {restrocard.info.promoted ? (
              <RestaurantwithPromoted restrocard={restrocard} />
            ) : (
              <RestaurantCard restrocard={restrocard} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
