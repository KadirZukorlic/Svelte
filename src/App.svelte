<script>
    let count = 0
    const increase = (e, number) => {
        console.log(e)
        // count = count + 1
        count += number
    }
</script>

<main>
    <button on:click={() => (count = count + 1)}>Count {count}</button>
    <button on:click={(event) => increase(event, 5)}>Count {count}</button>
    <button on:click={(event) => increase(event, 10)}>Count {count}</button>
</main>

<style>
    p {
        color: rgb(161, 91, 91);
    }
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
