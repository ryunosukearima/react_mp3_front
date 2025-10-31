import { useEffect, useState } from "react";  

type formTextProps = {
    formText: { id: number; text: string }[];
}

export const FormHistory = ({ formText }: formTextProps) => {
    const [displayFormText, setDisplayFormText] = useState(formText);
    const [showHistory, setShowHistory] = useState(true);

    // formTextレンダ時、処理開始
    useEffect (() => {
        if (formText.length === 0) return;

        // フォームの配列を反転
        const textRevers = [...formText].reverse();
        // 配列4番目までコピー
        const latestFour = textRevers.slice(0, 4);
        setDisplayFormText(latestFour);
    }, [formText])

    // state管理(boolean)直前保持を反転
    // prev=直前の状態
    const displayFormTextHIde = () => {
        setShowHistory((prev) => !prev)
    }

    return (
        <div>
            <button onClick={displayFormTextHIde}>
                {showHistory? "履歴隠す" : "履歴表示"}
            </button>
            {showHistory && (
                <div>
                    {displayFormText.map((item) => (
                        <pre key={item.id}>{item.text}</pre>
                    ))}
                </div>
            )}
        </div>
    )
}