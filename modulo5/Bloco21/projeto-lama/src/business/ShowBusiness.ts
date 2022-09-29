import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { ICreateShowInputDTO, ICreateShowOutputDTO, Show } from "../models/Show"
import { ParamsError } from "../errors/ParamsError"
import { AuthorizationError } from "../errors/AuthorizationError"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    protected createShow = async (input: ICreateShowInputDTO ) => {
        //band startsAt
        const { token, band } = input

        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new AuthenticationError()
        }
        if(payload.role !== "NORMAL"){
            throw new AuthorizationError()
        }
        if(typeof band !== "string"){
            throw new ParamsError("Parâmetro 'band' inválido.")
        }
        const id = this.idGenerator.generate();
        const startsAt = new Date

        const show = new Show (
            id,
            band,
            startsAt
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO ={
            message: "Show criado com sucesso",
            showId: id
        }
        return response
    }
    public getAllShows = async (input: ) => {

    }
    protected reserveTickets = async (input: ) => {
        // showId e userId - vai gerar um id do ticket 
    }
    protected deleteReservedTicket = async (input: ) => {
        // ticketId 
    }

}