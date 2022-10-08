<script>
  import Levels from "./components/texts/Levels.svelte";
  import Philosophy from "./components/texts/Philosophy.svelte";
  import HowItWorks from "./components/texts/HowItWorks.svelte";
  import MasterModeForm from "./components/MasterModeForm.svelte";
  import GameOfTheDayItem from "./components/GameOfTheDayItem.svelte";
  import GameProposalItem from "./components/GameProposalItem.svelte";
  import GameOfThePastItem from "./components/GameOfThePastItem.svelte";
  import Seo from "./Seo.svelte";
  import { fade, scale } from "svelte/transition";
  import { onMount } from "svelte";
  import { backendBaseURL } from "./stores";

  let learningOpportunities = [];
  let receivedMessages = [];
  let currentGameOfTheDay;
  let lastMomentOfToday;
  let showDetails = false;
  let showPhilosophy = false;
  let showMasterMode = false;
  let showSuperVisedLearning = false;
  let showProposalsMode = false;
  let showPastGamesMode = false;

  const getDataInPlace = async () => {
    const urlToGetLearningOpportunities = `${backendBaseURL}/api/v1/getLearningOpportunities`;
    console.log(`fetching learning opportunities from ${urlToGetLearningOpportunities}`);
    const lOResponse = await fetch(urlToGetLearningOpportunities);
    learningOpportunities = await lOResponse.json();

    const urlToGetReceivedMessages = `${backendBaseURL}/api/v1/getReceivedMessages`;
    console.log(`fetching received messages from ${urlToGetReceivedMessages}`);
    const rMresponse = await fetch(urlToGetReceivedMessages);
    receivedMessages = await rMresponse.json();
  };

  onMount(getDataInPlace);

  
  const changeShowSuperVisedLearning = () => {
    showSuperVisedLearning = !showSuperVisedLearning;
    if (showMasterMode) {
      showDetails = false;
      showPhilosophy = false;
      showProposalsMode = false;
      showPastGamesMode = false;
      showMasterMode = false;
    }
  };
</script>

<Seo
  title="CULT Beast Training Camp"
  description="We are a network of cultdao.io fans promoting freedom, fairness, education and love."
/>

<main class="container">
  <div class="text-center">
    <h2>CULT Beast Training Camp</h2>

    <p><br /></p>
    {#if lastMomentOfToday}
      <a href="https://time.is/UTC" target="_blank" style="color: white;">
        {lastMomentOfToday.split(" ")[0]} UTC</a
      >
    {/if}
    <p><br /></p>
    {#if currentGameOfTheDay}
      <!-- {JSON.stringify(currentGameOfTheDay)} -->
      <GameOfTheDayItem item={currentGameOfTheDay} />
    {/if}

    {#each receivedMessages as receivedMessage}
      {receivedMessage.text}
    {/each}
    Under Construction
    <!-- <Levels /> -->

   <p><br /></p>

    <button on:click={() => changeShowSuperVisedLearning()}>
      CULT Beast Learning Opportunities
    </button>
    {#if showSuperVisedLearning}
      <p><br /></p>
      Under Construction ...
      {#each learningOpportunities as learningOpportunities}
        <p><br /></p>
        {JSON.stringify(learningOpportunities)}
        <p><br /></p>
      {/each}
      <p><br /></p>
    {/if}

    <p><br /></p>

    <a href="https://cultmagazine.org/" target="_blank">
      <button> Explore Architectures of Freedom </button>
    </a>
  </div>
</main>

<style>
</style>
