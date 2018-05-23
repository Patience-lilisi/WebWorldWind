/*
 * Copyright 2018 WorldWind Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @exports GmlDomainSet
 */
define([
        '../../error/ArgumentError',
        '../../ogc/gml/GmlRectifiedGrid',
        '../../util/Logger'
    ],
    function (ArgumentError,
              GmlRectifiedGrid,
              Logger) {
        "use strict";

        var GmlDomainSet = function (element) {
            if (!element) {
                throw new ArgumentError(
                    Logger.logMessage(Logger.LEVEL_SEVERE, "GmlAbstractGeometry", "constructor", "missingDom"));
            }

            this.assembleElement(element);
        };

        // Internal. Intentionally not documented.
        GmlDomainSet.prototype.assembleElement = function (element) {
            var children = element.children || element.childNodes;
            for (var c = 0; c < children.length; c++) {
                var child = children[c];

                if (child.localName === "RectifiedGrid") {
                    this.rectifiedGrid = new GmlRectifiedGrid(child);
                }
            }
        };

        return GmlDomainSet;
    });