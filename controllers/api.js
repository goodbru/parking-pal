var models = require('../models');


module.exports = function(app) {

  app.get('/api/parkingSpot', function (req, res) {

    models.ParkingSpot.findAll({
        include: [{ model: models.Rental }]
      }).then(function(spots) {
        console.log(spots);
      res.json(spots);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });
  });

  app.get('/api/user', function (req, res) {
      models.User.findAll().then(function(users) {
      res.json(users);
    }).catch(function(error){
      console.log(JSON.stringify(error));
    });
  });

  app.get('/api/rentals', function (req, res) {
      models.Rental.findAll().then(function(rentals) {
      res.json(rentals);
    }).catch(function(error) {
      console.log(JSON.stringify(error));
    });
  });
  app.post('/api/parkingSpot/:id/cancel', function (req, res, next) {
    models.ParkingSpot.findById(req.params.id).then(function(spot){
      spot.cancelled = !(spot.cancelled);
      spot.save();
      res.json(spot);
    }).catch(function(error) {
      console.log(JSON.stringify(error));
      res.status(500).send('Something is not kocher');
    });
  });

  app.post('/api/rentals/:id/cancel', function (req, res, next) {
    models.Rental.findById(req.params.id).then(function(rental){
      rental.is_active = false;
      rental.save();
      res.json(rental);
    }).catch(function(error) {
      console.log(JSON.stringify(error));
      res.status(500).send('Something is no bueno');
    });
  });
}
