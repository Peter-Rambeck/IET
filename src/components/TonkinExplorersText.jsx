import React from "react";
import Table from "react-bootstrap/Table";

export function TagLine() {
  return <>Tonkin Explorer</>;
}

export function Text() {
  return (
    <div>
      Udforsk Tonkin bugten til lands og til vands.
      <br />
      NordVietnam holder på en masse godt gemte rejseoplevelser som udfolder sig
      bedst når man kommer rigtig ud i omgivelserne.
      <br />
      Tonkin bugten byder på en broget historie, fantastisk naturskøhend samt
      UNESCO Verdensarven; Halong Bay, på samme tid
      <br />
      <br />
      Vi starter i hovedstaden Hanoi, før vi sætter os på mountainbikes og
      sætter kursen ud på en 2 dages ekspedition gennem rismarker, lokalsamfund
      og rå skøn natur.
      <br />
      På cykel gennem rismarker i Ninh Binh provisen til en flydende landsby som
      har en sjov unik tradition at ro deres både med fødderne.
      <br />
      Efter 2 fantastiske dage på cykel fuldendens turen med et overnatcruise i
      Halong Bay hvor alle sanseindtryk samles til en komplet NordVietnam
      oplevelse.
      <br /> <br />
      <span class="highLight1"> HANOI </span>
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
      <span class="highLight1">NINH BINH PROVINSEN</span>
      <br />
      VAN LONG NATURRESERVAT
      <br />
      To dage på mountainbike gennem et naturreservat, landsbyer og fantastisk
      landskab med overnatning i Ninh Binh.
      <br />
      <br />
      <span class="highLight1">HOA LU AND TAM COC</span>
      <br />
      Et skridt tilbage i vietnamesisk tid i Hoa Lu, – den gamle hovedstad i det
      10. århundrede.
      <br />
      Tam Coc er også kendt som Halong bugten på land.
      <br />
      <br />
      <span class="highLight1">TONKIN</span>
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
}

export function TableOverView() {
  return (
    <>
      <Table responsive="md">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Land</th>
            <th>Nætter</th>
            <th>Cykledage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hanoi</td>
            <td>Vietnam</td>
            <td>2</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Ninh Binh</td>
            <td>Vietnam</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Halong Bay</td>
            <td>Vietnam</td>
            <td>1</td>
            <td>0</td>
          </tr>

          <tr>
            <td>Hanoi</td>
            <td>Vietnam</td>
            <td>1</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export function TableRouteHighlights() {
  return (
    <>
      <Table responsive="md">
        <thead></thead>
        <tbody>
          <tr>
            <td>Dag&nbsp;1</td>
            <td>København</td>
            <td>Mellemlanding i Bangkok</td>
          </tr>
          <tr>
            <td>Dag&nbsp;2</td>
            <td>Hanoi</td>
            <td>Ankomt og transfer til hotellet.</td>
          </tr>
          <tr>
            <td>Dag&nbsp;3</td>
            <td>Hanoi</td>
            <td>Fuld dags byrundtur </td>
          </tr>
          <tr>
            <td>Dag&nbsp;4</td>
            <td>Ninh Binh</td>
            <td>
              På cykel. <br />
              Van Long reservatet og Kenh Ga, flydende landsby
            </td>
          </tr>
          <tr>
            <td>Dag&nbsp;5</td>
            <td>Ninh Binh</td>
            <td>
              På cykel. <br />
              Den gamle hovedstad Hoa Lu og Tam Coc, Halong Bay på land.
            </td>
          </tr>
          <tr>
            <td>Dag&nbsp;6</td>
            <td>Halong Bay</td>
            <td>Halong Bay overnat cruise</td>
          </tr>
          <tr>
            <td>Dag&nbsp;7</td>
            <td>Halong Bay - Hanoi</td>
            <td>Efter endt cruise, transport retur til Hanoi</td>
          </tr>
          <tr>
            <td>Dag&nbsp;8</td>
            <td>Hanoi</td>
            <td>
              Afrejse, måske forsæt til en lækker strand i enten Vietnam eller
              Thailand. <br />
              Flyskifte i Bangkok med mulighed for et par strandage i Hus Hin.
            </td>
          </tr>
          <tr>
            <td>Dag&nbsp;9</td>
            <td>København</td>
            <td>Ankomst.</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
