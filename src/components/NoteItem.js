import React from 'react';
import { showFormattedDate } from '../utils/data';
import NoteItemAction from './NoteItemAction';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function NoteItem({ title, createdAt, body, id, onDelete}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">
          <Link to={`/detailed/${id}`}>{title}</Link>
        </h3>
      </div>
      <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
      <NoteItemAction id={id} onDelete={onDelete} />
    </div>
  );
}
NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}


export default NoteItem;