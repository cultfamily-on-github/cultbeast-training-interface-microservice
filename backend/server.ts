import { opine, serveStatic, json } from 'https://deno.land/x/opine@2.3.3/mod.ts';
import { opineCors } from 'https://deno.land/x/cors/mod.ts';
import { PersistenceService } from './persistence-service.ts';
import { GameProposalOrganizer } from './game-proposal-organizer.ts';


const app = opine();

app.use(json());

const persistenceService: PersistenceService = PersistenceService.getInstance()
const gameProposalOrganizer: GameProposalOrganizer = GameProposalOrganizer.getInstance()

app.use(serveStatic(persistenceService.pathToIndexHTML));
app.use(serveStatic(persistenceService.pathToAssets));

app.use(opineCors());


app.get('/', function (req, res) {
	console.log(`serving index html from ${persistenceService.pathToIndexHTML}`);
	res.sendFile(`${persistenceService.pathToIndexHTML}/index.html`);
});

app.get('/api/v1/getgameproposals', async function (req, res) {
	res.send(await gameProposalOrganizer.getGameProposals());
})

app.post('/api/v1/addgameproposal', async function (req, res) {
	try {
		await gameProposalOrganizer.addGameProposal(req.body)
		res.send({message: "Submission Successful. Thank You."})
	} catch (error) {
		const message = `did not add game proposal because ${error.message}`
		console.log(message)
		res.send({message})
	}
})

app.post('/api/v1/addvoteongameproposal', async function (req, res) {
	console.log(`received the following vote on gameproposal ${JSON.stringify(req.body)}`);
	try {
	 	const newRatingOfProposal = await gameProposalOrganizer.addVoteOnGameProposal(req.body)
		const message = "Vote Successful. Thank You."
		res.send({message, newRatingOfProposal})
	} catch (error) {
		const message = `voting process failed because ${error.message}`
		console.log(message)
		res.send({message})		
	}
})


if (Deno.args[0] === undefined) {

	console.log("please specify a port by giving a parameter like 3000")

} else {

	const port = Number(Deno.args[0]);

	if (Deno.args[0].indexOf(443) === -1) {

		app.listen(port, () => console.log(`server has started on http://localhost:${port} 🚀`));

	} else {

		const pathToCertFile = `${persistenceService.pathToCertificates}/fullchain.pem`
		const pathToKeyFile = `${persistenceService.pathToCertificates}/privkey.pem`

		console.log(`reading cert file from ${pathToCertFile}`);
		console.log(`reading key file from ${pathToKeyFile}`);

		const cert = await Deno.readTextFile(pathToCertFile);
		const key = await Deno.readTextFile(pathToKeyFile);

		console.log(cert.length);
		console.log(key.length);

		const options = {
			port,
			certFile: pathToCertFile,
			keyFile: pathToKeyFile
		};

		try {
			await app.listen(options);
			console.log(`server has started on https://localhost:${port} 🚀`);
		} catch (error) {
			console.log(`shit happened: ${error}`);
		}
	}

}

await gameProposalOrganizer.ensureSystemConsistency()
persistenceService.startBackupInterval()