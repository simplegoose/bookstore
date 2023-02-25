import React from 'react';
import PropTypes from 'prop-types';

export default function BookCard({
  category,
  bookTitle,
  bookAuthor,
  progress,
  currentChapter,
}) {
  BookCard.propTypes = {
    category: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthor: PropTypes.string.isRequired,
    progress: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
    currentChapter: PropTypes.string.isRequired,
  };

  return (
    <article className="book-card">
      <div className="text">
        <span className="category">{category}</span>
        <h2 className="title">{bookTitle}</h2>
        <span className="author">{bookAuthor}</span>
        <div className="actions">
          <button type="button" className="action-buttons">Comments</button>
          <button type="button" className="action-buttons">Remove</button>
          <button type="button" className="action-buttons">Edit</button>
        </div>
      </div>
      <div className="progress-chapter">
        <div className="progress">
          <div className="progress-circle">
            <div className="big-square" />
          </div>
          <div className="progress-text">
            <span className="progress-percent">{progress}</span>
            <span className="progress-completed">Completed</span>
          </div>
        </div>
        <div className="chapter">
          <span className="cur-chapter">Current Chapter</span>
          <span className="chapter-text">{currentChapter}</span>
          <button type="button" className="update-progress">Update Progress</button>
        </div>
      </div>
    </article>
  );
}
