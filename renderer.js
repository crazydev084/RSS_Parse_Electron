// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const masterFeedList = require('./feedsList.json');
const loadFeeds = require('./async/loadFeeds');

loadFeeds(masterFeedList);

setInterval(() => {
    loadFeeds(masterFeedList);
}, 1000 * 600); // Every 10 minutes