# CULT Beast Training Interface Microservice

[cultbeast.org](https://cultbeast.org) serves as a user interface to simplify exploration and training of the [CULT Beast](https://t.me/cultmagazine_bot) which is currently available via telegram and will probably be available also for discord, slack etc.

The core features of the [CULT Beast](https://t.me/cultmagazine_bot) itself can be found [here](https://github.com/cultfamily-on-github/decentralized-open-source-ai-supporting-the-cultdao).


In order to strengthen resilience, scalability and technological freedom for contributors, we establish a microservices architecture. 

## Status
First Drafts & Idea Collection

## Frontend
When it comes to state of the art web programming frameworks [Svelte](https://svelte.dev) is the framework [of choice](https://www.youtube.com/watch?v=rv3Yq-B8qp4) imo.    
The two main reasons for that choice - comparing svelte to angular, vue and react - are performance and simplicity.   
You might continuously improve the performance of this page utilizing [pagespeed.web.dev](https://pagespeed.web.dev/).   
To speed up programming while ensuring beauty we utilize the [UI Kit Attractions](https://illright.github.io/attractions/?ref=madewithsvelte.com) - see also [intro](https://www.youtube.com/watch?v=RkD88ARvucM&t=492s).

If you use VS Code as IDE you might want to install the extension named "svelte for vs code".  

## Backend
When it comes to off-chain backends [Deno](https://deno.land) is the runtime environment of choice imo.    
Deno can be perceived as the successor of NodeJS imo.  
You might check the [Deno Main Repo](https://github.com/denoland/deno) and join the [Deno Community](https://discord.com/invite/deno).

### Start Locally
To start the backend server locally you might execute:  

```sh
deno run --allow-read --allow-net --allow-write --allow-env backend/server.ts 8045
```

### Start in Production
```sh
pm2 start backend/server.ts --interpreter="deno" --interpreter-args="run --allow-read --allow-write --allow-env --allow-net" -- 443
```


## Contribute
Please contribute via [pull request](https://www.youtube.com/watch?v=8lGpZkjnkt4). 

## Learnings & Remarks Along This Journey


