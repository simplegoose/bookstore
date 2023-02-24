import React from 'react';
import BookCard from '../components/BookCard';
import Form from '../components/Form';

export default function Books() {
  const books = [
    { title: 'The Hunger Games', author: 'Suzanne Collins', progress: '84%' },
    { title: 'Dune', author: 'Frank Herbert', progress: '8%' },
    { title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins', progress: '56%' },
  ];

  return (
    <main className="books-main">
      <div className="books-wrapper">
        {
          books.map((book) => (
            <BookCard
              key={book.title}
              bookAuthor={book.author}
              bookTitle={book.title}
              progress={book.progress}
              category="Biography"
              currentChapter="Intro"
            />
          ))
        }
      </div>
      <Form />
    </main>
  );
}
