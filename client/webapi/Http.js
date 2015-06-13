import request from 'superagent';
import Promise from 'bluebird';

export default {
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
  },

  get(url) {
    return new Promise(function (resolve, reject) {
      request
        .get(url)
        .end(function(err, response) {
          if (err) { reject(err); }
          resolve(JSON.parse(response.text));
        });
    });
  },

  delete(url) {
    return new Promise(function (resolve, reject) {
      request
        .del(url)
        .end(function(err, response) {
          if (err) { reject(err); }
          resolve(JSON.parse(response.text));
        });
    });
  }
}




