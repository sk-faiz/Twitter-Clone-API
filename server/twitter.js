const axios = require('axios');
const url = "https://api.twitter.com/1.1/search/tweets.json";
class Twitter {
    get(query, count, maxid){
        return axios.get(url, {
            params: {
              q: query,
              count: count,
              tweet_mode: "extended",
              max_id: maxid
            },
            headers: {
              "Authorization": `Bearer ${process.env.TWITTER_TOKEN}`
            }
          })
    }
}

module.exports = Twitter;