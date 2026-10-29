# Backend Development Fundamentals - Lab 01

**Experiment:** Node.js and Express Server
**Name:** Gudipudi Dharanisree
**Registration Number:** 252U1R9043
**Branch:** CSE (Generative AI)

## Aim
To create a basic HTTP server using Node.js and a web server using Express.js, handling multiple GET routes, JSON responses, the current date and time, and unknown routes with a 404 status code.

## Project Structure
```
lab-01/
├── server-http.js   # Basic server using Node.js built-in http module
├── server.js        # Express server with multiple routes
├── package.json
└── README.md
```

## Requirements
- Node.js (v16 or above) and npm
- Visual Studio Code and a web browser

## Setup
```
npm install
```

## Run

**1. Express server**
```
node server.js
```
(or `npm start`)

**2. Basic HTTP server**
```
node server-http.js
```
(or `npm run start:http`)

Both servers use port 3000, so stop one with `Ctrl + C` before starting the other.

## Routes (Express server)

| URL | Method | Response |
|-----|--------|----------|
| `http://localhost:3000/` | GET | `Welcome to Backend Development Lab 1!` (200) |
| `http://localhost:3000/about` | GET | Student information in JSON (200) |
| `http://localhost:3000/time` | GET | Current date and time in JSON (200) |
| any other URL | GET | `404 - Page Not Found` (404) |

## Sample Output
`/home`
```json
<img width="1920" height="1080" alt="Home" src="https://github.com/user-attachments/assets/4d3103d3-1bfd-4ff5-9c37-41b41ba27328" />

```

`/about`
```json
<img width="1920" height="1080" alt="About" src="https://github.com/user-attachments/assets/f94bada6-3d5a-4fcb-b722-0e0e9f669271" />

```

`/time`
```json
<img width="1920" height="984" alt="Time" src="https://github.com/user-attachments/assets/feeef543-95e1-4a37-9ed7-693b9a0786ee" />

```
`/not found`
```json
<img width="1920" height="1080" alt="Not found" src="https://github.com/user-attachments/assets/8fc00dac-a33f-452f-86fe-d8668b05917e" />


The actual value depends on when the route is requested and your system locale.

## Concepts Covered
- Node.js runtime and the built-in `http` module
- Express.js framework and routing
- Request (`req`) and response (`res`) objects
- JSON responses
- HTTP status codes: 200 OK, 404 Not Found

## References
- Node.js documentation: https://nodejs.org/docs/latest/api/
- Express.js documentation: https://expressjs.com/
