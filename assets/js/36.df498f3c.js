(window.webpackJsonp=window.webpackJsonp||[]).push([[36,51],{57:function(t,e,n){},61:function(t,e,n){"use strict";var i=n(57);n.n(i).a},62:function(t,e,n){"use strict";n.r(e);n(68),n(69),n(67),n(31);var i=n(75),a=n.n(i),o=n(72),r=n.n(o),s=(n(76),n(73)),l=n(74),c=function(){function t(e){Object(s.a)(this,t),this._className="mapboxgl-ctrl",this._options=Object.assign({},{zoom:1,center:[0,0]},e),this._onClickHome=this._onClickHome.bind(this)}return Object(l.a)(t,[{key:"onAdd",value:function(t){return this._map=t,this._container=p.create("div","".concat(this._className," mapboxgl-ctrl-group")),this._render(),this._container}},{key:"onRemove",value:function(){p.remove(this._container),this._map=void 0}},{key:"_render",value:function(){var t=p.create("button","".concat(this._className,"-icon ").concat(this._className,"-home"),this._container);t.type="button",t.addEventListener("click",this._onClickHome)}},{key:"_onClickHome",value:function(){this._map.easeTo(this._options)}}]),t}(),p={create:function(t,e,n){var i=window.document.createElement(t);return void 0!==e&&(i.className=e),n&&n.appendChild(i),i},remove:function(t){t.parentNode&&t.parentNode.removeChild(t)}},d=(n(77),{name:"base-map",props:{height:{type:Number,default:520},mapOptions:{type:Object},mapClickable:{type:Boolean,default:!0},borderOptions:{type:Object}},data:function(){return{map:null,maploaded:!1,mapDefaultOptions:{container:a()(),style:"mapbox://styles/huanglii/ck1n985b20oan1cmhp4i0o9c9?optimize=true",center:[-74.5,40],zoom:6,minZoom:0,maxZoom:22,scrollZoom:!0,pitch:0,bearing:0,antialias:!1},borderDefaultOptions:{layout:{visibility:"none"},paint:{"line-color":"hsl(357, 67%, 60%)","line-opacity":["step",["zoom"],1,10,0],"line-width":["interpolate",["linear"],["zoom"],0,1,22,3]},beforeId:""}}},computed:{mapContainer:function(){return this.mapOptions.container||this.mapDefaultOptions.container}},mounted:function(){var t=Object.assign({},this.mapDefaultOptions,this.mapOptions);this.initMap(t),window.addEventListener("resize",this.resize)},methods:{initMap:function(t){r.a.accessToken="pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2pzNHBtendwMDZ2ZDQzbnVmZXdtMDlvdiJ9.GSija86yNNR4ssBtFFpx0g",this.map=new r.a.Map(t),this.map.addControl(new r.a.NavigationControl,"top-left");var e=t.center,n=t.zoom;this.map.addControl(new c({center:e,zoom:n}),"bottom-left"),this.map.addControl(new r.a.FullscreenControl,"top-left"),this.map.on("load",this.handleMapLoaded)},handleMapLoaded:function(t){this.maploaded=!0,this.$emit("load",t.target),this.mapClickable&&this.map.on("click",this.handleMapClick)},handleMapClick:function(t){console.log(t.lngLat);var e=this.map.queryRenderedFeatures(t.point);if(e.length>0){var n=e[0],i=n.layer,a=n.properties;Object.keys(a).length>0&&(new r.a.Popup).setLngLat(t.lngLat).setHTML(this.createPropHtml(i.id,a)).addTo(this.map)}},createPropHtml:function(t,e){return'\n        <div class="title"><b>'.concat(t,'</b></div>\n        <div class="content">\n          ').concat(Object.keys(e).map(function(t){return"".concat("<p><b>".concat(t,": </b>").concat(e[t],"</p>"))}).join(""),"\n        </div>\n      ")},addBorderLayer:function(){var t=Object.assign({},this.borderDefaultOptions,this.borderOptions),e=t.layout,n=t.paint,i=t.beforeId;this.map.addSource("border",{type:"vector",url:"mapbox://huanglii.4nxu8jv0"}),this.map.addLayer({id:"border-2oej0r",source:"border","source-layer":"Border-2oej0r",type:"line",layout:e,paint:n},i||void 0)},resize:function(){this.map.resize()}}}),u=(n(61),n(0)),m=Object(u.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-wrapper"},[e("div",{style:{width:"100%",height:this.height+"px",borderRadius:"6px"},attrs:{id:this.mapContainer}},[this._t("custom")],2),this._v(" "),this.maploaded?this._t("default"):this._e()],2)},[],!1,null,null,null);e.default=m.exports},649:function(t,e,n){"use strict";n.r(e);var i,a=n(62),o=(n(67),n(257)),r=n(86),s=[[[-77.044211,38.852924],[-77.045659,38.860158],[-77.044232,38.862326],[-77.040879,38.865454],[-77.039936,38.867698],[-77.040338,38.86943],[-77.04264,38.872528],[-77.03696,38.878424],[-77.032309,38.87937]],[[-77.030056,38.880945],[-77.027645,38.881779],[-77.026946,38.882645],[-77.026942,38.885502],[-77.028054,38.887449],[-77.02806,38.892088],[-77.03364,38.892108],[-77.033643,38.899926]]],l=(i=[]).concat.apply(i,Object(o.a)(s.map(function(t){return t.map(function(t){return[t[0]+.01,t[1]]})})));var c={components:{baseMap:a.default},data:function(){return{mapOptions:{style:"mapbox://styles/huanglii/ck1naxpm00gvj1co6r4pxgxzl?optimize=true",center:[-77.03,38.875],zoom:12}}},methods:{handleMapLoaded:function(t){!function(t){var e=Object(r.multiLineString)(s),n=Object(r.lineString)(l),i={layout:{"line-cap":"round","line-join":"round"},paint:{"line-color":"red","line-width":10,"line-gradient":["interpolate",["linear"],["line-progress"],0,"blue",.1,"royalblue",.3,"cyan",.5,"lime",.7,"yellow",1,"red"]}};t.addLayer(Object.assign({id:"line-gradient-layer-1",type:"line",source:{type:"geojson",lineMetrics:!0,data:e}},i)),t.addLayer(Object.assign({id:"line-gradient-layer-2",type:"line",source:{type:"geojson",lineMetrics:!0,data:n}},i))}(t)}}},p=n(0),d=Object(p.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("base-map",{attrs:{"map-options":this.mapOptions},on:{load:this.handleMapLoaded}})},[],!1,null,null,null);e.default=d.exports}}]);