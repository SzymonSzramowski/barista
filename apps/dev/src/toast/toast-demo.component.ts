/**
 * @license
 * Copyright 2022 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';

import { DtToast } from '@dynatrace/barista-components/toast';

@Component({
  selector: 'toast-dev-app-demo',
  templateUrl: './toast-demo.component.html',
  styleUrls: ['./toast-demo.component.scss'],
})
export class ToastDemo {
  constructor(private _toast: DtToast) {}

  createToast(): void {
    this._toast.create('Your changes have been saved!');
  }
}
