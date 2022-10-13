<script>
  import { replaceContentToShowClickableLinks } from "../helpers";
  import { backendBaseURL } from "../stores";
  import Card from "./Card.svelte";

  export let item;
  let message = "";
  let masterOrApprenticeKey = "";
  let showVotingOptions = false;

  const vote = () => {
    showVotingOptions = !showVotingOptions;
  };

  const sendVote = async (itemId) => {
    try {
      const response = await fetch(
        `${backendBaseURL}/api/v1/addvoteongameproposal`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            id: item.id,
            fromKey: masterOrApprenticeKey,
            rating: item.currentVisitorsVoteForItem,
          }),
        }
      );

      console.log("debug milestone 1");

      const result = await response.json();

      console.log("debug milestone 2");
      message = result.message;
      if (result.newRatingOfProposal !== undefined) {
        item.rating = result.newRatingOfProposal;
      }
      masterOrApprenticeKey = "";
    } catch (error) {
      alert(`an error occurred: ${error.message}`);
    }
  };

  const clickValue = (valueClicked) => {
    item.currentVisitorsVoteForItem = valueClicked;
  };

</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <p><br /></p>
  <h3>Scheduled for {item.expiryDateUTC.split(" ")[0]} UTC</h3>
  <p><br /></p>
  <p class="text-display">
    {@html replaceContentToShowClickableLinks(item.text)}
  </p>
  <p />
  {#if message}
    <div class="message">
      {message}
      <p />
    </div>
  {:else}
    <p><br /></p>
    <div class="color-of-body">
      <!-- you can dispatch the info on which item visitor is currently voting - updating the display for the other items...  -->

      <button class="button-colors-on-Card" on:click={() => vote()}
        >Vote on this Proposal</button
      >
    </div>
    <!-- <RatingSelect on:rating-select={handleSelect} /> -->
    {#if showVotingOptions}
      <ul class="rating">
        <li>
          <input type="radio" id="num1" on:change={() => clickValue(1)} />
          <label
            class={item.currentVisitorsVoteForItem === 1
              ? "labelActive"
              : "labelInActive"}
            for="num1">1</label
          >
        </li>
        <li>
          <input
            type="radio"
            id="num2"
            on:change={() => clickValue(2)}
            checked={item.currentVisitorsVoteForItem === 2}
          />
          <label
            class={item.currentVisitorsVoteForItem === 2
              ? "labelActive"
              : "labelInActive"}
            for="num2">2</label
          >
        </li>
        <li>
          <input
            type="radio"
            id="num3"
            on:change={() => clickValue(3)}
            checked={item.currentVisitorsVoteForItem === 3}
          />
          <label
            class={item.currentVisitorsVoteForItem === 3
              ? "labelActive"
              : "labelInActive"}
            for="num3">3</label
          >
        </li>
        <li>
          <input
            type="radio"
            id="num4"
            on:change={() => clickValue(4)}
            checked={item.currentVisitorsVoteForItem === 4}
          />
          <label
            class={item.currentVisitorsVoteForItem === 4
              ? "labelActive"
              : "labelInActive"}
            for="num4">4</label
          >
        </li>
        <li>
          <input
            type="radio"
            id="num5"
            on:change={() => clickValue(5)}
            checked={item.currentVisitorsVoteForItem === 5}
          />
          <label
            class={item.currentVisitorsVoteForItem === 5
              ? "labelActive"
              : "labelInActive"}
            for="num5">5</label
          >
        </li>
        <li>
          <input
            type="radio"
            id="num6"
            on:change={() => clickValue(6)}
            checked={item.currentVisitorsVoteForItem === 6}
          />
          <label
            class={item.currentVisitorsVoteForItem === 6
              ? "labelActive"
              : "labelInActive"}
            for="num6">6</label
          >
        </li>
        <li>
          <input
            type="radio"
            id="num7"
            on:change={() => clickValue(7)}
            checked={item.currentVisitorsVoteForItem === 7}
          />
          <label
            class={item.currentVisitorsVoteForItem === 7
              ? "labelActive"
              : "labelInActive"}
            for="num7">7</label
          >
        </li>
        <li>
          <input
            type="radio"
            id="num8"
            on:change={() => clickValue(8)}
            checked={item.currentVisitorsVoteForItem === 8}
          />
          <label
            class={item.currentVisitorsVoteForItem === 8
              ? "labelActive"
              : "labelInActive"}
            for="num8">8</label
          >
        </li>
        <li>
          <input
            type="radio"
            id="num9"
            on:change={() => clickValue(9)}
            checked={item.currentVisitorsVoteForItem === 9}
          />
          <label
            class={item.currentVisitorsVoteForItem === 9
              ? "labelActive"
              : "labelInActive"}
            for="num9">9</label
          >
        </li>
        <li>
          <input
            type="radio"
            id="num10"
            on:change={() => clickValue(10)}
            checked={item.currentVisitorsVoteForItem === 10}
          />
          <label
            class={item.currentVisitorsVoteForItem === 10
              ? "labelActive"
              : "labelInActive"}
            for="num10">10</label
          >
        </li>
      </ul>
    {/if}
  {/if}

  {#if item.currentVisitorsVoteForItem > 0 && message === "" && showVotingOptions}
    <div class="input-group">
      <input
        type="text"
        bind:value={masterOrApprenticeKey}
        placeholder="Please enter your Apprentice- or Master Key."
      />
    </div>
  {/if}

  {#if masterOrApprenticeKey !== ""}
    <p><br /></p>
    <div class="color-of-body">
      <button class="button-colors-on-Card" on:click={() => sendVote()}
        >Send Your Vote</button
      >
    </div>
  {/if}
</Card>

<style>
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
  }

  .rating li {
    position: relative;
    background: #f4f4f4;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    font-size: 19px;
    border: 1px #eee solid;
    transition: 0.3s;
  }

  .rating li label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .rating li:hover {
    background: #ff6a95;
    color: #fff;
  }

  [type="radio"] {
    opacity: 0;
  }

  /* [type='radio']:marked ~ label {
    background: #ff6a95;
    color: #fff;
  } */
  .labelActive,
  .labelInActive:hover {
    background: #ff6a95;
    color: #fff;
  }

  .labelInActive {
    background: #f4f4f4;
  }

  /* [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  } */
</style>
