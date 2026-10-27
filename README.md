<div align="center">

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/banner.png" alt="sriyaa" width="100%">

# sriyaa

**16 ready-to-use fonts for Discord bots and canvas images.**
Keep your bot small: store the fonts once in npm, load them with one line.

![npm](https://img.shields.io/npm/v/sriyaa?color=9fadff&label=npm&style=flat-square)
![downloads](https://img.shields.io/npm/dm/sriyaa?color=ff9ecb&style=flat-square)
![fonts](https://img.shields.io/badge/fonts-16-8ef0c4?style=flat-square)
![node](https://img.shields.io/badge/node-%E2%89%A518-ffd479?style=flat-square)

</div>

---

## ✨ Why sriyaa?

- 📦 **Small bot, easy to move.** No `assets/fonts` folder to copy around. Run `npm install` and the fonts are there.
- ⚡ **One line to load.** Works with `@napi-rs/canvas` through your own `GlobalFonts`, so there is no extra canvas library inside this package.
- 🎯 **Load only what you need.** Register all 16 fonts or just two.
- 🔁 **Old names keep working.** `Zilla`, `NeoCastel` and `Poppins Bold` are built-in aliases.

## 🖼️ All fonts at a glance

Every preview below says **“Sriya”** in that font.

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/all-fonts.png" alt="All sriyaa fonts" width="100%">

## 📥 Install

```bash
npm i sriyaa @napi-rs/canvas
```

## 🚀 Quick start

```js
import { createCanvas, GlobalFonts } from "@napi-rs/canvas";
import { registerFonts } from "sriyaa";

registerFonts(GlobalFonts); // loads all fonts

const canvas = createCanvas(600, 200);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#fff";
ctx.font = "90px Pacifico";
ctx.fillText("Sriya", 40, 120);
```

Use the **family name** from the table below inside `ctx.font`.

### Load only some fonts

```js
registerFonts(GlobalFonts, ["Poppins", "Zilla Slab", "Bangers"]);
```

### Use the file path directly

```js
import { fontPath } from "sriyaa";

GlobalFonts.registerFromPath(fontPath("Poppins-Bold.ttf"), "Poppins");
```

### With the older `canvas` (node-canvas) package

```js
import Canvas from "canvas";
import { fontPath } from "sriyaa";

Canvas.registerFont(fontPath("Poppins-Bold.ttf"), { family: "Poppins" });
```

### CommonJS (require)

```js
const { registerFonts } = await import("sriyaa");
```

## 🔤 Font list

| Family name | Style | Good for |
|---|---|---|
| **Bangers** | Comic-book poster energy | Titles, rank cards, loud labels |
| **BioRhyme** | Soft slab serif with a friendly feel | Headings, profile text |
| **Cherry Bomb** | Fat, bubbly and cute | Cute cards, big names |
| **Chicle** | Chunky retro display | Banners, welcome images |
| **Compagnon** | Flowing handwritten script | Signatures, elegant names |
| **MuseoModerno** | Clean geometric, modern | Stats, UI-style cards |
| **Neo-Castel** | Gothic pixel-cut blackletter | Dark or fantasy themes |
| **Nunito** | Rounded and very readable | Body text, usernames |
| **Pacifico** | Surf-style brush script | Logos, fun headings |
| **Pixelify Sans** | Pixel-art look | Game and retro styles |
| **Poppins** | Neutral and sharp, great all-rounder | Default text for cards |
| **Ribes** | Bold, wide and heavy | Strong titles |
| **Share Tech Mono** | Techy monospace | Numbers, codes, terminal looks |
| **Sinistre** | Sharp, dramatic serif | Moody or luxury designs |
| **Zilla Slab** | Warm slab serif | Quotes, captions |
| **Noto Sans Symbols 2** | Symbols and fallback glyphs | ✦ ☾ ♪ ⚔ and other symbols |

> Family names are what you write in `ctx.font`, for example `ctx.font = "40px Share Tech Mono"`.

## 🎨 Font previews

Open any font to see **Sriya** in it.

<details>
<summary><b>Bangers</b> · Comic-book poster energy</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/bangers.png" alt="Bangers preview" width="720">

</details>

<details>
<summary><b>BioRhyme</b> · Soft slab serif with a friendly feel</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/biorhyme.png" alt="BioRhyme preview" width="720">

</details>

<details>
<summary><b>Cherry Bomb</b> · Fat, bubbly and cute</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/cherry-bomb.png" alt="Cherry Bomb preview" width="720">

</details>

<details>
<summary><b>Chicle</b> · Chunky retro display</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/chicle.png" alt="Chicle preview" width="720">

</details>

<details>
<summary><b>Compagnon</b> · Flowing handwritten script</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/compagnon.png" alt="Compagnon preview" width="720">

</details>

<details>
<summary><b>MuseoModerno</b> · Clean geometric, modern</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/museomoderno.png" alt="MuseoModerno preview" width="720">

</details>

<details>
<summary><b>Neo-Castel</b> · Gothic pixel-cut blackletter</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/neo-castel.png" alt="Neo-Castel preview" width="720">

</details>

<details>
<summary><b>Nunito</b> · Rounded and very readable</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/nunito.png" alt="Nunito preview" width="720">

</details>

<details>
<summary><b>Pacifico</b> · Surf-style brush script</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/pacifico.png" alt="Pacifico preview" width="720">

</details>

<details>
<summary><b>Pixelify Sans</b> · Pixel-art look</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/pixelify-sans.png" alt="Pixelify Sans preview" width="720">

</details>

<details>
<summary><b>Poppins</b> · Neutral and sharp, great all-rounder</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/poppins.png" alt="Poppins preview" width="720">

</details>

<details>
<summary><b>Ribes</b> · Bold, wide and heavy</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/ribes.png" alt="Ribes preview" width="720">

</details>

<details>
<summary><b>Share Tech Mono</b> · Techy monospace</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/share-tech-mono.png" alt="Share Tech Mono preview" width="720">

</details>

<details>
<summary><b>Sinistre</b> · Sharp, dramatic serif</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/sinistre.png" alt="Sinistre preview" width="720">

</details>

<details>
<summary><b>Zilla Slab</b> · Warm slab serif</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/zilla-slab.png" alt="Zilla Slab preview" width="720">

</details>

<details>
<summary><b>Noto Sans Symbols 2</b> · Symbols and fallback glyphs</summary>

<img src="https://cdn.jsdelivr.net/npm/sriyaa@1.0.0/previews/noto-sans-symbols-2.png" alt="Noto Sans Symbols 2 preview" width="720">

</details>

## 📚 API

| Export | What it does |
|---|---|
| `registerFonts(GlobalFonts, names?)` | Registers fonts. Returns the list of families that loaded. |
| `FONTS` | Object of `family → file name`. |
| `ALIASES` | Extra names that point to a real family (`Zilla`, `NeoCastel`, `Poppins Bold`). |
| `families()` | Every family name, aliases included. |
| `fontPath(file)` | Full path of a font file inside the package. |
| `FONT_DIR` | The package's font folder. |

Direct file access also works: `sriyaa/fonts/Poppins-Bold.ttf`.

## ➕ Adding a font

1. Put the `.ttf` or `.otf` file in `fonts/`.
2. Add one line to `FONTS` in `index.js`.
3. Bump the version in `package.json`, then run `npm publish`.

## 📝 Font licenses

Each font keeps the license it was released under by its author. Check the license of a font before using it in a commercial project.

---

<div align="center">

Made with 💗 for **Luna**

</div>
