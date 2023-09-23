import React from 'react';
import styles from '/styles/Listings.module.css';
import Link from 'next/link';

// this is the fixed footer that appears in the /view page

const FixedBottom = ({ data }) => {
  return (
    <footer className={`${styles.FixedBottom} navbar navbar-dark fixed-bottom`}>
      <div className="container">
        <strong style={{color: "white"}}>{data ? data.identification.research_facillity : "loading"}</strong>
        <Link className={`${styles.btn} btn`} href={data ? { pathname: '/order', query: { id: data.id, lab: data.identification.research_facillity } } : ""}><span className={styles.text}>Place an Order</span> <i className="bi bi-arrow-right" style={{marginLeft: 3, marginRight: 3}}></i></Link>
      </div>
    </footer>
  );
};

export default FixedBottom;