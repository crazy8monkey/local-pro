import app from './app'

const PORT:number = Number(process.env.PORT) || 3002;

app.listen(PORT, (): void => {
    console.log(`Auth service is on port ${PORT}`)
})