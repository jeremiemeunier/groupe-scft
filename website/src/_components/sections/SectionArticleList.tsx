import { createClient } from "@libs/server";
import Link from "next/link";

const SectionArticleList = async ({
  society,
  limit,
}: {
  society: { label: string; enc: string };
  limit?: number;
}) => {
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("article")
    .select()
    .eq("author", society.label)
    .limit(limit ? limit : 3);

  return (
    <div className="teaui grid format-page sl pt64 ms-pt64 xs-pt64 pb64 ms-pb64 xs-pb64">
      <h2>Nos réalisations</h2>
      <div className="teaui grid cgs-24 tc-3">
        {article &&
          article.length > 0 &&
          article.map((doc, key: number) => (
            <Link
              key={key}
              href={`/societes/${society.enc}/chantier/${doc.enc_title}`}
              className="teaui card no-shadow border background pa32"
            >
              <h4 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 ff-title xs-ma0 text fs-40">
                {doc.title}
              </h4>
              <p className="teaui mt40">{doc.resume}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SectionArticleList;
