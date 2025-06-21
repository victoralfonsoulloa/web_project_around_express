# Web Project Around Express

This is a simple REST API built with Node.js and Express. It serves user and card data from local JSON files, similar to the API used in the "Around the U.S." project.

## Project Structure

```
web_project_around_express/
├── app.js
├── data/
│   ├── users.json
│   └── cards.json
├── routes/
│   ├── users.js
│   └── cards.js
├── package.json
└── ...
```

## Installation

1. Clone the repository.
2. Install dependencies:

   ```sh
   npm install
   ```

3. (Optional) Install [Postman](https://www.postman.com/) or a similar API client for testing.

## Running the Server

- To start the server:

  ```sh
  npm run start
  ```

- For development with auto-reload:

  ```sh
  npm run dev
  ```

## API Endpoints

| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| GET    | `/users`     | Returns a JSON array of users |
| GET    | `/cards`     | Returns a JSON array of cards |
| GET    | `/users/:id` | Returns a user by ID          |

### Error Handling

- Any non-existent route returns:

  ```json
  { "message": "Requested resource not found" }
  ```

- If a user ID is not found:

  ```json
  { "message": "User ID not found" }
  ```

## Linting

To check code style with ESLint:

```sh
npm run lint
```

## Notes

- Data is read from `data/users.json` and `data/cards.json`.
- This project is for educational purposes and does not use a database.
- Feel free to extend the API or refactor the code for practice!

---

```// filepath: /Users/victorulloa/Documents/Google Drive/TripleTen/sprint-15/web_project_around_express/README.md
# Web Project Around Express

This is a simple REST API built with Node.js and Express. It serves user and card data from local JSON files, similar to the API used in the "Around the U.S." project.

## Project Structure

```

web_project_around_express/
├── app.js
├── data/
│ ├── users.json
│ └── cards.json
├── routes/
│ ├── users.js
│ └── cards.js
├── package.json
└── ...

````

## Installation

1. Clone the repository.
2. Install dependencies:

   ```sh
   npm install
````

3. (Optional) Install [Postman](https://www.postman.com/) or a similar API client for testing.

## Running the Server

- To start the server:

  ```sh
  npm run start
  ```

- For development with auto-reload:

  ```sh
  npm run dev
  ```

## API Endpoints

| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| GET    | `/users`     | Returns a JSON array of users |
| GET    | `/cards`     | Returns a JSON array of cards |
| GET    | `/users/:id` | Returns a user by ID          |

### Error Handling

- Any non-existent route returns:

  ```json
  { "message": "Requested resource not found" }
  ```

- If a user ID is not found:

  ```json
  { "message": "User ID not found" }
  ```

## Linting

To check code style with ESLint:

```sh
npm run lint
```

## Notes

- Data is read from `data/users.json` and `data/cards.json`.
- This project is for educational purposes and does not use a database.

---
