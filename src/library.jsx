import Book from "./book";
export default function Library({ books }) {
  return (
    <div>
      <h2> My national Central Library </h2>
      <p>Book Collectoins {books.length} </p>
      <p>Address:</p>
      {/* loop here */}
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </ul>
    </div>
  );
}
