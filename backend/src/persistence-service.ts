import { ISubscriber, IMessage, ILearningOpportunity } from "./data-model.ts";
// import { SortService, Direction } from "https://deno.land/x/sort@v1.1.1/mod.ts"

export class PersistenceService {

    private static instance: PersistenceService

    public static getInstance(): PersistenceService { // singleton pattern
        if (PersistenceService.instance === undefined) {
            PersistenceService.instance = new PersistenceService()
        }
        return PersistenceService.instance
    }

    public readonly pathToIndexHTML
    public readonly pathToAssets
    public readonly pathToCerts
    public readonly pathToCertFile
    public readonly pathToKeyFile

    private pathToOperationalData
    private pathToLearningOpportunities
    private pathToReceivedMessages

    private constructor() {
        this.pathToAssets = `${Deno.cwd()}/docs`;
        this.pathToIndexHTML = `${this.pathToAssets}/index.html`;
        this.pathToCerts = `/etc/letsencrypt/live/cultbeast.org`;
        this.pathToCertFile = `${this.pathToCerts}/fullchain.pem`;
        this.pathToKeyFile = `${this.pathToCerts}/privkey.pem`;

        this.pathToOperationalData = `${Deno.cwd()}/../decentralized-open-source-ai-supporting-the-cultdao/operational-data`;
        this.pathToLearningOpportunities = `${this.pathToOperationalData}/learning-opportunities.json`;
        this.pathToReceivedMessages = `${this.pathToOperationalData}/received-messages.json`;
    }

    public async readLearningOpportunities(): Promise<ILearningOpportunity[]> {
        const learningOpportunities: ILearningOpportunity[] = JSON.parse(await Deno.readTextFile(this.pathToLearningOpportunities))
        return learningOpportunities
    }

    public async writeLearningOpportunities(learningOpportunities: ILearningOpportunity[]): Promise<void> {
        await Deno.writeTextFile(this.pathToLearningOpportunities, JSON.stringify(learningOpportunities))
    }

    public async readReceivedMessages(): Promise<IMessage[]> {
        const messages: IMessage[] = JSON.parse(await Deno.readTextFile(this.pathToReceivedMessages))
        return messages
    }
}