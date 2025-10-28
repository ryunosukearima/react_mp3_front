import { useEffect } from "react";  

type formInputProps = {
    formText: { id: number; text: string }[];
    setFormText: React.Dispatch<React.SetStateAction<{ id: number; text: string }[]>>    
}



export const FormHistory = ({ formText, setFormText }: formInputProps) => {
    useEffect(
        () => {
            if (formText.length == 0) return

            const additionHistory = formText[formText.length -1]

            const formDelete = setTimeout(() => {
                if (formText.length > 2) {
                    setFormText((prev) => prev.filter((item) => item.id !== additionHistory.id))
                }
            }, 2000)

            return () => clearTimeout(formDelete)
        }, [ formText.length ]
    )


    return (
        <div>
            {formText.map((item) => (
                <pre key={item.id}>{item.text}</pre>
            ))}
        </div>
    )
}

// 時間経過 フォーム履歴削除