import { Context, Schema } from 'koishi'

export const name = 'or'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

function getRandomOptions(count: number, options: any[]): any[] {
  const result: any[] = [];
  const length = options.length;
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * length);
    result.push(options[randomIndex]);
  }
  return result;
}

function choice(optionA: any, optionB: any): any {
  const randomIndex = Math.floor(Math.random() * 2);
  return randomIndex === 0 ? optionA : optionB;
}

export function apply(ctx: Context) {
  ctx.command("choice [count] <...options>")
    .action((_, count, ...options) => {
      getRandomOptions(parseInt(count), options)
    })
  ctx.command("or <optionA> <optionB>")
    .action((_, optionA, optionB) => choice(optionA, optionB))
  ctx.command("allow <option>")
    .action((_, option) => choice("可以", "不可以") + option)
}
