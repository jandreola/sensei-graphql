import { App } from './app.ts';
import "https://deno.land/x/dotenv/load.ts";
const PORT =  Deno.env.get("PORT") || 8080;
const app = new App(PORT);

app.listen();
console.log(`http://localhost:${PORT}`)