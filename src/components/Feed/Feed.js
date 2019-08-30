// @flow strict
import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

function getPhotoDiv(edge) {
  return <div className={styles['feed__item-photo']}>
            <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>
              <img src={edge.node.frontmatter.socialImage} />          
            </Link>
          </div>
}

function getInfoDiv(edge){
  return <div className={styles['feed__item-info']}>
          <div className={styles['feed__item-metadata']}>
            <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
              {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
            </time>
            <span className={styles['feed__item-meta-divider']} />
            <span className={styles['feed__item-meta-category']}>
              <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
            </span>
          </div>
          <h2 className={styles['feed__item-title']}>
            <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
          </h2>
          <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
          <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>READ MORE →</Link>
        </div>
}

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge, index) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          {index % 2 == 0
            ? [getPhotoDiv(edge), getInfoDiv(edge)]
            : [getInfoDiv(edge), getPhotoDiv(edge)]
          }
        </div>
      </div>
    ))}
  </div>
);

export default Feed;
