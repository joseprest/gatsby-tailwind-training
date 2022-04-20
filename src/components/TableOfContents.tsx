import classNames from "classnames";
import React, { useEffect, useState } from "react";
import getIds from "../helpers/getIds";
import { useActiveId } from "../hooks/useActiveId";
import { useScrollDirection } from "react-use-scroll-direction";

const getId = (url: string) => url.replace(/^.*#/, "");

const Item = ({ item, visitedIds }) => {
  const id = getId(item.url);

  const tocScroll = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.getElementById(id)?.offsetTop - 200 ?? 0,
      behavior: "smooth",
    });

  };

  return (
    <div className="p-5 ">
      <a
        href={item.url}
        onClick={tocScroll}
        className="flex items-center justify-between"
      >
        <span className="text-grey-lite">{item.title}</span>
        <svg
          width="18"
          height="11"
          viewBox="0 0 18 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classNames("fill-current", {
            "text-grey-lite": !visitedIds.includes(id),
            "text-green-500": visitedIds.includes(id),
          })}
        >
          <path d="M0.306641 5.96918L4.49914 10.1617L5.55664 9.09668L1.37164 4.91168L0.306641 5.96918ZM16.6791 0.0966797L8.74414 8.03918L5.62414 4.91168L4.55164 5.96918L8.74414 10.1617L17.7441 1.16168L16.6791 0.0966797ZM13.4991 1.16168L12.4416 0.0966797L7.67914 4.85918L8.74414 5.91668L13.4991 1.16168Z" />
        </svg>
      </a>
    </div>
  );
};

const TableOfContents = ({ toc }) => {
  const { scrollDirection } = useScrollDirection();
  const currentId = useActiveId(getIds(toc));
  const [visitedIds, setVisitedIds] = useState([]);

  useEffect(() => {
    if (scrollDirection === "DOWN") {
      setVisitedIds([...visitedIds, currentId]);
    }

    if (scrollDirection === "UP") {
      setVisitedIds(visitedIds.filter((id) => id !== currentId));
    }
  }, [scrollDirection]);

  return (
    <div className="bg-grey-500">
      <div className="flex items-center p-5 space-x-2 border-b border-grey-lite">
        <svg
          width={5}
          height={10}
          viewBox="0 0 5 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.166016 9.58366L4.74935 5.00033L0.166016 0.416992V9.58366Z"
            fill="black"
          />
        </svg>

        <p className="text-black">Contents</p>
      </div>

      <div className="divide-y">
        {toc?.map((item, index) => (
          <Item item={item} key={index} visitedIds={visitedIds} />
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
