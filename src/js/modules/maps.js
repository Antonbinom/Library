export const maps = () => {
  const removeDefoultMarkers = (map, geo) => {
    let placemark = new ymaps.Placemark(geo, {}, {});

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
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

  ymaps.ready(afficheMap);
  ymaps.ready(complexMap);
};
