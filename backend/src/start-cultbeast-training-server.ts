import { SupervisedLearningServer } from "./server.ts"


const port = Number(Deno.args[0])

const supervisedLearningServer: SupervisedLearningServer = SupervisedLearningServer.getInstance(port)
supervisedLearningServer.startListening()