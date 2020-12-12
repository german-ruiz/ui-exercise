import React, { useState, useContext } from "react";
import Context from "../../contexts/context";
import axios from "axios";

function SearchField() {
  const { dispatch, state } = useContext(Context);
  const [query, setQuery] = useState({
    location: "Tampa,FL",
  });

  const endpoint = `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=
  ${query.location}&term=tacos`;

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setQuery({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(endpoint).then((res) => {
      dispatch({
        type: "UPDATE_CONTEXT",
        payload: {
          ...state,
          search_results: res.data.businesses,
        },
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} id="search-form">
      <div className="search-field">
        <input
          type="text"
          label="Search"
          id="search-input"
          name="location"
          onChange={handleChange}
          defaultValue={query.location}
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchField;