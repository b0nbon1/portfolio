import React from 'react';

const Card = ({ post, excerpt, read }) => {

  const tagsToString = (tags) => {
    const str = tags.slice(0,3).join(', ');
    if(tags.length > 3) {
      const extraTags = tags.length - 3;
      return str.concat(`, ${extraTags}+`);
    } else {
      return str
    }

  };
  
  return (
    <div className="blog-card">
        <div className={`blog-card__image bg-${post.color}-300`}>
            <img src={post.img.publicURL} alt={post.title}  />
        </div>
        <div className="blog-card__body">
          <div className='relative flex-grow'>
            <h1 className="text-center font-bold px-5 py-3">
              { post.title }
            </h1>
            <p className="p-3 text-center font-light text-xs">
              { excerpt }
            </p>
            <div className="p-3 text-center font-hairline text-xs text-gray-600 uppercase">
              { read } min read
            </div>
          </div>
          <footer className="footer">
            <div className="p-3 text-center font-hairline text-xs text-gray-600">
               { tagsToString(post.tags) }
            </div>
          </footer>
        </div>
      </div>
  )
}

export default Card;
