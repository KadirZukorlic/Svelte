<script>
    import { getContext } from 'svelte'
    export let name
    export let heroName = 'Default'

    const fullName = getContext('fullNameCtx').fullName
</script>

<h2>Hello {name} example: {heroName}</h2>

<h2>{fullName}</h2>
