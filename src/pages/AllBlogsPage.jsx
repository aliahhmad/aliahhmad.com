import NavBar from "../components/layout/NavBar"
import AllBlogs from "../components/blog/AllBlogs"
import PageFooter from "../components/layout/PageFooter"
import usePageTitle from "../hooks/usePageTitle";

// Blog index page for browsing every published post.
function AllBlogsPage() {
  usePageTitle("Blog");
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <AllBlogs />
      <PageFooter />
    </div>
  );
}

export default AllBlogsPage;
