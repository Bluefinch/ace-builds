define("ace/ext/themelist",["require","exports","module","ace/ext/themelist_utils/themes"],function(e,t,n){n.exports.themes=e("ace/ext/themelist_utils/themes").themes,n.exports.ThemeDescription=function(e){this.name=e,this.desc=e.split("_").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" "),this.theme="ace/theme/"+e},n.exports.themesByName={},n.exports.themes=n.exports.themes.map(function(e){return n.exports.themesByName[e]=new n.exports.ThemeDescription(e),n.exports.themesByName[e]})}),define("ace/ext/themelist_utils/themes",["require","exports","module"],function(e,t,n){n.exports.themes=["toy_chest","cobalt","solarized_dark","ambiance","clouds_midnight","chaos","clouds","tomorrow_night_blue","kr_theme","glarkio_black","merbivore","chrome","dawn","github","mono_industrial","terminal","merbivore_soft","twilight","tomorrow_night_bright","solarized_light","textmate","xcode","monokai","tomorrow_night_eighties","pastel_on_dark","tomorrow_night","crimson_editor","dreamweaver","vibrant_ink","tomorrow","idle_fingers","eclipse","glarkio_blue"]})