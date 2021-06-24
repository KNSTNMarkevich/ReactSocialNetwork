import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        debugger;
            setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const diactivateEditMode = () => {
        debugger;
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={diactivateEditMode}  value={status} onChange={onStatusChange}/>
            </div>
            }
        </>
    );
}

export default ProfileStatusWithHooks;