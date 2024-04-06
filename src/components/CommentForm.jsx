import React, { useState, useEffect } from "react";

export default function CommentForm() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showFullComment, setShowFullComment] = useState(false);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem("comments"));
    if (storedComments) {
      setComments(storedComments);
    }
  }, []);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    return `${date} ${time}`;
  };

  const handlePostComment = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      const dateTime = getCurrentDateTime();
      const updatedComments = [{ text: newComment, author: "You", dateTime }, ...comments];
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setNewComment("");
    }
  };

  const handleToggleFullComment = () => {
    setShowFullComment(!showFullComment);
  };

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="mt-6 w-3/6 ">
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md mb-2 shadow-md ">
            <p className={`text-gray-800 dark:text-gray-200 ${comment.text.split(" ").length > 50 && !showFullComment ? "text-blue-600 cursor-pointer" : ""}`}>
              <strong>{comment.author}</strong>: <br></br>{comment.text.split(" ").slice(0, 50).join(" ")} {comment.text.split(" ").length > 50 && !showFullComment && <span className="text-blue-600" onClick={handleToggleFullComment}>...<strong> Leggi tutto</strong></span>}
              {comment.text.split(" ").length > 50 && showFullComment && <span>{comment.text.split(" ").slice(50).join(" ")} <span className="text-blue-600" onClick={handleToggleFullComment}><strong>Nascondi</strong></span></span>}
              <br />
              <small className="text-gray-500">{comment.dateTime}</small>
            </p>
          </div>
        ))}
      </div>
    </div>
      <form onSubmit={handlePostComment} className="mt-6 flex justify-center items-center">
        <div className="w-4/6 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows="4"
              value={newComment}
              onChange={handleCommentChange}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Write a comment..."
              required
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Post comment
            </button>
          </div>
          <p className="m-2 text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="" className="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>
        </div>
      </form>

    </>
  );
}
