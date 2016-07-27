var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Q = require('q');
var _ = require('lodash');

var ListingDetail = require('./listing_detail.model')

router.get('/:mls_id', function(req, res) {
  var mls_id = req.params.mls_id;

  ListingDetail.findOne({mls_id: mls_id}, function(err, listing){
    return res.status(200).json(listing);
  });
});

module.exports = router;
