<script>
    import Greet from './components/Greet.svelte'

    const name = 'Kadir'
    const channel = 'Revolution'

    const obj = {
        name: 'Hamza',
        heroName: 'Spider Man',
    }
</script>

<main>
    <Greet {name} heroName={channel} />
    <Greet {name} />
    <Greet {...obj} />
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
