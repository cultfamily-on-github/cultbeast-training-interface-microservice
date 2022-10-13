// import { PersistenceService } from "../helpers/persistence-service.ts"
import { opine, serveStatic } from "https://deno.land/x/opine@2.3.3/mod.ts";
import { PersistenceService } from "./persistence-service.ts";
import { ILearningOpportunity, IMessage } from "./data-model.ts";
import { opineCors } from "https://deno.land/x/cors/mod.ts";

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
        this.app = opine();
        this.port = port
        this.persistenceService = PersistenceService.getInstance()
        this.app.use(serveStatic(`${Deno.cwd()}/docs`));

        this.app.use(opineCors())

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
            const learningOpportunities: ILearningOpportunity[] = await this.persistenceService.readLearningOpportunities()
            res.send(learningOpportunities)
            // res.send([])
        });

        // http://localhost:8045/api/v1/getMessages
        // https://cultbeast.org/api/v1/getMessages
        this.app.get("/api/v1/getMessages", async (req: any, res: any) => {
            const messages: IMessage[] = await this.persistenceService.readMessages()
            for (const message of messages) { // ask the community as soon as they have more insight if we should not store this in the first place - privacy vs. transparency with the option to personally help out on demand.
                message.userName = undefined
            }
            res.send(messages)
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


