<template>
  <base-map :map-options="mapOptions" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from '../base-map'
import addChartPie from '../../../snippet/echarts/pie'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      mapOptions: {
        style: 'mapbox://styles/huanglii/ck1naxpm00gvj1co6r4pxgxzl?optimize=true',
        center: [(105.28976 + 110.199858) / 2, (28.160225 + 32.2011870) / 2],
        zoom: 6,
        minZoom: 4
      }
    }
  },
  methods: {
    handleMapLoaded (map) {
      addChartPie(map, this.$withBase('/data/point.geojson'))
    }
  }
}
</script>
