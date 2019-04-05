import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="books">Book Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          list="books"
          type="text"
          className="form-control"
          placeholder="Harry Potter"
          id="book"
        />
        {/* <datalist id="books">
          {props.books.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
