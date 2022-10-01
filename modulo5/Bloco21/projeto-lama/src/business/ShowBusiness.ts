import { ShowDatabase } from "../database/ShowDatabase"
import { AuthenticationError } from "../errors/AuthenticationError"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { ICreateShowInputDTO, ICreateShowOutputDTO, IDeleteTicketInputDTO, IDeleteTicketOutputDTO, IGetShowsInputDTO, IGetShowsOutputDTO, IReserveTicketInputDTO, IReserveTicketOutpuDTO, ITicketDB, Show } from "../models/Show"
import { ParamsError } from "../errors/ParamsError"
import { AuthorizationError } from "../errors/AuthorizationError"
import { NotFoundError } from "../errors/NotFoundError"
import { ConflictError } from "../errors/ConflictError"

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    protected createShow = async (input: ICreateShowInputDTO ) => {
        
        const { token, band, tickets } = input

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
        if( tickets > 5000 ){
            throw new ParamsError("Só podem ser disponíbilizados 5000 ticketes.")
        }
        const id = this.idGenerator.generate();
        const startsAt = new Date

        const show = new Show (
            id,
            band,
            startsAt,
            tickets
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO ={
            message: "Show criado com sucesso",
            showId: id
        }
        return response
    }

    public getAllShows = async (input:IGetShowsInputDTO ) => {
        const {token} = input
        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new AuthenticationError()
        }
        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map(showDB =>{
            return new Show(
                showDB.id,
                showDB.band,
                showDB.starts_at,
                showDB.tickets
            )
        })

        const response: IGetShowsOutputDTO = {
            shows
        }
        return response

    }
    protected reserveTickets = async (input: IReserveTicketInputDTO) => {
        // showId e userId - vai gerar um id do ticket
        const { token, showId } = input 
        
        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new AuthenticationError()
        }
        const showDB = await this.showDatabase.findShowById(showId)
        if(!showDB){
            throw new NotFoundError("Show não encontrado.")
        }

        const alreadyReserved = await this.showDatabase.findTicketById(
            payload.id
        )
        if(alreadyReserved){
            throw new ConflictError("Este usuário já reservou ticket para esse show.")
        }
        const ticketDB : ITicketDB = {
            id: this.idGenerator.generate(),
            show_id: showId,
            user_id: payload.id
        }

        await this.showDatabase.createReservedTicket(ticketDB)

        const response: IReserveTicketOutpuDTO = {
            message: "Ticket reservado com sucesso!"
        }

        return response

    }
    protected deleteReservedTicket = async (input: IDeleteTicketInputDTO) => {
        // ticketId 
        const {token, ticketId} = input 

        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new AuthenticationError()
        }
        const showDB = await this.showDatabase.findTicketById(ticketId)

        const isTicketReserved = await this.showDatabase.findTicketById(
            ticketId
        )
        if(!isTicketReserved){
            throw new NotFoundError("Você ainda não tem ticket cadastrado.")
        }
        await this.showDatabase.deleteReservedTicket(ticketId, payload.id)

        const response: IDeleteTicketOutputDTO = {
            message: "Ticket cancelado com sucesso"
        }
        return response
    }

}