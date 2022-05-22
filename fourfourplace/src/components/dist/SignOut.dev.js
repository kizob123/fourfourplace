"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SignOut;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

function SignOut(props) {
  var navigate = (0, _reactRouterDom.useNavigate)();
  (0, _react.useEffect)(function () {
    props.userData({
      data: null,
      error: null
    });
    navigate('/');
  });
}