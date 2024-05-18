import PropTypes from 'prop-types';
const Blog = ({blog}) => {

    const {title,cover,author,author_img,reading_time,post_date,hashtags}=blog
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between my-5'>
                <div className='flex'>
                    <div className='flex gap-6 justify-center'>
                        <img className='w-16 rounded-full h-16' src={author_img} alt="" />
                        <div>
                            <p className='font-bold text-2xl'>{author}</p>
                            <p>{post_date}</p>
                        </div>
                    </div>

                </div>
                <div>
                    <p>{reading_time} Min</p>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired
}
export default Blog;