// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Controller for the chrome directive.
 *
 * @final
 */
export default class ChromeController {
  /**
   * @ngInject
   */
  constructor($translate) {
    /**
     * By default this is true to show loading for the first page.
     * @export {boolean}
     */
    this.showLoadingSpinner = true;

    this.translate = $translate;
    this.selectedLanguage = '';
    this.languages = ['en', 'cn'];
  }

  /**
   * @param {!angular.Scope} scope
   */
  registerStateChangeListeners(scope) {
    scope.$on('$stateChangeStart', () => { this.showLoadingSpinner = true; });
    scope.$on('$stateChangeError', this.hideSpinner_.bind(this));
    scope.$on('$stateChangeSuccess', this.hideSpinner_.bind(this));
  }

  /**
   * @private
   */
  hideSpinner_() { this.showLoadingSpinner = false; }

  switchLanguage(e) {
    this.selectedLanguage = e.target.textContent || e.target.text || '';
    this.setLanguage(this.selectedLanguage);
  }

  setLanguage(lang) {
    this.selectedLanguage = lang;
    this.translate.use(lang);
  }

  registerLanguage() {
    var key = this.translate.storageKey(),
      storage = this.translate.storage();
    console.log(storage.get(key));
    storage && storage.get(key) && (this.setLanguage(storage.get(key) || this.translate.preferredLanguage()));
  }
}
