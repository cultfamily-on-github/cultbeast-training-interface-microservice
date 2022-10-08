# Backend Programming

When it comes to off-chain backends [Deno](https://deno.land) is the runtime environment of choice imo.    
Deno can be perceived as the successor of NodeJS imo.  
You might check the [Deno Main Repo](https://github.com/denoland/deno) and join the [Deno Community](https://discord.com/invite/deno).

## Page Provisioning
We consider the following two options when it comes to page provisioning - aka. delivery of the index.html to the requesting client:   

1. Utilize GitHub Pages
2. Utilize a dedicated Web Server 
3. deploy via ipfs and use ens.domains once this microservice is stable

## Web Harvesting CULT resources
It seems that test frameworks like [codecept.io](https://codecept.io) also allow for simple Web Harvesting.   
The harvest can be transferred to [this repository](https://github.com/cultfamily-on-github/cult-artefacts-collection) from which the frontend can fetch the info and display it for the visitor. 


## Unit Tests
You can test the Game Proposal Organizer via:  

```sh
deno test --allow-read backend/game-proposal-organizer.spec.ts
```

You can test the Date Doctor via:  

```sh
deno test --allow-read backend/date-doctor/date-doctor.spec.ts
```
