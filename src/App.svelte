<script>
    let firstName = 'Kadir'
    let lastName = 'Zukorlic'
    $: fullName = `${firstName} ${lastName}`
    $: {
        const greet = `Full name is: ${firstName} ${lastName}`
        console.log(greet)
    }

    let items = [
        {
            id: 1,
            title: 'TV',
            price: 100,
        },
        {
            id: 2,
            title: 'Phone',
            price: 200,
        },
        {
            id: 3,
            title: 'MacBook Pro',
            price: 300,
        },
    ]
    $: totalAmount = items.reduce((acc, curr) => (acc = acc + curr.price), 0)

    let volume = 0
    $: if (volume < 0) {
        alert("Can't go lower")
        volume = 0
    } else if (volume > 20) {
        alert("Can't go higher")
        volume = 20
    }
</script>

<main>
    <button on:click={() => (volume = volume + 1)}>Increase Volume</button>
    <button on:click={() => (volume = volume - 1)}>Decrease Volume</button>
    <h2>current volume {volume}</h2>

    <button
        on:click={() => {
            ;(firstName = 'Hamza'), (lastName = 'Zukorlic')
        }}>Change name</button
    >
    <h2>{fullName}</h2>

    <button on:click={() => (items = [...items, { id: 4, title: 'foo', price: 50 }])}>Add item</button>

    <h2>total: {totalAmount}</h2>
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
