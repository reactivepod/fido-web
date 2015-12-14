import React from 'react';
import PodcastItem from './PodcastItem';

// <section className="podcasts">
//   <ul>
//     {podcasts.map((podcast, i) =>
//       <PodcastItem data={podcast} onDelete={handlePodcastDelete}  key={generateKey(podcast.id)} />
//     )}
//   </ul>
// </section>

const PodcastList = ({ podcasts, handlePodcastDelete }) => {
  const generateKey = (key) => `podcast-${key}`;

  return (
    <select>
      {podcasts.map((podcast, i) =>
      <option value={podcast.id} key={generateKey(podcast.id)}>{podcast.name}</option>
      )}
    </select>
  );
}

export default PodcastList;
