import { useEffect, useState } from "react";  

type formInputProps = {
    formText: { id: number; text: string }[];
}

export const FormHistory = ({ formText }: formInputProps) => {
    const [displayFormText, setDisplayFormText] = useState(formText)

    useEffect (() => {
        if (formText.length == 0) return;

        const textRevers = [...formText].reverse();
        const latestFour = textRevers.slice(0, 4);
        setDisplayFormText(latestFour);
    }, [formText])

    const displayFormTextDelete = () => {
        setDisplayFormText([])
    }

    return (
        <div>
            <button onClick={displayFormTextDelete}>履歴削除</button>
            {displayFormText.map((item) => (
                <pre key={item.id}>{item.text}</pre>
            ))}
        </div>
    )
}

// 時間経過 フォーム履歴削除