import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 px-5 rounded-lg">
            <div>
                <h3 className='text-3xl bg-blue-600 border border-blue-950 rounded-lg m-5 p-2'>Total time spend {readingTime}</h3>
            </div>
            <h2 className="font-bold text-2xl">Bookmarked blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark ,idx)=><Bookmark key={idx} bookmark={bookmark} readingTime={readingTime}></Bookmark>)
            }
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
    
}
export default Bookmarks;