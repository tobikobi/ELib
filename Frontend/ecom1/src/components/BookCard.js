const BookCard = (book) => {
  let iurl = "https://source.unsplash.com/400x400/?" + book.book.bookId;
  return (
    <>
      <div className="card  my-3" style={{ width: "25vh" }}>
        {/* <img
          className="card-img-top"
          src={require("../assets/" + book.book.bookName + ".jpg")}
          alt="w"
        /> */}

        <img className="card-img-top my-0 " src={iurl} alt="w" />
        <div
          className="card-body text-center"
          style={{ background: "linear-gradient(red, blue);" }}
        >
          <p>{console.log(book.book.bookId)}</p>
          <h5 className="card-title my-0">{book.book.bookName}</h5>
          <p className="card-text">{book.book.bookPrice}</p>
        </div>
      </div>
    </>
  );
};

export default BookCard;
