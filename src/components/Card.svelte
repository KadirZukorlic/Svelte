<div class="card">
    <div class="card-header"><slot name="header" /></div>
    <div class="card-content"><slot name="content">Default content</slot></div>
    {#if $$slots.footer}
        <hr />
        <div class="card-footer"><slot name="footer" /></div>
    {/if}
</div>

<style>
    .card {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        padding: 16px;
        margin-bottom: 20px;
        width: 200px;
        cursor: pointer;
    }

    .card:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
        transition-duration: 0.6s;
    }
</style>
