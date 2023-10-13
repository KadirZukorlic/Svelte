<script>
    import { elapsed, time } from '../../store/stores'

    const dateFormatter = Intl.DateTimeFormat('us', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
    })
</script>

<h2>
    The time is {dateFormatter.format($time)}
</h2>

<p>
    This page has been open for
    {$elapsed}
    {$elapsed === 1 ? 'second' : 'seconds'}
</p>
