import app from './app';

const PORT:number = Number(process.env.PORT) || 3006;

app.listen(PORT, (): void => {
    console.log(`Review service is on port ${PORT}`);
})