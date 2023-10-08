<script context="module">
    let totalCount = 0

    export const getTotalCount = () => {
        return totalCount
    }
</script>

<script>
    let count = 0

    const clickHandler = () => {
        count += 1
        totalCount += 1
    }
</script>

<h2>Count = {count}</h2>
<button on:click={clickHandler}>Increment</button>
