(window.webpackJsonp=window.webpackJsonp||[]).push([[43,51],{57:function(t,e,n){},61:function(t,e,n){"use strict";var a=n(57);n.n(a).a},62:function(t,e,n){"use strict";n.r(e);n(68),n(69),n(67),n(31);var a=n(75),i=n.n(a),o=n(72),s=n.n(o),r=(n(76),n(73)),c=n(74),p=function(){function t(e){Object(r.a)(this,t),this._className="mapboxgl-ctrl",this._options=Object.assign({},{zoom:1,center:[0,0]},e),this._onClickHome=this._onClickHome.bind(this)}return Object(c.a)(t,[{key:"onAdd",value:function(t){return this._map=t,this._container=l.create("div","".concat(this._className," mapboxgl-ctrl-group")),this._render(),this._container}},{key:"onRemove",value:function(){l.remove(this._container),this._map=void 0}},{key:"_render",value:function(){var t=l.create("button","".concat(this._className,"-icon ").concat(this._className,"-home"),this._container);t.type="button",t.addEventListener("click",this._onClickHome)}},{key:"_onClickHome",value:function(){this._map.easeTo(this._options)}}]),t}(),l={create:function(t,e,n){var a=window.document.createElement(t);return void 0!==e&&(a.className=e),n&&n.appendChild(a),a},remove:function(t){t.parentNode&&t.parentNode.removeChild(t)}},d=(n(77),{name:"base-map",props:{height:{type:Number,default:520},mapOptions:{type:Object},mapClickable:{type:Boolean,default:!0},borderOptions:{type:Object}},data:function(){return{map:null,maploaded:!1,mapDefaultOptions:{container:i()(),style:"mapbox://styles/huanglii/ck1n985b20oan1cmhp4i0o9c9?optimize=true",center:[-74.5,40],zoom:6,minZoom:0,maxZoom:22,scrollZoom:!0,pitch:0,bearing:0,antialias:!1},borderDefaultOptions:{layout:{visibility:"none"},paint:{"line-color":"hsl(357, 67%, 60%)","line-opacity":["step",["zoom"],1,10,0],"line-width":["interpolate",["linear"],["zoom"],0,1,22,3]},beforeId:""}}},computed:{mapContainer:function(){return this.mapOptions.container||this.mapDefaultOptions.container}},mounted:function(){var t=Object.assign({},this.mapDefaultOptions,this.mapOptions);this.initMap(t),window.addEventListener("resize",this.resize)},methods:{initMap:function(t){s.a.accessToken="pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2pzNHBtendwMDZ2ZDQzbnVmZXdtMDlvdiJ9.GSija86yNNR4ssBtFFpx0g",this.map=new s.a.Map(t),this.map.addControl(new s.a.NavigationControl,"top-left");var e=t.center,n=t.zoom;this.map.addControl(new p({center:e,zoom:n}),"bottom-left"),this.map.addControl(new s.a.FullscreenControl,"top-left"),this.map.on("load",this.handleMapLoaded)},handleMapLoaded:function(t){this.maploaded=!0,this.$emit("load",t.target),this.mapClickable&&this.map.on("click",this.handleMapClick)},handleMapClick:function(t){console.log(t.lngLat);var e=this.map.queryRenderedFeatures(t.point);if(e.length>0){var n=e[0],a=n.layer,i=n.properties;Object.keys(i).length>0&&(new s.a.Popup).setLngLat(t.lngLat).setHTML(this.createPropHtml(a.id,i)).addTo(this.map)}},createPropHtml:function(t,e){return'\n        <div class="title"><b>'.concat(t,'</b></div>\n        <div class="content">\n          ').concat(Object.keys(e).map(function(t){return"".concat("<p><b>".concat(t,": </b>").concat(e[t],"</p>"))}).join(""),"\n        </div>\n      ")},addBorderLayer:function(){var t=Object.assign({},this.borderDefaultOptions,this.borderOptions),e=t.layout,n=t.paint,a=t.beforeId;this.map.addSource("border",{type:"vector",url:"mapbox://huanglii.4nxu8jv0"}),this.map.addLayer({id:"border-2oej0r",source:"border","source-layer":"Border-2oej0r",type:"line",layout:e,paint:n},a||void 0)},resize:function(){this.map.resize()}}}),h=(n(61),n(0)),m=Object(h.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-wrapper"},[e("div",{style:{width:"100%",height:this.height+"px",borderRadius:"6px"},attrs:{id:this.mapContainer}},[this._t("custom")],2),this._v(" "),this.maploaded?this._t("default"):this._e()],2)},[],!1,null,null,null);e.default=m.exports},643:function(t,e,n){"use strict";n.r(e);var a={components:{baseMap:n(62).default},data:function(){return{mapOptions:{center:[106.54486062690614,29.56357402345421],zoom:10}}},methods:{handleMapLoaded:function(t){!function(t){t.addLayer({id:"wms-layer",type:"raster",source:{type:"raster",tiles:["https://900913.cn/geoserver/ows?service=WMS&version=1.3.0&request=GetMap&layers=china_admin:Chongqing&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&format=image%2Fpng&TRANSPARENT=TRUE"]}})}(t)}}},i=n(0),o=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("base-map",{attrs:{"map-options":this.mapOptions},on:{load:this.handleMapLoaded}})},[],!1,null,null,null);e.default=o.exports}}]);