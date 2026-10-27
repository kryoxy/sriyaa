import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

/** Folder that holds the .ttf / .otf files inside this package. */
export const FONT_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "fonts");

/** Family name -> file. Use the family name in `ctx.font = "40px Bangers"`. */
export const FONTS = {
  "Bangers": "Bangers-Regular.ttf",
  "BioRhyme": "BioRhyme-Regular.ttf",
  "Cherry Bomb": "CherryBomb-Regular.ttf",
  "Chicle": "Chicle-Regular.ttf",
  "Compagnon": "Compagnon-Bold.otf",
  "MuseoModerno": "MuseoModerno-Regular.ttf",
  "Neo-Castel": "Neo-castel.ttf",
  "Noto Sans Symbols 2": "NotoSansSymbols2-Regular.ttf",
  "Nunito": "Nunito-Bold.ttf",
  "Pacifico": "Pacifico-Regular.ttf",
  "Pixelify Sans": "PixelifySans-Regular.ttf",
  "Poppins": "Poppins-Bold.ttf",
  "Ribes": "Ribes-Black.otf",
  "Share Tech Mono": "ShareTechMono-Regular.ttf",
  "Sinistre": "Sinistre.otf",
  "Zilla Slab": "ZillaSlab-Regular.ttf",
};

/** Extra names some bots already use, so old code keeps working. */
export const ALIASES = {
  "NeoCastel": "Neo-Castel",
  "Zilla": "Zilla Slab",
  "Poppins Bold": "Poppins",
};

/** Every font family this package knows, aliases included. */
export const families = () => [...Object.keys(FONTS), ...Object.keys(ALIASES)];

/** Full path of a font file, e.g. fontPath("Poppins-Bold.ttf"). */
export const fontPath = (file) => path.join(FONT_DIR, file);

/**
 * Registers fonts with @napi-rs/canvas. You pass in your own GlobalFonts, so this
 * package needs no canvas library of its own.
 *
 *   registerFonts(GlobalFonts)                        // all fonts
 *   registerFonts(GlobalFonts, ["Poppins", "Zilla"])  // only some
 *
 * Returns the list of families that were registered.
 */
export function registerFonts(GlobalFonts, wanted = families()) {
  const done = [];
  for (const name of wanted) {
    const real = ALIASES[name] ?? name;
    const file = FONTS[real];
    if (!file) continue;
    const p = fontPath(file);
    if (fs.existsSync(p) && GlobalFonts.registerFromPath(p, name)) done.push(name);
  }
  return done;
}
