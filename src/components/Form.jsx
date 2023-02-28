import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/bookSlice';

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispach = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'author':
        setAuthor(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      item_id: uuid(),
      author,
      title,
      progress: '0%',
      category: 'Fiction',
    };

    dispach(addBook(data));
    setAuthor('');
    setTitle('');
  };

  return (
    <div className="form-wrapper">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Book Title"
          onChange={handleChange}
          value={title}
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          onChange={handleChange}
          value={author}
        />
        <button type="submit" className="btn-submit">ADD BOOK</button>
      </form>
    </div>
  );
}
