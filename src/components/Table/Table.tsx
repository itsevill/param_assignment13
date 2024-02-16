import React from 'react';


interface TableProps {
  children: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ children }) => {
  return <table className="table">{children}</table>;
};

export default Table;
