import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"
import{ IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User"


describe("Testando a UserBusiness", () =>{
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )
    test ("Caso cadastro seja bem sucedido, será gerado um token", async()=>{
        const input: ISignupInputDTO = {
            email: "helenasilva@gmail.com",
            name: "Helena Silva",
            password: "coelhinho123"
        }
        const response = await userBusiness.signup(input)
        expect(response.message).toBe("Cadastro realizado com sucesso")
        expect(response.token).toBe("token-mock-normal")
    })
    test("Espera receber um token se o login for bem-sucedido", async ()=>{
        const input: ILoginInputDTO = {
            email: "helenasilva@gmail.com",
            password: "coelhinho123"
        }
        const response = await userBusiness.login(input)
        expect(response.message).toBe("Login realizado com sucesso.")
        expect(response.token).toBe("token-mock-normal")
    })
})