import React from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading)
    return (
      <div className="text-4xl text-red-500 text-center content-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-4xl text-red-500 text-center content-center">
        Error: {error}
      </div>
    );

  return (
    <div className="mx-w-[20rem] h-auto m-10 bg-gray-600">
      <h1 className="text-white font-bold text-4xl text-center">Photos</h1>
      <div className="bg-gray-400 flex flex-wrap place-content-center">
        {data &&
          data.map((post) => (
            <div
              key={post.id}
              className="w-[15rem] h-auto m-5 p-2 bg-gradient-to-r from-pink-500 via-green-400 to-yellow-500 shadow-lg shadow-5000/50 inset-shadow-indigo-500"
            >
              <div className="bg-gray-500 h-[16rem]">
              <div className="w-[14rem] h-[10rem] bg-pink-300 text-center content-center">
                400*350
              </div>
              <h2 className="text-l font-bold text-center content-center h-[3rem]">{post.title}</h2>
              <h2 className="text-xl text-center content-center h-[2rem]">Price: {post.price}</h2>
              </div>
              
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
