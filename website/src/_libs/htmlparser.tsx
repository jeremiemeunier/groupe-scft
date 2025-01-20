import {
  ArticleBlockCardInterface,
  ArticleBlockElementInterface,
} from "@/_types/Database.type";
import { ReactNode } from "react";

const HTMLPrinter: ({
  type,
  className,
  content,
  author,
}: {
  type: string;
  className?: string[];
  content: string;
  author?: string;
}) => ReactNode = ({ type, className, content, author }) => {
  if (type === "h3") {
    return (
      <h3 className={`teaui text ${className?.join(" ")}`}>
        {content as string}
      </h3>
    );
  } else if (type === "cit") {
    return (
      <blockquote>
        <p>{content as string}</p>
        {author && <p className="author">{author}</p>}
      </blockquote>
    );
  } else {
    return (
      <p className={`teaui text ${className?.join(" ")}`}>
        {content as string}
      </p>
    );
  }
};

export const HTMLParser: ({
  bson,
}: {
  bson: ArticleBlockElementInterface | ArticleBlockElementInterface[];
}) => ReactNode = ({ bson }) => {
  if (Array.isArray(bson)) {
    return bson.map((element) =>
      HTMLPrinter({
        type: element.type,
        className: element.class,
        content: element.content as string,
        author: element.author,
      })
    );
  } else
    return HTMLPrinter({
      type: bson.type,
      className: bson.class,
      content: bson.content as string,
      author: bson.author,
    });
};
