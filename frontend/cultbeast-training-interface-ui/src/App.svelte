<script>
  import Seo from "./Seo.svelte";
  import { onMount } from "svelte";
  import { backendBaseURL } from "./stores";

  let learningOpportunities = [];
  let receivedMessages = [];
  let showDetails = false;
  let showPhilosophy = false;
  let showMasterMode = false;
  let showSuperVisedLearning = false;
  let showProposalsMode = false;
  let showPastGamesMode = false;

  const getDataInPlace = async () => {
    const urlToGetLearningOpportunities = `${backendBaseURL}/api/v1/getLearningOpportunities`;
    console.log(
      `fetching learning opportunities from ${urlToGetLearningOpportunities}`
    );

    let lOLengthBefore = 0;
    let rMBefore = 0;

    const lOResponse = await fetch(urlToGetLearningOpportunities);
    learningOpportunities = await lOResponse.json();

    const urlToGetReceivedMessages = `${backendBaseURL}/api/v1/getReceivedMessages`;
    console.log(`fetching received messages from ${urlToGetReceivedMessages}`);
    const rMresponse = await fetch(urlToGetReceivedMessages);
    receivedMessages = await rMresponse.json();

    setTimeout(() => {
      if (rMBefore < receivedMessages.length) {
        scrollToBottom("livechatdiv");
        rMBefore = receivedMessages.length;
      }
      if (
        showSuperVisedLearning &&
        lOLengthBefore < learningOpportunities.length
      ) {
        scrollToBottom("learningopportunitiesdiv");
        lOLengthBefore = learningOpportunities.length;
      }
    }, 1000 * 2);
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

  const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
  };

  setInterval(() => {
    getDataInPlace();
  }, 1000 * 7);
</script>

<Seo
  title="CULT Beast Training Camp"
  description="We are a network of cultdao.io fans promoting freedom, fairness, education and love."
/>

<main class="container">
  <div class="text-center">
    <h2>CULT Beast Training Camp</h2>

    <p><br /></p>
    Here you can observe messages which are sent to the
    <a href="https://t.me/cultmagazine_bot" target="_blank" class="whiteLink">
      CULT Beast</a
    >.
    <p><br /></p>

    Please add question and answer pairs
    <a
      href="https://github.com/cultfamily-on-github/decentralized-open-source-ai-supporting-the-cultdao/issues/new?assignees=octocat&labels=trainingdata%2Cfaq&template=q-and-a-pair.yaml&title=A+new+example+q+%26+a+pair+is+coming+to+train+the+CULT+Beast."
      target="_blank"
      class="whiteLink"
    >
      here</a
    >
    to coach the
    <a href="https://t.me/cultmagazine_bot" target="_blank" class="whiteLink">
      CULT Beast</a
    >.

    <div id="livechatdiv">
      {#each receivedMessages as receivedMessage}
        <p><br /></p>
        {receivedMessage.text}
      {/each}
    </div>
    <!-- <Levels /> -->

    <p><br /></p>

    <button on:click={() => changeShowSuperVisedLearning()}>
      CULT Beast Learning Opportunities
    </button>
    {#if showSuperVisedLearning}
      <p><br /> <br /></p>
      The CULT Beast wants you to
      <a
        href="https://github.com/cultfamily-on-github/decentralized-open-source-ai-supporting-the-cultdao/issues/new?assignees=octocat&labels=trainingdata%2Cfaq&template=q-and-a-pair.yaml&title=A+new+example+q+%26+a+pair+is+coming+to+train+the+CULT+Beast."
        target="_blank"
        class="whiteLink"
      >
        give him more example answers</a
      >
      to the following inputs:
      <div id="learningopportunitiesdiv">
        {#each learningOpportunities as learningOpportunities}
          <p><br /></p>
          Unknown Input:
          <a
            href="https://github.com/cultfamily-on-github/decentralized-open-source-ai-supporting-the-cultdao/issues/new?assignees=octocat&labels=trainingdata%2Cfaq&template=q-and-a-pair.yaml&title=A+new+example+q+%26+a+pair+is+coming+to+train+the+CULT+Beast."
            target="_blank"
          >
            {learningOpportunities.input}</a
          >
          <p><br /></p>
        {/each}
      </div>
    {/if}

    <p><br /></p>
    
    <a href="https://cultmagazine.org/" target="_blank">
      <button> Explore Architectures of Freedom </button>
    </a>
  </div>
</main>

<style>
  .whiteLink {
    color: white;
  }
  #livechatdiv {
    height: 50vh;
    overflow-y: scroll;
    background-color: white;
    color: black;
    margin-top: 3vh;
    margin-bottom: 2vh;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 15px;
    -moz-border-radius: 15px;
  }
  #learningopportunitiesdiv {
    height: 50vh;
    overflow-y: scroll;
    background-color: white;
    color: black;
    margin-top: 3vh;
    margin-bottom: 2vh;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 15px;
    -moz-border-radius: 15px;
  }

  ::-webkit-scrollbar {
    display: none;
  }
</style>
