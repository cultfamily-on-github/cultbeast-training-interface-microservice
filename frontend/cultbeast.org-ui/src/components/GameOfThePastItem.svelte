<script>
  import { replaceContentToShowClickableLinks } from "../helpers";
  import Card from "./Card.svelte";
  
  export let item;
 
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>

  <p><br /></p>

  <h3>Executed on {item.expiryDateUTC.split(" ")[0]} UTC</h3>
  <p><br /></p>

  <p class="text-display">
    {@html replaceContentToShowClickableLinks(item.text)}
  </p>

  <p />
</Card>

<style>
</style>
