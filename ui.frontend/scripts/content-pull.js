import {exec} from 'child_process'
const destinationName = process.argv[2];

if (!destinationName) {
  console.error('destinationName name is required');
  process.exit(1);
}

const command = `npx acme pull --config acme.settings.json -d storybook-assets ${destinationName}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});
