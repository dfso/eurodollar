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
    </div>
  );
}

export async function getServerSideProps() {
  const usd = await fetch("http://api.currencylayer.com/live?access_key=46b3373b7a6c2886d023867cb3aa3db8");
  const json_usd = await usd.json();

  return {
    props: {
    usd_brl: json_usd.quotes["USDBRL"],
    },
  }
};

export default Home;
