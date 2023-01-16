import React from 'react';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types'

function NoteItemAction({ id, onDelete}) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItemAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteItemAction;