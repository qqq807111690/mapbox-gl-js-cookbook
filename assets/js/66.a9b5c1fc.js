(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{709:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点","aria-hidden":"true"}},[t._v("#")]),t._v(" 点")]),t._v(" "),a("p",[t._v("点可以用 "),a("strong",[a("code",[t._v("circle")])]),t._v("、"),a("strong",[a("code",[t._v("symbol")])]),t._v("、"),a("strong",[a("code",[t._v("heatmap")])]),t._v(" 三种图层类型来表示。除此之外，还可以用 "),a("strong",[a("code",[t._v("Marker")])]),t._v(" 表示，"),a("code",[t._v("Marker")]),t._v(" 的好处在于是 "),a("code",[t._v("div")]),t._v(" 渲染，可以用 "),a("code",[t._v("css")]),t._v(" 来实现炫丽的效果，但是点特别多的情况下，不建议使用。")]),t._v(" "),a("h2",{attrs:{id:"circle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#circle","aria-hidden":"true"}},[t._v("#")]),t._v(" circle")]),t._v(" "),a("p",[t._v("部分 "),a("strong",[a("code",[t._v("paint")])]),t._v(" 属性：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("circle-radius")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("半径，默认"),a("code",[t._v("5")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("circle-color")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("颜色，默认"),a("code",[t._v('"#000000"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("circle-opacity")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不透明度[0, 1]，默认"),a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("circle-stroke-width")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("边框宽度，默认"),a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("circle-stroke-color")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("边框颜色，默认"),a("code",[t._v('"#000000"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("circle-stroke-opacity")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不透明度[0, 1]，默认"),a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("circle-blur")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("模糊度，默认"),a("code",[t._v("0")])])])])]),t._v(" "),a("h4",{attrs:{id:"普通点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通点","aria-hidden":"true"}},[t._v("#")]),t._v(" 普通点")]),t._v(" "),a("ClientOnly",[a("common-code-view",{attrs:{name:"data-circle"}})],1),t._v(" "),a("h4",{attrs:{id:"点聚合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点聚合","aria-hidden":"true"}},[t._v("#")]),t._v(" 点聚合")]),t._v(" "),a("p",[t._v("使用聚合图层时，数据必须为 "),a("code",[t._v("geojson")]),t._v("，并设置 "),a("code",[t._v("cluster")]),t._v(" 为 "),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'points'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'geojson'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://900913.cn/geoserver/buildings/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=buildings:cq_point&outputFormat=application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cluster'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'clusterMaxZoom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最大聚合 zoom， 超过这个值则不聚合")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'clusterRadius'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 聚合半径，默认 50")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("添加聚合图层时，分三个图层：①聚合图层，②聚合数量图层，③不聚合的点图层。")]),t._v(" "),a("ClientOnly",[a("common-code-view",{attrs:{name:"data-circle-cluster"}})],1),t._v(" "),a("h4",{attrs:{id:"海量点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#海量点","aria-hidden":"true"}},[t._v("#")]),t._v(" 海量点")]),t._v(" "),a("ClientOnly",[a("common-code-view",{attrs:{name:"data-circle-scatter"}})],1),t._v(" "),a("h2",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol","aria-hidden":"true"}},[t._v("#")]),t._v(" symbol")]),t._v(" "),a("p",[t._v("部分 "),a("strong",[a("code",[t._v("paint")])]),t._v(" 属性：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-opacity")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标不透明度[0, 1]，默认"),a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-color")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标颜色，默认"),a("code",[t._v('"#000000"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-halo-color")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标阴影颜色，默认"),a("code",[t._v('"rgba(0, 0, 0, 0)"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-halo-width")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标阴影宽度，默认"),a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-halo-blur")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标模糊度，默认"),a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("text-opacity")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文本不透明度[0, 1]，默认"),a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("text-color")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文本颜色，默认"),a("code",[t._v('"#000000"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("text-halo-color")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文本阴影颜色，默认"),a("code",[t._v('"rgba(0, 0, 0, 0)"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("text-halo-width")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文本阴影宽度，默认"),a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("text-halo-blur")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文本模糊度，默认"),a("code",[t._v("0")])])])])]),t._v(" "),a("p",[t._v("部分 "),a("strong",[a("code",[t._v("layout")])]),t._v(" 属性：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("symbol-placement")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("注记相对位置，枚举："),a("code",[t._v('"point"')]),t._v("（默认）, "),a("code",[t._v('"line"')]),t._v(", "),a("code",[t._v('"line-center"')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-allow-overlap")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标是否允许重叠，默认"),a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-size")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标尺寸（图标原始尺寸的倍数），默认"),a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-image")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("雪碧图的图标名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-rotate")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标旋转角度，默认"),a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-padding")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标内边距，默认"),a("code",[t._v("2")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("icon-offset")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图标与锚点的偏移距离，单位："),a("code",[t._v("ems")]),t._v("，默认"),a("code",[t._v("[0, 0]")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("text-field")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文本字段，默认"),a("code",[t._v('""')])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("text-size")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文本大小，默认"),a("code",[t._v("16")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("text-allow-overlap")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文本是否允许重叠，默认"),a("code",[t._v("false")])])])])]),t._v(" "),a("ClientOnly",[a("common-code-view",{attrs:{name:"data-symbol"}})],1),t._v(" "),a("blockquote",[a("p",[t._v("原型扩散："),a("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/example/add-image-animated/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Add an animated icon to the map"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"heatmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heatmap","aria-hidden":"true"}},[t._v("#")]),t._v(" heatmap")]),t._v(" "),a("p",[t._v("部分 "),a("strong",[a("code",[t._v("paint")])]),t._v(" 属性：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("heatmap-radius")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("热力点的影响半径，默认"),a("code",[t._v("30")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("heatmap-weight")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("权重，默认"),a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("heatmap-intensity")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("强度，默认"),a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("heatmap-opacity")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不透明度，默认"),a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("heatmap-color")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("颜色，默认值如下：")])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heatmap-color'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'interpolate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'linear'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'heatmap-density'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(0, 0, 255, 0)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'royalblue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cyan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yellow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("ClientOnly",[a("common-code-view",{attrs:{name:"data-heatmap"}})],1),t._v(" "),a("blockquote",[a("p",[t._v("热力图："),a("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/example/heatmap-layer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create a heatmap layer"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"marker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#marker","aria-hidden":"true"}},[t._v("#")]),t._v(" Marker")]),t._v(" "),a("ClientOnly",[a("common-code-view",{attrs:{name:"data-marker"}})],1),t._v(" "),a("blockquote",[a("p",[t._v("Marker："),a("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/example/custom-marker-icons/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Add custom icons with Markers"),a("OutboundLink")],1)])])],1)},[],!1,null,null,null);e.default=n.exports}}]);