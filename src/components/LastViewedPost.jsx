import React from 'react';

export const LastViewedPost = ({ post }) => {
  if (!post) return null;

  return (
    <div className="last-viewed-post">
      <h3>Останній переглянутий пост</h3>
      <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </div>
    </div>
  );
};