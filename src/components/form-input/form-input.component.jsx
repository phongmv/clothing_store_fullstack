import './from-input.style.scss'

export const FormInput = ({label, ...props}) => {
    return <div className="group">
        <input className="form-input" {...props}/>
        {label && <label htmlFor="display-name" className={`${props.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>}
    </div>
}

export default FormInput