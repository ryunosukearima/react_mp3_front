import { use, useRef, useState } from "react" 
import { FormInput } from "./FormInput "
import { ConvertButton } from "./ConvertButton"
import { FormHistory } from "./FormHistory"
import { ResetButton } from "./ResetButton"
import { FormHistoryDelete } from "./FormHistoryDelete"

export const Form = () => {
    const [youtubeLink, setYoutubeLink] = useState("")
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [comment, setComment] = useState("")
    const [formText, setFormText] = useState<{ id: number; text: string; }[]>([]);
    

    return (
        <div>
        <FormInput
        label="youtubeLink"
        value={youtubeLink}
        onChange={(e) => setYoutubeLink(e.target.value)}
        />
        <FormInput
        label="title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
        <FormInput
        label="artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        />
        <FormInput
        label="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        />
        <ConvertButton 
        youtubeLink={youtubeLink}
        setYoutubeLink={setYoutubeLink}
        title={title}
        setTitle={setTitle}
        artist={artist}
        comment={comment}
        formText={formText}
        setFormText={setFormText}
        />
        <ResetButton
        setYoutubeLink={setYoutubeLink}
        setTitle={setTitle}
        setArtist={setArtist}
        setComment={setComment}
        />
        <FormHistory
        formText={formText}
        setFormText={setFormText}
        />
        <FormHistoryDelete 
        />
        </div>
    )
}
// 履歴整える
// 配列、時間経過で削除削除
