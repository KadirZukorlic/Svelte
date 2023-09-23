<script>
    const name = 'Hamza'
    const channel = '<b> Zukorlic </b>'
    const hack = `<a href="#" onclick="alert('You have been hacked!')">Win a prize </a>`
    const id = 'heading'
    const disabled = false
    const status = 'succsess'
    let promoted = true
</script>

<main>
    <h2 class="underline">underlined text</h2>
    <h2 class={status}>Status</h2>
    <!-- class:promoted adds `promoted` class if `promoted` variable is true, longer syntax is class:promoted={promoted} -->
    <h2 class:promoted>Movie Title</h2>
    <h1>Hello {name}!</h1>
    <div>{@html channel}</div>
    <div>{@html hack}</div>
    <h2 {id}>This is a heading</h2>
    <button {disabled} on:click={() => (promoted = !promoted)}>Button</button>
</main>

<style>
    .underline {
        text-decoration: underline;
    }
    .danger {
        color: red;
    }
    .succsess {
        color: olivedrab;
    }
    .promoted {
        font-style: italic;
        color: sandybrown;
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
