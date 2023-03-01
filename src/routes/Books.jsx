import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';
import Form from '../components/Form';

export default function Books() {
  const { books } = useSelector((state) => state.books);

  return (
    <main className="books-main">
      <div className="books-wrapper">
        {
          books.map((book) => (
            <BookCard
              key={book.title}
              id={book.item_id}
              bookAuthor={book.author}
              bookTitle={book.title}
              progress={book.progress}
              category={book.category}
              currentChapter="Intro"
            />
          ))
        }
      </div>
      <Form />
    </main>
  );
}
