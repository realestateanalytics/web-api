var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Q = require("q");
var _ = require('lodash');

router.get('/', function(req, res) {
  return res.status(200).json([]);
});

module.exports = router;
