import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    API.searchBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.items);
        this.setState({ results: res.data.items, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <Container fluid>
      <Row>
        <Col size="md sm-12">
          <Jumbotron>
              <h1>Search Books!</h1>
          </Jumbotron>
          
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
