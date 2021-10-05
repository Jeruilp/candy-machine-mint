


// export const fetchHttpRequest = async (mint: string): Promise<[]> => {
    export const fetchHttpRequest = async () => {
    const endpoint = 'https://opentdb.com/api.php?amount=10';
    const data = await (await fetch(endpoint)).json();
    console.log(data);
}

    // Simple PUT request with a JSON body using fetch
    // const requestOptions = {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ title: 'React PUT Request Example' })
    // };
    // fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
    //     .then(response => response.json())
    //     .then(data => this.setState({ postId: data.id }));
