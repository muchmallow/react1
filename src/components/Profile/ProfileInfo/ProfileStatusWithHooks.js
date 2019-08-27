import classes from "./ProfileInfo.module.css";
import React, {useState, useEffect} from "react";

const ProfileStatusWithHooks = (props) => {

    //HOOK
    let [editMode, setEditMode] = useState(false); //destructuring assignment
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunkCreator(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode} >{props.status || "----------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/>
            </div>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;