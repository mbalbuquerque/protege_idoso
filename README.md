# 🛡️ Protege Idoso

### Educação, prevenção e segurança digital para pessoas 50+

O **Protege Idoso** é uma aplicação web criada para ajudar pessoas idosas e o público 50+ a **identificar, compreender e evitar golpes e fraudes digitais**.

A plataforma combina **orientação interativa, recursos de voz, conteúdo educativo, gamificação e acesso a canais de ajuda**, utilizando uma interface simples e acessível.

🌐 **Aplicação online:**
https://naocaiaemgolpe.netlify.app/

---

## 🎯 O problema

Golpes digitais estão cada vez mais presentes em mensagens, redes sociais, aplicativos de comunicação, ligações telefônicas e serviços financeiros.

Para pessoas com menor familiaridade com o ambiente digital, identificar uma tentativa de fraude pode ser ainda mais difícil.

O **Protege Idoso** foi desenvolvido com uma pergunta central:

> **Como utilizar tecnologia para tornar informações sobre segurança digital mais simples, acessíveis e úteis para pessoas idosas?**

---

## 💡 A solução

O Protege Idoso reúne diferentes recursos de educação e prevenção em uma única aplicação.

```text
                    🛡️ PROTEGE IDOSO
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
        👵 CARMINHA     📚 EDUCAÇÃO     🚨 AJUDA
             │              │              │
        Texto + Voz       Quiz          Orientações
             │            Vídeos            │
        Respostas         Alertas       Canais úteis
             │              │              │
             └──────────────┼──────────────┘
                            │
                            ▼
                   🔐 SEGURANÇA DIGITAL
```

O objetivo não é apenas informar sobre golpes, mas proporcionar uma experiência simples para que o usuário possa **aprender, tirar dúvidas e saber onde procurar ajuda**.

---

# 👵 Conheça a Carminha

A **Carminha** é a assistente de segurança digital do Protege Idoso.

Ela foi pensada para oferecer uma interação simples e amigável, permitindo que o usuário apresente dúvidas e situações relacionadas a possíveis golpes.

### Recursos de interação

⌨️ **Texto** — o usuário pode digitar sua dúvida.

🎤 **Voz** — possibilidade de utilizar a fala para interagir com a aplicação.

🔊 **Resposta em áudio** — as orientações podem ser reproduzidas em voz.

Esses recursos ajudam a tornar a aplicação mais acessível para pessoas que possam ter dificuldade com interfaces digitais tradicionais.

---

# 🧠 Educação através de gamificação

O Protege Idoso também utiliza **gamificação como ferramenta de educação digital**.

O quiz apresenta situações relacionadas a golpes e segurança na internet, incentivando o usuário a testar seus conhecimentos.

A proposta é transformar o aprendizado em uma experiência mais:

* Interativa
* Simples
* Participativa
* Memorável

---

# 📺 Conteúdo educativo

A plataforma reúne conteúdos relacionados à prevenção de golpes e fraudes digitais.

O objetivo é ajudar o usuário a reconhecer situações suspeitas antes de fornecer informações pessoais, realizar pagamentos ou clicar em links desconhecidos.

Entre os temas abordados estão situações envolvendo:

* Links suspeitos
* Mensagens fraudulentas
* Solicitação de dados pessoais
* Tentativas de engenharia social
* Golpes financeiros
* Falsos contatos
* Fraudes digitais

---

# 🚨 Orientação e canais de ajuda

Além da prevenção, a plataforma também disponibiliza orientações para situações em que o usuário acredita ter sido vítima de um golpe.

A aplicação direciona o usuário para recursos externos e canais de apoio relacionados à denúncia e busca de assistência.

> ⚠️ O Protege Idoso possui caráter educativo e preventivo e não substitui autoridades policiais, instituições financeiras ou outros órgãos responsáveis.

---

# ♿ Acessibilidade

A experiência foi pensada considerando características importantes para o público 50+.

Entre os recursos e princípios adotados estão:

* Interface simples
* Textos objetivos
* Botões de fácil identificação
* Navegação simplificada
* Recursos de voz
* Reprodução de respostas em áudio
* Design responsivo
* Uso em smartphones
* Redução da complexidade das interações

A acessibilidade é considerada uma parte central da evolução do projeto.

---

# 📱 Progressive Web App — PWA

O Protege Idoso foi desenvolvido como **Progressive Web App**.

Isso permite que dispositivos compatíveis instalem a aplicação diretamente a partir do navegador, proporcionando uma experiência semelhante à de um aplicativo.

O projeto utiliza:

```text
manifest.json
sw.js
```

O `manifest.json` contém as configurações utilizadas para instalação da aplicação.

O Service Worker (`sw.js`) permite implementar recursos característicos de aplicações web progressivas, como estratégias de cache e suporte a experiências offline.

---

# 🏗️ Arquitetura

Uma representação simplificada da aplicação:

