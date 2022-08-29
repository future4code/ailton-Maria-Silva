import axios from "axios";
import { BASE_URL } from "../assets/BASE_URL";

// Ex 5

const sendNotifications = async (
    users: user[],
    message: string
): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`${BASE_URL}/notifications`, {
                subscriberId: user.id,
                message
            })
        }
        console.log("All notifications sent")
    } catch {
        console.log("Error")
    }
}