// pages/AllBlogsPage.jsx
import NavBar from "../components/layout/NavBar"
import AllBlogs from "../components/blog/AllBlogs"
import PageFooter from "../components/layout/PageFooter"
import usePageTitle from "../hooks/usePageTitle";

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
