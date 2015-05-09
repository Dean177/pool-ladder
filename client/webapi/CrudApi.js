import request from 'superagent';
import Promise from 'bluebird';

class Http {
  create(entity, url) {
    return new Promise(function (resolve, reject) {
      request
        .post(url)
        .send(entity)
        .end(function (err, response) {
          if (err) { reject(err); }
          resolve(JSON.parse(response.text));
        })
    });
  }

  get(url) {
    return new Promise(function (resolve, reject) {
      request
        .get(url)
        .end(function(err, response) {
          if (err) { reject(err); }
          resolve(JSON.parse(response.text));
        });
    });
  }
}

export default new Http();


