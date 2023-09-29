<script>
    const formValues = {
        name: '',
        profileSummary: '',
        country: '',
        jobLocation: [],
        remoteWork: false,
        skillSet: [],
        yearsOfExperience: '',
    }

    const submitForm = () => {
        console.log(formValues)
    }
</script>

<main>
    <div>
        form values object
        <pre>
            {JSON.stringify(formValues, null, 2)}
        </pre>
    </div>
    <form on:submit|preventDefault={submitForm}>
        <div>
            <label for="name">Name</label>
            <input type="text" id="name" bind:value={formValues.name} />
        </div>
        <div>
            <label for="profile">Profile Summary</label>
            <textarea id="profile" bind:value={formValues.profileSummary} />
        </div>
        <div>
            <label for="country">Country</label>
            <select id="country" bind:value={formValues.country}>
                <option value="">Select a country</option>
                <option value="serbia">Serbia</option>
                <option value="germany">Germany</option>
                <option value="lichtenstein">Lichtenstein</option></select
            >
        </div>
        <div>
            <label for="jobLocation">Job Location</label>
            <select id="jobLocation" bind:value={formValues.jobLocation} multiple>
                <option value="">Select a country</option>
                <option value="serbia">Serbia</option>
                <option value="germany">Germany</option>
                <option value="lichtenstein">Lichtenstein</option></select
            >
        </div>
        <div>
            <input type="checkbox" id="remoteWork" bind:checked={formValues.remoteWork} />
            <label for="remoteWork">Open to remote work?</label>
        </div>
        <div>
            <label for="skillSet">Skill Set</label>
            <input type="checkbox" id="html" value="html" bind:group={formValues.skillSet} />
            <label for="html">HTML</label>
            <input type="checkbox" id="css" value="css" bind:group={formValues.skillSet} />
            <label for="css">CSS</label>
            <input type="checkbox" id="javascript" value="javascript" bind:group={formValues.skillSet} />
            <label for="javascript">JavaScript</label>
        </div>
        <div>
            <label>Years of experience</label>
            <input type="radio" id="0-2" value="0-2" bind:group={formValues.yearsOfExperience} />
            <label for="0-2">0-2</label>
            <input type="radio" id="3-5" value="3-5" bind:group={formValues.yearsOfExperience} />
            <label for="3-5">3-5</label>
            <input type="radio" id="5-10" value="5-10" bind:group={formValues.yearsOfExperience} />
            <label for="5-10">5-10</label>
        </div>
        <button type="submit">Submit</button>
    </form>
</main>

<style>
    form > div {
        margin-bottom: 0.5rem;
    }
    input + label {
        display: inline-flex;
    }
    p {
        color: rgb(161, 91, 91);
    }
    main {
        /* text-align: center; */
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
