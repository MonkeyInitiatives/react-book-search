import React from "react";
import AddBtn from "../AddBtn";
import API from "../../utils/API";

import "./style.css";

const styles = {
  bookImage: {
      maxWidth: "120px"
  }
};

function SearchResults(props) {

  const addBook = (result) => {
    API.saveBook({
      title: result.volumeInfo.title,
      author: result.volumeInfo.authors,
      synopsis: result.volumeInfo.description,
      image: result.volumeInfo.imageLinks.thumbnail
    })
      .then()
      .catch(err => console.log(err));
  }

  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        
        // <li key={result.id} className="list-group-item">
        //   <img alt="Book" src={result.volumeInfo.imageLinks.thumbnail} className="img-fluid" />
        // </li>
        <div className="card mb-3">
        <div className="row no-gutters">
            <div className="col-md-4">
                <img src={result.volumeInfo.imageLinks.thumbnail} className="card-img" alt="..." style={styles.bookImage}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{result.volumeInfo.title}
                    <AddBtn onClick={() => addBook(result)} />
                    </h5>
                    <p className="card-text">{result.volumeInfo.description}</p>
                    <p className="card-text"><small className="text-muted">Written by {result.volumeInfo.authors}</small></p>
                    
                </div>
            </div>
        </div>
      </div>
      ))}
    </ul>
  );
}

export default SearchResults;
