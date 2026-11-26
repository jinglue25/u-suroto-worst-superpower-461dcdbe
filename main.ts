import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const sourceUrl = import.meta.url;
const line = "The power to always know exactly when the Wi-Fi will drop — two seconds after it does.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = `${outputDirectory}/entry.txt`;

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, `${line}\n`, "utf8");

const characterCount = readFileSync(outputPath, "utf8").trim().length;
if (characterCount === 0 || characterCount > 140) {
  throw new Error(
    `Competition gate failed in ${sourceUrl}: ${outputPath} must contain 1–140 characters after trimming; found ${characterCount}.`,
  );
}
