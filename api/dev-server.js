import { app } from "./index.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Local dev server: http://localhost:${PORT}`);
});
