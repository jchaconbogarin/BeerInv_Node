const Brewery = require('../models').Brewery;
const Beer = require('../models').Beer;


module.exports = {

  list(req, res) {
    return Brewery
      .findAll({
        include: [{
          model: Beer,
          as: 'beers'
        }],
        order: [
          ['createdAt', 'DESC'],
          [{model: Beer, as: 'beers'}, 'createdAt', 'DESC'],
        ],
      })
      .then((breweries) => res.status(200).send(breweries))
      .catch((error) => res.status(400).send(error));
  },

  getById(req, res) {
    return Brewery
      .findById(req.params.id, {
        include: [{
          model: Beer,
          as: 'beers'
        }],
      })
      .then((brewery) => {
        if(!brewery) {
          return res.status(404).send({message: 'Brewery not found',});
        }
        return res.status(200).send(brewery);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res){
    return Brewery
      .create({
        name: req.body.name,
        country: req.body.country,
      })
      .then((brewery) => res.status(201).send(brewery))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Brewery
      .findById(req.params.id, {
        include: [{
          model: Beer,
          as: 'beers'
        }],
      })
      .then(brewery => {
        if(!brewery) {
          return res.status(404).send({
            message: 'Brewery not found',
          });
        }
        return brewery
          .update({
            name: req.body.name || brewery.name,
            country: req.body.country || brewery.country
          })
          .then(() => res.status(200).send(brewery))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }, 

  delete(req, res) {
    return Brewery
      .findById(req.params.id)
      .then(brewery => {
        if(!brewery) {
          return res.status(404).send({
            message: 'Brewery not found',
          });
        }
        return brewery
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

};