#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { run } = require("../src/index.js");

const args = yargs(hideBin(process.argv))
  .option("script", {
    alias: "s",
    type: "string",
    default: "start",
    description: "script name. eg: start, test,...",
  })
  .option("uri", {
    alias: "u",
    type: "string",
    demandOption: true,
    description: "uri pointed to markdown file",
  })
  .help()
  .version()
  .parse();

process.exit(run(args.script, args.uri));
