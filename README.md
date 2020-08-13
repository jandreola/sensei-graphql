# sensei-graphql
This is a demo Graphql server consuming data from SenseiOS api.

## Installation
This project uses deno, please make sure to install it.

In powershell run
```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
It also uses denon for autoreload capabilities.

After deno is installed, run in powershell
```
deno install --allow-read --allow-run --allow-write --allow-net -f -q --unstable https://deno.land/x/denon@2.3.2/denon.ts
```

Because this project doesn't have authentication you will need to supply your cookies in other to query from your local.

In config/auth.ts
```
export const cookie = "paste your cookies here";
```

Then make sure your local is running at `http://intranet-test.klick.com`. If your local is in a different url, please change `helpers/api.ts` to point to the correct location.
Note that you must use http connection, if using https require some extra steps to get it running.

Last, start the app running this (in powershell)
```
denon start
```

Then go to:
```
http://localhost:8080/graphql
```
