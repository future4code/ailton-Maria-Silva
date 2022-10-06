import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ICreateShowInputDTO, IDeleteTicketInputDTO, IGetShowsInputDTO, IReserveTicketInputDTO } from "../models/Show";
import { BaseError } from "../errors/BaseError";

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req:Request, res: Response) =>{
        try {
            const input: ICreateShowInputDTO = {
                token: req.headers.authorization as string,
                band: req.body.band,
                tickets: req.body.tickets
            }

            const response = await this.showBusiness.createShow(input)
            res.status(201).send(response)
          
        } catch (error:any) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
        }
    
    public getAllShows = async (req:Request, res: Response) =>{
        try {
            const input: IGetShowsInputDTO = {
                token: req.headers.authorization as string
            }
            const response = await this.showBusiness.getAllShows(input)
            res.status(201).send(response)            
        } catch (error:any) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
    public reserveTickets = async (req:Request, res: Response) =>{
        try {
            const input: IReserveTicketInputDTO = {
                token: req.headers.authorization as string,
                showId: req.params.id
            }
            const response = await this.showBusiness.reserveTickets(input)
            res.status(201).send(response)
        } catch (error:any) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
    public deleteReservedTicket = async (req:Request, res: Response) =>{
        try {
            const input : IDeleteTicketInputDTO ={
                token: req.headers.authorization as string,
                ticketId: req.params.id
            }
            const response = await this.showBusiness.deleteReservedTicket(input)
            res.status(201).send(response)
        } catch (error:any) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}