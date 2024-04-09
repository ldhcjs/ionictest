<template>
  <div id="map" style="width: 100%; height: 100%"></div>
</template>

<script setup lang="ts">
const script = document.createElement("script");
script.src =
  "https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=vgj9svcw0i";
script.async = true;
script.defer = true;
document.head.appendChild(script);
script.onload = () => {
  new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.5670135, 126.978374),
    zoom: 10,
  });
};
</script>
