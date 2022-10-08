<script>
  import Card from "./Card.svelte"
  import Countdown from "./Countdown.svelte"
  import { getFirstLinkInText, replaceContentToShowClickableLinks } from "../helpers"
  export let item

  const year = item.expiryDateUTC.substr(0, 4)
  const month = item.expiryDateUTC.substr(5, 2) - 1
  const dayte = item.expiryDateUTC.substr(8, 2)

  let expiryDateUTC = new Date(year, month, dayte, 23, 59, 59, 999)

  const timeZoneOffsetInMinutes = expiryDateUTC.getTimezoneOffset()
  
  expiryDateUTC.setMinutes(expiryDateUTC.getMinutes() - timeZoneOffsetInMinutes)

  let validOnUTCTime = expiryDateUTC.getTime()

  const handleLetsDoIt = (text) => {
    const firstLinkInText = getFirstLinkInText(text)
    if (text.indexOf("https://") === -1) {
      alert(`ok. just do it.`)
    } else {
      window.open(firstLinkInText, "_blank")
    }
  }
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>

  <Countdown deadline={validOnUTCTime} />

  <p><br /></p>

  <p class="text-display">
    {@html replaceContentToShowClickableLinks(item.text)}
  </p>

  <p><br /></p>

  <button
    class="button-colors-on-Card"
    on:click={() => handleLetsDoIt(item.text)}>Let's Do It</button
  >

  <a href="https://cultmagazine.org" class="linkInText" style="display: none;">
    you might only understand this if you try to delete it :)
  </a>
</Card>

<style>

</style>
