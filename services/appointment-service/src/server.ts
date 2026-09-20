import app from './app';

const PORT:number = Number(process.env.PORT) || 3001;

app.listen(PORT, (): void => {
    console.log(`Appointment service is on port ${PORT}`);
})