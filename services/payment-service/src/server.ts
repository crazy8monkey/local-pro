import app from './app'

const PORT:number = Number(process.env.PORT) || 3005;

app.listen(PORT, (): void => {
    console.log(`Payment service is on port ${PORT}`)
});