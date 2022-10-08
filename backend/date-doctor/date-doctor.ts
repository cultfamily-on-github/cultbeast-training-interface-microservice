
export class DateDoctor {

  public static padTo2Digits(num: number) {
    return num.toString().padStart(2, "0")
  }

  public static getFormattedUTCDateFromDate(date: any): string {
    return (
      [
        //   date.getFullYear(),
        date.getUTCFullYear(),
        DateDoctor.padTo2Digits(date.getUTCMonth() + 1),
        DateDoctor.padTo2Digits(date.getUTCDate()),
      ].join("-") +
      " " +
      [
        DateDoctor.padTo2Digits(date.getUTCHours()),
        DateDoctor.padTo2Digits(date.getUTCMinutes()),
        DateDoctor.padTo2Digits(date.getUTCSeconds()),
      ].join(":")
    )
  }

  public static getLastMomentOfTodayFromString(input: string): string {
    const part1 = input.split(" ")[0]
    const part2 = "23:59:59"

    return `${part1} ${part2}`
  }

  public static getLastMomentOfTodayFromDate(date: any): string {
    const formattedUTCDateFromDate = DateDoctor.getFormattedUTCDateFromDate(date)
    return DateDoctor.getLastMomentOfTodayFromString(formattedUTCDateFromDate)
  }

  public static addOneDay(input: string): string {

    const year = Number(input.substr(0, 4))
    const month = Number(input.substr(5, 2)) - 1
    const dayte = Number(input.substr(8, 2))

    const currentDate = new Date(Date.UTC(year, month, dayte))

    const oneDayLaterTimestamp = currentDate.setDate(currentDate.getDate() + 1)

    const result = DateDoctor.getFormattedUTCDateFromDate(new Date(oneDayLaterTimestamp))

    return result
  }

  public static isBefore(input1: string, input2: string) {
    const date1 = DateDoctor.getDateFromString(input1)
    const date2 = DateDoctor.getDateFromString(input2)

    return date1 < date2
  }

  public static isAfter(input1: string, input2: string) {
    const date1 = DateDoctor.getDateFromString(input1)
    const date2 = DateDoctor.getDateFromString(input2)

    return date1 > date2
  }

  public static getDateFromString(input: string) {
    const year = Number(input.substr(0, 4))
    const month = Number(input.substr(5, 2)) - 1
    const dayte = Number(input.substr(8, 2))

    return new Date(Date.UTC(year, month, dayte))
  }
}