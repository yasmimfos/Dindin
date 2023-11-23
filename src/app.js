const express = require('express');
const {
    amountRouter,
    categoryRouter,
    loginRouter,
    transactionsRouter,
    userRouter
} = require('./routes')

const app = express();
app.use(express.json());

app.use('/usuario', userRouter);
app.use('/categoria', categoryRouter);
app.use('/saldo', amountRouter);
app.use('/transacoes', transactionsRouter);
app.use('/login', loginRouter);

module.exports = app;