// フォームのリセット機能

type TextType = {
    setYoutubeLink: React.Dispatch<React.SetStateAction<string>>;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setArtist: React.Dispatch<React.SetStateAction<string>>;
    setComment: React.Dispatch<React.SetStateAction<string>>;
}
export const ResetButton = ({ setYoutubeLink, setTitle, setArtist, setComment }: TextType) => {
    const formReset = () => {
        setYoutubeLink("")
        setTitle("")
        setArtist("")
        setComment("")
    }
    return (
        <div>
            <button onClick={formReset}>reset</button>
        </div>
    )
}