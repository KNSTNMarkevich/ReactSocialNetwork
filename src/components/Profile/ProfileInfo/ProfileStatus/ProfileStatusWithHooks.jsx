import React, {useState} from 'react';

const ProfileStatusWithHoks = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode({
            status: true
        })
    }

    const diactivateEditMode = () => {
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

export default ProfileStatusWithHoks;