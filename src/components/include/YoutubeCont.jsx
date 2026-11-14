import React from "react";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${youtube.id}`}
        target="_blank"
        rel="noreferrer"
      >
        {youtube.thumb ? (
          <img src={youtube.thumb} alt={youtube.title} loading="lazy" />
        ) : (
          <span className="poster-empty">NO IMAGE</span>
        )}
        <span>{youtube.title}</span>
      </a>
    </li>
  );
};

const YoutubeCont = ({ youtubes, emptyText }) => {
  const list = Array.isArray(youtubes)
    ? youtubes.filter((youtube) => youtube && youtube.id)
    : [];

  return (
    <section className="cont_youtube">
      <div className="container">
        <div className="youtube__inner">
          {list.length === 0 ? (
            <p className="empty-state">{emptyText || "표시할 영상이 없습니다."}</p>
          ) : null}
          <ul>
            {list.map((youtube, index) => (
              <YoutubeItem key={`${youtube.id}-${index}`} youtube={youtube} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YoutubeCont;
