require('dotenv').config()
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CUNSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

const postTweet = (status) => {
    if(status){
        status = `${status} #kas1337`
        client.post('statuses/update', {status}, function(error, tweet) {
            if(error) throw error
            console.log("status was success to updated")
            console.log(tweet)
        });
    }else{
        throw Error("caption cannot be empty")
    }
}

const deleteTweet = (id) => {
    client.post(`statuses/destroy/${id}`, function(error, tweet) {
        if(error) throw error
        console.log("status was success to deleted")
        console.log(tweet)
    });
}

try {
    postTweet("Test from fauzan maulana")
} catch (error) {
    console.log("status was fails to updated")
    console.error(error)
}