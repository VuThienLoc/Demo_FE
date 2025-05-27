import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Questions about your body, answered by experts
      </h2>
      <div className="flex items-center justify-center gap-2 max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/blog" className="group">
            <img
              className="min-w-xs h-72 rounded-lg mb-4 object-cover transition-transform duration-300 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D"
              alt="blog"
            />
            <h3 className="text-2xl font-bold text-gray-600 mb-6 group-hover:underline group-hover:text-black transition">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              obcaecati unde impedit enim dolores ab possimus consequuntur
              nostrum fugiat hic. Magni incidunt eum dolorem quos nisi molestiae
              consequuntur dolore vitae?
            </h3>
          </Link>

          <Link to="/blog" className="group">
            <img
              className="min-w-xs h-72 rounded-lg mb-4 object-cover transition-transform duration-300 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1536589961747-e239b2abbec2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="blog"
            />
            <h3 className="text-2xl font-bold text-gray-600 mb-6 group-hover:underline group-hover:text-black transition">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              obcaecati unde impedit enim dolores ab possimus consequuntur
              nostrum fugiat hic. Magni incidunt eum dolorem quos nisi molestiae
              consequuntur dolore vitae?
            </h3>
          </Link>

          <Link to="/blog" className="group">
            <img
              className="min-w-xs h-72 rounded-lg mb-4 object-cover transition-transform duration-300 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="blog"
            />
            <h3 className="text-2xl font-bold text-gray-600 mb-6 group-hover:underline group-hover:text-black transition">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              obcaecati unde impedit enim dolores ab possimus consequuntur
              nostrum fugiat hic. Magni incidunt eum dolorem quos nisi molestiae
              consequuntur dolore vitae?
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
