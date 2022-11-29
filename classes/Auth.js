import Tweet from "./Tweet";

export default class Auth {
  username;
  picture;
  constructor() {
    this.username = null;
    this.picture = null;
  }


  signUp() {
    this.username = document.querySelector('#username').value;
    this.picture = document.querySelector('#picture').value;

    axios
      .post('http://localhost:5001/sign-up', {
        username: this.username,
        avatar: this.picture
      })
      .then(() => {
        const tweet = new Tweet();
        tweet.loadTweets();

        document.querySelector('.btn-enviar-tweet').addEventListener('click', () => {
          tweet.postTweet(this.username);
        })
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao fazer cadastro! Consulte os logs.');
      });
  }
}
