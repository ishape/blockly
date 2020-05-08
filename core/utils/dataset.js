/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview These methods can help you manipulate the data-* data attributes of element.
 * @author linkxsystem@google.com (zhi)
 */
'use strict';

goog.provide('Blockly.utils.dataset');

/**
 * Sets the data attributes of an element.
 *
 * @param {!Element} element DOM node where we set state.
 * @param {string|number} attr the attribute.
 * @param {string|numer} value the value of attribute.
 */
Blockly.utils.dataset.setAttribute = function(element, attr, value) {
  element.dataset[attr] = value;
};

/**
 * Gets the data attributes of an element.
 *
 * @param {!Element} element DOM node where we set state.
 * @param {string|number} attr the attribute.
 * @returns {string} .
 */
Blockly.utils.dataset.getAttribute = function(element, attr) {
  return element.dataset[attr];
};
