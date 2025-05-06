# Sistema de Gestão de Consultas para Psicólogos e Nutricionistas

Este é um sistema SaaS em desenvolvimento, voltado para profissionais da saúde que desejam organizar atendimentos de forma prática e eficiente.

## 🧠 Público-alvo

Psicólogos e nutricionistas com consultório próprio.

## 🎯 Funcionalidades do MVP

- Login do profissional
- Cadastro de pacientes
- Agendamento de consultas
- Histórico da evolução do paciente

## 💡 Funcionalidades Futuras (Backlog)

- Pagamento online
- Notificações por e-mail
- Videochamadas integradas

## 🔧 Tecnologias

- **Backend**: Python, FastAPI
- **Frontend**: React, Vite, TailwindCSS

## 📁 Estrutura do Projeto

gestao-consultas-psicologos-nutricionistas/
├── backend/
├── frontend/


## 🚀 Como rodar o projeto

### Pré-requisitos

- Python 3.11+
- Node.js + npm
- Git



### Backend (FastAPI)

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn
uvicorn main:app --reload

### Frontend (React + Vite)

cd frontend
npm install
npm run dev

