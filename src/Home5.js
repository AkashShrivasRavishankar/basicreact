import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    //let name = 'mario'
    const [blogs, setBlogs] = useState([
      { title: 'Interests over the years', body: 'lorem ipsum...', period: '2012-2026', id: 1 },
      { title: 'How I got hooked to computers', body: 'lorem ipsum...', period: '2020-2026', id: 2 },
      { title: 'Era of Nostalgia', body: 'lorem ipsum...', period: '2016-2018', id: 3 }

    ])
    return (
        <div className="home">
          <Bloglist blogs={blogs} title="All Blogs :)"/>

        </div>


    );
}
 
export default Home;