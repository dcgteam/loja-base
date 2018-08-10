## Recursos necessários
- Git
- Node.js

## Como começar
- Instale Git e Node.js
- Crie uma pasta para seu projeto e clone os arquivos de inicialização
- Rode os comandos abaixo para instalar as dependências e extensões
npm install
bower install

## Rodando a Stack
- Acesse o prompt/terminal na raiz do projeto e execute o comando abaixo para rodar a stack
gulp

- Finalizado este processo, um retorno semelhante ao abaixo será exibido no prompt/terminal:
[09:13:04] Using gulpfile c:\projetos\loja\gulpfile.js
[09:13:04] Starting 'connect'...
[09:13:05] Finished 'connect' after 1.5 s
[09:13:05] Starting 'watch'...
[09:13:05] Finished 'watch' after 155 ms
[09:13:05] Starting 'default'...
[09:13:05] Finished 'default' after 4.54 μs
[09:13:05] Server started http://localhost:8080
[09:13:05] LiveReload started on port 35729

- Para compilar o Sass, salve algum arquivo .scss. Você verá que no prompt/terminal será exibido o retorno abaixo:
[09:15:59] Starting 'sass'...
[09:15:59] Finished 'sass' after 19 ms
[09:15:59] c:\projetos\loja\css\teste.css reloaded.

## Carregando um arquivo css local na sua loja
Instale a extensão CSS Inject [https://chrome.google.com/webstore/detail/css-inject/fmiohbdblcemacakpnoinjmcelddpjbg]

Após instalado, clique com o botão direto do mouse sobre o ícone da extensão e selecione Opções.
Informe a URL do arquivo css que deseja que seja incluído a sua página (por exemplo:http://localhost:8080/css/teste.css) e clique no botão “Save”. 
Agora acesse a página que deseja injetar o css e clique na extensão CSS Inject, com isso, o arquivo será incluído no head e os estilos serão aplicados. Deverá aparecer o título "on" sobre o ícone indicando que a ferramenta está ativa.

## Live Reload
- Esta aplicação utiliza o Live Reload, ele é uma ferramenta excelente para testes locais. O Live Reload é uma extensão para Chrome que monitora mudanças em arquivos. Assim que você salva um arquivo css ou imagem dentro da pasta do seu projeto, o browser é atualizado.

Faça a instalação da extensão em https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei. Após instalada, o ícone  ficará disponível na sua barra de ferramentas.
Para ativar o Live Reload, basta clicar no ícone. Quando o círculo central estiver preenchido, indica que a ferramenta está ativa. 

## Dicas
- Utilize o arquivo _configs.scss para adicionar configurações básicas tais como cores, tamanho de wrapper, fonte padrão e etc. Lembre-se de colocar na variável $theme-path o nome da pasta do tema que estás estilizando utilizando na loja,
- Utilizamos o sistema de grid do bootstrap. Leia a documentação do Bootstrap para maiores detalhes de uso.
- Utilizamos o sistema de grid do Neat em alguns casos onde é necessário definir a quantidade de colunas diretamente pelo CSS. No entanto, também é possível usar o Bootstrap para isso.
- Adicione dentro do arquivo _fontes as @font-face das fontes a serem usadas e dentro do arquivo _configs indique a(s) fonte(s) principal(is)
- Utilizamos o Sass como pré-processador.
- o Normalize foi usado para formatações básicas que servem para "limpar" o código.
