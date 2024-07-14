import React from 'react';

interface PostProps {
  username: string;
  userImage: string;
  postImage: string;
  caption: string;
}

const Post: React.FC<PostProps> = ({ username, userImage, postImage, caption }) => {
  return (
    <div className="bg-white my-4 border rounded-md overflow-hidden shadow-sm">
      <div className="flex items-center p-4">
        <img src={userImage} alt={username} className="w-10 h-10 rounded-full mr-4" />
        <span className="font-semibold">{username}</span>
      </div>
      <img src={postImage} alt={caption} className="w-full" />
      <div className="p-4">
        <p>
          <span className="font-semibold mr-2">{username}</span>
          {caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
