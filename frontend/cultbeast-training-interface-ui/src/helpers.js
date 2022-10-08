

export const getFirstLinkInText = (text) => {

    let link = ""
    let indexOfFirstLinkStart = text.indexOf("https://")

    if (indexOfFirstLinkStart === -1) {

        // no https:// link in text // we might add ipfs:// links handling in the future

    } else {

        let restText = text.substr(indexOfFirstLinkStart, text.length)
        let indexOfFirstLinkEnd = restText.indexOf(" ") - 1

        if (indexOfFirstLinkEnd === -2) { // if end of link equals end of text
            link = restText
        } else {
            link = restText.substr(0, indexOfFirstLinkEnd)
        }
    }

    return link
}


export const replaceContentToShowClickableLinks = (content) => {

    if (content.indexOf("https://") === -1) {
        return content
    }
    
    var exp_match =
      /(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
    var element_content = content.replace(
      exp_match,
      `<a class="linkInText" href='$1' target="_blank">$1</a>`
    );
    var new_exp_match = /(^|[^\/])(www\.[\S]+(\b|$))/gim
    var new_content = element_content.replace(
      new_exp_match,
      '$1<a class="linkInText" target="_blank" href="http://$2">$2</a>'
    )

    return new_content
  }

export const isBefore = (input1, input2) => {
    const date1 = getDateFromString(input1)
    const date2 = getDateFromString(input2)

    return date1 < date2
}


export const getDateFromString = (input) => {
    const year = Number(input.substr(0, 4))
    const month = Number(input.substr(5, 2)) - 1
    const dayte = Number(input.substr(8, 2))

    return new Date(Date.UTC(year, month, dayte, 0, 0, 0, 0))
}


export const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0")
}


export const getFormattedUTCDateFromDate = (date) => {
    return (
        [
            //   date.getFullYear(),
            date.getUTCFullYear(),
            padTo2Digits(date.getUTCMonth() + 1),
            padTo2Digits(date.getUTCDate()),
        ].join("-") +
        " " +
        [
            padTo2Digits(date.getUTCHours()),
            padTo2Digits(date.getUTCMinutes()),
            padTo2Digits(date.getUTCSeconds()),
        ].join(":")
    )
}


export const getLastMomentOfTodayFromString = (input) => {
    const part1 = input.split(" ")[0]
    const part2 = "23:59:59"

    return `${part1} ${part2}`
}


export const getLastMomentOfTodayFromDate = (date) => {
    const formattedUTCDateFromDate = getFormattedUTCDateFromDate(date)
    return getLastMomentOfTodayFromString(formattedUTCDateFromDate)
}

export const getDateOfLastMomentOfTodayFromDate = (date) => {
    const formattedUTCDateFromDate = getFormattedUTCDateFromDate(date)
    return getLastMomentOfTodayFromString(formattedUTCDateFromDate)
}

export const addOneDay = (input) => {

    const year = Number(input.substr(0, 4))
    const month = Number(input.substr(5, 2)) - 1
    const dayte = Number(input.substr(8, 2))

    const currentDate = new Date(Date.UTC(year, month, dayte))

    const oneDayLaterTimestamp = currentDate.setDate(currentDate.getDate() + 1)

    const result = getFormattedUTCDateFromDate(new Date(oneDayLaterTimestamp))

    return result
}