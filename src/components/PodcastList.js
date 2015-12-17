import React from 'react';

// <section className="podcasts">
//   <ul>
//     {podcasts.map((podcast, i) =>
//       <PodcastItem data={podcast} onDelete={handlePodcastDelete}  key={generateKey(podcast.id)} />
//     )}
//   </ul>
// </section>

const PodcastList = ({ podcasts, handlePodcastDelete, fido, handlePodcastPick, selected }) => {

  return (
    <ul className="my__list">
      {podcasts.map((podcast) => podcast.id).map((id) => {
        if (fido[id]) {
          const podcast = fido[id].meta;

          return (
            <li className="my__item">
              <div>
                <button className="my__delete" onClick={handlePodcastDelete(id)}>x</button>
                <img src={podcast.image['170']} className="my__item__image" onClick={handlePodcastPick(id)} />
                <p>{podcast.name}</p>
              </div>
            </li>
          );
        } else {
          return <li>{id}</li>;
        }
      })}
    </ul>
  );
}

export default PodcastList;
