const ArticleList = require('./ArticleList');

const FeedDigest = (feed, index) => {
  const feedDigest = document.createElement('div');
  feedDigest.id = `feedDigest${index}`;
  feedDigest.appendChild(ArticleList(feed));

  return feedDigest;
};

module.exports = FeedDigest;