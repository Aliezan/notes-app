import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import EmptyMessage from './EmptyMessage';
import { getActiveNotes, deleteNote, addNote } from '../utils/api';

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  async componentDidMount() {
    const { data } = await getActiveNotes();

    this.setState(() => {
      return {
        notes: data,
      }
    });
  }

  

  async onAdd({ title, body }) {
    await addNote({ title, body })

    // State update
    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        notes: data
      }
    })
  }

  async onDeleteHandler(id) {
    await deleteNote(id)
    // State update from API calls
    const { data } = await getActiveNotes();
    this.setState(() => {
      return {
        notes: data
      }
    });
  }



  render() {
    const activeNotes = this.state.notes;
    return (
      <>
        <div className="note-app__body">

          <NoteInput addNote={this.onAdd} />

          <h2>Catatan Aktif</h2>
          {activeNotes.length > 0 ?
            <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} archivePlaceholder="Archive" /> : <EmptyMessage />}
        </div>
      </>


    );
  }
}

export default NoteAppBody;
