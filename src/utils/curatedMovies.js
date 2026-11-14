// API 키가 없거나 요청이 실패했을 때 화면이 비지 않도록 쓰는 큐레이션 데이터입니다.
// 포스터는 TMDB 공개 이미지 CDN(image.tmdb.org)에서 오며 API 키가 필요하지 않습니다.
// 키는 어떤 형태로도 이 파일에 넣지 않습니다.

const curatedMovies = [
  { id: 278, title: "쇼생크 탈출", year: "1994", vote_average: 8.7, poster_path: "qV9BQZdiM8foEzDz0Ag5hGWE5qM.jpg" },
  { id: 238, title: "대부", year: "1972", vote_average: 8.7, poster_path: "1yvBkSv4ZLS1GohlmMDmdpSgfYo.jpg" },
  { id: 155, title: "다크 나이트", year: "2008", vote_average: 8.5, poster_path: "xQPgyZOBhaz1GdCQIPf5A5VeFzO.jpg" },
  { id: 27205, title: "인셉션", year: "2010", vote_average: 8.4, poster_path: "atSxEGstxXRoSKDQFBgqQ5lpGSt.jpg" },
  { id: 157336, title: "인터스텔라", year: "2014", vote_average: 8.5, poster_path: "gDN2NWtHbs8ZWEBQM8Dh5OVXdb4.jpg" },
  { id: 680, title: "펄프 픽션", year: "1994", vote_average: 8.5, poster_path: "lnRkeQstaCvfMahZq7p9eAWzK1a.jpg" },
  { id: 13, title: "포레스트 검프", year: "1994", vote_average: 8.5, poster_path: "l8wvbQQIBV8LBHmx3Wx9xbE2kzt.jpg" },
  { id: 603, title: "매트릭스", year: "1999", vote_average: 8.3, poster_path: "fxBxoXFAYKWde6lKzXxSusn18Av.jpg" },
  { id: 129, title: "센과 치히로의 행방불명", year: "2001", vote_average: 8.5, poster_path: "u1L4qxIu5sC2P082uMHYt7Ifvnj.jpg" },
  { id: 496243, title: "기생충", year: "2019", vote_average: 8.5, poster_path: "jjHccoFjbqlfr4VGLVLT7yek0Xn.jpg" },
  { id: 122, title: "반지의 제왕: 왕의 귀환", year: "2003", vote_average: 8.5, poster_path: "n8BPIRqvj1SdTRND828ANXhmSng.jpg" },
  { id: 424, title: "쉰들러 리스트", year: "1993", vote_average: 8.6, poster_path: "oyyUcGwLX7LTFS1pQbLrQpyzIyt.jpg" },
  { id: 372058, title: "너의 이름은.", year: "2016", vote_average: 8.5, poster_path: "2DJCufz3Oa703PbLjNX1pM6MCG2.jpg" },
  { id: 299534, title: "어벤져스: 엔드게임", year: "2019", vote_average: 8.2, poster_path: "z7ilT5rNN9kDo8JZmgyhM6ej2xv.jpg" },
  { id: 361743, title: "탑건: 매버릭", year: "2022", vote_average: 8.2, poster_path: "jeqXUwNilvNqNXqAHsdwm5pEfae.jpg" },
  { id: 438631, title: "듄", year: "2021", vote_average: 7.8, poster_path: "7zV8FTYofAORGm0Umgh1mNNCym8.jpg" },
  { id: 634649, title: "스파이더맨: 노 웨이 홈", year: "2021", vote_average: 7.9, poster_path: "fvqoI9r1GU2EFkc0xjZ6dKCuDVR.jpg" },
  { id: 872585, title: "오펜하이머", year: "2023", vote_average: 8.0, poster_path: "jpD6z9fgNe7OqsHoDeAWQWoULde.jpg" },
  { id: 346698, title: "바비", year: "2023", vote_average: 6.9, poster_path: "h3mUJ9WEJ8PzA450ad4hrjsaiqG.jpg" },
  { id: 545611, title: "에브리씽 에브리웨어 올 앳 원스", year: "2022", vote_average: 7.7, poster_path: "dd29Kt2p2voyP2sB6p3jC36A7ce.jpg" },
  { id: 508442, title: "소울", year: "2020", vote_average: 8.1, poster_path: "qJiaB4RJMM5Oh6A4rqrEOHQUJbu.jpg" },
  { id: 324857, title: "스파이더맨: 뉴 유니버스", year: "2018", vote_average: 8.4, poster_path: "d9V6Q9vpVpmaca7vwSUbCajtDb3.jpg" },
  { id: 550, title: "파이트 클럽", year: "1999", vote_average: 8.4, poster_path: "eKZ07Ted7VHxQjbuZrRBFOamcKJ.jpg" },
  { id: 807, title: "세븐", year: "1995", vote_average: 8.4, poster_path: "izzk8dbmrLowcoGbFaebqJvzyXg.jpg" },
  { id: 497, title: "그린 마일", year: "1999", vote_average: 8.5, poster_path: "pk1TPODQVnI8GdLf0DhlJQYxWjd.jpg" },
  { id: 637, title: "인생은 아름다워", year: "1997", vote_average: 8.4, poster_path: "iyQ8pmCpmnPrGtaHMfmSvQLv8Fy.jpg" },
  { id: 12, title: "니모를 찾아서", year: "2003", vote_average: 7.8, poster_path: "9ViCYfZ0whpwtKbM2WJP5PfsG2x.jpg" },
];

export default curatedMovies;
