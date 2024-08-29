# MongoDB: Social Network API

## Project Overview

In this project, I developed an API for a social network web application using MongoDB, Express.js, and Mongoose. The goal was to create a robust backend that allows users to share their thoughts, interact with friends, and manage their friend lists efficiently. The application leverages MongoDB's ability to handle large amounts of unstructured data, making it an ideal choice for a social network's data needs.

## Key Features and Functionality

- **User Management**: Users can be created, updated, and deleted. Each user has a unique username and email, and can maintain a list of friends and associated thoughts.
- **Thought Management**: Users can create, update, and delete thoughts. Each thought includes text, a creation timestamp, and is associated with a username.
- **Reactions**: Thoughts can have reactions (like replies), which are stored as nested documents within the thought. Reactions can be added or removed from thoughts.
- **Friend Lists**: Users can add and remove friends from their friend lists, with the system updating both users’ friend lists accordingly.

## Models and Schemas

- **User Model**:
  - **Fields**: `username`, `email`, `thoughts`, `friends`
  - **Virtuals**: `friendCount` to get the number of friends

- **Thought Model**:
  - **Fields**: `thoughtText`, `createdAt`, `username`, `reactions`
  - **Virtuals**: `reactionCount` to get the number of reactions

- **Reaction Schema** (used as a subdocument in the Thought model):
  - **Fields**: `reactionId`, `reactionBody`, `username`, `createdAt`

## API Routes

- **`/api/users`**: Handles user-related operations such as GET, POST, PUT, and DELETE.
- **`/api/users/:userId/friends/:friendId`**: Manages adding and removing friends.
- **`/api/thoughts`**: Provides routes for creating, reading, updating, and deleting thoughts.
- **`/api/thoughts/:thoughtId/reactions`**: Allows reactions to be added or removed from thoughts.

## Development and Testing

I used Insomnia for testing all API endpoints, ensuring that GET, POST, PUT, and DELETE routes worked as expected. The application was designed to efficiently handle and format data using JSON. Additionally, a walkthrough video was created to demonstrate the functionality and meet the project’s acceptance criteria.

## Conclusion

This project showcases the ability to build a fully functional social network API using MongoDB and Mongoose, with comprehensive CRUD operations and data relationships. The API is robust, scalable, and demonstrates best practices for working with NoSQL databases in a social network context.
