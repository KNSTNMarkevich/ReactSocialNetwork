import React, {useState} from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import defaultAvatar from "../../../assets/images/images.png"
import ProfileData from "./ProfileData/ProfileData"
import ProfileDataForm, {ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const diactivateEditMode = () => {
        setEditMode(false)
    }

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoUpdate = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={style.profileContainer}>
                <div className={style.avatar}>
                    <img src={props.profile.photos.large || defaultAvatar}/>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoUpdate}/>}
                </div>
                <div className={style.descriptionBlock}>
                    {editMode
                        ?
                        <ProfileDataReduxForm profile={props.profile} diactivateEditMode={diactivateEditMode}/>
                        :
                        <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={activateEditMode}/>}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;