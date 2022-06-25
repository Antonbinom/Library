export const maps = () => {
  const removeDefoultMarkers = (map, geo) => {
    let placemark = new ymaps.Placemark(geo, {}, {});

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
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

  function newsMap() {
    const geo = [54.168288, 37.585503];
    let map = new ymaps.Map('news-map', {
      center: geo, // ваши данные
      zoom: 18,
    });
    removeDefoultMarkers(map, geo);
  }

  ymaps.ready(afficheMap);
  ymaps.ready(complexMap);
  ymaps.ready(newsMap);
};
