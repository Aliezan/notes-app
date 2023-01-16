import React from 'react';
import { showFormattedDate } from '../utils/data.js';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function NoteItemContent({ id, title, createdAt, body }) {
  return (
    <div className="note-item__content">
      <Link to={`/detailed/${id}`}>
        <h3 className="note-item__title">
          {title}
        </h3>
      </Link>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
}

NoteItemContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}



export default NoteItemContent;