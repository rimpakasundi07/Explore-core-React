export default function Book({ book }) {
  console.log("book", book);
  return (
    <ul>
      <li>
        Name:{book.name} Price: {book.price}
      </li>
    </ul>
  );
}
