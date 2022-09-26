// Ex 0

import { listenerCount } from "process"

const isEven = (interger: number):boolean =>{
    if(interger %2 == 0){
        return true
    } else {
        return false
    }
}
test("Verify number",()=>{
    expect(isEven(20)).toBe(true)
})

// Ex 1 

const upperCase = (userInput: string): string =>{
    return userInput.toUpperCase()
}
test("Bananinha to BANANINHA", ()=>{
    expect(upperCase("bananinha")).toBe("BANANINHA")
})

// Ex 2

const turnToArray = (userInputTwo: string): Array<string> =>{
    return userInputTwo.split("")
}
test("Turn word in array of words", ()=>{
    expect(turnToArray("DEV")).toEqual(["D", "E", "V"])
})

// Ex 3 

const toNumber = (userInputThree: string): number =>{
    return Number(userInputThree)
}
test("Turn string to number", ()=>{
    expect(toNumber("50")).toBe(50)
})

// Ex 4

const getWordLenght = (userInputFour: string):number =>{
    return userInputFour.length
}
test("Get word length", ()=>{
    expect(getWordLenght("Um")).toBe(2)
})

// Ex 5

const randomNumber = (): number =>{
    const min = 1
    const max = 10
    const result = Math.floor(Math.random()*(max - min +1)) + min
    return result
}
test("Random number", () =>{
    expect(randomNumber()).toBeGreaterThan(1)
})

// Ex 6

interface IUser {
    id: string,
    name: string,
    age: number
}

const users: IUser[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]
test("Astrodev in the list", () =>{
    expect(users).toContainEqual("Astrodev")
})

// Ex 7

const averageOfArray = (arrayOfNumber: Array<number>): number =>{
    let total = 0

    for (let n of arrayOfNumber){
        total += n
    }
    const average = Math.ceil(total / arrayOfNumber.length)

    return average
}
test("Turn array into one number",()=>{
    expect(averageOfArray([1, 2, 3])).toBe(6)
})

// Ex 8

const currentAge = (birthYear: number): number =>{
    const currentYear = new Date().getFullYear()

    const age = currentYear - birthYear
    return age
}
test("My age", () =>{
    expect(currentAge(1992)).toBe(30)
})

// Ex 9

const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
		const formattedDate = date.toLocaleDateString()

    return formattedDate 
}

test("I dont even know anymore, man, I'm tired", ()=>{
    expect(formatDate("1992/05/27")).toBe("27/05/1992")
})

