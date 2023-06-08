# Day-4-Case-Study
Facebook Terminal Application Documentation
Introduction
The Facebook Terminal Application is a command-line program that simulates a simplified version of the Facebook platform. It allows users to sign up, log in, add friends, post images with captions, like posts, and leave comments. The application provides a text-based interface for users to interact with the platform.

# Prerequisites
Before running the Facebook Terminal Application, ensure that you have the following:

Node.js installed on your machine
The prompt-sync package installed. You can install it by running the following command in your terminal: npm install prompt-sync
Running the Application
To run the Facebook Terminal Application, follow these steps:

Open a terminal or command prompt.
Navigate to the directory where the application code is saved.
Run the following command: node <filename>.js, replacing <filename> with the actual name of the JavaScript file.
Features
# Sign Up
The application allows new users to sign up by providing a username and password. The entered credentials are checked against existing users to ensure that the username is unique. Upon successful sign-up, the user is redirected to the login page.

# Login
Users can log in by entering their username/email and password. The application verifies the credentials and logs the user in if they are correct. Once logged in, the user can view their feed.

# View Feed
The feed displays a dummy post as well as any posts that the user has added. Each post includes an image, caption, number of likes, and comments. The user can choose to like or comment on any post by entering the corresponding post number. The application provides an option to navigate back to the feed after liking or commenting.

# Add Friend
Users can add friends by entering the username of the friend they want to add. The application displays the user's existing friends and prevents duplicate entries. The user can choose to go back to the feed menu.
# Add Post
Users can add a new post by providing an image URL and a caption. The post is added to the user's feed. The application allows users to cancel or delete the posted feed.

# Sign Out
Users can sign out of their account, which returns them to the login/signup options.

# Quit Terminal
Users can choose to quit the application, which terminates the program.

# Limitations
The application is a simplified version and does not connect to a real Facebook server.
User authentication is based on local data stored in memory and does not provide advanced security measures.
The image URLs are not fetched or displayed in the application; only the URL strings are stored and shown.
The application lacks error handling and input validation for various scenarios.

# Conclusion
The Facebook Terminal Application provides a basic command-line interface for users to interact with a simplified version of Facebook. Users can sign up, log in, add friends, post images with captions, like posts, and leave comments. The application serves as a demonstration of how a terminal-based social media platform can be implemented using JavaScript and Node.js.
