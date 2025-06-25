const shell = require('electron').shell

const ParseDescription = (description) => {
  const parsedDescription = (description.split("</p><p>")[1]).split("</p>")[0];
  return parsedDescription
}

const ParseTimeStamp = (timestamp) => {
  let parsedTimeStamp = "";
  let current_date = new Date();
  // finding the difference in total seconds between two dates
  let second_diff = (current_date.getTime() - timestamp) / 1000;

  // showing the relative timestamp.
  if (second_diff < 60) {
    parsedTimeStamp += second_diff + " seconds.";
  } else if (second_diff < 3600) {
    parsedTimeStamp += Math.round(second_diff / 60) + " minutes ago";
  } else if (second_diff < 86400) {
    parsedTimeStamp += Math.round(second_diff / 3600) + " hours ago";
  } else if (second_diff < 2620800) {
    parsedTimeStamp += Math.round(second_diff / 86400) + " days ago";
  } else if (second_diff < 31449600) {
    parsedTimeStamp += Math.round(second_diff / 2620800) + " months ago";
  } else {
    parsedTimeStamp += Math.round(second_diff / 31449600) + " years ago";
  }
  return parsedTimeStamp
}


const ArticleLink = (item) => {
  const article = document.createElement('div');
  article.className = 'article';
  const article_img = document.createElement('img');
  const article_auth = document.createElement('p');
  const article_time = document.createElement('p');
  const article_desc = document.createElement('p');
  const articleLink = document.createElement('a');

  const div_up = document.createElement('div');
  div_up.className = 'article-up';
  const div_down = document.createElement('div');
  div_down.className = 'article-down';

  const div_left = document.createElement('div');
  div_left.className = 'article-left';
  const div_right = document.createElement('div');
  div_right.className = 'article-right';

  article_img.src = item.media.thumbnail.url;
  article_img.alt = item.title;
  article_auth.innerHTML = `${item.author}`;
  const parsedTime = ParseTimeStamp(item.created)
  article_time.innerHTML = `${parsedTime}`;

  const description = ParseDescription(item.description);
  article_desc.innerHTML = `${description}`;
  articleLink.href = item.link;
  articleLink.target = "_blank";
  articleLink.innerHTML = `${item.title}`;
  articleLink.onclick = (e) => {
    e.preventDefault()
    shell.openExternal(item.link);
  }


  article.appendChild(div_up);
  article.appendChild(div_down);
  div_up.appendChild(div_left);
  div_up.appendChild(div_right);
  div_left.appendChild(article_img);
  div_right.appendChild(articleLink);
  div_right.appendChild(article_auth);
  div_right.appendChild(article_time);
  div_down.appendChild(article_desc);

  return article;
};

module.exports = ArticleLink;