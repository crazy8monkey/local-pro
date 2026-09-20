import app from './app';

const PORT:number = Number(process.env.PORT) || 3004

app.listen(PORT, (): void => {
    console.log(`Notification service is on port ${PORT}`);
})