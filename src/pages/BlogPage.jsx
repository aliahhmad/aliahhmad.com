// pages/BlogPage.jsx
import { useParams } from 'react-router-dom';
import NavBar from "../components/layout/NavBar";
import PageFooter from "../components/layout/PageFooter";
import MyFirstBlog from "../components/blog-details/MyFirstBlog"
import usePageTitle from "../hooks/usePageTitle";
import blogs from "../data/allBlogs.json";

const blogPages = {
  1: <MyFirstBlog />,
};

function BlogPage() {
  const { id } = useParams();
  const page = blogPages[id];

  const blogDetails = blogs.find((blog) => blog.id === Number(id));
  usePageTitle(blogDetails.title);

  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      {page}
      <PageFooter />
    </div>
  );
}

export default BlogPage;
