import React, { Component } from 'react'
import DetailedNotes from '../components/DetailedNotes'
// import { getNotesFilter } from '../utils/data.js'\
import { getNote} from '../utils/api'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

function DetailedPageWrapper() {
  const { id } = useParams();
  return <DetailedPage id={String(id)} />
}

class DetailedPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: {}
    }
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id)

    this.setState(() => {
      return {
        notes: data
      }
    });

  }


  render() {
    if (this.state.notes === null) {
      return <p>Notes is not found!</p>;
    }
    return (
      <section>
        <DetailedNotes {...this.state.notes} />
      </section>
    )
  }
}

DetailedPage.propTypes = {
  id: PropTypes.string.isRequired
}

export default DetailedPageWrapper