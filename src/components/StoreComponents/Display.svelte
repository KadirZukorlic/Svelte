<script>
    import { count } from '../../store/stores'
    import { show } from '../../store/stores'

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
</main>
