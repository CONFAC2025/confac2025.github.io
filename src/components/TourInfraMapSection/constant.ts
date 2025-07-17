export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const MAP_CENTER = { lat: 37.47534, lng: 129.111858 };

export const MAP_MARKERS = [
  {
    id: 2,
    name: "대진해수욕장",
    lat: 37.585453,
    lng: 129.109411,
    description: "낮은 수심과 적당한 파도로 서핑 최적지",
    image: `${import.meta.env.VITE_BASE}images/tourist-spot/DAEJIN_BEACH.jpg`,
  },
  {
    id: 3,
    name: "천곡황금박쥐동굴",
    lat: 37.517387,
    lng: 129.110224,
    description: "4~5억년 전 생성된 석회암 동굴, 황금박쥐 서식지",
    image: `${import.meta.env.VITE_BASE}images/tourist-spot/CHEONGOK_CAVE.jpg`,
  },
  {
    id: 4,
    name: "망상해수욕장",
    lat: 37.594108,
    lng: 129.090606,
    description: "2km 백사장, 얕은 수심의 가족 해수욕장",
    image: `${import.meta.env.VITE_BASE}images/tourist-spot/MANGSANG_BEACH.jpg`,
  },
  {
    id: 5,
    name: "어달해수욕장",
    lat: 37.56793,
    lng: 129.118596,
    description: "조용한 해변, 오션뷰 카페와 펜션 밀집",
    image: `${import.meta.env.VITE_BASE}images/tourist-spot/EODAL_BEACH.jpg`,
  },
  {
    id: 6,
    name: "도째비골 스카이밸리",
    lat: 37.555166,
    lng: 129.119079,
    description: "스카이워크, 짚라인 등 체험시설",
    image: `${
      import.meta.env.VITE_BASE
    }images/tourist-spot/DOJJAEBIGOL_SKYVALLEY.jpg`,
  },
  {
    id: 7,
    name: "묵호등대",
    lat: 37.554476,
    lng: 129.118528,
    description: "동해안의 대표 등대, 전망대",
    image: `${
      import.meta.env.VITE_BASE
    }images/tourist-spot/MUKHO_LIGHTHOUSE.jpg`,
  },
  {
    id: 8,
    name: "논골담길",
    lat: 37.552859,
    lng: 129.116563,
    description: "감성 벽화마을, 등대오름길",
    image: `${
      import.meta.env.VITE_BASE
    }images/tourist-spot/NONGOL_MURAL_VILLAGE.jpg`,
  },
];

export const MARKER_SVG_PATH =
  "M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 13 8.01 13.55.29.3.69.45 1.09.45s.8-.15 1.09-.45C13.5 24 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z";
