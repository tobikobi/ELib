import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddBookPage from "./components/AddBookPage";

function App() {
  const [books, setBooks] = useState();
  // const [book, setBook] = useState();
  const getBooks = async () => {
    // try {
    const response = await api.get("/api/books");
    setBooks(response.data);
    // } catch (err) {
    //   console.log(0);
    // }
  };
  // const getBookData = async (bookId) => {
  //   try {
  //     const response = await api.get(`/api/v1/movies/${bookId}`);

  //     const singleBook = response.data;

  //     setBooks(singleBook);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home books={books} />}></Route>
            <Route path="/add" element={<AddBookPage />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
