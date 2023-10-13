<script>
    import { count, show, customCount } from '../../store/stores'

    const toggleHandler = () => {
        show.update((value) => {
            return !value
        })
    }
</script>

<main>
    <button on:click={toggleHandler}>Toggle Counter</button>

    {#if $show}
        <h3>Current count is: {$count}</h3>
    {/if}

    <h2>custom count is: {$customCount}</h2>
    <button on:click={() => customCount.increment()}>custom count increment</button>
    <button on:click={() => customCount.increment(5)}>custom count increment</button>

    <button on:click={() => customCount.decrement()}>custom count decrement</button>
    <button on:click={() => customCount.decrement(5)}>custom count decrement</button>

    <button on:click={customCount.reset}>reset</button>
</main>
