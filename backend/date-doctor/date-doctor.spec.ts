import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { DateDoctor } from "./date-doctor.ts"


// Deno.test("get end of a specific utc today", async () => {

//     const dt = new Date()
//     const formattedUTCDateFromDate = DateDoctor.getFormattedUTCDateFromDate(dt)
//     const actualOutput = DateDoctor.getLastMomentOfTodayFromString(formattedUTCDateFromDate)
//     const expectedOutput = '2022-09-30 00:00:00'
    
//     // console.log(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate())
//     // console.log(formattedUTCDateFromDate)
//     // console.log(expectedOutput)

//     assertEquals(actualOutput, expectedOutput)

// })


Deno.test("get date object from utc date", async () => {

    const dt = new Date(Date.UTC(2022, 9, 1, 0,0 , 0, 0))

    console.log(dt)
    
})

// Deno.test("is before", async () => {

//     let input1
//     let input2
//     let actualOutput
//     let expectedOutput
    
//     input1 = '2022-09-30 00:00:00'
//     input2 = '2022-09-30 00:00:00'
//     actualOutput = DateDoctor.isBefore(input1, input2)
//     expectedOutput = false
//     assertEquals(actualOutput, expectedOutput)

//     input1 = '2022-09-29 00:00:00'
//     actualOutput = DateDoctor.isBefore(input1, input2)
//     expectedOutput = true
//     assertEquals(actualOutput, expectedOutput)

//     input1 = '2022-10-01 00:00:00'
//     actualOutput = DateDoctor.isBefore(input1, input2)
//     expectedOutput = false
//     assertEquals(actualOutput, expectedOutput)

// })

