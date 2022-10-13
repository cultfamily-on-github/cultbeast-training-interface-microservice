<script>
  import Seo from "./Seo.svelte";
  import { onMount } from "svelte";
  import { backendBaseURL } from "./stores";
  import { replaceContentToShowClickableLinks } from "./helpers";

  let learningOpportunities = [];
  let messages = [];
  let showDetails = false;
  let showPhilosophy = false;
  let showMasterMode = false;
  let showSuperVisedLearning = false;
  let showProposalsMode = false;
  let showPastGamesMode = false;
  let intervalId = 0;
  let lOLengthBefore = 0;
  let rMBefore = 0;

  let inputText = "";

  const getDataInPlace = async () => {
    const urlToGetLearningOpportunities = `${backendBaseURL}/api/v1/getLearningOpportunities`;
    console.log(
      `fetching learning opportunities from ${urlToGetLearningOpportunities}`
    );

    const lOResponse = await fetch(urlToGetLearningOpportunities);
    learningOpportunities = await lOResponse.json();

    const urlToGetMessages = `${backendBaseURL}/api/v1/getMessages`;
    console.log(`fetching received messages from ${urlToGetMessages}`);
    const rMresponse = await fetch(urlToGetMessages);
    messages = await rMresponse.json();

    setTimeout(() => {
      if (rMBefore < messages.length) {
        scrollToBottom("livechatdiv");
        rMBefore = messages.length;
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

  onMount(() => {
    getDataInPlace();
    // document.onkeypress = function (event) {
    //   alert(event.keyCode);
    // };
  });

  const clickSend = async () => {
    const cultBotServerURL = `https://cultbeast.org:11443/api/v1/addMessage`;
    // const cultBotServerURL = `https://localhost:8049/api/v1/addMessage`
    try {
      const response = await fetch(cultBotServerURL, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          text: inputText,
        }),
      });

      // const result = await response.json();
      getDataInPlace()
      inputText = ""
    } catch (error) {
      alert(`an error occurred: ${error.message}`);
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

  const scrollToBottom = (id) => {
    const element = document.getElementById(id);
    element.scrollTop = element.scrollHeight;
  };

  if (intervalId === 0) {
    intervalId = setInterval(() => {
      getDataInPlace();
    }, 1000 * 7);
  }
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
      {#each messages as message}
        <p><br /></p>
        <b>
          {message.userName}: <br />
        </b>
        <!-- {message.text} -->
        {@html replaceContentToShowClickableLinks(message.text)}
      {/each}
    </div>

    <div class="input-group">
      <input
        type="text"
        bind:value={inputText}
        placeholder="... start typing your message here ..."
      />
    </div>
    <br />
    {#if inputText !== ""}
      <button on:click={() => clickSend()}> Send </button>
      <p><br /></p>
    {/if}

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

    <a href="https://cultplayground.org" target="_blank">
      <button> CULT Game Of The Day </button>
    </a>

    <p><br /></p>

    <a href="https://cultkamasutra.eth.limo/" target="_blank">
      <button> CULT Kamasutra </button>
    </a>
    <p><br /></p>

    <a href="https://www.cultdao.art/" target="_blank">
      <button> CULTDAO Art </button>
    </a>
    <p><br /></p>

    <a href="https://cultmagazine.org/" target="_blank">
      <button> Explore Architectures of Freedom </button>
    </a>
    <p><br /></p>

  </div>
</main>

<style>
  /* .sendButton {
    width: 30%;
    height: 5vh;
    font-size: 22px;
    margin-left: 1vw;
  } */

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
