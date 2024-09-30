const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken'); // Importar JWT
const app = express();

// Chave secreta para assinar o token JWT (em produção, deve ser uma chave mais segura)
const JWT_SECRET = 'sua_chave_secreta';

// Conectar ao banco de dados SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

// Modelo de Usuário
const User = sequelize.define('User', {
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Sincronizar modelo com o banco de dados
sequelize.sync();

app.use(bodyParser.json());
app.use(express.static('public'));

// Middleware para verificar token JWT
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Token não fornecido.' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido.' });
        req.user = user;
        next();
    });
};

// Registro de usuário
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.create({ username, password });
        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: 'Usuário já existe ou erro na criação.' });
    }
});

// Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (user && user.password === password) {
        // Gera o token JWT
        const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login bem-sucedido!', token });
    } else {
        res.status(400).json({ error: 'Credenciais inválidas' });
    }
});

// Rota protegida (somente acessível com JWT válido)
app.get('/protected', authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Você acessou uma rota protegida!', user: req.user });
});

// Iniciar o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
