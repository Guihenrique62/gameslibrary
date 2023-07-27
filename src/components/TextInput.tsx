export default function TextInput({value, setvalue,label,id}:any){


    return (
        <div >
            <label htmlFor={id}>{label + ':'}</label>
            <input type="text" name={id} id={id} value={value} onChange={(e)=> setvalue(e.target.value)}/>
        </div>
    )
}