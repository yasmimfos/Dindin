create database dindin;

create table usuarios(
    id serial primary key,
    nome varchar(50) not null,
    email varchar(50) not null unique,
    senha varchar(100) not null,
    profissao varchar(50),
    idade varchar(2)
);

create table categorias(
    categoria varchar(50) primary key
);

create table transacoes(
    id serial primary key,
    descricao varchar(100),
    valor integer not null,
    data date,
    categoria varchar references categorias(categoria) not null,
    usuario_id integer references usuarios(id) not null,
    tipo varchar(10) not null
);

create table saldo(
    id serial primary key,
    usuario_id integer references usuarios(id) not null,
    valor integer not null
);