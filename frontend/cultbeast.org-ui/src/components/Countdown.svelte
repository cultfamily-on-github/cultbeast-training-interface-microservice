<script>
    import { onMount } from "svelte";

    export let deadline;

    let cD = new Date();
    let utcFullYear = cD.getUTCFullYear();
    let utcMonth = cD.getUTCMonth();
    let utcDate = cD.getUTCDate();
    let month = utcMonth + 1;

    let hours;
    let minutes;
    let seconds;
    // Date.UTC(year, month, day, hours, minutes, seconds, millisec)

    let countDownString = "";

    const updateCountdown = () => {
        const hd = new Date();
        // const dt = new Date(Date.UTC(hd.getFullYear(), hd.getMonth(), hd.getDate(), hd.getHours(), hd.getMinutes(), hd.getSeconds()));

        const now = hd.getTime();

        const distance = deadline - now;

        // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
    };
    onMount(async () => {
        updateCountdown();
        setInterval(function () {
            updateCountdown();
        }, 1000);
    });
</script>

<!-- Ends In: {hours}h {minutes}m {seconds}s -->
<div class="countdown">
    <h4>
        You have {hours}h {minutes}m {seconds}s to complete this game.
    </h4>
</div>

<style>
    .countdown {
        /* background: #ff6a95;
        color: #fff; */
        font-size: large;
    }
</style>
