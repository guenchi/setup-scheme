import * as core from "@actions/core";
import { exec } from "@actions/exec";

main().catch((err) => {
  core.setFailed(err.message);
});

async function main() {
  const implementation = core.getInput("implementation", { required: true });
  const version = core.getInput("version");
  const option = core.getInput("option");

  if (process.platform === "darwin") {
    switch (implementation) {
      case "chez":
        await exec("brew install chezscheme");
        break;
      case "gambit":
        await exec("brew install gambit-scheme");
        await exec(
          "CURRENTDIR=$(find /usr/local/Cellar/gambit-scheme -type l -name current)"
        );
        await exec('echo "::add-path::${CURRENTDIR}/bin"');
        break;
      case "gerbil":
        await exec("brew install gerbil-scheme");
        break;
      case "mit":
        await exec("brew install mit-scheme");
        break;
      case "racket":
        await exec("brew install minimal-racket");
        break;
      case "guile":
        await exec("brew install guile");
        break;
      case "chicken":
        await exec("brew install chicken");
        break;
    }
  } else if (process.platform === "linux") {
    switch (implementation) {
      case "chez":
        await exec("sudo apt install chezscheme");
        break;
      case "gambit":
        await exec("sudo apt install gambc");
        break;
      case "mit":
        await exec("sudo apt install mit-scheme");
        break;
      case "racket":
        await exec("sudo apt install racket");
        break;
      case "guile":
        await exec("sudo apt install guile-2.2");
        break;
    }
  } else if (process.platform === "win32") {
    switch (implementation) {
      case "racket":
        await exec("choco install racket");
        core.addPath("C:/Program Files/Racket");
        break;
      case "chicken":
        await exec("choco install chicken");
        core.addPath("C:/tools/chicken/bin");
        break;
    }
  }
}
