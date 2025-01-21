import {
  ArticleBlockElementInterface,
  ArticleBlockInterface,
} from "@/_types/Database.type";
import { HTMLParser } from "@libs/htmlparser";
import { createClient } from "@libs/server";
import SectionOtherArticle from "@section/SectionOtherArticle";
import Image from "next/image";
import { redirect } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ article: string }>;
}) => {
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("article")
    .select()
    .eq("enc_title", (await params).article);

  return {
    title: `${article && article[0].title} — SCFT`,
    description: article && article[0].resume,
  };
};

const PageChantierArticle = async ({
  params,
}: {
  params: Promise<{ article: string }>;
}) => {
  const supabase = await createClient();
  const { data: article } = await supabase
    .from("article")
    .select()
    .eq("enc_title", (await params).article);

  return article && article.length === 1 ? (
    <>
      <div
        className={`teaui grid rgs-0 background ${
          article[0]?.color ? `bg-${article[0]?.color}` : "bg-nude"
        } pt80`}
      >
        {article[0].media && (
          <div
            className="teaui grid sv-60"
            style={{
              backgroundImage: `url(${article[0].media})`,
              backgroundPosition: "center center",
            }}
          ></div>
        )}
        <div className="teaui grid tc-2 format-page sl pt80 ms-pt80 xs-pt80 pb80 ms-pb80 xs-pb80">
          <h2 className="teaui pa0 ms-pa0 xs-pa0 ma0 ms-ma0 xs-ma0 text fs-72">
            {article[0].title}
          </h2>
          <div className="teaui grid pl40 text fs-24">
            <p>{article[0].resume}</p>
          </div>
        </div>
      </div>

      {article[0].content?.blocks.map(
        (block: ArticleBlockInterface, key: number) => (
          <div
            key={key}
            className={`teaui grid format-page ${block?.class?.join(" ")}`}
          >
            {/* mapping all elements inside a block */}
            {block.elements.map(
              (element: ArticleBlockElementInterface, key: number) => {
                if (element.type === "cards") {
                  // mapping specific card section
                  return (
                    <div key={key} className="teaui grid va-start tc-3 cgs-32">
                      {(element.content as []).map(
                        (
                          card: {
                            media: string;
                            content: {
                              type: string;
                              class?: string[];
                              content: string;
                            }[];
                          },
                          key: number
                        ) => (
                          <div
                            className={`teaui card ${
                              key === 0 ? "mt40" : key === 1 ? "mt120" : ""
                            }`}
                            key={key}
                          >
                            {key !== 1 && (
                              <div className="teaui text-container ratio-square">
                                <Image src={card.media} fill alt="" />
                              </div>
                            )}
                            <div className="teaui text-container ratio-square pa24">
                              {HTMLParser({ bson: card.content })}
                            </div>
                            {key === 1 && (
                              <div className="teaui text-container ratio-square">
                                <Image src={card.media} fill alt="" />
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  );
                } else {
                  return HTMLParser({ bson: element });
                }
              }
            )}
          </div>
        )
      )}

      <SectionOtherArticle
        society={{
          label: "Société des Grands Projets",
          enc: "societe-grands-projets",
        }}
        color={article[0]?.color}
        params={params}
      />
    </>
  ) : (
    redirect("/")
  );
};

export default PageChantierArticle;
