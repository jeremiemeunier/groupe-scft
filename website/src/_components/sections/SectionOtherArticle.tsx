import { createClient } from "@libs/server";
import Link from "next/link";

const SectionOtherArticle = async ({
  society,
  limit,
  color,
  params,
}: {
  society: { label: string; enc: string };
  limit?: number;
  color?: string;
  params: Promise<{ article: string }>;
}) => {
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("article")
    .select()
    .eq("author", society.label)
    .neq("enc_title", (await params).article)
    .limit(limit ? limit : 5);

  return (
    article &&
    article.length > 0 && (
      <div className={`teaui grid ${color ? `bg-${color}` : "bg-nude"}`}>
        <div className="teaui grid format-page sl pt64 ms-pt64 xs-pt64 pb64 ms-pb64 xs-pb64">
          <h2>Nos réalisations</h2>

          <div className="teaui grid rgs-0">
            {article &&
              article.length > 0 &&
              article.map((doc, key: number) => (
                <Link
                  className={`teaui color ${
                    color ? `shade-${color}` : "shade-nude"
                  } text-link`}
                  href={`/societes/${society.enc}/chantier/${doc.enc_title}`}
                >
                  <span className="teaui text fs-24 fw-600">{doc.title}</span>
                  <i className="icon teaui-icon-arrow-right"></i>
                </Link>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default SectionOtherArticle;
