const RequestHelper = function (url) {
  this.url = url;
};

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

RequestHelper.prototype.delete = function (id) {
  return fetch(`${this.url}/${id}`, {
    method: 'DELETE'
  })
    .then((response) => response.json());
};

RequestHelper.prototype.postSighting = function (newSighting) {
  console.log(newSighting);
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(newSighting),
    headers: { 'Content-Type': 'application/json'}
  })
    .then((response) => response.json());
};

module.exports = RequestHelper;
