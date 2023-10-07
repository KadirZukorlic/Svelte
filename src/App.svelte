<script>
    import Card from './components/Card.svelte'
    // import Outer from './components/Outer.svelte'
    // import Greet from './components/Greet.svelte'
    // import Popup from './components/Popup.svelte'
    import Button from './components/Button.svelte'
    import NameList from './components/NameList.svelte'
    // import { setContext } from 'svelte'

    // const name = 'Kadir'
    // const channel = 'Revolution'

    // const obj = {
    //     name: 'Hamza',
    //     heroName: 'Spider Man',
    // }

    // const fullName = 'Hamza Zukorlic Context'
    // setContext('fullNameCtx', {
    //     fullName,
    // })

    // let showPopup = false

    // const closePopup = (event) => {
    //     showPopup = false
    //     const { name } = event.detail
    //     console.log(name)
    //     console.log(event.detail, 'detail from dispatch')
    // }

    // const handleGreet = (event) => {
    //     alert(event.detail)
    // }
</script>

<main>
    <NameList><h3 slot="hero" let:firstName let:lastName>{firstName} {lastName}</h3></NameList>
    <NameList><h3 slot="hero" let:firstName let:lastName>{lastName}, {firstName}</h3></NameList>
    <NameList><h3 slot="hero" let:firstName>{firstName}</h3></NameList>
    <Card />
    <Card><h2>Card Content</h2></Card>
    <Card><img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="card content" /></Card>
    <Card
        ><div slot="header"><h3>Header</h3></div>
        <div slot="content">
            <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="card content" />
        </div>
        <!-- <div slot="footer"><Button>View details</Button></div> -->
    </Card>
    <!-- <Button on:click={() => alert('green button clicked...')}>Click</Button>
    <Outer on:greet={handleGreet} />
    <button on:click={() => (showPopup = !showPopup)}>{!showPopup ? 'Show Popup' : 'Hide Popup'}</button>
    {#if showPopup}
        <Popup on:close={closePopup} />
    {/if}
    <Greet {...obj} /> -->
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
