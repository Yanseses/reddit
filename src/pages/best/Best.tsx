import React, { useEffect, useRef } from "react";
import { CardList } from "../../components/CardList/CardList";
import { useDispatch, useSelector } from "../../services/hooks";
import { getPosts } from "../../services/thunks/main";
import { Route, Routes } from "react-router";
import { Post } from "../../components/Post/Post";
import { UploadBtn } from "../../components/Buttons";
import { Loader } from "../../components/Loader/Loader";
import styles from './best.module.css';
import { IPostData } from "../../utils/types";
import { Card } from "../../components/CardList/Card/Card";

export function Best(){
  const dispatch = useDispatch();
  const bottomOfList = useRef<HTMLDivElement>(null);
  const token = useSelector(store => store.auth.token.data);
  const postRequest = useSelector(store => store.main.posts.request);
  const postData = useSelector(store => store.main.posts.data.list);
  const postCounter = useSelector(store => store.main.posts.data.counter);

  const handleUpload = () => {
    dispatch(getPosts(token))
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if(postCounter === 0 || postCounter % 2 === 1){
          dispatch(getPosts(token))
        }
      }
    }, {
      rootMargin: '10px'
    });

    if(bottomOfList.current) observer.observe(bottomOfList.current);

    return () => {
      if(bottomOfList.current) observer.unobserve(bottomOfList.current);
    }
  }, [ dispatch, postCounter ]);

  return (
    <CardList>
      { postData && postData.map((post: IPostData) => 
        <Card 
          key={post.id} 
          {...post} />
        )
      }

      <div ref={bottomOfList}/>

      { postRequest && (
        <Loader 
          text="Loading..." 
          position="center" 
          height="inherit"/>
        )
      }

      { !postRequest && postData.length < 1 && (
        <Loader 
          text="Post list is empty" 
          position="center" 
          height="inherit"/>
        ) 
      }

      { postCounter % 2 !== 1 && !postRequest && postData.length !== 0 && (
        <div className={styles.cardList__more}>
          <UploadBtn onClick={handleUpload}/>
        </div>
        )
      }

      <Routes>
        <Route path="/:id" element={ <Post /> }/>
      </Routes>
    </CardList>
    )
}