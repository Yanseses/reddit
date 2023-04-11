export function getPostCommentList(comment: any){
  const filter = comment.filter((el: any) => el.kind === 't1');
  return filter.map((comment: any) => 
    new Object({
      id: comment.data.id,
      title: comment.data.body,
      author: comment.data.author,
      created: comment.data.created,
      likes: comment.data.likes,
      replies: comment.data.replies
        ? getPostCommentList(comment.data.replies.data.children)
        : []
    })
  )
}