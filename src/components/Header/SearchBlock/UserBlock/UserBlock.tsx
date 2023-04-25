import React, { FC, useEffect } from "react";
import { Icon, EIcons } from "../../../Icon/Icon";
import { Text, EColors } from "../../../Text/Text";
import styles from './userBlock.module.css';
import { useDispatch, useSelector } from "../../../../services/hooks";
import { getUser } from "../../../../services/thunks/auth";

export const UserBlock: FC = () => {
  const dispatch = useDispatch();
  const token = useSelector(store => store.auth.token.data);
  const user = useSelector(store => store.auth.user.data);
  const authorized = useSelector(store => store.auth.user.authorized);
  const userLoading = useSelector(store => store.auth.user.request);

  useEffect(() => {
    if(token) dispatch(getUser(token))
  }, [ dispatch, token ]);

  return (
    <>    
    { authorized ? (
      <div className={styles.userBox}>
        <div className={styles.userBox__avatarWrapper}>
          { user 
          ? <img src={user.avatarSrc.split('?')[0]} className={styles.userBox__avatar} alt="Avatar"/>
          : <Icon name={EIcons.anon} width={50} height={50} /> }
        </div>

        <div className={styles.userBox__userName}>
          { userLoading ? (
            <Text size={20} color={EColors.grey99}>Loading...</Text>
            ) : (
            <Text size={20} color={user ? EColors.orange : EColors.grey99}>{(user && user.name) || 'Anonimus'}</Text>
            ) 
          }
        </div>
      </div>
    ) : (
      <a
        href={`https://www.reddit.com/api/v1/authorize?client_id=zOePDJJVFTX_fUa0eeVhng&response_type=code&state=random_string&redirect_uri=https://yanseses.github.io/reddit/auth&duration=permanent&scope=identity save report edit history read vote`}
        className={styles.userBox}
        >
        <div className={styles.userBox__avatarWrapper}>
          { user 
          ? <img src={user.avatarSrc.split('?')[0]} className={styles.userBox__avatar} alt="Avatar"/>
          : <Icon name={EIcons.anon} width={50} height={50} /> }
        </div>

        <div className={styles.userBox__userName}>
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
    </>
  )
}