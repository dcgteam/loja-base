# Tema Base - Plataforma Core
Neste projeto você irá encontrar as folhas de estilo para estilizar sua loja a partir do tema Base da plataforma Core.

## Recursos Necessários
- **[Git](https://git-scm.com/downloads)**
- **[Node.js](https://nodejs.org/en/download/)**

## Plugins
- [Sass](https://sass-lang.com/documentation/file.SASS_REFERENCE.html): Utilizamos o Sass como pré-processador.
- [Bootstrap 4.0.0](https://getbootstrap.com/docs/4.0/layout/grid/): Utilizamos o sistema de grid do Bootstrap 4.0.0. Recomendamos a leitura da documentação desta versão para maiores detalhes sobre seu uso e recursos.
- [Neat](https://neat.bourbon.io/docs/latest/): O sistema de grid do Neat também é utilizado em alguns casos específicos como, por exemplo, quando é necessário definir a quantidade de colunas diretamente pelo CSS. No entanto, também é possível usar o Bootstrap para isso.
- [Normalize](http://nicolasgallagher.com/about-normalize-css/): o Normalize é utilizado para formatações básicas que servem para "limpar" o código.
- [Gulp](https://github.com/gulpjs/gulp/blob/v3.9.1/docs/API.md): este automatizador de tarefas é utilizado para compilar o sass e também para gerar o sprite de imagens.
- [CSS Inject](https://chrome.google.com/webstore/detail/css-inject/fmiohbdblcemacakpnoinjmcelddpjbg): extensão para Chrome utilizada para carregar um arquivo local na sua loja.
- [Live Reload](https://www.npmjs.com/package/gulp-livereload): utilizado para monitorar mudanças nos arquivos locais e atualizá-los no browser.

## Como começar
Instale Git e o Node.js e clone o repositório em sua máquina.
Acesse o diretório do projeto e rode os comandos abaixo para instalar as dependências e extensões
```
npm install
bower install
```

## Rodando a Stack
Acesse o prompt/terminal na raiz do projeto e execute o comando abaixo para rodar a stack:
```
gulp
```


Finalizado este processo, um retorno semelhante ao abaixo será exibido no prompt/terminal:
```
[09:13:04] Using gulpfile c:\projetos\loja\gulpfile.js
[09:13:04] Starting 'connect'...
[09:13:05] Finished 'connect' after 1.5 s
[09:13:05] Starting 'watch'...
[09:13:05] Finished 'watch' after 155 ms
[09:13:05] Starting 'default'...
[09:13:05] Finished 'default' after 4.54 μs
[09:13:05] Server started http://localhost:8080
[09:13:05] LiveReload started on port 35729
```

Para compilar o Sass, salve algum dos arquivos .scss. Você verá que no prompt/terminal será exibido um retorno como o abaixo:
```

[09:15:59] Starting 'sass'...
[09:15:59] Finished 'sass' after 19 ms
[09:15:59] c:\projetos\loja\css\teste.css reloaded.
```

## CSS Inject
O CSS Inject é uma extensão que permite carregar um arquivo css local no seu browser. Para instalá-la, acesse o link https://chrome.google.com/webstore/detail/css-inject/fmiohbdblcemacakpnoinjmcelddpjbg

Após instalado, clique com o botão direto do mouse sobre o ícone da extensão e selecione Opções.
Informe a URL do arquivo css que deseja que seja incluído a sua página (por exemplo:http://localhost:8080/css/teste.css) e clique no botão “Save”. 

Agora acesse a página que deseja injetar o css e clique na extensão CSS Inject, com isso, o arquivo será incluído no head e os estilos serão aplicados. Deverá aparecer o título "on" sobre o ícone indicando que a ferramenta está ativa.

## Live Reload
Esta aplicação utiliza o Live Reload, ele é uma ferramenta excelente para testes locais. O Live Reload é uma extensão para Chrome que monitora mudanças em arquivos. Assim que você salva um arquivo css ou imagem dentro da pasta do seu projeto, o browser é atualizado.

Faça a instalação da extensão em https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei. Após instalada, o ícone  ficará disponível na sua barra de ferramentas.

Para ativar o Live Reload, basta clicar no ícone. Quando o círculo central estiver preenchido, indica que a ferramenta está ativa. 

## Estrutura de arquivos
- Os arquivos SCSS ficam localizados no diretório /src/scss e são organizados por área (carrinho, produto, listagem...)
- Os arquivos que possuem _ (underline) no início do nome são renderizados apenas se importados em outro arquivo sem o underline
- Os arquivos não possuem _ (underline), por sua vez, geram um arquivo CSS no diretório /css

### Algumas dicas:
- *_configs.scss*: contém as configurações padrões do projeto, tais como cores, fontes, tamanho do wrapper e etc. Utilize este arquivo para adicionar variáveis para serem utilizadas no projeto. Lembre-se de colocar na variável $theme-path o nome da pasta do tema que estás estilizando na loja.
- *_fontes*: neste arquivo ficam os comandos @font-face referentes as fontes usadas no projeto. Lembre-se que pode-se usar o arquivo *_config* para criar uma variável para as fontes.
- *_mixins*: contém diretivas para agilizar a estilização de alguns elementos, como, por exemplo, arredondamento e geração de ícones da FontAwesome. Recomendamos a leitura da documentação do Sass para maiores detalhes sobre seu uso e recursos.
- Para testar imagens localmente, recomendamos que crie um diretório com o mesmo caminho que seria utilizado na loja. Exemplo: */Custom/Content/Themes/NOMEDOTEMA/Imagens*

- Para agilizar a codificação, recomendamos que importe todos os seus arquivos SCSS dentro do arquivo estilos.scss (ou outro de sua escolha). Desta forma, no CSS Inject você poderá utilizar este arquivo compilado para todas as páginas.


## Gerar Sprite
Execute o comando abaixo no diretório do projeto para gerar o sprite:
```
gulp sprite
```

De acordo com o que está configurado hoje, este comando gera um arquivo sprite (várias imagens compiladas em um único arquivo) com as imagens que estão na pasta */img/sprites* e cuja extensão é PNG. Além de gerar o sprite, também é criado o arquivo *sprite.css* contendo classes (.icon-nomedaimagem) com as informações de posicionamento, tamanho e background de cada uma das imagens

A imagem *sprite.png* é gerada no diretório */img*, já o arquivo *sprite.scss* fica no diretório */src/scss*.

Todas as configurações deste plugin podem ser gerenciadas no arquivo *gulpfile.js*, inclusive pode-se optar por gerar uma arquivo scss ao invés de css.

OBS: neste projeto foram utilizados apenas ícones do FontAwesome, por isso originalmente não existe o diretório */img*

## Dúvidas?
Entre em contato conosco! Envie suas dúvidas para o e-mail [agencia@dcg.com.br](mailto:agencia@dcg.com.br), teremos prazer em auxiliá-lo :)
