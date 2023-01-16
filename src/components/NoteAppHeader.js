import React from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';
import { ThemeConsumer } from '../Contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
function NoteAppHeader({ title, logout }) {
  return (
    <div className="note-app__header">
      <h1>{title}</h1>
      <ul>
        <li><button onClick={logout}><FiLogOut /></button></li>
        <ThemeConsumer>
          {({ theme, toggleTheme }) => {
            return <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>;
          }}
        </ThemeConsumer>

      </ul>
    </div>

  );
}

NoteAppHeader.propTypes = {
  title: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
}


export default NoteAppHeader;