import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types'

function NoteList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {
        notes.map((data) => (
          <NoteItem
            key={data.id}
            id={data.id}
            onDelete={onDelete}
            {...data} />
        ))
      }
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteList;