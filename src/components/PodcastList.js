import React from 'react';
import PodcastItem from './PodcastItem';

const PodcastList = ({ podcasts, handlePodcastDelete }) => {
  return (
    <section className="podcasts tk-brandon-grotesque">
      <ul>
        {podcasts.map((podcast, i) =>
          <PodcastItem data={podcast} key={podcast.id} onDelete={handlePodcastDelete} />
        )}
      </ul>
    </section>
  );
}

export default PodcastList;
