import React from 'react';
import PropTypes from 'prop-types'

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          title: '',
          body: '',
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onTitleChangeEventHandler(event) {
        this.setState(() => {
          return {
            title: event.target.value.slice(0, 50)
          }
        });
      }
      
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }
      
 render() {
    const charLimit = 50;
   return (
    <div className='note-input'>
        <h2>Buat Note</h2>
        <form onSubmit={this.onSubmitEventHandler}>
        <p type="text" className="note-input__title__char-limit"> Sisa karakter: {charLimit - this.state.title.length}</p>
        <input type="text" placeholder="Judul.." className="note-input__title" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
        <textarea type="text" placeholder="Tuliskan catatan anda di sini" className="note-input__body" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
        <button type="submit">Buat</button>
     </form>
    </div>
   )
 }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired
}


 
export default NoteInput;