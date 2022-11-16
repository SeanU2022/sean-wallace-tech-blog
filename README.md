# Sean-Wallace-Tech-Blog
A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.

## Model-View-Controller (MVC): Tech Blog
Developers spend time creating new applications and debugging existing codebases. Most also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. This blog site is where developers can publish their blog posts and comment on other developers’ posts as well. This site is deployed to Heroku and follows the MVC paradigm in its architectural structure.

## License
 MIT

![image](https://img.shields.io/badge/License-MIT-yellow.svg) An explanation of the licence is here: https://opensource.org/licenses/MIT

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/14-mvc-homework-demo-01.gif) 

## Local Installation
1. install node modules: npm i
2. package.json lists the dependencies
3. create database techblog_db
3a. in terminal: mysql -uroot -p 
3b. in mysql run: source db/schema.db
4. seed database (optional)
4a. in terminal: npm run seed

## Running the application
In terminal:
 1. node start or node watch
 2. click http://localhost:{PORT}

## Technologies Used

### Front-end
 - HTML
 - JavaScript/JQuery
 - CSS (Bootstrap)

### Back-end Dependencies
 - BCrypt
 - dotenv
 - path
 - Express
 - Express-handlebars using Handlebars.js as the templating language
 - Express-session npm package for authentication
 - mySQL2
 - eslint
 - Sequelize as the ORM

## Author
 - Sean Wallace: https://github.com/SeanU2022
