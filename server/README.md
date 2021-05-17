## Configuration

Create the `.env` file into `server` path and add the following properties

```
PORT=7000
```

---

## How to run the server

Go to server path

```
cd server
```

<br />

Install dependencies

```
npm i
```

<br />

Init the server in development mode

```
npm run dev
```

---

## Use API

- **Search Products**: Open `http://localhost:7000/api/items?q={your_query}`
- **Product Detail**: Open `http://localhost:7000/api/items/{product_id}`
