import React from 'react';
import Post from '~/components/Post';

const posts = [
  {
    username: 'john_doe',
    userImage: 'https://via.placeholder.com/150',
    postImage: 'https://via.placeholder.com/600',
    caption: 'おいしいラーメン！',
  },
  {
    username: 'jane_doe',
    userImage: 'https://via.placeholder.com/150',
    postImage: 'https://via.placeholder.com/600',
    caption: 'おいしいまぜそば！',
  },
];

const Index: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {posts.map((post, index) => (
        <Post
          key={index}
          username={post.username}
          userImage={post.userImage}
          postImage={post.postImage}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Index;
