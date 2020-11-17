import Head from "next/head";


function Home({ usd_brl, eur_brl }) {
  return (
    <div style={{ textAlign: "center"}}>
      <Head>
        <title>EURODOLLAR</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      </Head>
      <h1><i class="fas fa-money-check-alt"></i></h1>
      <h2><i class="fas fa-dollar-sign"></i> = {Number(usd_brl).toFixed(2)} BRL</h2>
      <h2><i class="fas fa-euro-sign"></i> = {Number(eur_brl).toFixed(2)} BRL</h2>
    </div>
  );
}

export async function getStaticProps() {
  const usd = await fetch("https://api.exchangeratesapi.io/latest?base=USD");
  const eur = await fetch("https://api.exchangeratesapi.io/latest?base=EUR");
  const json_usd = await usd.json();
  const json_eur = await eur.json();

  return {
    props: {
    usd_brl: json_usd.rates["BRL"],
    eur_brl: json_eur.rates["BRL"],
    },
  }
};

export default Home;
