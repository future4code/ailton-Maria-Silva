import { ShowBusiness } from "../src/business/ShowBusiness"
import { ShowDatabaseMock } from "./mocks/ShowDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"


describe("Testando a ShowBusiness", () =>{
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )
})