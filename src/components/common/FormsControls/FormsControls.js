import React from "react";
import classes from "./FormsControls.module.css"

const FormControl = ({input, meta, child, ...props }) => { //деструктуризация + rest оператор
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props; //деструктурируем
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props) => { //деструктуризация + rest оператор
    const {input, meta, child, ...restProps} = props; // нахуй я это пишу
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};