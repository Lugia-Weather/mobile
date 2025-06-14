# Lugia Weather

## Integrantes

* **Erik Paschoalatto dos Santos**
* **Júlio César Nunes Oliveira** 
* **Nathan Magno Gustavo Consolo**

<p align="center">
  <img src="https://img.icons8.com/?size=100&id=102261&format=png&color=0AFAFA" alt="Ícone de computação em nuvem" />
</p>

## Sobre o Projeto

Em 2024, o Brasil acompanhou, com tristeza e preocupação, as graves enchentes
que atingiram o Rio Grande do Sul, deixando milhares de famílias desabrigadas,
causando prejuízos bilionários e evidenciando a vulnerabilidade de nossas cidades
diante de eventos climáticos extremos. Outro caso ocorreu recentemente: em março
de 2025, a cidade de Peruíbe, no litoral de São Paulo, também foi surpreendida por
fortes chuvas que provocaram alagamentos, interditaram vias e afetaram a rotina de
centenas de moradores. Esses episódios, infelizmente, não são isolados. Segundo
a Confederação Nacional de Municípios, mais de 2.400 cidades brasileiras já
registraram ocorrências de enchentes nos últimos anos.
Por trás desses números, estão histórias de perdas, transtornos e a sensação de
impotência diante de um problema que poderia ser, ao menos em parte, evitado ou
minimizado com informação e ação rápida. Um dos grandes desafios enfrentados
pelas prefeituras e pela população é justamente a falta de monitoramento em tempo
real dos pontos críticos da cidade, como bueiros, bocas de lobo e canais de
drenagem, que, quando obstruídos por lixo, folhas ou sedimentos, deixam de
cumprir sua função e acabam agravando o risco de alagamentos. Com a população
e o Estado melhor informados, é possível mitigar ou até mesmo evitar que desastres
desse tipo ocorram e afetem milhares de vidas.
Pensando nisso, foi desenvolvido o projeto Lugia Weather, uma solução inteligente
e inovadora para o monitoramento de enchentes, baseada em dispositivos e
sensores IoT. Nossa proposta é simples, porém poderosa: instalar sensores de nível
de água em bueiros e bocas de lobo estratégicos da cidade, capazes de monitorar
continuamente a situação e enviar informações em tempo real para uma central de
monitoramento. Cada sensor transmite seus dados individualmente para esse
servidor central, que reúne e processa as informações recebidas de todos os pontos
monitorados. Dessa forma, o sistema consegue analisar, de forma integrada, os
níveis de água registrados em diferentes sensores de uma mesma região,
permitindo identificar rapidamente padrões de risco e detectar se uma determinada
área está sob ameaça de alagamento ou já enfrenta uma situação crítica. Assim,
tanto as autoridades quanto a população podem receber alertas precisos e tomar
decisões mais informadas e ágeis para prevenir ou minimizar os impactos das
enchentes.

<p align="center">
  <img src="https://img.icons8.com/?size=100&id=RaljsbuV3tuS&format=png&color=000000" alt="Ícone de computação em nuvem" />
</p>

## Dependências

```json
"dependencies": {
    "@react-navigation/bottom-tabs": "^7.3.13",
    "@react-navigation/native": "^7.1.9",
    "@react-navigation/stack": "^7.3.2",
    "axios": "^1.9.0",
    "expo": "~53.0.9",
    "expo-image": "~2.1.7",
    "react": "19.0.0",
    "react-native": "0.79.2",
    "react-native-dotenv": "^3.4.11",
    "react-native-gesture-handler": "~2.24.0",
    "react-native-maps-directions": "^1.9.0",
    "react-native-safe-area-context": "5.4.0",
    "react-native-screens": "~4.10.0",
    "react-native-vector-icons": "^10.2.0",
    "react-native-svg": "15.11.2"
  }
```

## Estrutura do Projeto

```
mobile/
├── assets/ # Imagens e recursos estáticos
├── src/
│ ├── components/ # Componentes reutilizáveis (botões, inputs, headers, etc.)
│ └── pages/ # Telas principais da aplicação (Login, CriarConta, Dispositivo, etc.)
├── App.tsx # Arquivo principal da aplicação
├── index.ts # Ponto de entrada
├── package.json # Dependências e scripts
├── tsconfig.json # Configuração do TypeScript
├── app.json # Configuração do Expo
```

**Arquitetura**
O projeto adota uma arquitetura baseada em microserviços, na qual o aplicativo mobile atua como cliente de uma API Java 
utilizando Spring Boot para criação dos endpoints REST. A persistência dos dados é feita com Spring Data JPA e Hibernate, garantindo o cadastro e autenticação de usuários

> Caso queira conferir saber mais sobre o back-end do projeto, aqui está o link do repositório Java: https://github.com/Lugia-Weather/java

## Utilização

**Pré-requisitos**
* Node.js (recomendado: versão 18.x ou superior)
* Expo CLI (`npm install -g expo-cli`)
* Git
* Emulador Android/iOS configurado (Android Studio ou Xcode) ou dispositivo físico com o app Expo Go

**Clonando o repositório**
```
git clone https://github.com/Lugia-Weather/mobile.git
```
**Navegando para o repositório**
``` 
cd mobile
```

**Instalando as dependências**
```
npm install
```

> Se preferir, utilize ferramentas como `react-native-clean-project` para garantir um ambiente limpo.

**Executando o app**
- Para iniciar o projeto:
```
npm start
```

> Se preferir rodar diretamente em um emulador ou dispositivo:
- Emulador Android
```
npm run android
```
- Emulador Android iOS (apenas Mac)
```
npm run ios
```
- Rodar no navegador
```
npm run web
```

**Vídeo de apresentação do projeto**: https://youtu.be/bKEJxBdP2to
