const fs = require('fs'),
  path = require('path'),
  Twitter = require('twitter'),
  twitterApiConfig = require('config').get('twitter');

const usernamesFilePath = path.join(__dirname, 'usernames.txt'),
  twitterClient = new Twitter(twitterApiConfig);

main();

function main () {
  fs.readFile(usernamesFilePath, 'utf8', (err, fileContents) => {
    let usernames = fileContents.trim().split('\n');

    let tweetPrintingPromise = Promise.resolve();
    for (let username of usernames) {
      tweetPrintingPromise = tweetPrintingPromise
        .then(getLatestTweet.bind(null, username))
        .then(latestTweet => {
          console.log(`${username} (${latestTweet.created_at}):
            ${latestTweet.text}`);
        });
    }
  });
}

function getLatestTweet (username) {
  let params = {
    screen_name: username,
    exclude_replies: true,
    include_rts: false,
    count: 1
  };

  return twitterClient
    .get('statuses/user_timeline', params)
    .then(result => result[0]);
}
