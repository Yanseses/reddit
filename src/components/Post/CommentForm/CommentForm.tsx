import React, { FC } from "react";
import styles  from './commentForm.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ICommentForm {
  author?: string,
}

interface ICommentHandler {
  comment: string
}

export const CommentForm: FC<ICommentForm> = ({ author = 'Hello' }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      comment: `${author}, `
    }
  });
  const onSubmit: SubmitHandler<ICommentHandler> = data => {
    console.log(data)
  }

  return (
    <form className={styles.commentForm} onSubmit={handleSubmit(onSubmit)}>
      <textarea 
        rows={3} 
        className={styles.input}
        {...register('comment')}>
      </textarea>
      <button type="submit" className={styles.button}>
        Commented
      </button>
    </form>
  )
}