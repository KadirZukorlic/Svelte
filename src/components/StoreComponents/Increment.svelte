<script>
    import { count } from '../../store/stores'

    const increment = () => {
        count.update((value) => {
            return value + 10
        })
    }
</script>

<button on:click={increment}>Increment</button>
