"use client"

interface Form {
    title: string;
    body: string;
}

export default function Create() {
    return (<>
        <h1>create!</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            const target = e.target as HTMLFormElement & Form;
            const { title, body } = target

            const option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, body })

            }

            fetch('http://localhost:9999/posts', option).then((res) => res.json()).then((result) => console.log('result', result))

        }}>
            <p><input type="text" name="title" placeholder="title" /></p>
            <p><textarea name="body" placeholder="body"></textarea></p>
            <p><input type="submit" value="submit" /></p>
        </form >
    </>
    )
}

