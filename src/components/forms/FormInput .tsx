type  FormInputProps = {
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({ label, value, onChange}: FormInputProps) => {
    return (
        <div className="bg-blue-400">
            <label htmlFor="">{label}:</label>
            <input className="border-1" type="text" value={value} onChange={onChange}/>
        </div>
    )
}