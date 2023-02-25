import React from 'react';

export default function Form() {
  return (
    <div className="form-wrapper">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form method="post">
        <input type="text" name="title" id="title" placeholder="Book Title" />
        <input type="text" name="author" id="author" placeholder="Author" />
        <button type="submit" className="btn-submit">ADD BOOK</button>
      </form>
    </div>
  );
}
