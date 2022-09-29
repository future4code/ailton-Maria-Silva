import { Show, IShowDB, ITicketDB } from "../models/Show"
import { BaseDatabase } from "./BaseDatabase"

export class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public toShowDBModel = (show: Show): IShowDB =>{
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt(),
        }
        return showDB
    }

    public findShowById = async (id: string): Promise<IShowDB | undefined> =>{
        const result: IShowDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .select()
            .where({id})

        return result[0]
    }

    public createShow = async (show: Show): Promise<void> =>{
        const showDB = this.toShowDBModel(show)

        await BaseDatabase
            .connection(ShowDatabase.TABLE_SHOWS)
            .insert(showDB)
    }

    public findTicketById = async (id: string): Promise<ITicketDB | undefined> =>{
        const result: ITicketDB[] = await BaseDatabase
            .connection(ShowDatabase.TABLE_TICKETS)
            .select()
            .where({id})

        return result[0]
    }

    public createReserve = async (tickets: ITicketDB): Promise<void> =>{
        const ticketDB = this.toTicketDBModel(tickets)
    }
}