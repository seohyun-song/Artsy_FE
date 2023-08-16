import React from 'react';
import * as C from './CategoryLink.styles';
import { Link } from 'react-router-dom';

const CATEGORY_NAME = (name) => {
    switch (name) {
        case '영화':
            return 'movie';
        case '뮤지컬':
            return 'musical';
        case '연극':
            return 'theater';
        case '전시':
            return 'exhibition';
        case '콘서트':
            return 'concert';
        default:
            return 'any';
    }
};

const getCategoryImageURL = (categoryName) => {
    return `/src/assets/icons/category_${CATEGORY_NAME(categoryName)}.png`;
};

const CategoryLink = ({ name }) => {
    const categoryImageURL = getCategoryImageURL(name);
    return (
        <C.CategoryLink>
            <C.CategoryImage src={categoryImageURL} alt="category image" />
            <C.CategoryTitle>{name}</C.CategoryTitle>
            <C.MakeTicketLink>
                <Link to={'/list'}>
                    기록남기기<span>&#62;</span>
                </Link>
            </C.MakeTicketLink>
        </C.CategoryLink>
    );
};

export default CategoryLink;
