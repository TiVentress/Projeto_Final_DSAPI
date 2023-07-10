CREATE DATABASE api_receitas;
USE api_receitas;

CREATE TABLE usuarios(
	id_usuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    email VARCHAR(100),
    senha VARCHAR(100)
    );

CREATE TABLE categorias(
	id_categoria INT NOT NULL PRIMARY KEY,
    nome_categoria VARCHAR(15)
);

CREATE TABLE receitas(
	id_receita INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome_receitas VARCHAR(100),
    modo_preparo TEXT,
    fk_categoria INT,
    FOREIGN KEY (fk_categoria) REFERENCES categorias(id_categoria)
);

INSERT INTO categorias VALUES ("1", "Doce") , ("2", "Salgado"), ("3", "Agridoce");
INSERT INTO usuarios VALUES ("usuario1@gmail.com", "1234");
INSERT INTO receitas VALUES 
("Pastel de Queijo", 
"Massa
3 gemas
3 colheres (sopa) de margarina
1 colher (chá) de sal
1 xícara (chá) de água fervente
2 xícaras (chá) de farinha de trigo, aproximadamente
Recheio
300 g de mussarela ralada
Óleo para fritar
Modo de preparo
Em uma tigela, coloque as gemas, a margarina, o sal, a água e misture bem.
Vá acrescentando aos poucos a farinha de trigo.
Sove bem a massa até ficar macia e desgrudar das mãos.
Abra com um rolo e corte em quadradinhos.
Coloque o recheio, dobre a massa ao meio e aperte as bordas com um garfo.
Frite em óleo bem quente por 10 minutos, ou até que doure por igual.", "2"),

("Crepe de Chocolate Branco", 
"Massa
1 xícara de chá de farinha de trigo
1 e 1/2 xícara de chá de leite integral
1 ovo
6 gotas de baunilha
1 colher de sopa rasa de açúcar
1 pitada de sal (muito pouco mesmo)
Recheio
1 caixinha de Morangos picados
1 Barra Chocolate Branco (130g)
1/2 caixa de Creme de Leite (100g)
Recheio
Derreta o chocolate branco em banho-maria, retire do fogo, adicione o creme de leite e misture. (ganache)
Massa
Em uma frigideira antiaderente coloque um fio de óleo e deixe esquentar.
Pegue a medida de uma concha de massa, jogue na frigideira, espere dourar, vire a massa.
Ainda no fogo, enquanto o outro lado fica dourado, adicione o ganache de chocolate branco e o morango picado, feche o crepe.
Gosto de deixar o crepe um pouco mais no fogo para o morango ficar quentinho. coloque no prato, 
passe um pouco mais de ganache por cima e adicione morangos para enfeitar! aproveite!", "1"),

("Paçoca Caseira", 
"No liquidificador, coloque o açúcar, o amendoim e o sal;
Bata tudo até que forme uma farofa bem fina;
DICA: vá parando de vez em quando e mexendo com uma colher para ajudar o seu liquidificador. Se você tiver um processador, é ainda melhor.
Transfira essa mistura para uma tigela e mexa essa farofa com as pontas dos dedos, por alguns minutinhos;
OBS: esse é um passo importante para que o calor das suas mãos libere o óleo que tem no amendoim.
Em seguida, transfira essa mistura para uma forma, espalhe e aperte bem;
Leve para a geladeira e deixe por 30 minutos;
Em seguida é só cortar as paçocas em quadradinhos e servir.", "3"),

("Pão Caseiro", 
"1 kg de farinha de trigo
1 saquinho de fermento biológico seco
3/4 de xic de açúcar
1 c/s rasa de sal
3 ovos
2 c/s de manteiga
3 c/s de óleo
300 ml de leite morno
misture os secos e depois adicione os líquidos e mexa até que a massa não grude nas mãos, depois é só modelar como preferir e colocar 
em uma forma untada.
Assar em 160°c por 40min
Siga a ordem dos ingredientes", "2"),

("Bolo de Chocolate Vegano", 
"Receita:
2 xícaras de farinha de trigo
1/2 de chocolate (usei em pó)
1 xícara de açúcar
300 ml de água morna
80 ml de óleo
1/2 colher de chá de bicarbonato
1 colher de chá de vinagre
1 colher de sopa de fermento", "1"), 

("Panqueca Americana Romeu e Julieta",
"Panqueca
1 xícara e meia de farinha de trigo com fermento
1 xícara de chá de leite
1 pitada se sal
1 colher de sopa de açúcar
2 colheres de sopa de manteiga derretida
Recheio
doce de goiabada
queijo coalho
Modo de Preparo
Em um recipiente, misture a farinha de trigo, o açúcar e o sal.
Em seguida adicione a manteiga e o leite.
Misture bem todos os ingredientes da massa.
A massa não deve ficar muito lisa e nem muito grossa, deve escorrer lentamente.
Unte uma frigideira com margarina e leve ao fogo baixo.
Coloque pequenas porções da massa, no centro da frigideira.
Balance a frigideira devagar, para a panqueca não grudar.
Depois vire-a e asse do outro lado.
Depois de assar as panquecas leve o doce de goiaba ao micro-ondas, o tempo varia de acordo com a quantidade.
Recheie as panquecas com o doce de goiaba derretido.
Em seguida acrescente raspas do queijo coalho.
", "3");