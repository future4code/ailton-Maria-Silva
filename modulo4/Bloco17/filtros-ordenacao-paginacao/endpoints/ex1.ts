
// a)
export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
       let nome = String(req.query.nome)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }

       if (!nome){
         nome = ""
       }
       const result = await connection("etc").where("name", "like", `${nome}`)
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }