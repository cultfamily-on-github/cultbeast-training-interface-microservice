<script>
  import { backendBaseURL } from "../stores";
  import Card from "./Card.svelte";
  import {createEventDispatcher} from 'svelte'

  let text = "";
  let masterKey = "";
  let message;

  const sendGameProposal = async () => {
    try {
      const response = await fetch(`${backendBaseURL}/api/v1/addgameproposal`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          text,
          fromMasterKey: masterKey,
        }),
      });

      const result = await response.json()

      message = result.message

      text = "";
      masterKey = "";

      // const dispatch = createEventDispatcher()
      // dispatch('reload-of-gameproposals-recommended')

    } catch (error) {
      alert(`an error occurred: ${error.message}`);
    }
  };
</script>

<Card>
  <!-- <RatingSelect on:rating-select={handleSelect} /> -->
  {#if message}
    <div class="message">
      {message} 
      <p><br></p>
    </div>
  {/if}
  <div class="input-group">
    <input
      type="text"
      bind:value={masterKey}
      placeholder="Please enter your Masterkey."
    />
  </div>

  <div class="input-group">
    <input
      type="text"
      bind:value={text}
      placeholder="Please enter your Gameproposal."
    />
  </div>
  <p><br /></p>
  {#if text !== "" && masterKey !== ""}
    <div class="color-of-body">
      <button class="button-colors-on-Card" on:click={() => sendGameProposal()}>Send</button>
    </div>
  {/if}
</Card>

<style>

</style>
