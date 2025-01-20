import { createClient } from "@libs/server";
import Link from "next/link";

const SectionOtherGare = async ({
  params,
}: {
  params: Promise<{ gare: string }>;
}) => {
  const supabase = await createClient();
  const { data: gare } = await supabase
    .from("gare")
    .select()
    .neq("enc_name", (await params).gare);

  return (
    gare &&
    gare.length > 0 && (
      <div className="teaui grid bg-corail">
        <div className="teaui grid format-page sl pt64 ms-pt64 xs-pt64 pb64 ms-pb64 xs-pb64">
          <h2>Nos gares</h2>

          <div className="teaui grid tc-2 rgs-0">
            {gare &&
              gare.length > 0 &&
              gare.map((doc, key: number) => (
                <Link
                  className={`teaui color shade-corail text-link`}
                  href={`/gare-connexions/${doc.enc_name}`}
                >
                  <span className="teaui text fs-24 fw-600">{doc.name}</span>
                  <i className="icon teaui-icon-arrow-right"></i>
                </Link>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default SectionOtherGare;
