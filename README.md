# App Remédio 💊

O **App Remédio** é um aplicativo desenvolvido em React Native que ajuda os usuários a gerenciar seus medicamentos. Ele permite adicionar medicamentos, definir horários, listar os medicamentos salvos e receber notificações para lembrar de tomá-los. Além disso, o aplicativo possui um sistema de autenticação com login e cadastro.

---

## 📋 Funcionalidades

### 🔐 Cadastro e Login de Usuários
- **Cadastro de novos usuários**: Armazenamento seguro de credenciais usando `SecureStore`.
- **Login**: Validação de credenciais para acesso.
- **Logout**: Limpeza das credenciais e redirecionamento para a tela de login.

### 💊 Gerenciamento de Medicamentos
- **Adicionar medicamentos**: Registre o nome e horário do medicamento.
- **Listar medicamentos**: Visualize todos os medicamentos cadastrados.
- **Armazenamento local**: Dados salvos usando `AsyncStorage`.

### 🔔 Notificações (Futuro)
- Lembretes para tomar os medicamentos no horário definido.

---

## 🛠️ Tecnologias Utilizadas
- **React Native**: Framework principal.
- **Expo**: Facilita o desenvolvimento e execução.
- **React Navigation**: Navegação entre telas.
- **AsyncStorage**: Armazenamento local de medicamentos.
- **SecureStore**: Armazenamento seguro de credenciais.
- **DateTimePicker**: Seleção de horários para os medicamentos.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado.
- Expo CLI instalado globalmente:
  ```bash
  npm install -g expo-cli

## Passos para Rodar
- Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/app-remedio.git cd app-remedio

- Instale as dependências:

    ```bash
    npm install

- Inicie o servidor:

    ```bash
    npm start

--- 
## 📂 Estrutura do Projeto
```
AppRemedio/
├── App-Remedio/
│   ├── componentes/
│   │   ├── AdicionarMedicamento.js  # Tela para adicionar medicamentos
│   │   ├── ListaMedicamentos.js     # Tela para listar medicamentos
│   │   ├── Principal.js             # Tela principal do app
│   ├── cadastro/
│   │   ├── Cadastro.js              # Tela de cadastro de usuários
│   ├── login/
│   │   ├── LoginUsuario.js          # Tela de login de usuários
│   ├── navegacao/
│   │   ├── NavegacaoApp.js          # Configuração de navegação
│   ├── assets/                      # Arquivos estáticos (imagens, sons, etc.)
│   ├── App.js                       # Arquivo principal do app
│   ├── index.js                     # Ponto de entrada do app
│   ├── app.json                     # Configurações do Expo
│   ├── package.json                 # Dependências do projeto
```
---

## 📱 Telas do Aplicativo
### **Login**

- Tela inicial para autenticação do usuário.
- Botão para redirecionar para a tela de cadastro.
- Cadastro
- Criação de nova conta.
- Armazenamento seguro com SecureStore.

### **Tela Principal**

- Opções para adicionar medicamentos, listar medicamentos e - fazer logout.
- Adicionar Medicamento
- Registro de medicamentos com nome e horário.
- Armazenamento local com AsyncStorage.
- Lista de Medicamentos
- Exibe os medicamentos salvos.
- Atualização automática ao retornar para a tela.

---

## 🔒 **Segurança**

- Credenciais: Armazenadas com SecureStore.
- Dados locais: Medicamentos salvos com AsyncStorage.

---

## 🛠️ **Melhorias Futuras**
- Notificações: Lembretes no horário do medicamento.
- Edição/Exclusão: Permitir alterar ou remover medicamentos.
- Sincronização na Nuvem: Acessar dados em múltiplos dispositivos.
- Modo Escuro: Melhorar experiência visual.

## 📧 Contato
- Autor: Sergio Gabriel
- Email: sergiogabrieltf@gmail.com
- GitHub: SergioGTF


