const fs = require('mz/fs'),
  path = require('path'),
  Twitter = require('twitter'),
  twitterApiConfig = require('config').get('twitter');

const usernamesFilePath = path.join(__dirname, 'usernames.txt'),
  twitterClient = new Twitter(twitterApiConfig);

main();

async function main () {
  let fileContents = await fs.readFile(usernamesFilePath, 'utf8');
  let usernames = fileContents.trim().split('\n');

  for (let username of usernames) {
    let latestTweet = await getLatestTweet(username);
    console.log(`${username} (${latestTweet.created_at}):
      ${latestTweet.text}`);
  }
}

async function getLatestTweet (username) {
  let params = {
    screen_name: username,
    exclude_replies: true,
    include_rts: false,
    count: 1
  };

  let result = await twitterClient.get('statuses/user_timeline', params);

  return result[0];
}
