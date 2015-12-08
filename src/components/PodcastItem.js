import React from 'react';

const PodcastItem = ({ data, onDelete }) => {
  return (
    <li onClick={onDelete(data.id)}>{data.name}</li>
  );
}

export default PodcastItem;
