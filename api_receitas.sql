CREATE DATABASE api_receitas;
USE api_receitas;

CREATE TABLE Categorias (
  id_categoria INT PRIMARY KEY AUTO_INCREMENT,
  nome_categoria VARCHAR(100)
);

CREATE TABLE Receitas (
  id_receita INT PRIMARY KEY AUTO_INCREMENT,
  nome_receita VARCHAR(200),
  ingredientes TEXT,
  modo_preparo TEXT,
  id_categoria INT,
  FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

INSERT INTO Categorias (nome_categoria) VALUES ('doces'), ('salgadas'), ('agridoces');
