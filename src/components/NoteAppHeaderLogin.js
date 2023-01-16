import React from 'react';
import PropTypes from 'prop-types';
function NoteAppHeaderLogin({ title }) {
  return (
    <div className="note-app__header">
      <h1>{title}</h1>
    </div>
  );
}

NoteAppHeaderLogin.propTypes = {
  title: PropTypes.string.isRequired,
}


export default NoteAppHeaderLogin;