import React from "react";
import PostContent from "./PostContent";
import { v4 as uuidv4 } from "uuid";

function PostContentList() {
  let listData = [
    {
      title: "Hello Vanilla JS",
      content: "lorem ipsum dolor sit.",
      img: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
    },
    {
      title: "Hello React",
      content: "Help needed",
      img: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d",
    },
  ];

  let data = listData.map((data) => {
    return (
      <PostContent
        key={uuidv4()}
        title={data.title}
        content={data.content}
        image={data.img}
      />
    );
  });

  return <>{data}</>;
}
export default PostContentList;
