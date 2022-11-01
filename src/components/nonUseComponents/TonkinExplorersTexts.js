export default function PageText() {
  const TagLine = () => {
    return <h1>Piss</h1>;
  };

  const Text = () => {
    return (
      <div>
        Udforsk Tonkin bugten til lands og til vands.
        <br />
        NordVietnam holder på en masse godt gemte rejseoplevelser som udfolder
        sig bedst når man kommer rigtig ud i omgivelserne.
        <br />
        Tonkin bugten byder på en broget historie, fantastisk naturskøhend samt
        UNESCO Verdensarven; Halong Bay, på samme tid
        <br />
        <br />
        Vi starter i hovedstaden Hanoi, før vi sætter os på mountainbikes og
        sætter kursen ud på en 2 dages ekspedition gennem rismarker,
        lokalsamfund og rå skøn natur.
        <br />
        På cykel gennem rismarker i Ninh Binh provisen til en flydende landsby
        som har en sjov unik tradition at ro deres både med fødderne.
        <br />
        Efter 2 fantastiske dage på cykel fuldendens turen med et overnatcruise
        i Halong Bay hvor alle sanseindtryk samles til en komplet NordVietnam
        oplevelse.
        <br /> <br />
        HANOI
        <br />
        I Hanoi udforsker vi de spændende seværdigheder til pulsen i den livlige
        by.
        <br />
        Vi læner os tilbage i en traditionel Cyclo ( rickshaw ) gennem de snævre
        gader i det charmerende gamle kvarter.
        <br />
        Besøg til litteraturens tempel, ‘Hanoi Hilton’, B52 søen, Vanddukker og
        meget mere.
        <br />
        <br />
        NINH BINH PROVINSEN
        <br />
        VAN LONG NATURRESERVAT
        <br />
        To dage på mountainbike gennem et naturreservat, landsbyer og fantastisk
        landskab med overnatning i Ninh Binh.
        <br />
        <br />
        HOA LU AND TAM COC
        <br />
        Et skridt tilbage i vietnamesisk tid i Hoa Lu, – den gamle hovedstad i
        det 10. århundrede.
        <br />
        Tam Coc er også kendt som Halong bugten på land.
        <br />
        <br />
        TONKIN
        <br />
        HALONG BUGTEN
        <br />
        Når vi bevæger os ind i Tonkin, efterlader vi vores mountainbikes for at
        fortsætte til vands i en klassisk Junk,
        <br />
        I Halong bugten’s magiske verden krydser vi i naturens vidunder på et 2
        dages krydstogt.
        <br />
      </div>
    );
  };

  const Text2 = () => {
    return (
      <div>
        Ankomst til Hanoi Du bliver mødt i Noi Bai lufthavn med et stort smil og
        en transport til hotellet.
        <br />
        Resten af dagen er til egen disposition
        <br />
        <br />
        Hotel 1 (4*): Chalcedony Hotel
        <br />
        Hotel 2 (3*): Lenid Hotel Tho Nhuom{" "}
        <a href="http://54thonhuom.lenidhanoihotel.com/" target="_blank">
          Link
        </a>
        <br />
        Transport: 40km
      </div>
    );
  };

  return <TagLine tagLine={(TagLine, Text, Text2)} />;
}
