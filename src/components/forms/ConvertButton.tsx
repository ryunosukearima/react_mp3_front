import { useState } from "react"

type TextType = {
    youtubeLink : string;
    setYoutubeLink: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    artist: string;
    comment: string;
    allName: { id: number; text: string }[];
    setAllName: React.Dispatch<React.SetStateAction<{ id: number; text: string }[]>>
}

let nextId  = 0

export const ConvertButton = ({ youtubeLink, setYoutubeLink, title, setTitle, artist, comment, allName, setAllName }: TextType) => {
    const [youtubeLinkHistory, setYoutubeLinkHistory] = useState<{ id: number; text: string }[]>([]);
    const [taitleHistory, setTitleHistory] = useState<{ id: number; text: string }[]>([]);

    const convert = () => {

        // youtubeLink入力判定
        if (youtubeLink == "") {
            alert("youtubeLinkを入力してください")
            return      
        }

        // youtubeLink,title重複判定
        // 現在のid-1したものと比較
        const lastLink = youtubeLinkHistory[youtubeLinkHistory.length - 1];
        const lastTitle = taitleHistory[taitleHistory.length - 1];
        // オプショナルチェーン　LastItemがuindefind(初回入力)時でも比較可能
        const isDuplicateLink = lastLink?.text === youtubeLink;
        const isDuplicateTitle = lastTitle?.text === title;

        if (youtubeLink.trim() == "" && title.trim() == "") {
            alert("link&titleを入力してください")
        } 
        if(youtubeLink == "") {
            alert('linkを入力してください')
        }

        if (title.trim() == "") {
            alert("titleを入力してください")
            return
        } 

        if (isDuplicateLink && isDuplicateTitle) {
            alert("linkが重複しています")
            setTimeout(() => {
                setYoutubeLink("")
            }, 1)
            return
        }

        
        setYoutubeLinkHistory([...youtubeLinkHistory, { id: nextId, text: youtubeLink }])
        setTitleHistory([...taitleHistory, { id: nextId, text: youtubeLink }])

        // link,title削除
        setTimeout(() => {
            setYoutubeLink("")
            setTitle("")
        }, 1)
        
        // 変換履歴
        const convertHistory = `title:${title}\nartist:${artist}\ncomment:${comment}`;
        // const newAllNameArry = allName.some(item => item.text === convertHistory);
        setAllName([...allName, { id: nextId++, text: convertHistory}]);

    }
    
    return (
        <>
        <button onClick={convert}>変換</button>
        </>
    )
}

// link.map管理する　利点簡単に操作可能だから
// 前回のテキストと比較して一緒なら変換不可に
// 履歴時間経過で消える
// ボタンでyputubeLink,titleテキストの削除決めれるように useRender使えそう