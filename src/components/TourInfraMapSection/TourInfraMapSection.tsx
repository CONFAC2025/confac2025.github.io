import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { useCallback, useState } from "react";
import {
  GOOGLE_MAPS_API_KEY,
  MAP_CENTER,
  MAP_MARKERS,
  MARKER_SVG_PATH,
} from "./constant";

const TourInfraMapSection = () => {
  const [_, setMap] = useState<google.maps.Map | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<
    (typeof MAP_MARKERS)[0] | null
  >(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds();
    MAP_MARKERS.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // window.google이 로드된 후에만 마커 렌더링
  const isGoogleLoaded =
    typeof window !== "undefined" && window.google && window.google.maps;

  return (
    <div className="max-w-container py-[32px] pc:py-[48px]">
      <h2 className="text-[32px] pc:text-[48px] text-purple px-[16px] pc:px-[48px] mb-[24px]">
        관광 인프라
      </h2>

      <div className="w-full aspect-[390/313] pc:aspect-[1104/609] relative rounded-none pc:rounded-[12px] overflow-hidden">
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            center={MAP_CENTER}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
              disableDefaultUI: true,
              minZoom: 11,
            }}
            onClick={() => setSelectedMarker(null)} // 지도 배경 클릭 시 InfoWindow 닫기
          >
            {isGoogleLoaded &&
              MAP_MARKERS.map((marker) => (
                <Marker
                  key={marker.id}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  onClick={(e) => {
                    // 마커 클릭 시 InfoWindow 열기, 이벤트 버블링 방지
                    e.domEvent &&
                      e.domEvent.stopPropagation &&
                      e.domEvent.stopPropagation();
                    setSelectedMarker(marker);
                  }}
                  options={{
                    icon: {
                      path: MARKER_SVG_PATH,
                      fillColor: "rgba(26, 26, 26, 1)",
                      fillOpacity: 1,
                      strokeColor: "#fff",
                      strokeWeight: 2,
                      scale: 1.5,
                      anchor: new window.google.maps.Point(12, 24),
                    },
                  }}
                />
              ))}

            {isGoogleLoaded && selectedMarker && (
              <InfoWindow
                options={{
                  headerDisabled: true,
                  maxWidth: 300,
                  minWidth: 200,
                }}
                position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div className="flex">
                  {/* 오른쪽 상단 close 버튼 왼쪽에 올 콘텐츠 */}
                  <img
                    src={selectedMarker.image}
                    alt={selectedMarker.name}
                    className="w-[70px] h-[70px] object-cover rounded mr-2"
                  />

                  <div className="flex flex-col gap-[6px]">
                    <h3 className="font-bold">{selectedMarker.name}</h3>
                    <p className="text-sm">{selectedMarker.description}</p>
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default TourInfraMapSection;
