import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handelAddToBookmarks}) => {

    const {title,cover,author,author_img,reading_time,post_date,hashtags}=blog
    return (
        <div className='mt-20'>
            <img className='mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between my-5 mb-4'>
                <div className='flex'>
                    <div className='flex gap-6 items-center'>
                        <img className='w-16 rounded-full h-16' src={author_img} alt="" />
                        <div>
                            <p className='font-bold text-2xl'>{author}</p>
                            <p>{post_date}</p>
                        </div>
                    </div>

                </div>
                <div className='flex items-center gap-4'>
                    <p>{reading_time} Min</p>
                    <button onClick={()=>handelAddToBookmarks(blog)}> <FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='mt-5'>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button><a className='border-b-2 border-blue-700 text-blue-700 mt-5' href="">mark as reed </a></button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handelAddToBookmarks:PropTypes.func
}
export default Blog;