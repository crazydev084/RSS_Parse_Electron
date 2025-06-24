const { parse } = require('rss-to-json');

const convertRssToJson = async (url) => new Promise((resolve, reject) => {
  // RssFeed.load(url, (err, data) => {
  //   if (err) reject(err);

  //   resolve(data);
  // });
  parse(url).then((data) => {
    resolve(data);
  })
});

module.exports = convertRssToJson;
