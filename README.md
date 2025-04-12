# 📱 CadastroAppReact

Um aplicativo mobile simples desenvolvido em React Native com **Expo**, que permite fazer cadastro de usuários. Ideal para fins de estudo ou base para projetos maiores.

---

## 🚀 Tecnologias usadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [VSCode](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Android Studio (opcional para emulador)](https://developer.android.com/studio)

---

## 📦 Como rodar o projeto localmente

Siga os passos abaixo para configurar o ambiente e executar o app no seu computador.

---

### ✅ Pré-requisitos

1. **Instalar o Node.js (recomendado: versão LTS)**
   - Baixe aqui: https://nodejs.org/

2. **Instalar o Expo CLI (modo local recomendado):**
   > NÃO é necessário instalar o `expo-cli` globalmente.
   O projeto já usa o novo formato com CLI local.
   
   Basta usar os comandos com `npx expo`.

3. **Clonar o repositório:**

```bash
git clone https://github.com/GabrielPaivaM/CadastroAppReact.git
cd CadastroAppReact/CadastroApp
```

---

### 📥 Instalar dependências

Execute dentro da pasta `CadastroApp`:

```bash
npm install
```

---

### 📱 Executar o app

Com as dependências instaladas, rode:

```bash
npx expo start
```

---

## 🧪 Como testar o app

Você pode escolher entre três formas:

### ✅ **1. Emulador Android (Recomendado para testes reais)**

> Certifique-se de ter o **Android Studio** e o SDK configurado corretamente.

#### Passos:

1. Abra o Android Studio.
2. Vá em `Tools > AVD Manager`.
3. Crie e inicie um emulador Android.
4. No terminal Expo, pressione a tecla `a` para abrir no emulador.

---

### 🌐 **2. Rodar no Navegador**

- Pressione a tecla `w` no terminal para abrir a versão web.
- Útil para testar rapidamente o layout e lógica básica.

---

### 📲 **3. Testar no seu celular com o app Expo Go**

1. Instale o app **Expo Go** na Play Store ou App Store.
2. Escaneie o QR Code que aparece no terminal após rodar `npx expo start`.

---

## ❗ Problemas comuns e soluções

### 🛑 `adb` não reconhecido / Android SDK não encontrado

- Configure a variável de ambiente `ANDROID_HOME`.
- Adicione ao seu `Path`:
  ```
  %ANDROID_HOME%\platform-tools
  %ANDROID_HOME%\emulator
  ```

---

## ✨ Funcionalidades básicas

- Tela de cadastro de usuários
- Interface simples e leve
- Base ideal para outros apps com formulários

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e contribuir!

---

> Feito com 💙 por Gabriel Paiva