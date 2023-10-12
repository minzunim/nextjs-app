import { ReactNode } from "react"

interface ReadProps {
    params: {
        id: number
    }
}


export default function Read(props: ReadProps) {
    return (<>
        parmeter: {props.params.id}
    </>
    )
}