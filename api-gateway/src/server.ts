import app from "./app.js";

const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, (): void => {
    console.log(`API Gateway running on port ${PORT}`);
});