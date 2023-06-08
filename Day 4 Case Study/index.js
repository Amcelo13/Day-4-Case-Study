const promptSync = require('prompt-sync')();

class Post {
  constructor(image, caption) {

    this.count = 1;
    this.image = image;
    this.caption = caption;
    this.like = 0;
    this.comment = [];
  }
}

class Facebook {
  constructor() {
    this.users = [];
    this.loggedIn = false;
    this.ADDFEED = [];
    this.friends = ['AMIT'];
  }

  signup() {
    const username = promptSync('Enter a username: ');
    const password = promptSync('Enter a password: ');

    const alreadyExistingUser = this.users.find((user) => user.username === username);

    if (alreadyExistingUser) {
      console.log('User already exists. Please try a different username.');
      return;
    }

    this.users.push({ username: username, password: password });
    console.log('Signup successful redirect to login page.');
    this.login();
  }

  login() {
    const username = promptSync('Enter your username/email: ');
    const password = promptSync('Enter your password: ');
    const user = this.users.find((user) => user.username === username);

    if (user) {
      user.password === password
        ? (
          console.log('--------------------Login successful--------------'),
          this.loggedIn = true,
          console.log(this.loggedIn)
        )
        : console.log('Wrong password');
    } else {
      console.log('User not found');
    }

    this.loggedIn === true ? this.showFeed() : undefined;
  }

  showFeed() {
    console.log('\nFFFFFFFFFF   AAA       CCCCCCCCCC EEEEEEEEEEE  BBBBBBBBBB     OOOOOOOOO    OOOOOOOOO   KK       KK');
    console.log('FF          AAAAA     CCC         EEE          BB      BB    OO      OO   OO      OO   KK     KK');
    console.log('FFFFFFFFF  AA   AA   CCC          EEEEEEE      BBBBBBBBBB   OO       OO  OO      OO    KK KKK');
    console.log('FF        AAAAAAAAA  CCC          EEE          BB      BB   OO      OO  OO      OO     KK     KK');
    console.log('FF       AA       AA CCCCCCCCCC   EEEEEEEEEEE  BBBBBBBBBB   OOOOOOOOO   OOOOOOOOO      KK       KK \n\n');

    console.log('Dummy Post')
    console.log(`

    / \\__
   (    @\\___
   /         O
  /   (_____/
 /_____/ 
Caption : STUNNING DOG`
    );
    console.log('Like 👍 324', '\tComment 📩 It is looking phenomenal')
    console.log('--------------------------------------------------------------------------------------------------')

    //SHOWING THE Added Post
    if (this.ADDFEED.length != 0) {
      for (let post of this.ADDFEED) {
        console.log(`Post ${post.count}`)
        console.log('\nThe Image of the Post : ', post.image)
        console.log('The Caption of the Post : ', post.caption)
        console.log(`Like👍 ${post.like}`, `\tComment📩 ${post.comment}`)
        console.log(`To Like or Comment this ${post.count} post press ${post.count}`)
        console.log('--------------------------------------------------------------------------------------------------')

      }
      const postNumber = parseInt(promptSync(`\nEnter any Post Number if you want to like OR COMMENT on it ELSE press -1 to go to feed:`));

      if (postNumber !== -1) {
        //FOUND INSTANCE POST
        const postToLike = this.ADDFEED.find((post) => post.count === postNumber);
        const wannaLike = promptSync(`Do you want to like if yes press L otherwise press any other key : `)

        if (postToLike && wannaLike === 'L') {
          postToLike.like += 1; // Increment the likes for the selected post
          console.log(`Liked the post: ${postToLike.count}`);

          const wannaComment = promptSync(`Do you also want to comment if yes press C OTHERwise press any other key : `)
          if (wannaComment === 'C') {
            const postToComment = this.ADDFEED.find((post) => post.count === postNumber)
            postToComment.comment.push(promptSync('Enter your Comment: '));
          }

          this.showFeed();

        }
        else {
          console.log('Invalid Post Number');
        }
      }
      this.showFeed();
    }

    const likeAndCommentORPost = promptSync('\n \t\tADD A 🆕 POST press N , L to SignOut , A to add a Friend,and Q to Quit Terminal: ');

    if (likeAndCommentORPost === 'N') {
      this.post()
    }
    if (likeAndCommentORPost === 'A') {
      this.addFriend()
    }
    else if (likeAndCommentORPost === 'L') {
      this.options();
    }
    else if (likeAndCommentORPost === 'Q') {
      process.exit();
    }
    else {
      console.log('----------------------------------------------------Invalid Input');
      this.showFeed()
    }
  }

  addFriend() {
    console.log("Your Friend List :")

    for(let friend of this.friends){
      console.log(friend)
    }
    const friendUsername = promptSync('Enter the username of the friend you want to add or press Q to feed menu : ');

    if(this.friends.includes(friendUsername)){
      console.log('Already your friend')
      return
    }
    if(friendUsername === 'Q'){
      this.showFeed();
    }
    else{
      this.friends.push(friendUsername);
            console.log(`Added ${friendUsername} to your friend list`);
            this.showFeed();
    }
  }
  post() {

    const img = promptSync('Enter your Image: ');
    const caption = promptSync('Enter your Caption: ');

    let submitPost = promptSync('Add to feed press A : ')

    //PUSHING INTO ADDFEED Array
    if (submitPost === 'A' || 'a') {
      const newPost = new Post(img, caption);
      newPost.count = this.ADDFEED.length + 1; // Increment the count by 1
      this.ADDFEED.push(newPost);

      console.log(this.ADDFEED)
      // this.showFeed();
    }
    else {
      console.log('----------------------------------------------------Invalid Input----------------------------------------------------');
      return;
    }
    let cancel = promptSync('Cancel/Delete the posted feed press C ELSE press any other character:')
    if (cancel === 'C') {
      this.ADDFEED = [];
      console.log(this.ADDFEED)
      this.showFeed();
    }
    else {
      console.log('----------------------------------------------------Added to feed SUCCESSFULLY----------------------------------------------------');
      this.showFeed();
    }

  }

  options() {
    const option = promptSync('Do you want to Sign Up? *** Press 0 *** and for Login *** Press 1 ***: ');
    option === '0' ? this.signup() : this.login();
  }
}

let facebook1 = new Facebook();
facebook1.options();
