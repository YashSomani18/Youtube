import React from "react";

const commentsData = [
  {
    name: "Yash Somani",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Yash Somani",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Yash Somani",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Yash Somani",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Yash Somani",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Yash Somani",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Yash Somani",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Yash Somani",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Yash Somani",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Yash Somani",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Yash Somani",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Yash Somani",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Yash Somani",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];


const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-4 rounded-lg my-2 hover:bg-gray-200 transition duration-300">
      <img
        className="w-12 h-12 rounded-full shadow mr-4"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="space-y-1">
        <p className="font-bold text-lg">{name}</p>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="mb-4">
      <Comment data={comment} />
      <div className="pl-5 border-l-2 border-gray-300 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold mb-5">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;