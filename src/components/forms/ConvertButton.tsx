import { useState } from "react"

type formInputProps = {
    youtubeLink : string;
    setYoutubeLink: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    artist: string;
    comment: string;
    formText: { id: number; text: string }[];
    setFormText: React.Dispatch<React.SetStateAction<{ id: number; text: string }[]>>
}
let nextId  = 0
export const ConvertButton = ({ youtubeLink, setYoutubeLink, title, setTitle, artist, comment, formText, setFormText }: formInputProps) => {
    const [youtubeLinkHistory, setYoutubeLinkHistory] = useState<{ id: number; text: string }[]>([]);
    const [titleHistory, setTitleHistory] = useState<{ id: number; text: string }[]>([]);

    const convert = () => {
        // youtubeLink title 入力判定
        if (youtubeLink.trim() == "" && title.trim() == "") {
            alert("link&titleを入力してください")
            return
        } 
        // youtubeLink入力判定
        if (youtubeLink.trim() == "") {
            alert("youtubeLinkを入力してください")
            return   
        }
        // title 入力判定
        if (title.trim() == "") {
            alert("titleを入力してください")
            return
        }

        // 現在のid-1 youtubeLink, titleぞれぞれ比較
        // オプショナルチェーン LastItemがundefined(初回入力)時でも比較可能
        const lastLink = youtubeLinkHistory[youtubeLinkHistory.length - 1];
        const isDuplicateLink = lastLink?.text === youtubeLink;
        const lastTitle = titleHistory[titleHistory.length - 1];
        const isDuplicateTitle = lastTitle?.text === title;

        if (isDuplicateLink && isDuplicateTitle) {
            alert("link&title重複しています")
            setTimeout(() => {
                setYoutubeLink("")
                setTitle("")
            }, 1)
            return
        }

        setYoutubeLinkHistory([...youtubeLinkHistory, { id: nextId, text: youtubeLink }])
        setTitleHistory([...titleHistory, { id: nextId, text: title }])

        // link,title削除
        setTimeout(() => {
            setYoutubeLink("")
            setTitle("")
        }, 1)
        
        // 変換履歴
        const convertHistory = `title:${title}\nartist:${artist}\ncomment:${comment}`;
        setFormText([...formText, { id: nextId++, text: convertHistory}]);

    }
    
    return (
        <>
        <button onClick={convert}>変換</button>
        </>
    )
}

// link.map管理する 利点簡単に操作可能だから
// 前回のテキストと比較して一緒なら変換不可に
// 履歴時間経過で消える
// ボタンでyoutubeLink,titleテキストの削除決めれるように useRender使えそう