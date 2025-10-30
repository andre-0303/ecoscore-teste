# 🌱 EcoScore

**EcoScore** é uma aplicação simples e educativa criada para **reduzir o desperdício de alimentos nas escolas**.  
O projeto transforma o controle diário de restos de comida em uma **competição saudável entre os cursos**, incentivando alunos e professores a repensarem seus hábitos.

---

## 🧩 Visão Geral

A cada dia da semana, **um curso diferente** da escola é responsável por monitorar o peso dos resíduos do seu refeitório.  
O sistema registra quantos **quilogramas de comida foram desperdiçados** naquele dia.  
Na **sexta-feira**, o app calcula automaticamente **qual curso teve o menor desperdício**, definindo o campeão da semana. 🏆

---

## 🎯 Objetivos

- Estimular a **educação ambiental** e a consciência alimentar de forma prática e divertida.  
- Engajar alunos e professores através de **gamificação e desafios semanais**.  
- Fornecer dados para que a escola visualize o impacto da redução de resíduos.

---

## 🖥️ Funcionalidades (v1.0)

- ✅ Registro diário de peso de resíduos por curso  
- ✅ Identificação automática do curso com base no dia da semana  
- ✅ Cálculo automático do **campeão semanal** (menor desperdício)  
- ✅ Ranking visual dos cursos  
- ✅ Integração com **JSON Server** simulando o backend  
- ✅ Interface leve e intuitiva com **HTML + CSS + JavaScript puro**

---

## 🧠 Fluxo de Funcionamento

1. Cada dia da semana é associado a um curso:

   | Dia        | Curso          |
   |------------|----------------|
   | Segunda    | Informática    |
   | Terça      | Administração  |
   | Quarta     | Agropecuária   |
   | Quinta     | Edificações    |

2. O app detecta o dia atual e exibe o curso responsável.  
3. O usuário insere o **peso dos resíduos** e salva o registro.  
4. Na sexta-feira, o sistema analisa todos os dados e mostra o **curso vencedor da semana** — aquele que desperdiçou menos alimentos.

---

## ⚙️ Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**  
- **JSON Server** → simulação do backend para armazenar os registros localmente  

---

## 🧱 Estrutura de Pastas

```
ecoscore/
│
├── index.html
├── style.css
├── script.js
├── db.json          # Base simulada pelo JSON Server
└── assets/
    └── images/      # Ícones e imagens da interface
```

---

## 🚀 Como Rodar Localmente

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/andre-0303/ecoscore-teste.git
```

### 2️⃣ Instale o JSON Server
```bash
npm install -g json-server
```

### 3️⃣ Inicie o servidor
```bash
json-server --watch db.json
```
O servidor rodará em:  
👉 [http://localhost:3000/registros](http://localhost:3000/registros)

### 4️⃣ Abra o projeto no navegador
Basta abrir o arquivo `index.html` no seu navegador preferido.

---

## 🧩 Exemplo de Uso

- Na **segunda-feira**, o curso de **Informática** insere o peso do balde de restos (ex: `1.8 kg`) e salva.  
- Na **terça**, **Administração** faz o mesmo.  
- Na **sexta**, o app mostra o **ranking semanal**, destacando o curso com menor desperdício como **campeão**. 🥇

---

## 🧭 Próximos Passos (v2.0)

- Adicionar gráficos interativos com **Recharts** ou **Chart.js**  
- Histórico semanal com armazenamento real (**PostgreSQL no Neon**)  
- Autenticação de usuário (professor ou monitor)  
- Painel administrativo com exportação de dados (**CSV ou PDF**)  
- Sistema de conquistas e pontuação sustentável

---

## 🤝 Equipe

- 👨‍💻 **Front-end**: [Seu Nome]  
- ⚙️ **Back-end**: [Nome do Parceiro]


---


> _"Pequenas atitudes diárias geram grandes mudanças. O EcoScore quer provar isso."_ 🌎