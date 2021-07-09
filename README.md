# NGPadi


![NGPadi](https://i.imgur.com/gGQFnko.png)

*Project 3 by Obi Nwokogba - July 9 2021.*

##Introduction
This is an app I have created as a full-stack MERN app - MongoDB, Express, React, NodeJS. This app aims to be a bulletin board where users can post links, photos, or text that they find interesting and want to share with others on the site. The name 'NGPadi' translates to 'Nigerian Friend'. NG is the acronym for Nigeria, and 'Padi' is a popular Nigerian slang for really close friend. 

## Technologies Used
- HTML5
- CSS3
- Javascript
- NodeJS
- ExpressJS
- React

##Screenshots

![Screenshot 1](https://i.imgur.com/zhDMCFt.png)


## ERD + Schema
![ERD of the Models](https://i.imgur.com/v1pB8RI.png)
This app uses primarily two models - USERS and POSTS. The next iteration will see the addition of a VOTES model which will determine what's displayed on the home page.

## Getting Started
Please click [HERE](http://ngpadi.herokuapp.com/) to launch the live, working app!

The front-end is hosted on Heroku at this address:
[http://ngpadi-backend.herokuapp.com/](http://ngpadi-backend.herokuapp.com/)

The back-end is also hosted on Heroku at this address. However, please keep in mind that the back-end is an API and 'speaks' only in JSON, so there are no lush HTML views being served by the backend! The back-end is at:
[http://ngpadi-backend.herokuapp.com/](http://ngpadi-backend.herokuapp.com/)


## User Stories
- I want to be able to join this site.
- I want to be able to post content.
- I would like to see posts by others.
- I want to be able to vote up on Posts that I like!
- I would like to be able to Sign Out when I am done.


## Unsolved Problems
- Authentication to Sign In was not implemented.
- Database Schemas for Users and Post were generally strings, but I will make it more strict with datatypes like Date incorporated.

## Future Enhancements
- Allow users be able to vote up and vote down content
- Allow users to post comments under posts
