import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const{id} = useParams();
    const{data: blog, error,isPending}=useFetch(`http://localhost:8000/projekty/` + id);
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading..</div>}
            { error && <div> { error }</div>}
            { blog && (
                <article>
                    <h1>Jest to projekt nr. {id}</h1>
                    <h2>{blog.title}</h2>
                    <p>Napisane przez "tu coś nie działa a mam tak samo jak na yt" {blog.autor}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        
        </div>
       );
}
 
export default BlogDetails;
