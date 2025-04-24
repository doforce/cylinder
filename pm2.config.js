module.exports = {
  apps: [
    {
      name: "cylinder",
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3010",
      interpreter: "/root/.bun/bin/bun",
    },
  ],
}
