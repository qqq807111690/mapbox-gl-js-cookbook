(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{703:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"threejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threejs","aria-hidden":"true"}},[t._v("#")]),t._v(" ThreeJS")]),t._v(" "),a("h2",{attrs:{id:"_3d-文本标注"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3d-文本标注","aria-hidden":"true"}},[t._v("#")]),t._v(" 3D 文本标注")]),t._v(" "),a("p",[t._v("Mapbox GL 默认文本标注图层不支持高度属性，这里使用 ThreeJS 来实现有高度的文本标注。")]),t._v(" "),a("ClientOnly",[a("common-code-view",{attrs:{name:"threejs-text-3d"}})],1),t._v(" "),a("p",[t._v("该方法需要引入字体文件，ThreeJS 官方案例中提供了几种英文字体的 "),a("code",[t._v("json")]),t._v(" 文件，如果想要显示中文，可以下载相关字体的 "),a("code",[t._v("ttf")]),t._v(" 格式文件，在 "),a("a",{attrs:{href:"https://gero3.github.io/facetype.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Facetype.js"),a("OutboundLink")],1),t._v(" 网站生成 "),a("code",[t._v("json")]),t._v(" 文件，即可使用。")]),t._v(" "),a("p",[t._v("但是一个完整的中文字体文件会很大，可通过 Google 开源项目 "),a("a",{attrs:{href:"https://github.com/googlefonts/sfntly",target:"_blank",rel:"noopener noreferrer"}},[t._v("sfntly"),a("OutboundLink")],1),t._v(" 中的 "),a("code",[t._v("sfnttool")]),t._v(" 工具提取指定的文字。")]),t._v(" "),a("h3",{attrs:{id:"字体提取步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字体提取步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 字体提取步骤")]),t._v(" "),a("ol",[a("li",[t._v("下载 "),a("code",[t._v("sfnttool")]),t._v(" 工具（"),a("a",{attrs:{href:"https://download.csdn.net/download/huangli0/12031450",target:"_blank",rel:"noopener noreferrer"}},[t._v("直接下载"),a("OutboundLink")],1),t._v(" 或 从源码 "),a("a",{attrs:{href:"https://github.com/googlefonts/sfntly",target:"_blank",rel:"noopener noreferrer"}},[t._v("sfntly"),a("OutboundLink")],1),t._v(" 编译）")]),t._v(" "),a("li",[t._v("提取指定文字，输出 "),a("code",[t._v("ttf")]),t._v(" 文件（需要 java 环境）")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("java -jar sfnttool.jar -s "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'茶牛奶咖啡'")]),t._v(" 庞门正道标题体2.0增强版.ttf PangMenZhengDao_Regular.ttf\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("在 "),a("a",{attrs:{href:"https://gero3.github.io/facetype.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Facetype.js"),a("OutboundLink")],1),t._v(" 网站生成 "),a("code",[t._v("json")]),t._v(" 文件")]),t._v(" "),a("li",[t._v("使用")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FontLoader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nloader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'PangMenZhengDao_Regular.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("font")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" textBufferGeometry "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("THREE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextBufferGeometry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'牛奶'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    font\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])],1)},[],!1,null,null,null);s.default=n.exports}}]);