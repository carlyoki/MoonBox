/*
Copyright 2022 vivo Communication Technology Co., Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

import store from '../store/'

function showLoading () {
  store.commit('updateLoadingStatus', {
    isLoading: true
  })
}

function hiddenLoading () {
  store.commit('updateLoadingStatus', {
    isLoading: false
  })
}

function formatTableTDBlank (data, f, value) {
  let newValue = value
  if (value === '' || typeof value === 'undefined' || value === null) {
    newValue = '--'
  }
  return newValue
}

function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}


export default {
  // 展示loading
  showLoading,
  // 隐藏loading
  hiddenLoading,
  // 表格无数据处理
  formatTableTDBlank,
  // 校验域名
  isExternal
}
