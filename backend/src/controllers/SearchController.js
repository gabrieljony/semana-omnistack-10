const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  // index, show, store, update, destroy
  async index(request, response) {
    // buscar todos devs em um raio de 10km e as techs
    // "techs": "React, ReactJs, NodeJs",
    // "latitude": -12.9723127,
    // "longitude": -38.5165226
    // console.log(request.query)
    const { techs, latitude, longitude } = request.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });
    return response.json({ devs });
  },
};
