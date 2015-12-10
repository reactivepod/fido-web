import React from 'react';
import PodcastItem from './PodcastItem';

const PodcastList = ({ podcasts, handlePodcastDelete, handleFetch }) => {
  return (
    <section className="podcasts tk-brandon-grotesque">
      <ul>
        {podcasts.map((podcast, i) =>
          <PodcastItem data={podcast} key={podcast.id} onDelete={handlePodcastDelete} />
        )}
      </ul>
      <button onClick={handleFetch}>Fetch Reviews</button>
    </section>
  );
}

export default PodcastList;
