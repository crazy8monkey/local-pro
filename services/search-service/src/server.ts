import app from './app';

const PORT:number = Number(process.env.PORT) || 3007;

app.listen(PORT, (): void => {
    console.log(`Search Service is on port ${PORT}`);
})