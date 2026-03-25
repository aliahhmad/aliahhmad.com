// src/components/blog/AllBlogs.js
import { useNavigate } from "react-router-dom";
import blogs from "../../data/allBlogs.json";

function AllBlogs() {
  const navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }

  return (
    <section className="bg-surface-deep flex flex-col gap-6 py-2 px-10">
      <div className="text-white text-2xl">All Blogs</div>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="glass-flat flex-shrink-0 rounded-xl text-white cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
          onClick={() => handleClick("/blog/" + String(blog.id))}
        >
          <div className="flex flex-col gap-2 p-4">
            <h3 className="text-lg font-bold">{blog.title}</h3>
            <span className="text-white/40 text-xs uppercase font-semibold">
              {blog.date}
            </span>
            <p className="opacity-70">{blog.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AllBlogs;
