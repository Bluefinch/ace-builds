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

__ace_shadowed__.define('ace/theme/glarkio_blue', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-glarkio-blue";
exports.cssText = ".ace-glarkio-blue .ace_gutter {\
background: #34495e; \
color: #7f8c8d \
}\
.ace-glarkio-blue .ace_print-margin {\
width: 1px;\
background: #33555E\
}\
.ace-glarkio-blue .ace_scroller {\
background-color: #2c3e50 \
}\
.ace-glarkio-blue .ace_text-layer {\
color: #ecf0f1  \
}\
.ace-glarkio-blue .ace_cursor {\
border-left: 2px solid #F8F8F0\
}\
.ace-glarkio-blue .ace_overwrite-cursors .ace_cursor {\
border-left: 0px;\
border-bottom: 1px solid #F8F8F0\
}\
.ace-glarkio-blue .ace_marker-layer .ace_selection {\
background: rgba(255, 255, 255, 0.1)\
}\
.ace-glarkio-blue.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
border-radius: 2px\
}\
.ace-glarkio-blue .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-glarkio-blue .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-glarkio-blue .ace_marker-layer .ace_active-line {\
background: rgba(255, 255, 255, 0.1)\
}\
.ace-glarkio-blue .ace_gutter-active-line {\
background: rgba(255, 255, 255, 0.08)\
}\
.ace-glarkio-blue .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-glarkio-blue .ace_invisible {\
color: rgba(147, 161, 161, 0.50)\
}\
.ace-glarkio-blue .ace_entity.ace_name.ace_tag,\
.ace-glarkio-blue .ace_keyword,\
.ace-glarkio-blue .ace_meta,\
.ace-glarkio-blue .ace_storage {\
color: #ff7567  \
}\
.ace-glarkio-blue .ace_constant.ace_character,\
.ace-glarkio-blue .ace_constant.ace_language,\
.ace-glarkio-blue .ace_constant.ace_numeric,\
.ace-glarkio-blue .ace_constant.ace_other {\
color: #c782e4\
}\
.ace-glarkio-blue .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-glarkio-blue .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-glarkio-blue .ace_support.ace_constant,\
.ace-glarkio-blue .ace_support.ace_function {\
/* color: #66D9EF */\
color: #61b8f3\
}\
.ace-glarkio-blue .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-glarkio-blue .ace_storage.ace_type,\
.ace-glarkio-blue .ace_support.ace_class,\
.ace-glarkio-blue .ace_support.ace_type {\
font-style: italic;\
color: #61b8f3\
}\
.ace-glarkio-blue .ace_entity.ace_name.ace_function,\
.ace-glarkio-blue .ace_entity.ace_other,\
.ace-glarkio-blue .ace_variable {\
color: #1abc9c\
}\
.ace-glarkio-blue .ace_variable.ace_parameter {\
font-style: italic;\
color: #ff9232 \
}\
.ace-glarkio-blue .ace_string {\
color: #5bdd92\
}\
.ace-glarkio-blue .ace_comment {\
color: #95a5a6\
}\
.ace-glarkio-blue .ace_markup.ace_underline {\
text-decoration: underline\
}\
.ace-glarkio-blue .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQ11D6z7Bq1ar/ABCKBG6g04U2AAAAAElFTkSuQmCC) right repeat-y\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
