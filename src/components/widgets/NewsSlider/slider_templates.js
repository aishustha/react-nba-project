import React from 'react';
import Slick from 'react-slick';
import sliderStyle from './slidertemplate.module.scss';
import { Link } from 'react-router-dom';

const SliderTemplates = (props) => {
    let template = null;

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    }

    //...props.settings override the previous dots

    //if props.type=featured then rendering something
    switch(props.type){
        case ('featured'):
            template = props.data.map( (item, i) => {
                return (
                    <div key={i}>
                        <div className={sliderStyle.featured_item}>
                            <div className={sliderStyle.featured_image}
                                style={{
                                    background: `url(../images/articles/${item.image})`
                                }}></div>
                                <Link to={`/articles/${item.id}`}>
                                    <div className={sliderStyle.featured_caption}>
                                        {item.title}
                                    </div>
                                </Link>
                        </div>
                    </div>
                )
            })
            break;

        default:
            template = null;
    }

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    );
};

export default SliderTemplates;