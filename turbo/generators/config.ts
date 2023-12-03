import { PlopTypes } from "@turbo/gen";


export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("day", {
    description: "Generate a new day of code",
    prompts: [
      {
        type: "input",
        name: "day",
        message: "What day of code?",
        validate: (input: string) => {
          if (!input) {
            return "day is required";
          }

          if(isNaN(Number(input))) {
            return "day must be a number";
          }

          if(Number(input) > 31 || Number(input) < 1) {
            return "day must be between 1 and 31";
          }
          
          return true;
        },
        filter: (input: string) => {
          return input.padStart(2, "0");
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/tasks/day_{{ day }}/index.ts",
        templateFile: "templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/tasks/day_{{ day }}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/tasks/day_{{ day }}/input.txt"
      },
    ],
  });
}
