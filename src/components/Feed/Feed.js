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
  return 
}

function getPostDiv(edge){
  return <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>
          <div className={styles['feed__item-photo']}>
            <img src={edge.node.frontmatter.socialImage} />          
            <div className={styles['feed__item-info']}>
              <h2 className={styles['feed__item-title']}>
                <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
              </h2>
              <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>READ MORE →</Link>
            </div>
          </div>
        </Link>
}

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge, index) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          {getPostDiv(edge)}
        </div>
      </div>
    ))}
  </div>
);

export default Feed;
