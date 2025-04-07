# App Remédio 💊

O **App Remédio** é um aplicativo desenvolvido em React Native que ajuda os usuários a gerenciar seus medicamentos. Ele permite adicionar medicamentos, definir horários, listar os medicamentos salvos e receber notificações para lembrar de tomá-los. Além disso, o aplicativo possui um sistema de autenticação com login e cadastro.

---

## 🆕 O que há de novo?

### **1. Cálculo Automático de Horários**
- Agora o aplicativo calcula automaticamente os horários das doses com base no horário inicial e no intervalo fornecido pelo usuário.
- Exibição dos horários calculados diretamente na lista de medicamentos.

### **2. Melhorias na Autenticação**
- Separação das telas de login e cadastro para uma experiência mais organizada.
- Armazenamento seguro de credenciais usando `SecureStore`.

### **3. Fluxo de Logout**
- Adicionado botão de logout na tela principal para limpar as credenciais e redirecionar para a tela de login.

### **4. Validações Aprimoradas**
- Validação de campos obrigatórios em todas as telas para evitar erros de entrada.
- Tratamento de erros ao salvar e exibir medicamentos.

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
│   ├── components/
│   │   ├── AdicionarMedicamento.js  # Componente para adicionar medicamentos
│   │   ├── Principal.js             # Componente principal
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── CriarConta.js        # Tela de criação de conta
│   │   │   ├── LoginUsuario.js      # Tela de login de usuários
│   │   ├── ListaMedicamentos.js     # Tela para listar medicamentos
│   ├── navigation/
│   │   ├── NavegacaoApp.js          # Configuração de navegação do app
│   ├── context/
│   │   ├── AuthContext.js           # Contexto de autenticação
│   ├── services/
│   │   ├── Notifications.js         # Serviço de notificações
│   ├── utils/
│   │   ├── CalcTime.js              # Utilitário para cálculos de tempo
│   │   ├── Validators.js            # Utilitário para validações
│   ├── assets/                      # Arquivos estáticos (imagens, ícones)
│   ├── styles/
│   │   ├── global.js                # Estilos globais do app
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

## 🛠️ Melhorias Futuras

### 🔄 Integração Avançada
- **API de Bulas de Remédios**:
  - Consulta em tempo real via Bulário Eletrônico da ANVISA
  - Detalhes completos (princípio ativo, posologia, contraindicações)
  - Cache offline das últimas consultas

- **Banco de Dados em Nuvem**:
  - Substituir AsyncStorage por:
    - ✅ Firebase Firestore (sincronização em tempo real)
    - ✅ Supabase (alternativa open-source)
  - Autenticação com Firebase Auth/OAuth2

### ✨ Novas Funcionalidades
- **Sistema de Recomendação**:
  - Sugere medicamentos similares por princípio ativo
  - Alertas sobre interações perigosas

- **Gerenciamento Avançado**:
  - ✏️ Edição/Exclusão de medicamentos
  - ☁️ Sincronização multi-dispositivo

### 🔔 Notificações
- ⏰ Lembretes push com `expo-notifications`
- ⚡ Ajuste inteligente de horários (ex: "Tome 30min antes do almoço")

### 🎨 UX/UI
- 🌙 Modo escuro/claro
- 📊 Relatórios de uso (gráficos de adesão)

### 🛡️ Segurança
- 🔐 Backup automático criptografado
- 📜 Conformidade com LGPD


## 📧 Contato
- Autor: Sergio Gabriel
- Email: sergiogabrieltf@gmail.com
- GitHub: SergioGTF


