import SectionElem from "@/components/section-elem/SectionElem";
import TextAndText from "@/components/blockElements/TextAndText";
import Accordion from "@/components/accordion/Accordion";

export default function Kontakt() {
  return (
    <main>
      <SectionElem
        themeVariant="primary"
        centeredVariant={true}
        sectionHeading="Jura & Tillid"
        sectionBodyText="Tillid er en grundlæggende del af vores platform. Her finder du et samlet overblik over vores juridiske vilkår, politikker og retningslinjer — skrevet så de er til at forstå. Vi tror på gennemsigtighed, tydelig kommunikation og ansvarlig håndtering af både data og samarbejder."
        elemStyle="mt-20"
      />
      <TextAndText
        leftTitle="Bygget på tillid"
        leftDescription="Vores platform bruges til at udvikle og understøtte forretningskritiske løsninger. Derfor er sikkerhed, stabilitet og ansvarlighed tænkt ind fra starten ikke tilføjet senere. Vi arbejder målrettet for at skabe software, som vores kunder kan stole på i hverdagen, både teknisk og menneskeligt."
        rightTitle="Jura i øjenhøjde"
        rightDescription="Vores juridiske vilkår og politikker er skrevet med fokus på gennemsigtighed og tydelig kommunikation. Vi sikrer, at vores kunder har en god forståelse af deres rettigheder og forpligtelser i forhold til vores platform."
      />

      <Accordion
        title="Politikker & dokumentation"
        description="Her finder du vores vigtigste juridiske dokumenter og politikker. Vi gennemgår og opdaterer dem løbende, så de afspejler gældende lovgivning, relevante sikkerhedsstandarder og udviklingen af vores platform."
        items={[
          {
            id: 1,
            title: "Brugsvilkår",
            slides: [
              {
                content:
                  "Vores brugsvilkår beskriver de grundlæggende regler og betingelser for brugen af vores platform. De dækker alt fra brugerrettigheder og ansvar til begrænsninger og ophavsret, og sikrer en klar forståelse mellem os og vores kunder.",
              },
            ],
          },
          {
            id: 2,
            title: "Privatlivspolitik",
            slides: [
              {
                content:
                  "Vi respekterer vores brugeres privatliv og er forpligtet til at beskytte deres personlige oplysninger. Vores privatlivspolitik beskriver, hvordan vi indsamler, bruger og beskytter jeres data.",
              },
            ],
          },
          {
            id: 3,
            title: "Databehandleraftale",
            slides: [
              {
                content:
                  "Vores databehandleraftale sikrer, at vi håndterer jeres data i overensstemmelse med gældende databeskyttelseslovgivning. Den beskriver vores forpligtelser som databehandler og jeres rettigheder som dataansvarlig.",
              },
              {
                content:
                  "Vi tilbyder fleksible hostingmuligheder, herunder on-premises og cloud-løsninger, så I kan vælge den model der bedst opfylder jeres sikkerheds- og compliance-krav.",
              },
            ],
          },
          {
            id: 4,
            title: "Sikkerhed & Compliance",
            slides: [
              {
                content:
                  "Sikkerhed og compliance er en topprioritet for os. Vores politikker beskriver de sikkerhedsforanstaltninger, vi har implementeret for at beskytte jeres data og sikre overholdelse af gældende regler og standarder.",
              },
              {
                content:
                  "Vi tilbyder også forskellige hostingmuligheder, herunder on-premises og cloud-løsninger, så I kan vælge den model der bedst opfylder jeres sikkerheds- og compliance-krav.",
              },
              {
                content:
                  "Vores platform er designet til at være fleksibel og kan tilpasses jeres specifikke sikkerheds- og compliance-behov, uanset om I har brug for on-premises hosting, cloud-løsninger eller en hybrid tilgang.",
              },
            ],
          },
          {
            id: 5,
            title: "Cookiepolitik",
            slides: [
              {
                content:
                  "Vores privatlivspolitik beskriver, hvilke oplysninger vi indsamler, hvorfor vi gør det, og hvordan vi beskytter dem. Vi behandler persondata ansvarligt, sikkert og i overensstemmelse med gældende databeskyttelseslovgivning.",
              },
            ],
          },
        ]}
      />
    </main>
  );
}
