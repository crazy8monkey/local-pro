import app from './app';

const PORT:number = Number(process.env.PORT) || 3003;

app.listen(PORT, (): void => {
    console.log(`Business service is on port ${PORT}`);
})