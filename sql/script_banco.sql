CREATE DATABASE LojaRoupas;
GO
USE LojaRoupas;
GO

CREATE TABLE Categorias (
    id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(100)
);

CREATE TABLE Produtos (
    id INT PRIMARY KEY IDENTITY(1,1),
    nome VARCHAR(50) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    tamanho VARCHAR(10),
    cor VARCHAR(20),
    categoria_id INT FOREIGN KEY REFERENCES Categorias(id)
);

INSERT INTO Categorias (nome, descricao) VALUES 
('Camisetas', 'Camisetas casuais'),
('Calças', 'Calças jeans e sociais');

INSERT INTO Produtos (nome, preco, tamanho, cor, categoria_id) VALUES
('Camiseta Branca', 49.90, 'M', 'Branco', 1),
('Calça Jeans', 99.90, 'G', 'Azul', 2);
