interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:customBlue"/>
    );
}

export default Input;