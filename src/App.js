import "./App.css";
import Table from "./components/Table";
import { getLength, getUsers } from "./api/users";
import { useState } from "react";
import Pagination from "./components/Pagination";
import SelectLimit from "./components/SelectLimit";

function App() {
  const [page, setPage] = useState(1);
  const [pageLimit, setpageLimit] = useState(10);

  let totalPage = Math.ceil(getLength() / pageLimit);

  let pageNo;
  if (page <= totalPage) {
    pageNo = page;
  } else {
    setPage(totalPage);
    pageNo = page;
  }
  const handlePageChange = (value) => {
    if (value === "&laquo;" || value === "... ") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) {
        setPage(page - 1);
      }
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) {
        setPage(page + 1);
      }
    } else if (value === "&raquo;" || value === " ...") {
      setPage(totalPage);
    } else {
      setPage(value);
    }
  };
  return (
    <div className="container">
      <Table users={getUsers(page, pageLimit)} />
      <div className="pagination__container">
        <SelectLimit onLimitChange={setpageLimit} />
        <Pagination
          totalPage={totalPage}
          page={pageNo}
          siblings={1}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
