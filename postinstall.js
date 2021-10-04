// This script will be executed on npm postinstall and is a
// migration script for the phase where we support building with bazel
// and without.
const { exec } = require('child_process');

async function main() {
  // Apply the husky configuration
  await execCommand(`npm run prepare-husky`);

  // Applying all the patches to the packages
  await execCommand(`node ${require.resolve('patch-package')}`);

  await execCommand(`npm run ng build workspace`);
}

/**
 * Executes a shell command and return it as a Promise.
 * @param cmd {string}
 * @return {Promise<string>}
 */
function execCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        return reject(error);
      }
      const output = stdout ? stdout : stderr;
      console.log(output);
      resolve(output);
    });
  });
}

main()
  .then(() => {
    console.log('✅ Successfully run postinstall script!');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
