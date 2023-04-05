import React, { FC, PropsWithChildren, useEffect } from "react";
import styles  from './layout.module.css';
import { useDispatch } from "../../services/hooks";
import { useLocation } from "react-router";
import { getToken } from "../../services/thunks/auth";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    if(location.search.split('code=')[1]){
      dispatch(getToken(location.search.split('code=')[1]))
    }
  }, [dispatch, location])

  return (
    <div className={styles.layout}>
      { children }
    </div>
  )
}