import React from 'react';
import PropTypes from 'prop-types';
import { gettext } from 'utils';

function formatCV(items, field) {
    return items && items.map((item) => (
        <a key={item.code}
            className='wire-column__preview__tag'
            href={`/?q=${field}:${item.code}`}
        >{item.name}</a>
    ));
}

function PreviewTags({item, isItemDetail}) {
    const genres = item.genre && formatCV(item.genre, 'genre.code');
    const subjects = item.subject && formatCV(item.subject, 'subject.code');

    return (
        <div className='wire-column__preview__tags'>
            {isItemDetail ? <span className="column__preview__tags__box-headline">{gettext('Metadata')}</span> : null}
            {subjects &&
                <div className='column__preview__tags__column'>
                    <span className='wire-column__preview__tags__headline'>
                        {gettext('Category')}</span>
                    {subjects}
                </div>
            }

            {genres &&
                <div className='column__preview__tags__column'>
                    <span className='wire-column__preview__tags__headline'>
                        {gettext('Genre')}</span>
                    {genres}
                </div>
            }
        </div>
    );
}

PreviewTags.propTypes = {
    item: PropTypes.object,
    isItemDetail: PropTypes.bool,
};

export default PreviewTags;
