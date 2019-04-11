import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from "../components/ViewBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

const styles = {
  bookImage: {
      maxWidth: "120px"
  }
};

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    image: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          
          <Col size="md sm-12">
            <Jumbotron>
              <h1>React Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <div className="card mb-3">
                      <div className="row no-gutters">
                          <div className="col-md-4">
                              <img src={book.image} className="card-img" alt="..." style={styles.bookImage}/>
                          </div>
                          <div className="col-md-8">
                              <div className="card-body">
                                  <h5 className="card-title">{book.title}
                                  <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                                  <Link to={"/books/" + book._id}>
                                    <ViewBtn />
                                  </Link>
                                  </h5>
                                  <p className="card-text">{book.synopsis}</p>
                                  <p className="card-text"><small className="text-muted">Written by {book.author}</small></p>
                              </div>
                          </div>
                      </div>
                    </div>
                  </ListItem>
                  
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
