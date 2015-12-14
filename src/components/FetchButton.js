import React from 'react';
import LaddaButton from 'react-ladda';

const FetchButton = ({ podcasts, handleFetchFido, progress, disabled }) => {
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
}

export default FetchButton;
