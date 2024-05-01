import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.4/command/mod.ts";
import { sum } from "./mod.ts";

const command = new Command()
  .name("sum")
  .version("1.0.0")
  .description("Sum numbers directly on your CLI!")
  .arguments("<input...:number>")
  .option("-e, --explain", "Explain the operation.");

const {
  options: { explain },
  args: [numbers],
} = await command.parse();

const result = sum(...numbers);

console.log(explain ? `${numbers.join(" + ")} = ${result}` : result);
