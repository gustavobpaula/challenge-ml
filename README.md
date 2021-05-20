# Mercado Livre Search

- [APP Hosted on Vercel](https://gustavo-challenge-ml.vercel.app/)
- [API Hosted on Heroku](https://gustavo-ml.herokuapp.com/api/items/?q=query)

## Dependencies

- Node.js
- yarn

<br />

---

<br />

## Configuration

Create the `.env` file into `server` path and add the following properties

```
PORT=7000
```

<br />

---

<br />

## How to run the server

Go to server path

```
cd server
```

<br />

Install dependencies

```
yarn
```

<br />

Init the server in development mode

```
yarn dev
```

<br />

---

<br />

<br />

## Use API

- **Search Products**: Open `http://localhost:7000/api/items?q={your_query}`
- **Product Detail**: Open `http://localhost:7000/api/items/{product_id}`

<br />

<br />

---

<br />

<br />

## How run the client

<br />

Go to server path

```
cd client
```

<br />

Install dependencies

```
yarn
```

<br />

Run project

```
yarn start
```
