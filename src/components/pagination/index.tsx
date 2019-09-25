import React from 'react';
import Link from 'next/link';
import style from './index.module.css';

interface PaginationProps {
  page: number,
  pages: number,
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const { page, pages } = props;
  const hasNext = page < pages;
  const hasPrev = page > 1;
  return (
    <div className={style.pagination}>
      {
        (hasPrev) ? (
          <Link href={{ pathname: '/', query: { page: page - 1 } }}>
            <a className={style.link}>
              Previos page
            </a>
          </Link>
        ) : (
          <button className={style.button} type="button" disabled>
            Previos page
          </button>
        )
      }
      <span className={style.status}>
        {`${page}/${pages}`}
      </span>
      {
        (hasNext) ? (
          <Link href={{ pathname: '/', query: { page: page + 1 } }}>
            <a className={style.link}>
              Next page
            </a>
          </Link>
        ) : (
          <button className={style.button} type="button" disabled>
            Next page
          </button>
        )
      }
    </div>
  );
};

export default Pagination;
