### 🤖 MARCEUSE-XMD v1.0

**MARCEUSE-XMD** is a powerful multi-device WhatsApp bot built using the [Baileys](https://github.com/WhiskeySockets/Baileys) library. It helps group admins manage members, automate tasks, and enhance engagement with fun and useful features.

<div align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Ribeye&size=50&pause=1000&color=33ff00&center=true&width=910&height=100&lines=MARCEUSE-XMD😈;Multi+Device+Whatsapp+Bot;Coded+By+Caseyrhodes" alt="Typing SVG" />
  </a>
</div>

<div align="center">
  <a href="https://youtube.com/@Nicolaus Daniel">
    <img src="https://files.catbox.moe/z0l0ey.jpg" alt="MARCEUSE-XMD😈" height="300">
  </a>
</div>

---

## 🚀 Deploy Options

### 🔹 Fork the Repository

<div align="center">
  <a href="https://github.com/Nicolaus-Daniel/MARCEUSE-XMD/fork">
    <img src="https://img.shields.io/badge/Fork-Repository-blue?style=for-the-badge" alt="Fork the repository"/>
  </a>
</div>

### 🔹 Get Pair Code

<div align="center">
  <a href="https://replit.com/@DGXeon/Xeon-PairCode?v=1" target="_blank">
    <img src="https://img.shields.io/badge/GET%20PAIR%20CODE-Replit-success?style=for-the-badge" alt="Deploy on Replit"/>
  </a>
</div>

<div align="center">
  <a href="https://knight-bot-paircode.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/GET%20PAIR%20CODE-Easy%20Method-ff4d4d?style=for-the-badge" alt="Generate Pair Code"/>
  </a>
</div>

> After getting `creds.json`, upload it to the `session` folder.

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v20.x recommended)
- Git installed

### Step-by-Step Setup

```bash
# Clone the repository
git clone https://github.com/caseyweb/JINX-XMD-V2.0.git
cd MARCEUSE-XMD

# Install dependencies
npm install

# Start the bot
node index.js
```

> ✅ Once the bot starts, scan the QR code shown in the terminal using WhatsApp's Linked Devices feature.

---

*⚙️ GitHub Workflow (CI/CD)*

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version}}

      - name: Install dependencies
        run: npm install

      - name: Start application
        run: npm start
```

---

*🤩 Features*

- 🔔 Tag all group members with `.tagall`
- 🔒 Admin-only command access
- 🎮 Group games like Tic-Tac-Toe
- 🔊 Text-to-Speech with `.tts`
- 🖼️ Sticker creation with `.sticker`
- 🚫 Anti-link detection
- ⚠️ Warn and manage group members
- 📌 Multi-device support via Baileys

---

*📚 License & Credits*

This project uses open-source libraries including:

- [Baileys](https://github.com/WhiskeySockets/Baileys) (MIT License)
- Other dependencies listed in `package.json`

---

*👥 Join the Community*

<div align="center">
  <a href="https://t.me/+LwD1jbJ4qmRlYjJk">
    <img src="https://img.shields.io/badge/Join%20Telegram-0078E7?style=for-the-badge&logo=telegram&logoColor=white" alt="Join Telegram"/>
  </a>
  <a href="https://whatsapp.com/channel/0029Vb4B338E50Uk2hA7r21U">
    <img src="https://img.shields.io/badge/Join%20WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Join WhatsApp"/>
  </a>
</div>

---

> 💡 Feel free to contribute, report issues, or suggest new features. Let's build something awesome together!
