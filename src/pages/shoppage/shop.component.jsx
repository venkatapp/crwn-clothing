import React, {Component} from 'react';

import SHOP_DATA from './shop.data';
import './shop.page.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.components';

class ShopPage extends Component{
constructor(props){
    super(props);
    this.state={
        collections:SHOP_DATA
    }
}
render(){
    const {collections}=this.state;
    return(
        <div className="shop-page">
            <h1>Shop page</h1>
        {
            collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
        </div>
    )
}
}


export default ShopPage;