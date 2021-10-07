export const onCreateMint = async ( mint: string ) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            mint_hash: mint,
            collection: 'Test' })
    };
    fetch('http://127.0.0.1:8000/api/mint/', requestOptions)
        .then(response => response.json());
}