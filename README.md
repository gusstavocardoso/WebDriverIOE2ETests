# Testes End-to-End com WebdriverIO

![webdriverio](https://github.com/gusstavocardoso/WebDriverIOE2ETests/assets/52720347/6fb60a5f-c60b-429f-bd90-ade5c2e9d699)


Este repositório contém testes end-to-end (E2E) utilizando o framework WebdriverIO para realizar testes automatizados em uma aplicação web.

## Instalação
1. Clone o repositório em sua máquina local:
```
git clone https://github.com/gusstavocardoso/WebDriverIOE2ETests
cd WebDriverIOE2ETests
```   
2. Instale as dependências do projeto:
```
npm install
```   
## Executando os Testes
```
npm test
```
## Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:

```
.
├── test
│   ├── data
│   │   ├── loginData.json
│   │   └── purchaseData.json
│   ├── elements
│   │   ├── loginPageElements.js
│   │   └── purchasePageElements.js
│   ├── pageobjects
│   │   ├── loginPage.js
│   │   └── purchasePage.js
│   ├── specs
│   │   ├── login.spec.js
│   │   └── purchase.spec.js
│   └── wdio.conf.js
└── package.json
```
- A pasta data contém arquivos JSON que armazenam dados utilizados nos testes, como informações de login e detalhes da compra.
- A pasta elements contém arquivos JavaScript que representam os elementos da página mapeados através de seletores, permitindo que os objetos de página interajam com eles durante os testes.
- A pasta test/pageobjects contém os arquivos de objetos de página, que representam as páginas da aplicação e suas interações.
- A pasta test/specs contém os arquivos de teste escritos em JavaScript usando o framework Mocha e a biblioteca de asserção Chai.
- O arquivo wdio.conf.js é o arquivo de configuração do WebdriverIO onde você pode configurar as opções de execução dos testes.
- O arquivo package.json contém informações do projeto e as dependências necessárias.
