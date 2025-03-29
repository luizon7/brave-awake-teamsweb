# Teams Keep Awake

**Teams Keep Awake** é uma extensão para navegadores baseados em Chromium (como Brave e Chrome) que impede o Microsoft Teams Web de te marcar como "Ausente" automaticamente.

---

## 🔧 Funcionalidades

- Simula movimentação do mouse a cada 60 segundos.
- Mantém o status do Teams Web como **"Disponível"**, mesmo sem interação manual.
- Executa automaticamente ao acessar `https://teams.microsoft.com`.
- Inclui ícone e popup com status da extensão.

---

## 🧩 Instalação

1. Baixe e extraia o arquivo `.zip` da extensão:
   - [`teams-keep-awake-with-icon.zip`](./teams-keep-awake-with-icon.zip)

2. No seu navegador, acesse:
   - `brave://extensions/` ou `chrome://extensions/`

3. Ative o **Modo de Desenvolvedor** (canto superior direito)

4. Clique em **"Carregar sem compactação"**

5. Selecione a pasta extraída da extensão

---

## 📦 Estrutura dos Arquivos

```
teams-keep-awake/
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── icon16.png
├── icon32.png
├── icon48.png
└── icon128.png
```

---

## 🛠️ Como Funciona

A extensão injeta um pequeno script na aba do Teams Web que dispara eventos de `mousemove` a cada minuto, simulando atividade do usuário. Isso impede que o Teams mude seu status para "Ausente".

---

## 📜 Licença

Uso pessoal livre. Modificações são bem-vindas!
