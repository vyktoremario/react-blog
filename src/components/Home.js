import useFetch from "../useFetch";
import BlogList from "./Blog";


const Home = () => {
 
    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
  return (
    <div className="home">
        {error && <h1> {error} </h1>}
        {isLoading && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title='All Blog Post' />}
    </div>
  );
};

export default Home;
