type TextType = {
    allName: { id: number; text: string }[];
}


export const FormHistory = ({allName}: TextType) => {
    return (
        <div>
            {allName.map((item) => (
                <pre key={item.id}>{item.text}</pre>
            ))}
        </div>
    )
}