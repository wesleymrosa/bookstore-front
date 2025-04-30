
## 📘 Bookstore Front

### 🌐 Visão Geral

O **Bookstore Front** é o frontend da aplicação Bookstore, desenvolvido com **Angular 15**, que se conecta ao backend [Bookstore API](https://github.com/wesleymrosa/bookstore-api).  
A aplicação permite o gerenciamento de **categorias** e **livros**, com uma interface intuitiva, responsiva e funcional, integrando-se a uma API RESTful construída com Spring Boot.

---

### 🚀 Funcionalidades

- 📚 Listar livros por categoria  
- 🆕 Cadastrar novo livro  
- ✏️ Editar e remover livros existentes  
- 🗂️ Cadastrar, editar e excluir categorias  
- 📖 Ler o conteúdo completo do livro  
- 🔁 Navegação dinâmica por rotas  
- 🔗 Integração em tempo real com a API REST do backend  

---

### 🛠️ Tecnologias Utilizadas

**Frontend**
- Angular 15  
- TypeScript  
- HTML5 + CSS3  
- Angular Router  
- Reactive Forms  
- Angular Material  

**Ferramentas**
- Visual Studio Code  
- Postman  
- Git + GitHub  

---

### 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── component/
│   │   └── views/
│   │       ├── categoria/
│   │       │   ├── categoria-create/
│   │       │   ├── categoria-read/
│   │       │   ├── categoria-update/
│   │       │   └── categoria-delete/
│   │       └── livro/
│   │           ├── livro-create/
│   │           ├── livro-read-all/
│   │           ├── livro-read-text/
│   │           ├── livro-update/
│   │           └── livro-delete/
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/
│   └── img/
│       └── livro.png
├── environments/
└── styles.css
```

---

### ⚙️ Como Executar o Projeto

1. **Clonar o repositório:**
```bash
git clone https://github.com/wesleymrosa/bookstore-front.git
cd bookstore-front
```

2. **Instalar as dependências:**
```bash
npm install
```

3. **Executar a aplicação Angular:**
```bash
ng serve
```

4. **Acessar no navegador:**
```
http://localhost:4200
```

⚠️ **Importante:** Certifique-se de que o backend esteja rodando em `http://localhost:8082`.

---

### 🔄 Integração com o Backend

A aplicação consome a API RESTful do projeto [bookstore-api](https://github.com/wesleymrosa/bookstore-api), realizando as seguintes operações:

#### 📂 Categorias
```
GET     /categorias
GET     /categorias/{id}
POST    /categorias
PUT     /categorias/{id}
DELETE  /categorias/{id}
```

#### 📚 Livros
```
GET     /livros?categoria={id}
GET     /livros/{id}
POST    /livros?categoria={id}
PUT     /livros/{id}
DELETE  /livros/{id}
```

---

### 🧪 Testes e Validações

- ✅ Validações de formulário com Angular Forms  
- ✅ Testes manuais com Postman e navegador  
- ✅ Respostas dinâmicas e feedbacks visuais  
- ✅ Integração funcional com o backend Spring Boot  

---

### 🔗 Repositório Backend

📦 Repositório complementar da API:  
[https://github.com/wesleymrosa/bookstore-api](https://github.com/wesleymrosa/bookstore-api)

---

### 👨‍💻 Autor

**Wesley Martins Rosa**  
📧 E-mail: wesleymrosa@gmail.com  
🔗 LinkedIn: https://www.linkedin.com/in/wesley-martins-rosa-5118aa15a  
🔗 GitHub: https://github.com/wesleymrosa
