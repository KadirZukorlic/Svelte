<script>
    import TabA from './components/TabA.svelte'
    import TabB from './components/TabB.svelte'
    import TabC from './components/TabC.svelte'

    let activeTab = TabA

    const handleActiveTab = (tab) => {
        activeTab = tab
    }
</script>

<main>
    <button on:click={() => handleActiveTab(TabA)}>Tab A</button>
    <button on:click={() => handleActiveTab(TabB)}>Tab B</button>
    <button on:click={() => handleActiveTab(TabC)}>Tab C</button>
    <svelte:component this={activeTab} />
    <!-- {#if activeTab === 'TabA'}
        <TabA />
    {/if}
    {#if activeTab === 'TabB'}
        <TabB />
    {/if}
    {#if activeTab === 'TabC'}
        <TabC />
    {/if} -->
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
