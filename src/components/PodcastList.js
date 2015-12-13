import React from 'react';
import PodcastItem from './PodcastItem';

const PodcastList = ({ podcasts, handlePodcastDelete, handleFetchFido }) => {
  const generateKey = (key) => `podcast-${key}`;

  return (
    <section className="podcasts">
      <ul>
        {podcasts.map((podcast, i) =>
          <PodcastItem data={podcast} onDelete={handlePodcastDelete}  key={generateKey(podcast.id)} />
        )}
      </ul>
      <button onClick={handleFetchFido}>Fetch Reviews</button>
    </section>
  );
}

export default PodcastList;
