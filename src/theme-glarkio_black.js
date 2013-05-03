/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define('ace/theme/glarkio_black', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-glarkio-black";
exports.cssText = ".ace-glarkio-black .ace_gutter {\
/* background: #484848;    */\
background: #383838;\
color: #7f8c8d\
}\
.ace-glarkio-black .ace_print-margin {\
width: 1px;\
background: #33555E\
}\
.ace-glarkio-black .ace_scroller {\
background-color: #383838\
}\
.ace-glarkio-black .ace_text-layer {\
/* color: #ecf0f1 */\
color: #d5dcdf\
}\
.ace-glarkio-black .ace_cursor {\
border-left: 2px solid #F8F8F0\
}\
.ace-glarkio-black .ace_overwrite-cursors .ace_cursor {\
border-left: 0px;\
border-bottom: 1px solid #F8F8F0\
}\
.ace-glarkio-black .ace_marker-layer .ace_selection {\
background: rgba(255, 255, 255, 0.1)\
}\
.ace-glarkio-black.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
border-radius: 2px\
}\
.ace-glarkio-black .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-glarkio-black .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-glarkio-black .ace_marker-layer .ace_active-line {\
background: rgba(255, 255, 255, 0.1)\
}\
.ace-glarkio-black .ace_gutter-active-line {\
background: rgba(255, 255, 255, 0.08)\
}\
.ace-glarkio-black .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-glarkio-black .ace_invisible {\
color: rgba(147, 161, 161, 0.50)\
}\
.ace-glarkio-black .ace_entity.ace_name.ace_tag,\
.ace-glarkio-black .ace_keyword,\
.ace-glarkio-black .ace_meta,\
.ace-glarkio-black .ace_storage {\
color: #ff7567\
}\
.ace-glarkio-black .ace_constant.ace_character,\
.ace-glarkio-black .ace_constant.ace_language,\
.ace-glarkio-black .ace_constant.ace_numeric,\
.ace-glarkio-black .ace_constant.ace_other {\
color: #c782e4\
}\
.ace-glarkio-black .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-glarkio-black .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-glarkio-black .ace_support.ace_constant,\
.ace-glarkio-black .ace_support.ace_function {\
/* color: #66D9EF */\
color: #61b8f3\
}\
.ace-glarkio-black .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-glarkio-black .ace_storage.ace_type,\
.ace-glarkio-black .ace_support.ace_class,\
.ace-glarkio-black .ace_support.ace_type {\
font-style: italic;\
color: #61b8f3\
}\
.ace-glarkio-black .ace_entity.ace_name.ace_function,\
.ace-glarkio-black .ace_entity.ace_other,\
.ace-glarkio-black .ace_variable {\
color: #1abc9c\
}\
.ace-glarkio-black .ace_variable.ace_parameter {\
font-style: italic;\
color: #ff9232\
}\
.ace-glarkio-black .ace_string {\
color: #5bdd92\
}\
.ace-glarkio-black .ace_comment {\
color: #95a5a6\
}\
.ace-glarkio-black .ace_markup.ace_underline {\
text-decoration: underline\
}\
.ace-glarkio-black .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQ11D6z7Bq1ar/ABCKBG6g04U2AAAAAElFTkSuQmCC) right repeat-y\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
