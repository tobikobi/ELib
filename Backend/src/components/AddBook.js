import React, { useEffect } from "react";
import api from "../api/axiosConfig";
import { Form, Button } from "react-bootstrap";
import { useState, useRef } from "react";

const AddBook = () => {
  const [book, setBook] = useState({
    id: "",
    name: "",
    price: "",
  });
  const [status, setStatus] = useState();
  const reload = useRef(0);

  const handleIdChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      id: e.target.value,
    });
  };
  const handleNameChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      name: e.target.value,
    });
  };
  const handlePriceChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      price: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("/api/books/add", {
        bookId: book.id,
        bookName: book.name,
        bookPrice: book.price,
      })
      .then(() => {
        setStatus({ type: "success" });
      })
      .catch((error) => {
        setStatus({ type: "error", error });
      });
  };
  useEffect(() => {
    reload.current = reload.current + 1;
  });
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        {/* <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exBookId">Book Id</label>
            <input
              onChange={handleIdChange}
              value={book.id}
              type="text"
              className="form-control"
              id="exBookId"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="exBookName">Book Name</label>
            <input
              onChange={handleNameChange}
              type="text"
              className="form-control"
              id="exBookName"
              value={book.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exBookPrice">Book Price</label>
            <input
              onChange={handlePriceChange}
              type="text"
              className="form-control"
              id="exBookPrice"
              value={book.price}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form> */}

        <Form className="mt-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exBookId">
            <Form.Label>Book Id</Form.Label>
            <Form.Control
              className="atext"
              type="text"
              style={{ width: "20vh", height: "4vh" }}
              onChange={handleIdChange}
              value={book.id}
            />
            <Form.Text className="text-muted">{book.id}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exBookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              className="atext"
              onChange={handleNameChange}
              style={{ width: "20vh", height: "4vh" }}
              value={book.name}
              type="text"
            />
            <Form.Text className="text-muted">{book.name}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exBookPrice">
            <Form.Label>Book Price</Form.Label>
            <Form.Control
              className="atext"
              onChange={handlePriceChange}
              style={{ width: "20vh", height: "4vh" }}
              value={book.price}
              type="text"
            />
            <Form.Text className="text-muted">{book.price}</Form.Text>
          </Form.Group>

          <Button onClick={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <p>The page has been rendered {reload.current} times.</p>
        {status?.type === "success" && (
          <div class="alert alert-success" role="alert">
            Submitted {book.name} successfully!
          </div>
        )}
        {status?.type === "error" && (
          <div class="alert alert-danger" role="alert">
            Not submitted
          </div>
        )}
      </div>
    </>
  );
};

export default AddBook;
