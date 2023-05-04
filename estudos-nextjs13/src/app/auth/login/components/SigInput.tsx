interface SigInputProps {
label: string
name: string
type: string
placeholder: string
}

export function SigInput ({
label,
name,
type, 
placeholder
}: SigInputProps) {
    return (
        <>
        <label htmlFor={name} className=" mb-0">
           {label}
           </label>
           <input type={type} 
           name={name}
           placeholder={placeholder}
           className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
           rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} 
           />
        </>
    )
}

