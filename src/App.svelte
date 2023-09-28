<script>
    let num = 0
</script>

<main>
    {#if Number(num) === 0}
        <h2>Number is <span>zero</span></h2>
    {:else if Number(num) < 0}
        <h2>Number is <span>negative</span></h2>
    {:else if Number(num) > 0}
        <h2>Number is <span>positive</span></h2>
    {:else}
        <h2>Not a number</h2>
    {/if}

    <input type="text" bind:value={num} on:change={(e) => (num = e.target.value)} />
    {#if num}
        <p>input number is: {num}</p>
    {:else}
        <p>yeah</p>
    {/if}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
