import { PersistenceService } from "./persistence-service.ts"
import { ILearningOpportunity } from "./data-model.ts"
import express from "npm:express";
import cors from "npm:cors";



export class SupervisedLearningServer {

	private static instance

	private app: any
	private port: Number
	private persistencService: any
	private serverStarted = false
	private persistenceService: PersistenceService

	public static getInstance(port: Number) {
		if (SupervisedLearningServer.instance === undefined) {
			SupervisedLearningServer.instance = new SupervisedLearningServer(port)
		}
		return SupervisedLearningServer.instance
	}

	private constructor(port: Number) {
		this.persistenceService = PersistenceService.getInstance()

		this.app = express()

		this.app.use(cors())
		this.app.use(express.json());
		this.app.use(express.static(this.persistenceService.pathToIndexHTML));
		this.app.use(express.static(this.persistenceService.pathToAssets));

		this.port = port

	}

	public startListening() {
		if (this.serverStarted) {
			throw new Error(`The SupervisedLearningServer has already been started earlier.`)
		}

		this.serverStarted = true



		this.app.get('/', function (req, res) {
			console.log(`serving index html from ${this.persistenceService.pathToIndexHTML}`);
			res.sendFile(`${this.persistenceService.pathToIndexHTML}/index.html`);
		});

		// http://cultbeast.org/api/v1/getLearningOpportunities
		this.app.get("/api/v1/getLearningOpportunities", async (request: any, response: any) => {
			console.log(`reading learning opportunities`)
			const learningOpportunities: ILearningOpportunity[] = await this.persistencService.readLearningOpportunities()

			response.send(learningOpportunities)
		});


		if (this.port.toString().indexOf("443") === -1) {
			void this.app.listen(this.port)
			console.log(`server has started on http://localhost:${this.port} 🚀`);
		} else {
			const pathToCertificates = '/etc/letsencrypt/live/cultbeast.org';

			console.log(`reading certificates from ${pathToCertificates}`);

			Deno.readTextFile(`/etc/letsencrypt/live/cultbeast.org/fullchain.pem`)
				.then((cert) => {
					console.log(cert.length);
				})
			Deno.readTextFile(`/etc/letsencrypt/live/cultbeast.org/privkey.pem`)
				.then((key) => {
					console.log(key.length);
				})

			const options = {
				port: this.port,
				certFile: '/etc/letsencrypt/live/cultbeast.org/fullchain.pem',
				keyFile: '/etc/letsencrypt/live/cultbeast.org/privkey.pem'
			};

			try {
				void this.app.listen(options);
				console.log(`server has started on https://localhost:${this.port} 🚀`);
			} catch (error) {
				console.log(`shit happened: ${error}`);
			}
		}
	}
}
