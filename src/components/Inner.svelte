<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    const greet = () => {
        dispatch('greet', 'hello world:)')
    }
</script>

<button on:click={greet}> Greet </button>
