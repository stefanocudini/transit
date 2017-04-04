'use strict';

const Joi = require('joi');

const arrayObj = Joi.object().keys({
    url: Joi.string(),
    filename: Joi.string().required(),
    layerId: Joi.string().required().valid('stops', 'landmarks', 'intersections', 'carshare', 'bikeshare'),
    agencyId: Joi.string(),
    agencyName: Joi.string()
}).requiredKeys('filename', 'layerId');

/** Schema Configuration

   datapath: string (required)
   feeds: array of objects ... see above (required)
   example:
    "transit": {
      "datapath": "/mnt/pelias/transit",
      "feeds": [
        {
          "layerId" : "stops",
          "filename" : "TRIMET-stops.txt",
          "agencyId" : "TRIMET",
          "agencyName" : "TriMet"
        }
      ]
    },
*/
module.exports = Joi.object().keys({
    datapath: Joi.string(),
    feeds: Joi.array().min(1).items(arrayObj),
}).requiredKeys('datapath', 'feeds');

