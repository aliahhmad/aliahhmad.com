import { useParams } from 'react-router-dom';
import NavBar from "../components/layout/NavBar";
import PageFooter from "../components/layout/PageFooter";
import MyFirstBlog from "../components/blog-details/MyFirstBlog"
import usePageTitle from "../hooks/usePageTitle";
import blogs from "../data/allBlogs.json";

const blogPages = {
  1: <MyFirstBlog />,
};

// Resolves a blog detail view from the route param and shared blog metadata.
function BlogPage() {
  const { id } = useParams();
  const page = blogPages[id];

  const blogDetails = blogs.find((blog) => blog.id === Number(id));
  // The title is sourced from the shared blog list so previews and detail pages match.
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
