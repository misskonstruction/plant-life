import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'wooden plugs',
          imageUrl: 'https://i.etsystatic.com/10302514/r/il/190e26/2546950846/il_1140xN.2546950846_dbne.jpg',
          id: 1,
          linkUrl: 'wooden-plugs'
        },
        {
          title: 'stainless steel plugs',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0337/8189/products/SS-008-SS_087e3002-8df0-4478-ae1b-a2c19a912d58_360x.jpg?v=1612558616',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'acrylic plugs',
          imageUrl: 'https://i.pinimg.com/originals/be/67/d0/be67d04c3aa88549cd32bc3d97e07b0b.jpg',
          id: 3,
          linkUrl: ''
        },
        {
          title: 'uniquely styled',
          imageUrl: 'https://i.pinimg.com/originals/0e/e8/0f/0ee80f65128598bdbbd325eadd59210d.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'stretching kits',
          imageUrl: 'https://cdn.shopify.com/s/files/1/0068/6312/products/starter_2000x.jpg?v=1549599896',
          size: 'large',
          id: 5,
          linkUrl: ''
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

