const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newSighting = this.createSighting(evt);
  PubSub.publish('Sightingformview:new-sighting-ready', newSighting);
  evt.target.reset();
}

SightingFormView.prototype.createSighting = function (evt) {
  const sighting = {
    species: evt.target.species.value,
    location: evt.target.location.value,
    date: evt.target.date.value
  }
  return sighting;
};
module.exports = SightingFormView;
