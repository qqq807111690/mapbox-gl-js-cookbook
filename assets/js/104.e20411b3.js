(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{687:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[e("a",{attrs:{href:"http://www.opengeospatial.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("开放地理信息联盟（Open GeoSpatial Consortium，OGC）"),e("OutboundLink")],1)])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[e("a",{attrs:{href:""}},[t._v("开源空间信息基金会（Open Source Geospatial Foundation，OSGeo）")])])]),t._v(" "),e("p",[t._v("这里以 "),e("code",[t._v("GeoServer")]),t._v(" 服务为例，对常见服务标准简要说明以及如何在 "),e("code",[t._v("Mapbox GL JS")]),t._v(" 中使用。")]),t._v(" "),e("p",[t._v("Geoserver 2.15.1 版本提供的默认服务能力有：")]),t._v(" "),e("ul",[e("li",[t._v("TMS（1.0.0）")]),t._v(" "),e("li",[t._v("WMS（1.1.1、1.3.0）")]),t._v(" "),e("li",[t._v("WMTS（1.0.0）")]),t._v(" "),e("li",[t._v("WFS（1.0.0、1.1.0、2.0.0）")]),t._v(" "),e("li",[t._v("WCS（2.0.1、1.1.0、1.1.1、1.1、1.0.0）")]),t._v(" "),e("li",[t._v("WMS-C（1.1.1）")])]),t._v(" "),e("h2",{attrs:{id:"tms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tms","aria-hidden":"true"}},[t._v("#")]),t._v(" TMS")]),t._v(" "),e("blockquote",[e("p",[t._v("标准："),e("a",{attrs:{href:"https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tile Map Service"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Tile Map Service（瓦片地图服务），简称 "),e("code",[t._v("TMS")]),t._v("。")]),t._v(" "),e("p",[t._v("TMS 的切片坐标系统和组织方式可参考下图：\n")]),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:t.$withBase("/images/TMS切片坐标系统和组织方式.png")}})]),e("p"),t._v(" "),e("p",[t._v("Mapbox GL JS 在加载 TMS 服务时，需要设置 "),e("code",[t._v("scheme")]),t._v(" 属性为 "),e("code",[t._v("tms")]),t._v("。"),e("code",[t._v("scheme")]),t._v(" 属性影像瓦片坐标 "),e("code",[t._v("y")]),t._v(" 轴的方向。有两个值可选 "),e("code",[t._v("xyz")]),t._v(" 和 "),e("code",[t._v("tms")]),t._v("，默认 "),e("code",[t._v("xyz")]),t._v("。\n其中 "),e("code",[t._v("xyz")]),t._v(" 代表常用的切片规则，即 "),e("code",[t._v("OGC")]),t._v(" 标准，切片源点在左上角。"),e("code",[t._v("tms")]),t._v(" 是 "),e("code",[t._v("OSGeo")]),t._v(" 标准，切片源点是左下角。")]),t._v(" "),e("p",[t._v("加载示例：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vector'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tiles'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://a.example.com/geoserver/gwc/service/tms/1.0.0/example:example@EPSG:900913@pbf/{z}/{x}/{y}.pbf'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scheme'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tms'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("ClientOnly",[e("common-code-view",{attrs:{name:"service-tms"}})],1),t._v(" "),e("h2",{attrs:{id:"wms"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wms","aria-hidden":"true"}},[t._v("#")]),t._v(" WMS")]),t._v(" "),e("blockquote",[e("p",[t._v("标准："),e("a",{attrs:{href:"http://www.opengeospatial.org/standards/wms",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Map Service"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Web Map Service（Web 地图服务），简称 "),e("code",[t._v("WMS")]),t._v("。WMS 标准定义了允许用户通过 HTTP 对空间数据进行渲染出图等操作。WMS 服务中包括以下 3 个操作：")]),t._v(" "),e("ol",[e("li",[t._v("GetCapabilities（获取服务中的要素类及支持的操作）")]),t._v(" "),e("li",[t._v("GetMap（获取地图）")]),t._v(" "),e("li",[t._v("GetFeatureInfo（根据地图上的像素点获取更详细的要素信息，类似Identify功能）")])]),t._v(" "),e("p",[t._v("利用 "),e("code",[t._v("GetMap")]),t._v(" 操作和指定地图边框范围和输出格式即可在 Mapbox GL JS 中使用。GeoServer WMS 1.3.0 支持的输出格式如下：")]),t._v(" "),e("ul",[e("li",[t._v("image/png")]),t._v(" "),e("li",[t._v("application/atom+xml")]),t._v(" "),e("li",[t._v("application/json;type=geojson")]),t._v(" "),e("li",[t._v("application/json;type=topojson")]),t._v(" "),e("li",[t._v("application/json;type=utfgrid")]),t._v(" "),e("li",[t._v("application/pdf")]),t._v(" "),e("li",[t._v("application/rss+xml")]),t._v(" "),e("li",[t._v("application/vnd.google-earth.kml+xml")]),t._v(" "),e("li",[t._v("application/vnd.google-earth.kml+xml;mode=networklink")]),t._v(" "),e("li",[t._v("application/vnd.google-earth.kmz")]),t._v(" "),e("li",[t._v("application/vnd.mapbox-vector-tile")]),t._v(" "),e("li",[t._v("image/geotiff")]),t._v(" "),e("li",[t._v("image/geotiff8")]),t._v(" "),e("li",[t._v("image/gif")]),t._v(" "),e("li",[t._v("image/jpeg")]),t._v(" "),e("li",[t._v("image/png; mode=8bit")]),t._v(" "),e("li",[t._v("image/svg+xml")]),t._v(" "),e("li",[t._v("image/tiff")]),t._v(" "),e("li",[t._v("image/tiff8")]),t._v(" "),e("li",[t._v("image/vnd.jpeg-png")]),t._v(" "),e("li",[t._v("image/vnd.jpeg-png8")]),t._v(" "),e("li",[t._v("text/html; subtype=openlayers")]),t._v(" "),e("li",[t._v("text/html; subtype=openlayers2")]),t._v(" "),e("li",[t._v("text/html; subtype=openlayers3")])]),t._v(" "),e("p",[t._v("加载示例（image/png 格式）：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raster'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tiles'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://900913.cn/geoserver/ows?service=WMS&version=1.3.0&request=GetMap&layers=china_admin:Chongqing&bbox={bbox-epsg-3857}&width=512&height=512&srs=EPSG:3857&format=image/png&TRANSPARENT=TRUE'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("注意 url 中的 "),e("code",[t._v("bbox")]),t._v(" 参数值 "),e("code",[t._v('"{bbox-epsg-3857}"')]),t._v("。Mapbox GL JS 会自动计算地图范围替换该值，获取地图。这也是与下面 WMTS 同样用栅格格式，WMS 不会模糊的原因。")]),t._v(" "),e("ClientOnly",[e("common-code-view",{attrs:{name:"service-wms"}})],1),t._v(" "),e("h2",{attrs:{id:"wmts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wmts","aria-hidden":"true"}},[t._v("#")]),t._v(" WMTS")]),t._v(" "),e("blockquote",[e("p",[t._v("标准："),e("a",{attrs:{href:"http://www.opengeospatial.org/standards/wmts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Map Tile Service"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Web Map Tile Service（Web 地图瓦片服务），简称 "),e("code",[t._v("WMTS")]),t._v("。WMTS 标准定义了一些操作允许用户访问瓦片地图。WMTS 服务中包括以下 3 个操作：")]),t._v(" "),e("ol",[e("li",[t._v("GetCapabilities（获取服务的元信息）")]),t._v(" "),e("li",[t._v("GetTile（获取切片）")]),t._v(" "),e("li",[t._v("GetFeatureInfo（可选，获取点选的要素信息）")])]),t._v(" "),e("p",[t._v("WMTS 的切片坐标系统和组织方式可参考下图：\n")]),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:t.$withBase("/images/WMTS切片坐标系统和组织方式.png")}})]),e("p"),t._v(" "),e("p",[t._v("利用 "),e("code",[t._v("GetTile")]),t._v(" 操作和指定输出格式即可在 Mapbox GL JS 中使用。GeoServer WMTS 1.0.0 支持的输出格式如下：")]),t._v(" "),e("ul",[e("li",[t._v("application/vnd.mapbox-vector-tile")]),t._v(" "),e("li",[t._v("application/json;type=utfgrid")]),t._v(" "),e("li",[t._v("image/png")]),t._v(" "),e("li",[t._v("application/json;type=geojson")]),t._v(" "),e("li",[t._v("application/json;type=topojson")])]),t._v(" "),e("p",[t._v("加载示例（image/png 格式）：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raster'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tiles'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://900913.cn/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=buildings:Chongqing&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=image/png&TILECOL={x}&TILEROW={y}'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或 geoserver rest 服务")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'https://900913.cn/geoserver/gwc/service/wmts/rest/buildings:Chongqing/polygon/EPSG:900913/EPSG:900913:{z}/{y}/{x}?format=image/png'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("加载示例（application/vnd.mapbox-vector-tile 格式）")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vector'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tiles'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://900913.cn/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=buildings:cq_point&STYLE=&TILEMATRIX=EPSG:900913:{z}&TILEMATRIXSET=EPSG:900913&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("从效果上看，矢量格式（建筑轮廓）的效果明显比栅格格式（点）好，栅格有明显的模糊了，但是实际 WMTS 请求返回的图片格式是清晰的。模糊的原因是 Mapbox GL JS 的缩放是无极缩放，也就是 "),e("code",[t._v("zoom")]),t._v(" 可以是小数，而 WMTS 的 "),e("code",[t._v("z")]),t._v(" 值是整数，在渲染过程中有缩放，所以模糊了。")]),t._v(" "),e("p",[t._v("这里也建议在使用 Mapbox GL JS 的时候能使用矢量就尽量用矢量格式。")]),t._v(" "),e("ClientOnly",[e("common-code-view",{attrs:{name:"service-wmts"}})],1),t._v(" "),e("h2",{attrs:{id:"wfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wfs","aria-hidden":"true"}},[t._v("#")]),t._v(" WFS")]),t._v(" "),e("blockquote",[e("p",[t._v("标准："),e("a",{attrs:{href:"http://www.opengeospatial.org/standards/wfs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Feature Service"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Web Feature Service（Web 要素服务），简称 WFS。WFS 标准定义了一些操作允许用户通过 HTTP 对空间数据进行查询、编辑等操作。WFS 服务中常用的操作包括：")]),t._v(" "),e("ol",[e("li",[t._v("GetCapabilities（获取服务中的要素类及支持的操作）")]),t._v(" "),e("li",[t._v("DescribeFeatureType（描述要素类的信息）")]),t._v(" "),e("li",[t._v("GetFeature（获取要素）")]),t._v(" "),e("li",[t._v("Transaction（创建、更新、删除数据的事务操作）")])]),t._v(" "),e("p",[t._v("利用 "),e("code",[t._v("GetFeature")]),t._v(" 操作和指定输出格式即可在 Mapbox GL JS 中使用。GeoServer WFS 2.0.0 支持的输出格式如下：")]),t._v(" "),e("ul",[e("li",[t._v("application/gml+xml; version=3.2")]),t._v(" "),e("li",[t._v("GML2")]),t._v(" "),e("li",[t._v("KML")]),t._v(" "),e("li",[t._v("SHAPE-ZIP")]),t._v(" "),e("li",[t._v("application/json")]),t._v(" "),e("li",[t._v("application/vnd.google-earth.kml xml")]),t._v(" "),e("li",[t._v("application/vnd.google-earth.kml+xml")]),t._v(" "),e("li",[t._v("csv")]),t._v(" "),e("li",[t._v("gml3")]),t._v(" "),e("li",[t._v("gml32")]),t._v(" "),e("li",[t._v("json")]),t._v(" "),e("li",[t._v("text/xml; subtype=gml/2.1.2")]),t._v(" "),e("li",[t._v("text/xml; subtype=gml/3.1.1")]),t._v(" "),e("li",[t._v("text/xml; subtype=gml/3.2")])]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[t._v("注意不同版本支持的输出格式也不一样，可通过 "),e("code",[t._v("GetCapabilities")]),t._v(" 操作查看，如："),e("a",{attrs:{href:"http://900913.cn/geoserver/ows?service=wfs&version=2.0.0&request=GetCapabilities",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://900913.cn/geoserver/ows?service=wfs&version=2.0.0&request=GetCapabilities"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("加载示例（application/json 格式）：")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'geojson'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("https://900913.cn/geoserver/buildings/ows\n              ?service=WFS\n              &version=2.0.0\n              &request=GetFeature\n              &typeName=buildings:cq_point\n              &outputFormat=application/json")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("ClientOnly",[e("common-code-view",{attrs:{name:"service-wfs"}})],1)],1)},[],!1,null,null,null);s.default=n.exports}}]);