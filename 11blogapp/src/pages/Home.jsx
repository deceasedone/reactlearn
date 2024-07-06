import React, { useState, useEffect } from 'react';
import appwriteService from "../appwrite/config";
import Container from '../components/container/Container';
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className='w-full py-8'>
        <Container>
          <div className="flex flex-wrap justify-center items-center ">
            <h1 className="text-xl font-bold text-center bg-gray-100 p-4 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">
              Login to read posts
            </h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
