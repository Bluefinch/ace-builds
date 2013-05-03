/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2013 Matthew Christopher Kastor-Inare III, Atropa Inc. Intl
 * All rights reserved.
 *
 * Contributed to Ajax.org under the BSD license.
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

__ace_shadowed__.define('ace/ext/themelist', ['require', 'exports', 'module' , 'ace/ext/themelist_utils/themes'], function(require, exports, module) {
module.exports.themes = require('ace/ext/themelist_utils/themes').themes;
module.exports.ThemeDescription = function(name) {
    this.name = name;
    this.desc = name.split('_'
        ).map(
            function(namePart) {
                return namePart[0].toUpperCase() + namePart.slice(1);
            }
        ).join(' ');
    this.theme = "ace/theme/" + name;
};

module.exports.themesByName = {};

module.exports.themes = module.exports.themes.map(function(name) {
    module.exports.themesByName[name] = new module.exports.ThemeDescription(name);
    return module.exports.themesByName[name];
});

});

__ace_shadowed__.define('ace/ext/themelist_utils/themes', ['require', 'exports', 'module' ], function(require, exports, module) {

module.exports.themes = [
    "toy_chest",
    "cobalt",
    "solarized_dark",
    "ambiance",
    "clouds_midnight",
    "chaos",
    "clouds",
    "tomorrow_night_blue",
    "kr_theme",
    "glarkio_black",
    "merbivore",
    "chrome",
    "dawn",
    "github",
    "mono_industrial",
    "terminal",
    "merbivore_soft",
    "twilight",
    "tomorrow_night_bright",
    "solarized_light",
    "textmate",
    "xcode",
    "monokai",
    "tomorrow_night_eighties",
    "pastel_on_dark",
    "tomorrow_night",
    "crimson_editor",
    "dreamweaver",
    "vibrant_ink",
    "tomorrow",
    "idle_fingers",
    "eclipse",
    "glarkio_blue"
];

});