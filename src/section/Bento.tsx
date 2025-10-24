import HeroImage from "../components/Cloudinary/flens";
import Image from "next/image";

export default function Example() {
  return (
    <div className="bento-grid">
      <div className="grid-item-overlay-1760057571577">
        <h1 className="text-center text-6xl headingA text-yellow-500 lg:text-9xl">Gastlichkeit ist unsere Philosophie</h1>
      </div>

      <div className="grid-item-overlay-1760057632942">
        <div className="mt-[3vh] flex flex-col items-center space-x-4 justify-center h-[70vh] w-[]">
          <HeroImage />
        </div>
         <h1 className="mt-[5vh] text-6xl text-center headingA text-yellow-500 lg:text-7xl">Flens vom Fass</h1>

        <h2 className="text-4xl text-center text-white lg:text-4xl mt-[3vh]">
          Flensburger Pils - das kühle Blonde von der Waterkant. Astra-Pils - das Kultbier natürlich direkt vom Kiez
        </h2>
      </div>

      <div className="grid-item-overlay-1760057666155">
        <Image src="/logoNeu.png" alt="CocktailIcon" width={500} height={200} className="mt-[5vh]" />
      </div>

      <div className="grid-item-overlay-1760057846834">
        <div className="mt-[3vh] flex flex-col items-center space-x-4 justify-center">

        </div>
      </div>

      <div className="grid-item-overlay-1760057851572">
        <div>
          <Image src="/bottles03.png" alt="WineIcon" width={500} height={200} />
        </div>
        <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
          <h1 className="text-6xl text-center headingA text-yellow-500 lg:text-7xl">regionale Weine</h1>
          <h2 className="text-center text-4xl text-white lg:text-4xl mt-[3vh]">
            Qualitativ hochwertige Weine aus der Region Kaiserstuhl und dem Markgräflerland. Hauslieferant Weingut Heinemann Scherzingen
          </h2>
        </div>
        </div>

      <div className="grid-item-overlay-1760057865523">

      </div>
      <div className="grid-item-overlay-1760057891398"></div>
      <div className="grid-item-overlay-1760057918272">
          <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
          <Image src="/cocktailglas.svg" alt="CocktailIcon" width={175} height={175} />
        </div>
        <h1 className="mt-[5vh] text-6xl text-center headingA text-yellow-500 lg:text-7xl">Cocktails & Longdrinks</h1>
        <h2 className="text-4xl text-center text-white lg:text-4xl mt-[3vh]">
          Erleben Sie unsere kreativen Cocktails und erfrischenden Longdrinks, die mit hochwertigen Spirituosen und frischen Zutaten zubereitet werden.
        </h2>

      </div>
      <div className="grid-item-overlay-1760057942145"></div>
      <div className="grid-item-overlay-1760057948843">
        <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
          <Image src="/fussball.svg" alt="Fussball-Illustration" width={175} height={175} />
        </div>
        <h1 className="mt-[5vh] text-6xl text-center headingA text-yellow-500 lg:text-7xl">Fussball</h1>
        <h1 className="text-center text-6xl headingA text-yellow-500 lg:text-7xl">TV Live</h1>
        <h2 className="text-4xl text-center text-white lg:text-4xl mt-[3vh]">
        jeden Samstag-Spieltag der laufenden Bundesliga-Saison Live TV Event in unserer Sportarena natürlich mit Schwerpunkt unseres SC Freiburgs. Wann immer möglich auch Spiele der Champions League und natürlich der grossen Turniere von EM und WM. Bei Topspielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser Booking-Tool zu empfehlen - Unten folgender Button und Du bist direkt dabei !
        </h2>


      </div>
      <div className="grid-item-overlay-1760057999319">
             <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
          <Image src="/Crowdparty.png" alt="CocktailIcon" width={600} height={200} />
        </div>
        <h1 className="text-6xl mt-[5vh] text-center headingA text-yellow-500 lg:text-7xl">Party? Event?</h1>
        <h2 className="text-4xl text-center text-white lg:text-4xl mt-[3vh]">
        Der Rettungsanker ist die ideale Location für Ihren privaten oder Business Event. Im Rahmen einer &ldquo;gesckossenen Gesellschaft&rdquo; stehen Ihnen die Räumlichkeiten des Rettungsankers zur Verfügung. Auf Wunsch Catering durch unseren Kooperationspartner möglich ! Sprechen Sie uns an oder kontaktieren Sie uns per e.mail.
        </h2>
      </div>
      <div className="grid-item-overlay-1760058011364">

      </div>
      <div className="grid-item-overlay-1760058017913">
             <div className="mt-[5vh] flex flex-col items-center space-x-4 justify-center">
          <Image src="/Albers-white.png" alt="CocktailIcon" width={275} height={275} />
        </div>
        <h1 className="mt-[5vh] text-6xl text-center headingA text-yellow-500 lg:text-7xl">Hans Albers</h1>
        <h2 className="text-4xl text-center text-white lg:text-4xl mt-[3vh]">
          Hans Phillip August Albers (* 22.September 1891 in Hamburg , 24. Juli 1960 in Berg, Bayern) war ein deutscher Schauspieler und Sänger, der als &quot;blonder Hans&quot; Volkssidol wurde. Zu den bekanntesten Spielfilmen in denen er mitwirkte gehören &quot;der Mann, der Sherlock Holmes war&quot; (1937), &quot;Münchhausen&quot; (1943), &quot;die grosse Freiheit Nr.7&quot; (1943) sowie &quot;Auf fer Reeperbahn Nachts um halb eins&quot;
        </h2>
      </div>
      <div className="grid-item-overlay-1760058026843"></div>
      <div className="grid-item-overlay-1760058050498"></div>
      <div className="grid-item-overlay-1760058061196"></div>
      <div className="grid-item-overlay-1760058069825" />
    </div>
  );
}