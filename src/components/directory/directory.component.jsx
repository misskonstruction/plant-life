import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'succulents',
          imageUrl: 'https://1.bp.blogspot.com/-ppoF_BiGzE8/YCVyzge2xCI/AAAAAAAAJQA/Js-nrsHl3C8ot6VT6YX8ytQTUymazwd3wCLcBGAsYHQ/s320/succulents.jpg',
          id: 1,
          linkUrl: 'succulents'
        },
        {
          title: 'herbs',
          imageUrl: 'https://1.bp.blogspot.com/-Q45yu7kjIlc/YCV0P41C8xI/AAAAAAAAJQY/BGlf2uMi7L0K7neAqQZ_MLh928ClZkhSgCLcBGAsYHQ/s320/herbs.jpg',
          id: 2,
          linkUrl: 'herbs'
        },
        {
          title: 'vegetables',
          imageUrl: 'https://1.bp.blogspot.com/-fGLTd8dxIcc/YCVyzgZ7bmI/AAAAAAAAJP8/b7agcMDyJpwXkNpLHYd64HVG0iWu8QW2QCLcBGAsYHQ/s320/veggies.jpg',
          id: 3,
          linkUrl: 'veggies'
        },
        {
          title: 'indoor',
          imageUrl: 'https://1.bp.blogspot.com/-AE7TBTdVpeY/YCVyzPXaEJI/AAAAAAAAJPw/nxv047GOv74ZZlbTrtIGs1izQSm7ubd2QCLcBGAsYHQ/s320/indoor.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'indoor'
        },
        {
          title: 'outdoor',
          imageUrl: 'https://1.bp.blogspot.com/-s17JbbAmXPc/YCVyzI7D6rI/AAAAAAAAJP4/uKvxf77XKBoiacIBqnmO8MLQk75QSORHACLcBGAsYHQ/s2048/outdoor.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'outdoor'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
         {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

