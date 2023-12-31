import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const{id} = useParams();
    const{data: blog, error,isPending}=useFetch(`http://localhost:8000/blogs/${id}`);
    return ( 
        <div className="blog-details">
                 
            { error && <div> { error }</div>}
            { isPending && <div>Loading..</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Napisane przez {blog.autor}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        
        </div>
       );
}
 
export default BlogDetails;
