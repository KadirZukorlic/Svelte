<script>
    import Inner from './Inner.svelte'
</script>

<main>
    <!-- Ommit handler on on:greet to forward event in parent -->
    <Inner on:greet />
</main>
