import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
export { app }; // so dev-server.js can import it

const publicDir = path.join(__dirname, "../public");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(publicDir));

// sample API route
app.get("/api/hello", (req, res) => {
  res.json({ ok: true, message: "Hello from Express on Vercel!" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "home/home.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicDir, "home/home.html"));
});

app.get("/tour", (req, res) => {
  res.sendFile(path.join(publicDir), "/destinations/tour.html");
});

// Vercel expects a default export handler
export default (req, res) => app(req, res);
