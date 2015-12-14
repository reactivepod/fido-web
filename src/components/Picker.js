import React, { Component } from 'react';

class Picker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSubmitHandle, data } = this.props;

    return (
      <form className="picker" onSubmit={onSubmitHandle}>
        <p>
          <label>Name <input ref="name" defaultValue={data.name} /></label>
        </p>
        <p>
          <label>Podcast ID <input ref="id" defaultValue={data.id} /></label>
        </p>
        <button type="submit">Add Podcast</button>
      </form>
    );
  }
}

export default Picker;
