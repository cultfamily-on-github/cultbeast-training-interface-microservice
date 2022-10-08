// import { PersistenceService } from "../helpers/persistence-service.ts"
import express from "npm:express";
import { PersistenceService } from "./persistence-service.ts";
import { ILearningOpportunity } from "./data-model.ts";


export class AdminServer {

    private static instance

    private app: any
    private port: Number
    private persistenceService: PersistenceService
    private serverStarted = false
    // private sentimentClassifierService: SentimentClassifierService

    public static getInstance(port: Number) {
        if (AdminServer.instance === undefined) {
            AdminServer.instance = new AdminServer(port)
        }
        return AdminServer.instance
    }

    private constructor(port: Number) {
        this.app = express();
        this.port = port
        this.persistenceService = PersistenceService.getInstance()

        this.app.use(express.static(`${Deno.cwd()}/docs`));

        // this.sentimentClassifierService = SentimentClassifierService.getInstance()
    }

    public async startListening() {
        if (this.serverStarted) {
            throw new Error(`The AdminServer has already been started earlier.`)
        }

        this.serverStarted = true


        this.app.get("/", async (request: any, response: any) => {

            console.log(this.persistenceService)
            console.log(`serving index html from ${this.persistenceService.pathToIndexHTML}`);
            response.sendFile(this.persistenceService.pathToIndexHTML);
            // res.send("hi")
            // response.send(this.serverStarted)
        });


        // http://localhost:8045/api/v1/getLearningOpportunities
        // http://cultbeast.org/api/v1/getLearningOpportunities
        this.app.get("/api/v1/getLearningOpportunities", async (req: any, res: any) => {
            // console.log(`reading learning opportunities`)
            const learningOpportunities: ILearningOpportunity[] = await this.persistenceService.readLearningOpportunities()
            res.send(learningOpportunities)
            // res.send([])
        });


        if (this.port.toString().indexOf("443") === -1) {

            await this.app.listen(this.port)
            console.log(`listening on http://localhost:${this.port}`)

        } else {

            console.log(`reading certificates from ${this.persistenceService.pathToCerts}`);

            Deno.readTextFile(this.persistenceService.pathToCertFile)
                .then((cert) => {
                    console.log(cert.length);
                })
            Deno.readTextFile(this.persistenceService.pathToKeyFile)
                .then((key) => {
                    console.log(key.length);
                })

            const options = {
                port: this.port,
                certFile: this.persistenceService.pathToCertFile,
                keyFile: this.persistenceService.pathToKeyFile
            };

            await this.app.listen(options)
            console.log(`listening on https://localhost:${this.port}`)

        }

    }
}


const port = Number(Deno.args[0])

// const persistenceService = PersistenceServer.getInstance()

const supervisedLearningServer: AdminServer = AdminServer.getInstance(port)

await supervisedLearningServer.startListening()