```text
┌──────────────────────────────────┐
│             USUÁRIO              │
│                                  │
│      Smartphone / Navegador      │
└────────────────┬─────────────────┘
                 │
                 ▼
┌──────────────────────────────────┐
│         PROTEGE IDOSO            │
│                                  │
│      HTML • CSS • JavaScript     │
└───────────────┬──────────────────┘
                │
       ┌────────┼─────────┐
       │        │         │
       ▼        ▼         ▼
   👵 Carminha  🧠 Quiz   📚 Conteúdo
       │
       ▼
┌──────────────────────────────────┐
│          CAMADA DE SERVIÇOS      │
│                                  │
│      Node.js / Serverless        │
│        Netlify Functions         │
└────────────────┬─────────────────┘
                 │
                 ▼
┌──────────────────────────────────┐
│       Serviços / APIs externas   │
└──────────────────────────────────┘
```

---

# 🛠️ Tecnologias

## Front-end

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

## Back-end / Serviços

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)

## Cloud / Deploy

![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge\&logo=netlify\&logoColor=white)

## Versionamento

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)

---

# 📂 Estrutura do projeto

```text
protege_idoso/
│
├── imagem/
│
├── netlify/
│   └── functions/
│
├── .gitignore
├── index.html
├── manifest.json
├── netlify.toml
├── package.json
├── package-lock.json
├── script.js
├── server.js
├── style.css
└── sw.js
```

---

# 🔐 Segurança e privacidade

Como o projeto aborda segurança digital e atende um público potencialmente vulnerável, segurança e privacidade são requisitos importantes para sua evolução.

Entre as boas práticas consideradas estão:

* Não armazenar credenciais no frontend
* Utilizar variáveis de ambiente para dados sensíveis
* Evitar exposição de chaves de APIs
* Utilizar HTTPS
* Validar informações recebidas pelo backend
* Minimizar coleta de dados pessoais
* Manter dependências atualizadas
* Utilizar apenas serviços externos confiáveis

---

# 💻 Executando localmente

Clone o projeto:

```bash
git clone https://github.com/mbalbuquerque/protege_idoso.git
```

Entre no diretório:

```bash
cd protege_idoso
```

Instale as dependências:

```bash
npm install
```

Consulte os scripts disponíveis no `package.json` para executar o ambiente configurado para o projeto.

---

# 🌐 Deploy

A aplicação está publicada utilizando **Netlify**.

🌐 **Protege Idoso**

https://naocaiaemgolpe.netlify.app/

A estrutura também utiliza configuração para **Netlify Functions**, permitindo executar funcionalidades serverless na camada de serviços.

---

# 🚀 Roadmap

Entre as possíveis evoluções do Protege Idoso estão:

* [ ] Ampliar conteúdos sobre novos tipos de golpes
* [ ] Evoluir os recursos de acessibilidade
* [ ] Aprimorar interação por voz
* [ ] Expandir o quiz educativo
* [ ] Implementar testes automatizados
* [ ] Melhorar monitoramento da aplicação
* [ ] Aprimorar segurança das integrações
* [ ] Revisar continuamente canais oficiais de ajuda
* [ ] Avaliar novos recursos educativos
* [ ] Realizar testes de usabilidade com o público-alvo

---

# 📚 Aprendizados

O Protege Idoso permitiu aplicar diferentes conceitos em um único produto:

```text
           Desenvolvimento Web
                   │
     ┌─────────────┼─────────────┐
     ▼             ▼             ▼
 JavaScript       PWA        Serverless
     │             │             │
     └─────────────┼─────────────┘
                   ▼
             Cloud / Netlify
                   │
                   ▼
          Acessibilidade Digital
                   │
                   ▼
            Segurança Digital
                   │
                   ▼
              Impacto Social
```

Mais do que desenvolver uma interface, o projeto proporcionou experiência na construção de uma solução tecnológica considerando **problema, público-alvo, acessibilidade, experiência do usuário e impacto social**.

---

# 📌 Status

🟢 **Aplicação publicada e funcional**

O projeto continua em evolução, principalmente nas áreas de conteúdo, acessibilidade, segurança e experiência do usuário.

---

# 👨‍💻 Autor

**Marcelo Barbosa**

Desenvolvedor de Software em formação, com foco em desenvolvimento web e interesse em Python, Django, JavaScript, Inteligência Artificial, IoT, Cloud Computing e Cybersecurity.

GitHub: **@mbalbuquerque**

---

## 🤝 Contribuições

Sugestões e contribuições são bem-vindas.

Caso encontre um problema ou tenha uma ideia para melhorar o projeto, abra uma **Issue** neste repositório.

---

## ⚠️ Aviso

O **Protege Idoso** é uma iniciativa de caráter educativo e preventivo.

As informações disponibilizadas pela plataforma não substituem orientações de autoridades policiais, instituições financeiras, profissionais especializados ou órgãos oficiais.

Em caso de suspeita ou ocorrência de fraude, procure os canais oficiais apropriados.

---

### 🛡️ Tecnologia para informar, prevenir e proteger.
