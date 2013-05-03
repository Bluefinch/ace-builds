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

ace.define('ace/theme/toy_chest', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-toy-chest";
exports.cssText = "/* THIS THEME WAS AUTOGENERATED BY Theme.tmpl.css (UUID: D4333E9B-1DE7-8FF3-57E6-A757C21B4254) */\
.ace-toy-chest .ace_gutter {\
background: #e8e8e8;\
color: #333;\
}\
.ace-toy-chest .ace_print-margin {\
width: 1px;\
background: #e8e8e8;\
}\
.ace-toy-chest .ace_scroller {\
background-color: #2f475d;\
}\
.ace-toy-chest .ace_text-layer {\
color: #34d58e;\
}\
.ace-toy-chest .ace_cursor {\
border-left: 2px solid #DDDDDD;\
}\
.ace-toy-chest .ace_overwrite-cursors .ace_cursor {\
border-left: 0px;\
border-bottom: 1px solid #DDDDDD;\
}\
.ace-toy-chest .ace_marker-layer .ace_selection {\
background: #74358d;\
}\
.ace-toy-chest.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #2f475d;\
border-radius: 2px;\
}\
.ace-toy-chest .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174);\
}\
.ace-toy-chest .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #3a526b;\
}\
.ace-toy-chest .ace_marker-layer .ace_active-line {\
background: #1a2631;\
}\
.ace-toy-chest .ace_gutter-active-line {\
background-color: #1a2631;\
}\
.ace-toy-chest .ace_marker-layer .ace_selected-word {\
border: 1px solid #74358d;\
}\
.ace-toy-chest .ace_fold {\
background-color: #ecdd5d;\
border-color: #34d58e;\
}\
.ace-toy-chest .ace_keyword{color:#e67055;}.ace-toy-chest .ace_keyword.ace_operator{color:#16a085;}.ace-toy-chest .ace_constant{color:#3eb5e1;}.ace-toy-chest .ace_support{color:#34d58e;}.ace-toy-chest .ace_support.ace_function{color:#ecdd5d;}.ace-toy-chest .ace_support.ace_constant{color:#34d58e;}.ace-toy-chest .ace_storage{color:#e67055;}.ace-toy-chest .ace_invalid.ace_deprecated{text-decoration:underline;\
font-style:italic;\
color:#CC4232;}.ace-toy-chest .ace_string{font-style:italic;\
color:#16a085;}.ace-toy-chest .ace_string.ace_regexp{color:#bd85e3;}.ace-toy-chest .ace_comment{font-style:italic;\
color:#407c9b;}.ace-toy-chest .ace_variable{color:#bd85e3;}.ace-toy-chest .ace_variable.ace_parameter{color:#9d78e3;}.ace-toy-chest .ace_meta.ace_tag{color:#e39f32;}.ace-toy-chest .ace_entity.ace_other.ace_attribute-name{color:#e67e22;}.ace-toy-chest .ace_entity.ace_name.ace_function{color:#ecdd5d;}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});