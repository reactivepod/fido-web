import React from 'react';
import LaddaButton from 'react-ladda';

const FetchButton = ({ handleFetchFido, progress, disabled }) => {
  if (!disabled) {
    return (
      <LaddaButton
        disabled={disabled}
        loading={progress}
        buttonSize="s"
        buttonColor="green"
        buttonStyle="zoom-in"
        spinnerColor="#fff"
        onClick={handleFetchFido}>Fetch Reviews</LaddaButton>
    );
  } else {
    return <span />
  }
}

export default FetchButton;
