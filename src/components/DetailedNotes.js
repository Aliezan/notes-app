import React from 'react';
import { showFormattedDate } from '../utils/data.js';
import PropTypes from 'prop-types'

function DetailedNotes({ title, body, createdAt }) {
  return (
    <div className='note-item-page'>
      <h3 className='note-item-title-page'>
        {title}
      </h3>
      <p className="note-item-date-page">{showFormattedDate(createdAt)}</p>
      <p className="note-item-body-page">{body}</p>
    </div>
  );
}

DetailedNotes.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default DetailedNotes;