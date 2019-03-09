"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("../forms/Radio"));

var _RadioGroup = _interopRequireDefault(require("../forms/RadioGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormikRadio = function FormikRadio(_ref) {
  var children = _ref.children,
      render = _ref.render,
      _ref$fast = _ref.fast,
      fast = _ref$fast === void 0 ? true : _ref$fast,
      type = _ref.type,
      buttons = _ref.buttons,
      props = _objectWithoutProperties(_ref, ["children", "render", "fast", "type", "buttons"]);

  // eslint-disable-line no-unused-vars
  var Field = require('formik')[fast ? 'FastField' : 'Field'];

  return _react.default.createElement(Field, _extends({}, props, type === 'radio' ? {} : {
    type: type
  }, type === 'hidden' ? {} : {
    component: props.options ? _RadioGroup.default : _Radio.default
  }), children);
};

var _default = FormikRadio;
exports.default = _default;