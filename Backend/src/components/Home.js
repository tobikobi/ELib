import BookCard from "./BookCard";

const Home = ({ books }) => {
  return (
    <>
      <div className="container">
        <div
          className="d-flex flex-row justify-content-center flex-sm-wrap"
          style={{ gap: "4vh" }}
        >
          {books?.map((book) => (
            <div key={book.bookId} className="">
              <BookCard book={book} />
              {/* <p>{console.log(book.bookId)}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
