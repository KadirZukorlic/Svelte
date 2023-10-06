<div class="card"><slot>Default content</slot></div>

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
        transform: rotate(360deg);
        transition-duration: 0.6s;
    }
</style>
