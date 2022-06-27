export const maps = () => {
  const removeDefoultMarkers = (map, geo) => {
    const placemark = new ymaps.Placemark(geo, {}, {});
    const mapControls = [
      'geolocationControl',
      'fullscreenControl',
      'zoomControl',
      'rulerControl',
      'searchControl',
      'trafficControl',
      'typeSelector',
      'fullscreenControl',
      'zoomControl',
    ];
    mapControls.forEach(item => map.controls.remove(item));
    map.behaviors.disable(['scrollZoom']);
    map.geoObjects.add(placemark);
  };

  function afficheMap() {
    const geo = [54.168413, 37.586198];
    let map = new ymaps.Map('affiche-map', {
      center: geo, // ваши данные
      zoom: 18,
    });
    removeDefoultMarkers(map, geo);
  }

  function complexMap() {
    const geo = [54.195535, 37.610476];
    let map = new ymaps.Map('complex-map', {
      center: geo, // ваши данные
      zoom: 18,
    });
    removeDefoultMarkers(map, geo);
  }

  function postMap() {
    const geo = [54.168288, 37.585503];
    let map = new ymaps.Map('post-map', {
      center: geo, // ваши данные
      zoom: 18,
    });
    removeDefoultMarkers(map, geo);
  }

  ymaps.ready(afficheMap);
  ymaps.ready(complexMap);
  ymaps.ready(postMap);
};
