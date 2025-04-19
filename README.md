
# Project Manager - Desafio Técnico
Sistema completo para gerenciamento de projetos, com autenticação de usuários, CRUD de projetos e integração com API de localização por CEP.

## 🛠 Tecnologias
- Backend: Node.js + Express
- Frontend: React
- Banco de Dados: PostgreSQL
- Localização: ViaCEP API

## 🔧 Como rodar o projeto localmente

### 1. Clone o repositório
```bash
git clone https://github.com/tsmarcio/project-manager-desafio-tecnico.git
cd project-manager-desafio-tecnico
```

### 2. Configure o banco de dados PostgreSQL
- Crie um banco de dados local chamado `project_manager`.
- Execute o script `init.sql` na raiz do projeto para criar as tabelas.

### 3. Backend
```bash
cd backend
npm install
npm start
```

### 4. Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## 📌 Funcionalidades
- Cadastro e login de usuários
- CRUD completo de projetos por usuário
- Marcar projetos como concluídos
- Buscar localização por CEP (Cidade/UF)
- Proteção por autenticação (apenas usuários logados)
- Design responsivo com React

---

## 🔗 Desafio técnico
Esse projeto é baseado no desafio técnico proposto no documento:  
[`Desafio técnico - jr.pdf`](./Desafio%20t%C3%A9cnico%20-%20jr.pdf)

---

## 👤 Autor
**Márcio Teles**  
[LinkedIn](https://www.linkedin.com/in/seu-perfil)
