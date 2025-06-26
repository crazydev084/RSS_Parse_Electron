const convertRssToJson = require('./convertRssToJson');
const articleList = require('../components/ArticleList'); 

module.exports = (feeds) => {
  return Promise
  .all(feeds
    .map(feed => feed.url)
    .map(url => convertRssToJson(url))
  )
  .then(feeds => {
    const app = document.getElementById('app');
    app.innerHTML = '';
    feeds.forEach((feed) => {
      app.appendChild(articleList(feed));
    });
  })
  .catch(e => console.error(e));
};
