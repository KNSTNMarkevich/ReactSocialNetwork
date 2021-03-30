import React from 'react';
import style from './FormsControls.module.css'


const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched &&  meta.error;
    return (
        <div>
            <div className={style.formControl + " " + (hasError ? style.error : "")}>
                {props.children}
            </div>
            {hasError && <span className={style.errorMessage}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}
export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}


// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched &&  meta.error;
//     return (
//         <div>
//             <div className={style.formControl + " " + (hasError ? style.error : "")}>
//                 <textarea {...input} {...props}/>
//             </div>
//             {hasError && <span className={style.errorMessage}>{meta.error}</span>}
//         </div>
//     )
// }