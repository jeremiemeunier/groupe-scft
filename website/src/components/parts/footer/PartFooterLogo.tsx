import Link from "next/link";

const PartFooterLogo = () => {
  return (
    <div className="teaui footer-column">
      <div className="teaui grid ha-start tac">
        <Link href={"/"}>
          <img src="/imgs/ttt-groupe-logo.webp" height={80} />
        </Link>
      </div>
    </div>
  );
};

export default PartFooterLogo;
