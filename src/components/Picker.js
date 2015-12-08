import React, { Component } from 'react';

class Picker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSubmit, data } = this.props;

    return (
      <form className="picker tk-brandon-grotesque" onSubmit={onSubmit}>
        <p>
          <label>Name <input ref="podcastName" key="podcastName" defaultValue={data.name} /></label>
        </p>
        <p>
          <label>Podcast ID <input ref="podcastId" key="podcastId" defaultValue={data.id} /></label>
        </p>
        <button type="submit">Add Podcast</button>
      </form>
    );
  }
}

export default Picker;
