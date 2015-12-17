import React from 'react';

const PodcastDropdown = ({ handlePodcastChange, fido, podcasts, selected }) => {
  if (podcasts.length) {
    return (
      <span>, find reviews for <select onChange={handlePodcastChange} value={selected}>
        {Object.keys(fido).map((id) => {
          const podcast = fido[id].meta;
          if (podcast && podcasts.filter(i => i.id === id)) {
            return <option value={id} key={`select-${id}`}>{podcast.name}</option>
          }
        }
      )}
    </select>
    from
    </span>
  );
} else {
  return <span />
}
}

export default PodcastDropdown;
