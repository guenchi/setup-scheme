import * as core from "@actions/core";
import { exec, getExecOutput } from "@actions/exec";
import { copyFileSync, existsSync } from "fs"

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
        const ex = await getExecOutput("find /usr/local/Cellar/gambit-scheme -type l -name current")
        const dir = (ex.stdout || ex.stderr).trim();
        core.addPath(`${dir}/bin`);
        break;
      case "gerbil":
        await exec("brew install gerbil-scheme");
        core.addPath("/usr/local/opt/gerbil-scheme/libexec/bin")
        core.exportVariable("GERBIL_HOME", "/usr/local/opt/gerbil-scheme/libexec")
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
      case "chicken":
        await exec("sudo apt install chicken-bin");
        break;
    }
  } else if (process.platform === "win32") {
    switch (implementation) {
      case "chez":
        await exec("curl -LO https://github.com/cisco/ChezScheme/releases/download/v9.5.6/ChezScheme9.5.6.exe");
        await exec("./ChezScheme9.5.6.exe", ["-silent"]);
        // wait for the installer to finish
        while (!existsSync("C:/Program Files (x86)/Chez Scheme 9.5.6/bin/ti3nt/scheme.exe")) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        core.addPath("C:/Program Files (x86)/Chez Scheme 9.5.6/bin/ti3nt/");
        copyFileSync("C:/Program Files (x86)/Chez Scheme 9.5.6/bin/ti3nt/scheme.exe", "C:/Program Files (x86)/Chez Scheme 9.5.6/bin/ti3nt/chez.exe");
        break;
      case "gambit":
        await exec("choco install gambit");
        break;
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
