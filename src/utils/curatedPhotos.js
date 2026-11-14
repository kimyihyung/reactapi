// API 키가 없거나 요청이 실패했을 때 화면이 비지 않도록 쓰는 큐레이션 이미지입니다.
// 이미지는 Unsplash 공개 CDN(images.unsplash.com)에서 오며 API 키가 필요하지 않습니다.
// tag / keywords 는 이 사이트의 태그 필터와 검색에 쓰입니다.

const unsplashUrl = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

const curatedPhotos = [
  {
    id: "photo-1506744038136-46273834b3fb",
    alt_description: "해 질 녘 산과 호수가 있는 계곡",
    urls: { regular: unsplashUrl("photo-1506744038136-46273834b3fb"), small: unsplashUrl("photo-1506744038136-46273834b3fb", 480) },
    tag: "자연",
    keywords: ["nature", "lake", "mountain", "sunset"],
  },
  {
    id: "photo-1470071459604-3b5ec3a7fe05",
    alt_description: "해 뜰 무렵 안개 낀 초록 언덕",
    urls: { regular: unsplashUrl("photo-1470071459604-3b5ec3a7fe05"), small: unsplashUrl("photo-1470071459604-3b5ec3a7fe05", 480) },
    tag: "자연",
    keywords: ["nature", "hill", "sunrise", "fog"],
  },
  {
    id: "photo-1441974231531-c6227db76b6e",
    alt_description: "햇살이 스며드는 소나무 숲길",
    urls: { regular: unsplashUrl("photo-1441974231531-c6227db76b6e"), small: unsplashUrl("photo-1441974231531-c6227db76b6e", 480) },
    tag: "자연",
    keywords: ["nature", "forest", "sunlight"],
  },
  {
    id: "photo-1501785888041-af3ef285b470",
    alt_description: "산에 둘러싸인 청록색 호수와 작은 보트",
    urls: { regular: unsplashUrl("photo-1501785888041-af3ef285b470"), small: unsplashUrl("photo-1501785888041-af3ef285b470", 480) },
    tag: "자연",
    keywords: ["nature", "lake", "boat", "mountain"],
  },
  {
    id: "photo-1518791841217-8f162f1e1131",
    alt_description: "자리에 누워 있는 줄무늬 고양이",
    urls: { regular: unsplashUrl("photo-1518791841217-8f162f1e1131"), small: unsplashUrl("photo-1518791841217-8f162f1e1131", 480) },
    tag: "동물",
    keywords: ["animal", "cat", "pet"],
  },
  {
    id: "photo-1517841905240-472988babdf9",
    alt_description: "파란 벽 앞에서 웃고 있는 데님 재킷 여성",
    urls: { regular: unsplashUrl("photo-1517841905240-472988babdf9"), small: unsplashUrl("photo-1517841905240-472988babdf9", 480) },
    tag: "인물",
    keywords: ["people", "portrait", "woman", "smile"],
  },
  {
    id: "photo-1500648767791-00dcc994a43e",
    alt_description: "회색 재킷을 입고 정면을 보는 남성",
    urls: { regular: unsplashUrl("photo-1500648767791-00dcc994a43e"), small: unsplashUrl("photo-1500648767791-00dcc994a43e", 480) },
    tag: "인물",
    keywords: ["people", "portrait", "man"],
  },
  {
    id: "photo-1494790108377-be9c29b29330",
    alt_description: "빨간 옷을 입고 환하게 웃는 여성",
    urls: { regular: unsplashUrl("photo-1494790108377-be9c29b29330"), small: unsplashUrl("photo-1494790108377-be9c29b29330", 480) },
    tag: "인물",
    keywords: ["people", "portrait", "woman", "smile"],
  },
  {
    id: "photo-1534528741775-53994a69daeb",
    alt_description: "푸른빛 조명을 받은 얼굴 클로즈업",
    urls: { regular: unsplashUrl("photo-1534528741775-53994a69daeb"), small: unsplashUrl("photo-1534528741775-53994a69daeb", 480) },
    tag: "인물",
    keywords: ["people", "portrait", "light"],
  },
  {
    id: "photo-1524504388940-b1c1722653e1",
    alt_description: "어두운 배경에서 머리카락을 넘기는 여성",
    urls: { regular: unsplashUrl("photo-1524504388940-b1c1722653e1"), small: unsplashUrl("photo-1524504388940-b1c1722653e1", 480) },
    tag: "인물",
    keywords: ["people", "portrait", "woman"],
  },
  {
    id: "photo-1506905925346-21bda4d32df4",
    alt_description: "구름 바다 위로 솟은 설산의 일출",
    urls: { regular: unsplashUrl("photo-1506905925346-21bda4d32df4"), small: unsplashUrl("photo-1506905925346-21bda4d32df4", 480) },
    tag: "자연",
    keywords: ["nature", "mountain", "sunrise", "snow"],
  },
  {
    id: "photo-1469474968028-56623f02e42e",
    alt_description: "바위 봉우리와 초록 능선에 내리쬐는 빛",
    urls: { regular: unsplashUrl("photo-1469474968028-56623f02e42e"), small: unsplashUrl("photo-1469474968028-56623f02e42e", 480) },
    tag: "자연",
    keywords: ["nature", "hill", "light"],
  },
  {
    id: "photo-1447752875215-b2761acb3c5d",
    alt_description: "숲을 가로지르는 나무 데크 산책로",
    urls: { regular: unsplashUrl("photo-1447752875215-b2761acb3c5d"), small: unsplashUrl("photo-1447752875215-b2761acb3c5d", 480) },
    tag: "자연",
    keywords: ["nature", "forest", "path"],
  },
  {
    id: "photo-1433086966358-54859d0ed716",
    alt_description: "이끼 낀 협곡에 떨어지는 폭포와 다리",
    urls: { regular: unsplashUrl("photo-1433086966358-54859d0ed716"), small: unsplashUrl("photo-1433086966358-54859d0ed716", 480) },
    tag: "자연",
    keywords: ["nature", "waterfall", "bridge"],
  },
  {
    id: "photo-1426604966848-d7adac402bff",
    alt_description: "거대한 화강암 절벽 아래 계곡과 소나무",
    urls: { regular: unsplashUrl("photo-1426604966848-d7adac402bff"), small: unsplashUrl("photo-1426604966848-d7adac402bff", 480) },
    tag: "자연",
    keywords: ["nature", "valley", "cliff", "tree"],
  },
  {
    id: "photo-1472214103451-9374bd1c798e",
    alt_description: "일출 무렵 돌 원이 있는 초록 언덕",
    urls: { regular: unsplashUrl("photo-1472214103451-9374bd1c798e"), small: unsplashUrl("photo-1472214103451-9374bd1c798e", 480) },
    tag: "자연",
    keywords: ["nature", "hill", "sunrise"],
  },
  {
    id: "photo-1500530855697-b586d89ba3ee",
    alt_description: "붉은 사암 협곡을 지나는 사막 도로",
    urls: { regular: unsplashUrl("photo-1500530855697-b586d89ba3ee"), small: unsplashUrl("photo-1500530855697-b586d89ba3ee", 480) },
    tag: "자연",
    keywords: ["nature", "desert", "road", "canyon"],
  },
  {
    id: "photo-1493246507139-91e8fad9978e",
    alt_description: "노을에 물든 봉우리와 호수 반영",
    urls: { regular: unsplashUrl("photo-1493246507139-91e8fad9978e"), small: unsplashUrl("photo-1493246507139-91e8fad9978e", 480) },
    tag: "자연",
    keywords: ["nature", "mountain", "lake", "sunset"],
  },
  {
    id: "photo-1475924156734-496f6cac6ec1",
    alt_description: "구름이 낀 채 해가 지는 바다",
    urls: { regular: unsplashUrl("photo-1475924156734-496f6cac6ec1"), small: unsplashUrl("photo-1475924156734-496f6cac6ec1", 480) },
    tag: "자연",
    keywords: ["nature", "sea", "sunset", "sky"],
  },
  {
    id: "photo-1497366216548-37526070297c",
    alt_description: "사람 없는 현대적인 사무 공간 복도",
    urls: { regular: unsplashUrl("photo-1497366216548-37526070297c"), small: unsplashUrl("photo-1497366216548-37526070297c", 480) },
    tag: "도시·건축",
    keywords: ["architecture", "office", "interior"],
  },
  {
    id: "photo-1486406146926-c627a92ad1ab",
    alt_description: "올려다본 유리 고층 빌딩들",
    urls: { regular: unsplashUrl("photo-1486406146926-c627a92ad1ab"), small: unsplashUrl("photo-1486406146926-c627a92ad1ab", 480) },
    tag: "도시·건축",
    keywords: ["architecture", "building", "city", "glass"],
  },
  {
    id: "photo-1487958449943-2429e8be8625",
    alt_description: "하늘로 솟은 흰색 각진 현대 건축물",
    urls: { regular: unsplashUrl("photo-1487958449943-2429e8be8625"), small: unsplashUrl("photo-1487958449943-2429e8be8625", 480) },
    tag: "도시·건축",
    keywords: ["architecture", "building", "minimal"],
  },
  {
    id: "photo-1449824913935-59a10b8d2000",
    alt_description: "고층 빌딩 사이로 난 도심 거리",
    urls: { regular: unsplashUrl("photo-1449824913935-59a10b8d2000"), small: unsplashUrl("photo-1449824913935-59a10b8d2000", 480) },
    tag: "도시·건축",
    keywords: ["architecture", "city", "street"],
  },
  {
    id: "photo-1514565131-fce0801e5785",
    alt_description: "물 위에서 바라본 뉴욕 맨해튼 스카이라인",
    urls: { regular: unsplashUrl("photo-1514565131-fce0801e5785"), small: unsplashUrl("photo-1514565131-fce0801e5785", 480) },
    tag: "도시·건축",
    keywords: ["architecture", "city", "skyline", "newyork"],
  },
  {
    id: "photo-1461749280684-dccba630e2f6",
    alt_description: "색이 입혀진 코드가 가득한 편집기 화면",
    urls: { regular: unsplashUrl("photo-1461749280684-dccba630e2f6"), small: unsplashUrl("photo-1461749280684-dccba630e2f6", 480) },
    tag: "코딩·업무",
    keywords: ["coding", "code", "developer", "screen"],
  },
  {
    id: "photo-1498050108023-c5249f4df085",
    alt_description: "흰 책상 위에서 코드를 띄운 노트북",
    urls: { regular: unsplashUrl("photo-1498050108023-c5249f4df085"), small: unsplashUrl("photo-1498050108023-c5249f4df085", 480) },
    tag: "코딩·업무",
    keywords: ["coding", "desk", "laptop"],
  },
  {
    id: "photo-1555066931-4365d14bab8c",
    alt_description: "어두운 곳에서 코드를 보여주는 노트북",
    urls: { regular: unsplashUrl("photo-1555066931-4365d14bab8c"), small: unsplashUrl("photo-1555066931-4365d14bab8c", 480) },
    tag: "코딩·업무",
    keywords: ["coding", "laptop", "night"],
  },
  {
    id: "photo-1484417894907-623942c8ee29",
    alt_description: "책과 함께 놓인 노트북의 코드 화면",
    urls: { regular: unsplashUrl("photo-1484417894907-623942c8ee29"), small: unsplashUrl("photo-1484417894907-623942c8ee29", 480) },
    tag: "코딩·업무",
    keywords: ["coding", "laptop", "desk"],
  },
  {
    id: "photo-1454165804606-c3d57bc86b40",
    alt_description: "노트북과 메모를 함께 보는 회의 장면",
    urls: { regular: unsplashUrl("photo-1454165804606-c3d57bc86b40"), small: unsplashUrl("photo-1454165804606-c3d57bc86b40", 480) },
    tag: "코딩·업무",
    keywords: ["work", "meeting", "team"],
  },
  {
    id: "photo-1522071820081-009f0129c71c",
    alt_description: "둥글게 모여 노트북으로 작업하는 사람들",
    urls: { regular: unsplashUrl("photo-1522071820081-009f0129c71c"), small: unsplashUrl("photo-1522071820081-009f0129c71c", 480) },
    tag: "코딩·업무",
    keywords: ["work", "team", "laptop"],
  },
  {
    id: "photo-1504384308090-c894fdcc538d",
    alt_description: "책상이 늘어선 개방형 사무실",
    urls: { regular: unsplashUrl("photo-1504384308090-c894fdcc538d"), small: unsplashUrl("photo-1504384308090-c894fdcc538d", 480) },
    tag: "코딩·업무",
    keywords: ["work", "office", "desk"],
  },
  {
    id: "photo-1493397212122-2b85dda8106b",
    alt_description: "물결이 흐르는 듯한 흰색 건물 외벽",
    urls: { regular: unsplashUrl("photo-1493397212122-2b85dda8106b"), small: unsplashUrl("photo-1493397212122-2b85dda8106b", 480) },
    tag: "도시·건축",
    keywords: ["architecture", "facade", "minimal"],
  },
  {
    id: "photo-1470770841072-f978cf4d019e",
    alt_description: "호숫가에 자리한 작은 나무 오두막",
    urls: { regular: unsplashUrl("photo-1470770841072-f978cf4d019e"), small: unsplashUrl("photo-1470770841072-f978cf4d019e", 480) },
    tag: "자연",
    keywords: ["nature", "lake", "cabin", "mountain"],
  },
  {
    id: "photo-1507525428034-b723cf961d3e",
    alt_description: "파도가 밀려오는 새벽 바다",
    urls: { regular: unsplashUrl("photo-1507525428034-b723cf961d3e"), small: unsplashUrl("photo-1507525428034-b723cf961d3e", 480) },
    tag: "자연",
    keywords: ["nature", "sea", "beach", "sunrise"],
  },
  {
    id: "photo-1519046904884-53103b34b206",
    alt_description: "하얀 모래사장의 야자수와 파라솔",
    urls: { regular: unsplashUrl("photo-1519046904884-53103b34b206"), small: unsplashUrl("photo-1519046904884-53103b34b206", 480) },
    tag: "자연",
    keywords: ["nature", "beach", "palm", "summer"],
  },
  {
    id: "photo-1502082553048-f009c37129b9",
    alt_description: "초록 들판에 홀로 선 큰 나무",
    urls: { regular: unsplashUrl("photo-1502082553048-f009c37129b9"), small: unsplashUrl("photo-1502082553048-f009c37129b9", 480) },
    tag: "자연",
    keywords: ["nature", "tree", "field"],
  },
  {
    id: "photo-1519681393784-d120267933ba",
    alt_description: "별이 쏟아지는 밤의 설산",
    urls: { regular: unsplashUrl("photo-1519681393784-d120267933ba"), small: unsplashUrl("photo-1519681393784-d120267933ba", 480) },
    tag: "자연",
    keywords: ["nature", "mountain", "night", "stars"],
  },
  {
    id: "photo-1500534623283-312aade485b7",
    alt_description: "언덕 너머로 지는 해",
    urls: { regular: unsplashUrl("photo-1500534623283-312aade485b7"), small: unsplashUrl("photo-1500534623283-312aade485b7", 480) },
    tag: "자연",
    keywords: ["nature", "sunset", "hill"],
  },
  {
    id: "photo-1465101162946-4377e57745c3",
    alt_description: "보랏빛으로 물든 은하수",
    urls: { regular: unsplashUrl("photo-1465101162946-4377e57745c3"), small: unsplashUrl("photo-1465101162946-4377e57745c3", 480) },
    tag: "자연",
    keywords: ["nature", "night", "sky", "stars"],
  },
  {
    id: "photo-1444703686981-a3abbc4d4fe3",
    alt_description: "은하수 아래에 선 사람의 실루엣",
    urls: { regular: unsplashUrl("photo-1444703686981-a3abbc4d4fe3"), small: unsplashUrl("photo-1444703686981-a3abbc4d4fe3", 480) },
    tag: "자연",
    keywords: ["nature", "night", "sky", "milkyway"],
  },
  {
    id: "photo-1502672260266-1c1ef2d93688",
    alt_description: "초록 식물이 가득한 밝은 거실",
    urls: { regular: unsplashUrl("photo-1502672260266-1c1ef2d93688"), small: unsplashUrl("photo-1502672260266-1c1ef2d93688", 480) },
    tag: "인테리어",
    keywords: ["interior", "livingroom", "plant"],
  },
  {
    id: "photo-1522708323590-d24dbb6b0267",
    alt_description: "흰색 주방과 거실이 이어진 인테리어",
    urls: { regular: unsplashUrl("photo-1522708323590-d24dbb6b0267"), small: unsplashUrl("photo-1522708323590-d24dbb6b0267", 480) },
    tag: "인테리어",
    keywords: ["interior", "kitchen", "home"],
  },
  {
    id: "photo-1502602898657-3e91760cbb34",
    alt_description: "해 질 무렵 강 너머로 보이는 에펠탑",
    urls: { regular: unsplashUrl("photo-1502602898657-3e91760cbb34"), small: unsplashUrl("photo-1502602898657-3e91760cbb34", 480) },
    tag: "도시·건축",
    keywords: ["architecture", "paris", "city"],
  },
];

// 큐레이션 모드에서 쓰는 필터 목록입니다. (실제 API 모드에서는 Unsplash 주제 목록을 씁니다.)
export const curatedTags = ["전체", "자연", "도시·건축", "인물", "코딩·업무", "인테리어", "동물"];

// 큐레이션 이미지의 태그/설명으로 검색합니다.
export const searchCuratedPhotos = (query) => {
  const q = (query || "").trim().toLowerCase();
  if (!q) return curatedPhotos;
  return curatedPhotos.filter((photo) => {
    const haystack = [photo.alt_description, photo.tag, ...photo.keywords]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
};

export default curatedPhotos;
