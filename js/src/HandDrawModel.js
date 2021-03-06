/* Copyright 2015 Bloomberg Finance L.P.
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

define(["jupyter-js-widgets", "./BaseModel", "underscore"], function(widgets, BaseModel, _) {
    "use strict";

    var HandDrawModel = BaseModel.BaseModel.extend({

    	defaults: _.extend({}, widgets.WidgetModel.prototype.defaults, {
            _model_name: "HandDrawModel",
            _view_name: "HandDraw",
            _model_module: "bqplot",
            _view_module: "bqplot",
		    lines: null,
		    line_index: 0,
		    min_x: null,
		    max_x: null
        }),
    }, {
        serializers: _.extend({
            lines:  { deserialize: widgets.unpack_models },
        }, BaseModel.BaseModel.serializers),
    });

    return {
        HandDrawModel: HandDrawModel,
    };
});
