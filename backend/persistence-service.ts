import { IGameProposal, IVote, IMasterkeyFileEntry, IApprenticeKeyFileEntry } from "./data-model.ts";
// import { SortService, Direction } from "https://deno.land/x/sort@v1.1.1/mod.ts"

export class PersistenceService {

    public readonly pathToIndexHTML = `${Deno.cwd()}/docs`;
    public readonly pathToAssets = `${this.pathToIndexHTML}/assets`;
    public readonly pathToCertificates = '/etc/letsencrypt/live/cultplayground.org';

    public pathToGameProposals = `${Deno.cwd()}/operational-data/game-proposals.json`;
    public pathToMasterKeys = `${Deno.cwd()}/operational-data/master-keys.json`;
    public pathToApprenticeKeys = `${Deno.cwd()}/operational-data/apprentice-keys.json`;
    public pathToVotes = `${Deno.cwd()}/operational-data/votes.json`;
    public pathToGameProposalsBackup = `${Deno.cwd()}/operational-data/game-proposals-backup.json`;
    public pathToMasterKeysBackup = `${Deno.cwd()}/operational-data/master-keys-backup.json`;
    public pathToApprenticeKeysBackup = `${Deno.cwd()}/operational-data/apprentice-keys-backup.json`;
    public pathToVotesBackup = `${Deno.cwd()}/operational-data/votes-backup.json`;

    private static instance: PersistenceService
    
    public static getInstance() { // singleton pattern recommended for services like this
        if (PersistenceService.instance === undefined) {
            PersistenceService.instance = new PersistenceService()
        }

        return PersistenceService.instance
    }


    public startBackupInterval() {
        setInterval(async () => {
            console.log(`generating backup once a day`)
            await PersistenceService.instance.generateBackup()
        }, 24 * 60 * 60 * 1000) // backup once a day
    }

    public async readGameProposals(): Promise<IGameProposal[]> {
        const gameProposals: IGameProposal[] = JSON.parse(await Deno.readTextFile(this.pathToGameProposals))
        return gameProposals
    }

    public async readVotes(): Promise<IVote[]> {
        const votes: IVote[] = JSON.parse(await Deno.readTextFile(this.pathToVotes))
        return votes
    }
    
    public async readMasterKeysFile(): Promise<IMasterkeyFileEntry[]> {
        return JSON.parse(await Deno.readTextFile(this.pathToMasterKeys))
    }

    public async readApprenticeKeysFile(): Promise<IApprenticeKeyFileEntry[]> {
        return JSON.parse(await Deno.readTextFile(this.pathToApprenticeKeys))
    }

    public async writeGameProposals(gameProposals: IGameProposal[]): Promise<void> {
        await Deno.writeTextFile(this.pathToGameProposals, JSON.stringify(gameProposals))
    }
    
    public async writeVotes(votes: IVote[]): Promise<void> {
        await Deno.writeTextFile(this.pathToVotes, JSON.stringify(votes))
    }
    
    
    public async generateBackup() {
        
        const gameProposals = await this.readGameProposals()
        const apprenticeKeys = await this.readApprenticeKeysFile()
        const masterKeys = await this.readMasterKeysFile()
        const votes = await this.readVotes()
        
        await Deno.writeTextFile(this.pathToVotesBackup, JSON.stringify(votes))
        await Deno.writeTextFile(this.pathToGameProposalsBackup, JSON.stringify(gameProposals))

        await Deno.writeTextFile(this.pathToMasterKeysBackup, JSON.stringify(masterKeys))
        await Deno.writeTextFile(this.pathToApprenticeKeysBackup, JSON.stringify(apprenticeKeys))

    }



}