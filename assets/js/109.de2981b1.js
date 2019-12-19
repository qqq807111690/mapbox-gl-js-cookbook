(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{688:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"雪碧图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雪碧图","aria-hidden":"true"}},[t._v("#")]),t._v(" 雪碧图")]),t._v(" "),a("p",[t._v("如果图层样式中有使用 "),a("code",[t._v("background-pattern")]),t._v("、"),a("code",[t._v("fill-pattern")]),t._v("、"),a("code",[t._v("line-pattern")]),t._v("、"),a("code",[t._v("fill-extrusion-pattern")]),t._v("、或 "),a("code",[t._v("icon-image")]),t._v(" 属性，则必须设置该属性。")]),t._v(" "),a("p",[t._v("格式为 "),a("code",[t._v("URL")]),t._v(" 字符串，必须为绝对路径。 "),a("code",[t._v(".png")]),t._v("、"),a("code",[t._v(".json")]),t._v(" 和 "),a("code",[t._v("@2x.png")]),t._v(" 扩展会自动添加，如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sprite'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8081/mapbox/sprite'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("则实际会加载以下资源：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://localhost:8081/mapbox/sprite.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://localhost:8081/mapbox/sprite.png")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// http://localhost:8081/mapbox/sprite@2x.png ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("通常我们会使用一些自己的图标，下面介绍几种使用自定义图标的方法。")]),t._v(" "),a("h2",{attrs:{id:"studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#studio","aria-hidden":"true"}},[t._v("#")]),t._v(" Studio")]),t._v(" "),a("p",[t._v("最直接的方法就是在 "),a("a",{attrs:{href:"https://studio.mapbox.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Studio"),a("OutboundLink")],1),t._v(" 中去上传、管理图标。\n")]),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:t.$withBase("/images/sprite1.png"),width:"580"}})]),a("p"),t._v(" "),a("p",[t._v("在样式预览中，我们可以将 "),a("code",[t._v("sprite.png")]),t._v("、"),a("code",[t._v("sprite@2x.png")]),t._v(" "),a("code",[t._v("sprite.json")]),t._v(" 文件下载下来，放到服务器使用。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:t.$withBase("/images/sprite2.png"),width:"580"}})]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("ol",[a("li",[t._v("只支持 "),a("code",[t._v("svg")]),t._v(" 格式；")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("iconfont")]),t._v(" 下载的图标，可以上传使用。")])])]),t._v(" "),a("h2",{attrs:{id:"addimage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addimage","aria-hidden":"true"}},[t._v("#")]),t._v(" addImage")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("map.addImage()")]),t._v(" 方法向样式中添加图标。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/images/cat.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" error\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// addImage(id, image. options)")]),t._v("\n  map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./cat-icon.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("文档："),a("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/api/#map#addimage",target:"_blank",rel:"noopener noreferrer"}},[t._v("addImage"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"styleimagemissing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#styleimagemissing","aria-hidden":"true"}},[t._v("#")]),t._v(" styleimagemissing")]),t._v(" "),a("p",[t._v("当样式所需的图标或图案丢失时将会触发该事件。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'styleimagemissing'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 丢失图片 id")]),t._v("\n  map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" error\n    map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("文档："),a("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/api/#map.event:styleimagemissing",target:"_blank",rel:"noopener noreferrer"}},[t._v("styleimagemissing"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("示例："),a("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/example/add-image-missing-generated/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generate and add a missing icon to the map"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"spritezero"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spritezero","aria-hidden":"true"}},[t._v("#")]),t._v(" spritezero")]),t._v(" "),a("p",[t._v("前面两种方法都是单个图加载，如果需要很多图标，最好直接生成雪碧图。可以使用 "),a("a",{attrs:{href:"https://github.com/mapbox/spritezero",target:"_blank",rel:"noopener noreferrer"}},[t._v("spritezero"),a("OutboundLink")],1),t._v(" 来创建，它提供了 "),a("code",[t._v("cli")]),t._v(" 工具，即 "),a("code",[t._v("spritezero-cli")]),t._v("，更为方便。")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("注意需要 "),a("code",[t._v("node")]),t._v(" 版本 "),a("code",[t._v("v8")]),t._v(" 才能安装成功。")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @mapbox/spritezero-cli\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("spritezero "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("output filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("input directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  --retina      shorthand "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" --ratio"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  --ratio"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("   pixel ratio\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("div",{staticClass:"tip custom-block"},[a("ol",[a("li",[t._v("该工具只支持 "),a("code",[t._v("svg")]),t._v(" 格式；")]),t._v(" "),a("li",[t._v("我在 "),a("code",[t._v("iconfont")]),t._v(" 上下载的 svg 格式，生成不太成功，估计是 svg 格式上的问题吧。")])])]),t._v(" "),a("h2",{attrs:{id:"代码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码生成","aria-hidden":"true"}},[t._v("#")]),t._v(" 代码生成")]),t._v(" "),a("p",[t._v("我们还可以使用其他生成雪碧图的工具去生成。")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/mapbox/spritezero",target:"_blank",rel:"noopener noreferrer"}},[t._v("spritezero"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/Ensighten/spritesmith",target:"_blank",rel:"noopener noreferrer"}},[t._v("spritesmith"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/ATtuing/p/9273391.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("开源方案搭建可离线的精美矢量切片地图服务-8.mapbox 之sprite大图图标文件生成（附源码）"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("...")])])])},[],!1,null,null,null);s.default=e.exports}}]);