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
  import { getLastMomentOfTodayFromDate, getDateFromString } from "./helpers";
  import { backendBaseURL, cultBeastBackendBaseURL } from "./stores";

  let gameProposals = [];
  let learningOpportunities = [];
  let currentGameOfTheDay;
  let lastMomentOfToday;
  let showDetails = false;
  let showPhilosophy = false;
  let showMasterMode = false;
  let showSuperVisedLearning = false;
  let showProposalsMode = false;
  let showPastGamesMode = false;

  const getDataInPlace = async () => {
    const response = await fetch(`${backendBaseURL}/api/v1/getgameproposals`);
    gameProposals = await response.json();

    lastMomentOfToday = getLastMomentOfTodayFromDate(new Date());

    currentGameOfTheDay = gameProposals.filter(
      (e) => e.expiryDateUTC.substr(0, 10) === lastMomentOfToday.substr(0, 10)
    )[0];

    setTimeout(async () => {
      const url = `${cultBeastBackendBaseURL}/api/v1/getLearningOpportunities`;
      console.log(`fetching learning opportunities from ${url}`);
      const response = await fetch(url);
      learningOpportunities = await response.json();
    }, 1000 * 2); // waiting 2 seconds with this request for a superquick landingpage delivery
  };

  onMount(getDataInPlace);

  // const handleReloadOfCultGameProposalsRecommended = async () => {
  //   alert("super");
  //   // await getDataInPlace();
  // };

  const changeShowDetails = () => {
    showDetails = !showDetails;
    if (showDetails) {
      showPhilosophy = false;
      showProposalsMode = false;
      showMasterMode = false;
      showPastGamesMode = false;
      showSuperVisedLearning = false;
    }
  };

  const changeShowPhilosophy = () => {
    showPhilosophy = !showPhilosophy;
    if (showPhilosophy) {
      showDetails = false;
      showProposalsMode = false;
      showMasterMode = false;
      showSuperVisedLearning = false;
    }
  };

  const changeShowProposalsMode = () => {
    showProposalsMode = !showProposalsMode;
    if (showProposalsMode) {
      showDetails = false;
      showPhilosophy = false;
      showMasterMode = false;
      showSuperVisedLearning = false;
    }
  };

  const changeShowPastGamesMode = () => {
    showPastGamesMode = !showPastGamesMode;
    if (showPastGamesMode) {
      showDetails = false;
      showPhilosophy = false;
      showMasterMode = false;
      showProposalsMode = false;
      showSuperVisedLearning = false;
    }
  };

  const changeShowMasterMode = () => {
    showMasterMode = !showMasterMode;
    if (showMasterMode) {
      showDetails = false;
      showPhilosophy = false;
      showProposalsMode = false;
      showPastGamesMode = false;
      showSuperVisedLearning = false;
    }
  };

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
  title="CULT Game Of The Day"
  description="We are a network of cultdao.io fans promoting freedom, fairness, education and love."
/>

<main class="container">
  <div class="text-center">
    <h2>CULT Game Of The Day</h2>

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

    <Levels />

    <button on:click={() => changeShowDetails()}> Show Details </button>
    {#if showDetails}
      <HowItWorks />
    {/if}

    <p><br /></p>

    <button on:click={() => changeShowPhilosophy()}> Show Philosophy </button>
    {#if showPhilosophy}
      <Philosophy />
    {/if}

    <p><br /></p>

    <button on:click={() => changeShowMasterMode()}> Add Game Proposal </button>
    {#if showMasterMode}
      <MasterModeForm />
      <!-- The following would be nice to have imo so that the proposer can see his newly submitted proposal more or less directly. 
        PR is welcome - I struggled a bit with an error while trying the following:
        <MasterModeForm
        on:reload-of-gameproposals-recommended={handleReloadOfCultGameProposalsRecommended}
      /> -->
    {/if}

    <p><br /></p>

    <button on:click={() => changeShowProposalsMode()}>
      Show Game Proposals
    </button>
    {#if showProposalsMode}
      {#each gameProposals as fb (fb.id)}
        {#if getDateFromString(fb.expiryDateUTC) >= getDateFromString(lastMomentOfToday) && fb.id !== currentGameOfTheDay.id}
          <div in:scale out:fade={{ duration: 500 }}>
            <GameProposalItem item={fb} />
          </div>
        {/if}
      {/each}
    {/if}

    <p><br /></p>
    <button on:click={() => changeShowPastGamesMode()}>
      Show Past Games
    </button>

    {#if showPastGamesMode}
      {#each gameProposals as fb (fb.id)}
        {#if getDateFromString(fb.expiryDateUTC) < getDateFromString(lastMomentOfToday)}
          <div in:scale out:fade={{ duration: 500 }}>
            <GameOfThePastItem item={fb} />
          </div>
        {/if}
      {/each}
      <p><br /></p>
      {/if}
      
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
