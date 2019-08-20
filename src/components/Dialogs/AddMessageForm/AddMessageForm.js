import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLenth50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLenth50]}
                       placeholder={"Message"} name={"newMessageBody"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export default  reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm);