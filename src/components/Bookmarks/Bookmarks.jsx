import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-gray-300 px-5">
            <h2 className="font-bold text-2xl">Bookmarked blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    
}
export default Bookmarks;