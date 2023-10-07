<script>
    const names = [
        { firstName: 'Kadir', lastName: 'Zukorlic' },
        { firstName: 'Hamza', lastName: 'Zukorlic' },
        { firstName: 'Amina', lastName: 'Rizvanovic Zukorlic' },
    ]
</script>

{#each names as name (name)}
    <h3><slot name="hero" firstName={name.firstName} lastName={name.lastName} /></h3>
{/each}
