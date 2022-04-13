import React from "react";

function PostContent({ title, content, image }) {
  return (
    <div className="col-6">
      <img src={image} alt="Ieškok foto" className="w-50" />
      <h1 className="PostContent-title text-center">{title}</h1>
      <p className="PostContent-post py-3">{content}</p>
    </div>
  );
}

export default PostContent;
