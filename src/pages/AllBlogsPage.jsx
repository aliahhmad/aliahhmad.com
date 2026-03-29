import NavBar from "../components/layout/NavBar"
import AllBlogs from "../components/blog/AllBlogs"
import PageFooter from "../components/layout/PageFooter"
import usePageMetadata from "../hooks/usePageMetadata";

// Blog index page for browsing every published post.
function AllBlogsPage() {
  usePageMetadata({ title: "Blog", path: "/blog" });
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <AllBlogs />
      <PageFooter />
    </div>
  );
}

export default AllBlogsPage;
