import React from "react";

// 큐레이션 이미지는 사진 페이지 주소가 없으므로 주제 검색 페이지로 연결합니다.
const getLink = (image) => {
  if (image.links && image.links.html) return image.links.html;
  if (image.id && !String(image.id).startsWith("photo-")) {
    return `https://unsplash.com/photos/${image.id}`;
  }
  const keyword = Array.isArray(image.keywords) ? image.keywords[0] : "";
  return keyword
    ? `https://unsplash.com/s/photos/${encodeURIComponent(keyword)}`
    : "https://unsplash.com/";
};

const getAlt = (image) => {
  if (image.alt_description) return image.alt_description;
  if (image.description) return image.description;
  if (image.user && image.user.name) return `${image.user.name}의 사진`;
  return "Unsplash 이미지";
};

function UnsplashItem({ image }) {
  const src =
    (image.urls && (image.urls.regular || image.urls.small)) || "";

  return (
    <li>
      <a href={getLink(image)} target="_blank" rel="noreferrer">
        <img src={src} alt={getAlt(image)} loading="lazy" />
      </a>
    </li>
  );
}

function UnsplashCont({ images, loading, emptyText }) {
  // API 응답이 배열이 아니어도(예: 401 오류 객체) 화면이 깨지지 않게 다룹니다.
  const list = Array.isArray(images)
    ? images.filter(
        (image) => image && image.urls && (image.urls.regular || image.urls.small)
      )
    : [];

  return (
    <section className="cont__unsplash">
      <div className="container">
        {loading && list.length === 0 ? (
          <p className="empty-state">이미지를 불러오는 중입니다…</p>
        ) : null}
        {!loading && list.length === 0 ? (
          <p className="empty-state">
            {emptyText || "표시할 이미지가 없습니다."}
          </p>
        ) : null}
        <div className="unsplash__inner">
          <ul>
            {list.map((image, index) => (
              <UnsplashItem key={image.id || `image-${index}`} image={image} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default UnsplashCont;
