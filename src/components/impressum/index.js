import React from 'react'
import { Container } from './impresssumelements'
import styled from 'styled-components'
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack'
import { Link } from 'react-router-dom'

const ImpressumP = styled.p`
	display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
`

const ImpressumH1 = styled.h1`
	display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`
const ImpressumH2 = styled.h2`
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`
const ImpressumH3 = styled.h3`
	display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
`

const ImpressumA = styled.a`
    color: ${props => props.theme.colors.thirdColor};
    text-decoration: none;
`

const Icon = styled(ArrowBack)`
    width: 30px;
    position: absolute;
    top: 30px;
    left: 5vw;
    color: #fff;
`

export default function Impressum() {
    return (
        <Container>
            <Link to="/">
                <Icon />
            </Link>
            <ImpressumH1>Impressum</ImpressumH1>
            <ImpressumH2>Angaben gem&auml;&szlig; &sect; 5 TMG</ImpressumH2>
            <ImpressumP>Jan F&uuml;chtener<br />
            Zum Hoover Feld, 13<br />
            50170 Kerpen</ImpressumP>

            <ImpressumH2>Kontakt</ImpressumH2>
            <ImpressumP>Telefon: 015733145798<br />
            E-Mail: jan@fuechtener.eu</ImpressumP>

            <ImpressumH2>EU-Streitschlichtung</ImpressumH2>
            <ImpressumP>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <ImpressumA href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</ImpressumA>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</ImpressumP>

            <ImpressumH2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</ImpressumH2>
            <ImpressumP>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</ImpressumP>

            <ImpressumH3>Haftung f&uuml;r Inhalte</ImpressumH3> <ImpressumP>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</ImpressumP> <ImpressumP>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</ImpressumP> <ImpressumH3>Haftung f&uuml;r Links</ImpressumH3> <ImpressumP>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</ImpressumP> <ImpressumP>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</ImpressumP> <ImpressumH3>Urheberrecht</ImpressumH3> <ImpressumP>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</ImpressumP> <ImpressumP>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</ImpressumP>
        </Container>
    )
}
