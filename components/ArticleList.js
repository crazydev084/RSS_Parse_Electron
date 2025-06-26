const ArticleLink = require('./ArticleLink');

const ArticleList = (feed) => {
  
  const feedDigest = document.createElement('div');
  const articleList = document.createElement('ul');
  feed.items.forEach(item => {
    const articleListItem = document.createElement('li');
    articleListItem.appendChild(ArticleLink(item));
    articleList.appendChild(articleListItem);
  });
  feedDigest.appendChild(articleList);
  return feedDigest;
};

module.exports = ArticleList;
