// Copyright 2020 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​
define(["require", "exports", "tslib", "esri/core/Accessor", "esri/core/accessorSupport/decorators"], function (require, exports, tslib_1, Accessor, decorators_1) {
    "use strict";
    var SelectedFeatureAttachments = /** @class */ (function (_super) {
        tslib_1.__extends(SelectedFeatureAttachments, _super);
        function SelectedFeatureAttachments() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.attachments = null;
            _this.currentIndex = null;
            return _this;
        }
        tslib_1.__decorate([
            decorators_1.property()
        ], SelectedFeatureAttachments.prototype, "attachments", void 0);
        tslib_1.__decorate([
            decorators_1.property()
        ], SelectedFeatureAttachments.prototype, "currentIndex", void 0);
        SelectedFeatureAttachments = tslib_1.__decorate([
            decorators_1.subclass("SelectedFeatureAttachments")
        ], SelectedFeatureAttachments);
        return SelectedFeatureAttachments;
    }(Accessor));
    return SelectedFeatureAttachments;
});
//# sourceMappingURL=SelectedFeatureAttachments.js.map