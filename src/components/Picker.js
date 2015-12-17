import React, { Component } from 'react';

class Picker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onSubmitHandle } = this.props;

    return (
      <form className="picker" onSubmit={onSubmitHandle}>
        <p>
          <label>Podcast iTunes URL or ID <input ref="id" placeholder="1020286000" /></label>
            <button type="submit" data-size="s" data-color="green" className="ladda-button "><span className="ladda-label">Add Podcast</span></button>
        </p>
      </form>
    );
  }
}

export default Picker;
