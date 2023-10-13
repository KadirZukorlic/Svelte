<script>
    import Decrement from './components/StoreComponents/Decrement.svelte'
    import Display from './components/StoreComponents/Display.svelte'
    import Increment from './components/StoreComponents/Increment.svelte'
    import Reset from './components/StoreComponents/Reset.svelte'
</script>

<main>
    <Increment />
    <Decrement />
    <Reset />
    <Display />
</main>

<style>
    h4 {
        color: orange;
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
