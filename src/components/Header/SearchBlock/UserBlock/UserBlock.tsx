import React, { FC, useEffect } from "react";
import { Icon, EIcons } from "../../../Icon/Icon";
import { Text, EColors } from "../../../Text/Text";
import styles from './userBlock.module.css';
import { useDispatch, useSelector } from "../../../../services/hooks";
import { getUser } from "../../../../services/thunks/auth";

export const UserBlock: FC = () => {
  const dispatch = useDispatch();
  const token = useSelector(store => store.auth.token);
  const { user, userLoading } = useSelector(store => ({
    user: store.auth.user,
    userLoading: store.auth.userRequest
  }));

  useEffect(() => {
    if(token) dispatch(getUser(token))
  }, [ dispatch, token ]);

  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=6X4iUHB6tHjvoPRqS_lmew&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
      className={styles.userBox}
      >
      <div className={styles.avatarBox}>
        { user 
        ? <img src={user.avatarSrc.split('?')[0]} className={styles.avatarImage} alt="Avatar"/>
        : <Icon name={EIcons.anon} width={50} height={50} /> }
      </div>

      <div className={styles.userName}>
        { userLoading ? (
          <Text size={20} color={EColors.grey99}>Loading...</Text>
          ) : (
          <Text size={20} color={user ? EColors.orange : EColors.grey99}>{(user && user.name) || 'Anonimus'}</Text>
          ) 
        }
      </div>
    </a>
  )
}