const bookData = {
    cover: {
        title: "Willkommen in der Unterwasserwelt",
        subTitle: "Schön, dass du dabei bist!",
        text1: "Tauchen ist wie eine Reise in einen völlig anderen Kosmos: Du gleitest ganz leise und schwerelos durch das blaue Wasser, beobachtest bunte Fische und erlebst hautnah, wie faszinierend die Natur funktioniert.",
        text2: "Dieses Buch begleitet dich auf dem Weg zu deinem <strong>VDST Kindertauchschein (KTSA) Silber</strong>. Es zeigt dir Schritt für Schritt, wie du dich sicher unter Wasser bewegst, deine Ausrüstung richtig bedienst und warum wir als Taucher besonders gut auf unsere Unterwasser-Umwelt achtgeben müssen.",
        footer: "Mach dich bereit für dein großes Abenteuer – viel Spaß beim Entdecken!",
        image: "bilder/0_Cover.jpg"
    },
    chapters: [
        {
            id: "kap1",
            title: "Kapitel 1: Die geheimnisvolle Physik des Wassers",
            intro: "Physikalische Grundsätze, Druckverhältnisse und Lichtphänomene unter Wasser.",
            subsections: [
                {
                    id: "kap1-1",
                    title: "Was ist eigentlich Druck?",
                    type: "stacked",
                    subrows: [
                        {
                            subTitle: "Luftdruck",
                            text: `<p>Überall um uns herum ist Luft – auch wenn wir sie nicht sehen können. Diese Luft besteht aus vielen winzigen Teilchen und hat ein echtes Gewicht. 
							Sie drückt auf uns und alles um uns herum. Diesen Druck nennt man Luftdruck.
							Schauen wir uns an, wie sich dieser Druck verändert, wenn wir nach oben fliegen oder ganz tief tauchen:</p>
							<p><strong>1. Ganz oben im Flugzeug (ca. 10.000 m Höhe)</strong><br>
							Wenn du im Flugzeug sitzt, bist du sehr hoch über der Erde. Hier oben ist die Luft extrem dünn, weil nur noch sehr wenige Luftteilchen da sind. 
							Der Luftdruck ist mit etwa 0,2 bar sehr niedrig. Deshalb muss im Flugzeug künstlich frische Luft zugeführt werden, damit alle gut atmen können.</p>
							<p><strong>2. Hoch oben im Gebirge (ca. 5.000 m Höhe)</strong><br>
							Bergsteiger merken den Luftdruck deutlich, wenn sie auf einen hohen Berg steigen. Die Lufthülle über ihnen wird dünner, und der Druck sinkt auf etwa 0,5 bar. 
							Das Atmen fällt hier oben schon viel schwerer, weshalb manche Bergsteiger Sauerstoffflaschen mitnehmen.</p>
							<p><strong>3. Am Meeresspiegel (0 m)</strong><br>
							Am Strand am Meer ist alles ganz normal. Hier drückt die gesamte Luft über uns mit einem Druck von 1 bar auf uns. Das nennt man auch Normaldruck. Unser Körper 
							ist daran gewöhnt, und wir spüren den Druck gar nicht, weil er von allen Seiten gleichmäßig kommt.</p>
							<p><strong>4. Ganz tief unten im Meer (ca. 5.000 m Tiefe)</strong><br>
							Wenn ein U-Boot ganz tief ins Meer taucht, kommt zum Luftdruck noch der Druck des Wassers dazu. Wasser lässt sich nämlich kaum zusammendrücken, deshalb steigt 
							der Druck enorm an. In 5.000 Metern Tiefe herrscht ein gigantischer Druck von ca. 501 bar! Das ist mehr als 500-mal so viel wie an der Wasseroberfläche.</p>
							<p><strong>Fazit:</strong><br>
							Ob dünne Luft hoch oben am Himmel oder gewaltiger Druck tief unten im Meer – der Druck ist überall anders. Er ist wie eine unsichtbare Kraft, die uns umgibt!</p>`,
                            image: "bilder/1_1_Luftdruck.jpg"
                        },
                        {
                            subTitle: "Wasserdruck",
                            text: `<p>Unter Wasser ist es genau umgekehrt wie in der Luft: Wasser ist nämlich viel schwerer und dichter als Luft! Stell dir vor, du tauchst in einen See oder ins Meer. 
							Je tiefer du kommst, desto mehr Wasser ist über dir – und dieses Wasser drückt mit seinem ganzen Gewicht auf dich herab.</p>
							<p><strong>Alle 10 Meter kommt ein ganzes „Bar“ dazu</strong><br>
							Das Wasser drückt dabei viel stärker als die Luft. Physikalisch ist es ganz einfach: Alle 10 Meter, die du tiefer tauchst, kommt ein kompletter neuer Druck von 1 bar hinzu.</p>
							<p>•	An der Wasseroberfläche (0 Meter) drückt nur die Luft auf uns: 1 bar.<br>
							•	Bei 10 Metern Tiefe drückt das Wasser mit 1 bar – zusammen mit dem Luftdruck sind das schon 2 bar.<br>
							•	Bei 20 Metern Tiefe sind es 3 bar, bei 30 Metern 4 bar und bei 40 Metern Tiefe lastet bereits ein Gesamtdruck von 5 bar auf dir!</p>
							<p><strong>Warum werden die Luftballons immer kleiner?</strong><br>
							Schau dir die Luftballons im Bild an. Je tiefer sie sinken, desto kleiner werden sie. Das liegt daran, dass der Wasserdruck die Luft im Ballon von 
							allen Seiten fest zusammendrückt. Die Luftteilchen werden sozusagen in eine kleinere Form gepresst. (Und im Rechenkästchen unten rechts siehst du noch 
							einmal genau, wie man den Gesamtdruck ausrechnet: 30 Meter Tiefe = 3 bar Wasserdruck + 1 bar Luftdruck = 4 bar Gesamtdruck).</p>
							<p><strong>Atmen unter Wasser</strong><br>
							Weil Wasser so dicht ist und so schwer auf uns lastet, ist es unter Wasser für unseren Körper anstrengend und wir können dort nicht 
							einfach so atmen. Deshalb nutzen Taucher spezielle Lungenautomaten (Atemregler). Diese Geräte sind super schlau: Sie liefern uns die Luft 
							genau mit dem passenden Umgebungsdruck, damit wir uns beim Tauchen trotzdem wohlfühlen und atmen können.</p>`,
                            image: "bilder/1_1_1_Wasserdruck.jpg"
                        }
                    ]
                },
                {
                    id: "kap1-2",
                    title: "Was haben wir in der Flasche?",
                    text: `<p>Unter Wasser können wir Menschen nicht atmen. Deshalb nehmen Taucher eine Tauchflasche mit. Aber was ist da eigentlich drin? Viele denken, in einer Tauchflasche sei reiner Sauerstoff. 
					Das stimmt aber nicht! In der Flasche befindet sich ganz normale, hochreine und gefilterte Atemluft – also genau die Mischung, die wir auch über Wasser einatmen.</p>
					<p><strong>Was ist in unserer Luft? (Schau auf die Diagramme rechts)</strong><br>
					Wenn wir draußen Luft einatmen (Diagramm 1: Einatemluft), besteht sie aus:</p>
					<ul style="margin-bottom: 15px; padding-left: 20px;">
						<li>78 % Stickstoff</li>
						<li>21 % Sauerstoff (den brauchen wir zum Leben)</li>
						<li>1 % Edelgase (wie zum Beispiel Kohlendioxid)</li>
					</ul>
					<p>Wenn wir die Luft wieder ausatmen (Diagramm 2: Ausatemluft), hat sich etwas verändert: Unser Körper hat einen Teil des Sauerstoffs verbraucht (er sinkt von 21 % auf 16 %). 
					Dafür haben wir Kohlendioxid ausgeatmet, das nun 4 % der Luft ausmacht. Der Stickstoff bleibt mit 78 % gleich.</p>
					<p><strong>Die Luft wird zusammengedrückt</strong><br>
					Damit ganz viel Luft in die kompakte Flasche passt, wird sie von starken Kompressoren extrem stark zusammengedrückt (komprimiert). Das nennt man Pressluft. Auf dem Finimeter (
					dem Druckmesser auf dem Bild) siehst du, wie viel Druck in der Flasche ist – oft sind das bis zu 200 oder 300 bar!</p>
					<p><strong>Warum muss die Luft so trocken und sauber sein?</strong><br>
					Es ist lebenswichtig, dass diese Pressluft absolut trocken und sauber ist. Wäre Feuchtigkeit in der Flasche, würde der hohe Druck in der Tiefe (oder das kalte Wasser) dazu führen, 
					dass Wassertröpfchen gefrieren oder das Metall der Flasche von innen rostet. Zudem müssen die Gaszusammensetzung und die Reinheit exakt stimmen, damit unser Körper beim Atmen 
					unter Druck keinen Schaden nimmt.</p>
					<p><strong>Wie kommt die Luft in den Mund? (Schau auf die linke Seite)</strong><br>
					Wenn der Taucher atmet, passiert die Luft zwei wichtige Stationen:<br>
					1. Die 1. Stufe (oben an der Flasche) nimmt den extrem hohen Druck aus der Flasche (z.B. 200 bar) und reduziert ihn auf einen mittleren Druck.<br>
					2. Durch einen Schlauch fließt die Luft zur 2. Stufe (dem Atemregler im Mund). Diese passt den Druck genau an die Wassertiefe an, damit der Taucher ganz leicht ein- und ausatmen kann. 
					Und das Ganze gibt es gleich zweimal: einmal für dich (Hauptregler) und einmal als Reserve (Halsregler) für deinen Partner. Der Halsregler hängt dabei an einem kurzen Schlauch, 
					der direkt mit der ersten Stufe verbunden ist, und wird mit einem Bungee am Hals gehalten.</p>`,
                    image: "bilder/1_2_Atemluft.jpg"
                },
                {
                    id: "kap1-3",
                    title: "Licht & Farben unter Wasser",
                    text: `<p>Wasser ist nicht nur schwer und dicht, es wirkt auch wie ein gigantischer, unsichtbarer Farbfilter. 
					Wenn das Sonnenlicht ins Wasser scheint, wird es auf seinem Weg nach unten Stück für Stück verschluckt (absorbiert). 
					Das Besondere daran: Nicht alle Farben verschwinden gleichzeitig, sondern nach einer exakten physikalischen Skala.</p>
					<p><strong>Schau dir die Farbfelder im Bild genau an:</strong><br>
					•	Rot verblasst bereits ab ca. 1 bis 5 Metern Tiefe vollständig. Es sieht dann aus wie ein langweiliges Grau.<br>
					•	Orange verschwindet bei etwa 10 Metern.<br>
					•	Gelb wird ab 15 bis 20 Metern geschluckt.<br>
					•	Ab 30 Metern Tiefe schluckt das Wasser auch das Grün.</p>
					<p>Ganz tief unten (bei 40 Metern) bleibt nur noch ein tiefes, eintöniges Blau übrig. Die Welt da unten sieht für Taucher fast aus wie ein Schwarz-Weiß-Film in Blau!</p>
					<p><strong>Warum brauchen Taucher eine Taschenlampe?</strong><br>
					Weil die Sonne es nicht schafft, alle Farben bis ganz nach unten zu bringen! Wie du unten im Bild siehst, bringt erst das grelle Licht einer Taucherlampe die echten Farben wieder zurück. 
					Der Lichtstrahl der Lampe ist so hell, dass er die Farben auf kurzer Distanz wieder sichtbar macht.</p>
					<p><strong>Warum ist Tauchausrüstung so bunt?</strong><br>
					Hast du dich schon mal gefragt, warum viele Tauchanzüge, Flossen oder Masken signalbunte Ränder in Neon-Pink, Leuchtgelb oder Giftgrün haben? Das ist kein Zufall! 
					Aus genau diesem Grund: Wenn die natürlichen Farben in der Tiefe längst verschluckt sind, kann man seinen Tauchpartner durch die grellen Neonfarben trotzdem schnell wiedererkennen. 
					So findet man sich in der eintönigen blauen Unterwasserwelt nicht aus den Augen.</p>`,
                    image: "bilder/1_3_Farben.jpg"
                },
                {
                    id: "kap1-4",
                    title: "Sehen unter Wasser",
                    text: `<p>Hast du dich schon mal gefragt, warum Fische unter Wasser manchmal wie riesige Monster aussehen? Das liegt an einer cleveren optischen Täuschung!</p>
					<p><strong>Unser Auge braucht Luft</strong><br>
					Unser menschliches Auge ist darauf optimiert, Lichtstrahlen zu verarbeiten, die durch Luft wandern. Da das Wasser direkt vor unseren Augen aber eine völlig 
					andere Dichte hat (es ist ja viel schwerer und dichter als Luft), würden wir ohne Hilfsmittel alles nur total verschwommen sehen. Das Wasser würde das Licht nämlich ganz anders brechen als Luft.</p>
					<p><strong>Die Tauchmaske ist der Trick</strong><br>
					Erst die Tauchmaske schafft ein schützendes Luftpolster vor den Augen. Sie sorgt dafür, dass wir wieder scharf sehen können. Aber Achtung: Durch den Übergang vom Wasser zur 
					Glasscheibe und zur Luft im Inneren der Maske entsteht ein bekannter optischer Effekt (der sogenannte Brechungsindex).</p>
					<p><strong>Die Unterwasser-Lupe</strong><br>
					Schau dir das Bild genau an: Der Taucher sieht den Fisch viel größer und näher, als er eigentlich ist. Dieser Effekt ist bei allen Gegenständen und Fischen unter Wasser gleich:<br>
					•	Alles erscheint uns um etwa ein Drittel (ca. 33 %) größer!<br>
					•	Und alles wirkt um etwa ein Viertel (ca. 25 %) näher!</p>
					<p><strong>Ein kleines Rechenbeispiel:</strong><br>
					Stell dir vor, du siehst einen Fisch, der scheinbar 4 Meter von dir entfernt ist. In Wirklichkeit ist er aber knapp einen Meter weiter weg! Und wenn du denkst, 
					du siehst einen kleinen Fisch, der nur 15 cm groß ist, dann ist er in Wahrheit nur etwa 10 cm groß.</p>
					<p>Das ist auch der Grund, warum Taucher lernen müssen, Entfernungen unter Wasser richtig einzuschätzen. Wenn sie einen Fisch fangen oder ein Foto machen wollen, 
					müssen sie immer ein bisschen "daneben" zielen – nämlich weiter weg und kleiner, als es ihnen das Auge vorgaukelt!</p>`,
                    image: "bilder/1_4_Sehen.jpg"
                },
                {
                    id: "kap1-5",
                    title: "Hören unter Wasser",
                    text: `<p>Über Wasser können wir ganz genau hören, woher ein Geräusch kommt – zum Beispiel, wenn ein Auto hupt. Unser Gehirn merkt sich, welches Ohr den Schall zuerst erreicht, 
					und weiß dann: "Aha, das kommt von links!"</p>
					<p><strong>Unter Wasser funktioniert das nicht mehr</strong><br>
					Im Wasser ist das anders. Schall breitet sich im dichten Medium Wasser nämlich etwa viermal schneller aus als in der Luft – nämlich mit ca. 1.500 Metern pro Sekunde 
					(in der Luft sind es nur 343 m/s). Das klingt erst mal super, führt aber zu einem Problem: Weil der Schall so rasant schnell ist, erreicht er beide Ohren fast genau gleichzeitig. 
					Unser Gehirn kann diese winzigen Zeitunterschiede nicht mehr auseinanderhalten. Die Folge: Wir können die Richtung eines Geräusches – wie das tiefe Brummen 
					eines Bootsmotors – akustisch nicht mehr orten. Alles klingt, als käme es von überall gleichzeitig.</p>
					<p><strong>⚠️ Wichtige Warnung für Taucher!</strong><br>
					Weil man unter Wasser nicht hören kann, woher ein Geräusch kommt, gibt es eine ganz wichtige Sicherheitsregel: <strong>Niemals Schall als Signal zum Auftauchen nutzen!</strong>
					Geräusche im Wasser können irreführend sein. Schiffe oder Motoren können viel näher sein, als sie klingen. Taucher müssen deshalb immer die Umgebung genau beobachten und den Blick 
					nach oben richten, bevor sie auftauchen.</p>
					<p><strong>Wie machen das eigentlich die Tiere?</strong><br>
					Während wir Menschen uns unter Wasser schwer tun, haben Fische und Meeressäuger coole Tricks auf Lager.<br>
					•	Fische nutzen die schnelle Schallausbreitung im Wasser oder ihre sogenannten Seitenlinienorgane (das ist ein besonderes Sinnesorgan an ihrer Seite), 
					um feinste Erschütterungen im Wasser wahrzunehmen – so spüren sie Gefahren oder Beute.<br>
					•	Wale nutzen die Physik sogar für ihren Gesang! Ihre extrem lauten Laute pflanzen sich durch die verschiedenen Schichten des Ozeans über hunderte oder 
					sogar tausende Kilometer fort. So können sie über riesige Entfernungen miteinander "sprechen" und Artgenossen rufen.</p>`,
                    image: "bilder/1_5_Hoeren.jpg"
                },
                {
                    id: "kap1-6",
                    title: "Auftrieb & Tarierung",
                    text: `<p>Fragst du dich manchmal, wie Taucher es schaffen, einfach so im Wasser zu schweben, ohne unterzugehen oder wie ein Korken nach oben zu schießen? 
					Das Zauberwort heißt Tarierung (das spricht man "Tar-ie-rung").</p>
					<p>Dabei geht es um zwei Kräfte, die gegeneinander wirken:<br>
					•	<strong>Der Auftrieb</strong> will dich nach oben ziehen (zum Beispiel durch den Neoprenanzug, der wie ein kleiner Schwimmring wirkt).<br>
					•	<strong>Das Gewicht</strong> (zum Beispiel durch Blei) will dich nach unten ziehen.</p>
					<p>Um im Wasser weder wie ein Stein abzusinken (negativer Auftrieb) noch unkontrolliert an die Oberfläche gezogen zu werden (positiver Auftrieb), 
					streben wir den neutralen Auftrieb an. Das ist der perfekte Zustand: Du schwebst völlig schwerelos im Wasser, so wie ein Astronaut im Weltraum!</p>
					<p>Schau dir die drei Bilder genau an:<br>
					<strong>1. Zu wenig Blei</strong><br>
					Der Taucher hat gar kein Blei oder zu wenig davon. Sein Neoprenanzug hat viel Auftrieb. Die Folge: Der Taucher treibt oben und kommt gar nicht richtig unter Wasser.<br><br>
					<strong>2. Perfekt austariert</strong><br>
					Hier ist das hydrostatische Gleichgewicht erreicht. Das klingt kompliziert, heißt aber nur: Blei und Neoprenanzug halten sich exakt die Waage. 
					Die Pfeile zeigen nach oben und unten gleich stark. Der Taucher schwebt perfekt im Wasser. Einfach toll!<br><br>
					<strong>3. Zu viel Blei</strong>
					Hier hat der Taucher viel zu viel Blei am Gürtel. Das Gewicht zieht ihn sofort tief nach unten. Die Folge: Gefahr von zu schnellem Sinken! Er muss ständig gegen die Schwerkraft ankämpfen.</p>
					<p><strong>Der Profi-Trick: Der Bleicheck</strong><br>
					Um herauszufinden, ob man richtig bebleit ist, machen Taucher einen einfachen Test. Das kannst du auch leicht nachmachen (natürlich nur im Schwimmbad mit einem Erwachsenen!):<br>
					1. Du ziehst deine komplette Ausrüstung an und springst ins Wasser.<br>
					2. Du lässt die ganze Luft aus deiner Tarierweste (dem Jacket) ab.<br>
					3. Du nimmst den Atemregler in den Mund und atmest ganz normal.<br>
					4. Das Ergebnis: Wenn du nun bis auf Augenhöhe im Wasser stehst und erst beim Ausatmen langsam absinkst, ist dein Blei perfekt portioniert!</p>`,
                    image: "bilder/1_6_Auftrieb.jpg"
                }
            ],
            quiz: {
                questionPool: [
                    {
                        question: "Was ist Luftdruck?",
                        options: ["Die Kraft, die von der Sonne kommt", "Das Gewicht der Luft, die auf uns drückt", "Die Menge an Sauerstoff in der Luft", "Der Wind, der weht", "Die Temperatur der Luft"],
                        correct: 1
                    },
                    {
                        question: "Wie hoch ist der Luftdruck auf Meeresspiegelhöhe?",
                        options: ["0,2 bar", "0,5 bar", "1 bar", "5 bar", "10 bar"],
                        correct: 2
                    },
                    {
                        question: "Warum ist der Luftdruck hoch oben im Flugzeug so niedrig?",
                        options: ["Weil es dort kalt ist", "Weil die Luft dort dünn ist und wenige Teilchen hat", "Weil das Flugzeug schnell fliegt", "Weil die Sonne dort stärker scheint", "Weil es dort keine Luft gibt"],
                        correct: 1
                    },
                    {
                        question: "Was passiert mit Bergsteigern in großer Höhe?",
                        options: ["Sie können besser atmen", "Der Druck steigt", "Das Atmen fällt schwerer", "Sie brauchen weniger Sauerstoff", "Sie werden schneller müde"],
                        correct: 2
                    },
                    {
                        question: "Warum spüren wir den Luftdruck am Meeresspiegel nicht?",
                        options: ["Weil er zu schwach ist", "Weil er von allen Seiten gleichmäßig kommt", "Weil wir daran gewöhnt sind", "Weil er nur nachts da ist", "Weil er nur unter Wasser wirkt"],
                        correct: 1
                    },
                    {
                        question: "Wie viel Druck herrscht in 5.000 Metern Tiefe im Meer?",
                        options: ["1 bar", "50 bar", "501 bar", "5 bar", "100 bar"],
                        correct: 2
                    },
                    {
                        question: "Welche Aussagen über den Luftdruck sind richtig? (Mehrere Antworten möglich)",
                        options: ["Er ist überall gleich", "Er ändert sich mit der Höhe", "Er ist im Gebirge niedriger als am Meer", "Er ist unter Wasser höher", "Er hat kein Gewicht"],
                        correct: [1, 2, 3]
                    },
                    {
                        question: "Warum brauchen Bergsteiger manchmal Sauerstoffflaschen?",
                        options: ["Weil die Luft zu schwer ist", "Weil der Druck zu hoch ist", "Weil die Luft zu dünn ist", "Weil sie zu schnell steigen", "Weil sie keine Luft mehr haben"],
                        correct: 2
                    },
                    {
                        question: "Was ist der „Normaldruck“?",
                        options: ["0 bar", "0,5 bar", "1 bar", "2 bar", "10 bar"],
                        correct: 2
                    },
                    {
                        question: "In welcher Höhe ist der Luftdruck am niedrigsten?",
                        options: ["Am Meeresspiegel", "Auf einem 5.000 m hohen Berg", "Im Flugzeug in 10.000 m Höhe", "Im U-Boot", "Im Schwimmbad"],
                        correct: 2
                    },
                    {
                        question: "Wie viel Druck kommt alle 10 Meter Tiefe im Wasser hinzu?",
                        options: ["0,5 bar", "1 bar", "2 bar", "10 bar", "100 bar"],
                        correct: 1
                    },
                    {
                        question: "Wie viel Gesamtdruck herrscht in 20 Metern Tiefe?",
                        options: ["1 bar", "2 bar", "3 bar", "4 bar", "5 bar"],
                        correct: 2
                    },
                    {
                        question: "Warum werden Luftballons beim Tieftauchen kleiner?",
                        options: ["Weil sie platzen", "Weil das Wasser sie zusammendrückt", "Weil die Luft entweicht", "Weil sie kalt werden", "Weil sie schwerer werden"],
                        correct: 1
                    },
                    {
                        question: "Was passiert mit dem Druck, wenn du tiefer tauchst?",
                        options: ["Er bleibt gleich", "Er sinkt", "Er steigt", "Er verschwindet", "Er wird leichter"],
                        correct: 2
                    },
                    {
                        question: "Welche Aussagen über Wasserdruck sind richtig? (Mehrere Antworten möglich)",
                        options: ["Wasser ist dichter als Luft", "Alle 10 Meter kommt 1 bar dazu", "Wasserdruck ist immer gleich", "In 30 Metern Tiefe herrschen 4 bar", "Wasser lässt sich leicht zusammendrücken"],
                        correct: [0, 1, 3]
                    },
                    {
                        question: "Warum können wir unter Wasser nicht einfach so atmen?",
                        options: ["Weil Wasser zu kalt ist", "Weil Wasser zu dicht ist und schwer auf uns lastet", "Weil es keinen Sauerstoff im Wasser gibt", "Weil wir keine Kiemen haben", "Weil der Druck zu hoch ist"],
                        correct: 1
                    },
                    {
                        question: "Was machen Atemregler?",
                        options: ["Sie filtern das Wasser", "Sie liefern Luft mit dem passenden Umgebungsdruck", "Sie machen die Luft kalt", "Sie speichern Luft", "Sie zeigen den Druck an"],
                        correct: 1
                    },
                    {
                        question: "Wie viel Druck lastet in 40 Metern Tiefe auf dir?",
                        options: ["1 bar", "2 bar", "3 bar", "4 bar", "5 bar"],
                        correct: 4
                    },
                    {
                        question: "Was ist der Unterschied zwischen Luftdruck und Wasserdruck?",
                        options: ["Luftdruck ist stärker", "Wasserdruck steigt schneller mit der Tiefe", "Luftdruck gibt es nur im Wasser", "Wasserdruck ist immer 1 bar", "Es gibt keinen Unterschied"],
                        correct: 1
                    },
                    {
                        question: "Warum ist Wasser schwerer als Luft?",
                        options: ["Weil es kälter ist", "Weil es dichter ist", "Weil es mehr Sauerstoff hat", "Weil es salzig ist", "Weil es blau ist"],
                        correct: 1
                    },
                    {
                        question: "Was ist in einer Tauchflasche?",
                        options: ["Reiner Sauerstoff", "Normale, gefilterte Atemluft", "Nur Stickstoff", "Wasser", "Helium"],
                        correct: 1
                    },
                    {
                        question: "Wie viel Prozent Sauerstoff ist in der Einatemluft?",
                        options: ["78 %", "21 %", "1 %", "16 %", "50 %"],
                        correct: 1
                    },
                    {
                        question: "Wie viel Prozent Stickstoff ist in der Luft?",
                        options: ["21 %", "78 %", "1 %", "4 %", "50 %"],
                        correct: 1
                    },
                    {
                        question: "Was passiert mit dem Sauerstoff, wenn wir ausatmen?",
                        options: ["Er steigt auf 78 %", "Er sinkt auf 16 %", "Er bleibt gleich", "Er verschwindet ganz", "Er wird zu Stickstoff"],
                        correct: 1
                    },
                    {
                        question: "Welche Gase sind in der Atemluft? (Mehrere Antworten möglich)",
                        options: ["Sauerstoff", "Stickstoff", "Kohlendioxid", "Helium", "Wasserstoff"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Warum ist in der Flasche keine reine Sauerstoffmischung?",
                        options: ["Weil sie zu teuer ist", "Weil normale Atemluft die richtige Mischung für unseren Körper ist", "Weil Sauerstoff giftig ist", "Weil sie zu schwer ist", "Weil sie nicht gefiltert werden kann"],
                        correct: 1
                    },
                    {
                        question: "Wie viel Prozent Kohlendioxid atmen wir aus?",
                        options: ["1 %", "4 %", "16 %", "21 %", "78 %"],
                        correct: 1
                    },
                    {
                        question: "Was ist Pressluft?",
                        options: ["Luft, die kalt ist", "Luft, die stark zusammengedrückt wurde", "Luft, die gefiltert wurde", "Luft, die aus dem Wasser kommt", "Luft, die mit Sauerstoff angereichert ist"],
                        correct: 1
                    },
                    {
                        question: "Warum muss die Luft in der Flasche trocken sein?",
                        options: ["Damit sie leichter ist", "Damit kein Wasser in der Flasche gefriert oder rostet", "Damit sie besser schmeckt", "Damit sie schneller fließt", "Damit sie kälter ist"],
                        correct: 1
                    },
                    {
                        question: "Welche Aussagen über die Atemluft sind richtig? (Mehrere Antworten möglich)",
                        options: ["Sie besteht zu 78 % aus Stickstoff", "Sie enthält 21 % Sauerstoff", "Sie enthält 1 % Edelgase", "Sie besteht aus reinem Sauerstoff", "Sie enthält 50 % Kohlendioxid"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Welche Farbe verschwindet zuerst im Wasser?",
                        options: ["Blau", "Rot", "Grün", "Gelb", "Orange"],
                        correct: 1
                    },
                    {
                        question: "Ab welcher Tiefe verschwindet die Farbe Gelb?",
                        options: ["1–5 m", "10 m", "15–20 m", "30 m", "40 m"],
                        correct: 2
                    },
                    {
                        question: "Warum brauchen Taucher eine Taschenlampe?",
                        options: ["Um Fische zu fangen", "Um die echten Farben wieder sichtbar zu machen", "Um sich warm zu halten", "Um den Weg zu finden", "Um den Druck zu messen"],
                        correct: 1
                    },
                    {
                        question: "Welche Farbe bleibt in 40 Metern Tiefe übrig?",
                        options: ["Rot", "Gelb", "Grün", "Blau", "Orange"],
                        correct: 3
                    },
                    {
                        question: "Welche Farben verschwinden in der richtigen Reihenfolge?",
                        options: ["Rot, Orange, Gelb, Grün", "Blau, Grün, Gelb, Rot", "Gelb, Rot, Blau, Grün", "Grün, Blau, Rot, Gelb", "Orange, Rot, Grün, Gelb"],
                        correct: 0
                    },
                    {
                        question: "Warum ist Tauchausrüstung oft bunt (Neon-Pink, Leuchtgelb)?",
                        options: ["Weil es schön aussieht", "Damit man den Partner in der Tiefe schnell erkennt", "Weil bunte Farben länger halten", "Weil sie teurer ist", "Weil sie wärmer ist"],
                        correct: 1
                    },
                    {
                        question: "Ab welcher Tiefe verschwindet die Farbe Grün?",
                        options: ["5 m", "10 m", "20 m", "30 m", "40 m"],
                        correct: 3
                    },
                    {
                        question: "Was passiert mit dem Sonnenlicht im Wasser?",
                        options: ["Es wird stärker", "Es wird Stück für Stück verschluckt", "Es wird zu Wärme", "Es wird reflektiert", "Es bleibt gleich"],
                        correct: 1
                    },
                    {
                        question: "Welche Aussagen über Farben unter Wasser sind richtig? (Mehrere Antworten möglich)",
                        options: ["Rot verschwindet zuerst", "Blau bleibt am längsten sichtbar", "Alle Farben verschwinden gleichzeitig", "Eine Taschenlampe bringt die Farben zurück", "Gelb verschwindet bei 30 m"],
                        correct: [0, 1, 3]
                    },
                    {
                        question: "Warum sieht die Welt in 40 Metern Tiefe fast wie ein Schwarz-Weiß-Film aus?",
                        options: ["Weil das Wasser trüb ist", "Weil fast alle Farben verschluckt wurden", "Weil die Taucherbrille beschlägt", "Weil es dort dunkel ist", "Weil die Fische grau sind"],
                        correct: 1
                    },
                    {
                        question: "Warum sehen wir unter Wasser ohne Maske verschwommen?",
                        options: ["Weil das Wasser kalt ist", "Weil das Wasser eine andere Dichte hat als Luft", "Weil unsere Augen zu klein sind", "Weil es zu dunkel ist", "Weil wir keine Luft bekommen"],
                        correct: 1
                    },
                    {
                        question: "Was macht die Tauchmaske?",
                        options: ["Sie vergrößert die Augen", "Sie schafft ein Luftpolster vor den Augen", "Sie filtert das Wasser", "Sie schützt vor Kälte", "Sie zeigt den Druck an"],
                        correct: 1
                    },
                    {
                        question: "Wie viel größer erscheinen Gegenstände unter Wasser?",
                        options: ["10 %", "25 %", "33 %", "50 %", "100 %"],
                        correct: 2
                    },
                    {
                        question: "Wie viel näher erscheinen Gegenstände unter Wasser?",
                        options: ["10 %", "25 %", "33 %", "50 %", "100 %"],
                        correct: 1
                    },
                    {
                        question: "Wenn ein Fisch scheinbar 4 Meter entfernt ist, wie weit ist er wirklich?",
                        options: ["3 m", "4 m", "5 m", "6 m", "8 m"],
                        correct: 2
                    },
                    {
                        question: "Warum müssen Taucher beim Zielen „daneben“ zielen?",
                        options: ["Weil sie schlecht sehen", "Weil Gegenstände näher und größer erscheinen", "Weil das Wasser sie ablenkt", "Weil die Maske verrutscht", "Weil sie keine Übung haben"],
                        correct: 1
                    },
                    {
                        question: "Welche Aussagen über das Sehen unter Wasser sind richtig? (Mehrere Antworten möglich)",
                        options: ["Die Maske schafft ein Luftpolster", "Alles erscheint 33 % größer", "Alles erscheint 25 % näher", "Wasser bricht das Licht anders als Luft", "Ohne Maske sehen wir scharf"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist der „Brechungsindex“?",
                        options: ["Ein Werkzeug", "Ein optischer Effekt an der Glasscheibe", "Ein Teil der Maske", "Ein Messgerät", "Eine Farbe"],
                        correct: 1
                    },
                    {
                        question: "Wie groß ist ein Fisch wirklich, der scheinbar 15 cm groß ist?",
                        options: ["5 cm", "10 cm", "15 cm", "20 cm", "30 cm"],
                        correct: 1
                    },
                    {
                        question: "Warum brauchen Taucher die Maske?",
                        options: ["Um besser zu hören", "Um scharf zu sehen", "Um den Druck zu messen", "Um zu atmen", "Um warm zu bleiben"],
                        correct: 1
                    },
                    {
                        question: "Wie schnell breitet sich Schall im Wasser aus?",
                        options: ["343 m/s", "1.500 m/s", "3.000 m/s", "100 m/s", "10.000 m/s"],
                        correct: 1
                    },
                    {
                        question: "Warum können wir unter Wasser die Richtung eines Geräusches nicht orten?",
                        options: ["Weil der Schall zu langsam ist", "Weil der Schall beide Ohren gleichzeitig erreicht", "Weil Wasser zu kalt ist", "Weil wir keine Ohren haben", "Weil der Schall zu leise ist"],
                        correct: 1
                    },
                    {
                        question: "Wie schnell ist der Schall in der Luft?",
                        options: ["343 m/s", "1.500 m/s", "100 m/s", "3.000 m/s", "10.000 m/s"],
                        correct: 0
                    },
                    {
                        question: "Warum ist „Niemals Schall als Signal zum Auftauchen“ so wichtig?",
                        options: ["Weil Schall zu leise ist", "Weil Geräusche irreführend sein können", "Weil Schall zu langsam ist", "Weil man ihn nicht hört", "Weil er zu laut ist"],
                        correct: 1
                    },
                    {
                        question: "Welche Tiere nutzen die schnelle Schallausbreitung? (Mehrere Antworten möglich)",
                        options: ["Fische", "Wale", "Hunde", "Katzen", "Vögel"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was sind Seitenlinienorgane?",
                        options: ["Augen von Fischen", "Sinnesorgane an der Seite von Fischen", "Flossen", "Kiemen", "Schuppen"],
                        correct: 1
                    },
                    {
                        question: "Wie weit können sich Walgesänge ausbreiten?",
                        options: ["10 Meter", "100 Meter", "1 Kilometer", "Hunderte bis Tausende Kilometer", "Nur 1 Meter"],
                        correct: 3
                    },
                    {
                        question: "Welche Aussagen über das Hören unter Wasser sind richtig? (Mehrere Antworten möglich)",
                        options: ["Schall ist im Wasser schneller als in der Luft", "Man kann die Richtung nicht orten", "Schall erreicht beide Ohren gleichzeitig", "Wale nutzen Schall für ihren Gesang", "Man hört unter Wasser besser als über Wasser"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Warum klingen Schiffe unter Wasser manchmal näher, als sie sind?",
                        options: ["Weil der Schall reflektiert wird", "Weil der Schall so schnell ist und die Richtung nicht geortet werden kann", "Weil das Wasser trüb ist", "Weil die Motoren zu laut sind", "Weil die Taucher Angst haben"],
                        correct: 1
                    },
                    {
                        question: "Wie nehmen Fische Erschütterungen wahr?",
                        options: ["Mit den Augen", "Mit den Seitenlinienorganen", "Mit der Nase", "Mit den Flossen", "Mit den Kiemen"],
                        correct: 1
                    },
                    {
                        question: "Was ist Tarierung?",
                        options: ["Das Aufblasen der Flasche", "Das Schweben im Wasser", "Das Atmen unter Wasser", "Das Schwimmen an der Oberfläche", "Das Tauchen mit Flossen"],
                        correct: 1
                    },
                    {
                        question: "Was zieht dich nach oben?",
                        options: ["Das Blei", "Der Auftrieb", "Die Schwerkraft", "Die Flasche", "Das Wasser"],
                        correct: 1
                    },
                    {
                        question: "Was zieht dich nach unten?",
                        options: ["Der Auftrieb", "Das Gewicht (Blei)", "Die Luft", "Die Flossen", "Das Jacket"],
                        correct: 1
                    },
                    {
                        question: "Was ist neutraler Auftrieb?",
                        options: ["Du sinkst", "Du steigst", "Du schwebst schwerelos", "Du schwimmst an der Oberfläche", "Du liegst am Grund"],
                        correct: 2
                    },
                    {
                        question: "Was passiert bei zu wenig Blei?",
                        options: ["Du sinkst", "Du treibst oben", "Du schwebst", "Du erstickst", "Du frierst"],
                        correct: 1
                    },
                    {
                        question: "Was passiert bei zu viel Blei?",
                        options: ["Du treibst oben", "Du sinkst schnell nach unten", "Du schwebst", "Du bist schwerelos", "Du schwimmst"],
                        correct: 1
                    },
                    {
                        question: "Was ist der Bleicheck?",
                        options: ["Ein Test für die richtige Bleimenge", "Ein Werkzeug", "Eine Flosse", "Ein Atemregler", "Ein Messgerät"],
                        correct: 0
                    },
                    {
                        question: "Welche Aussagen über Tarierung sind richtig? (Mehrere Antworten möglich)",
                        options: ["Auftrieb zieht nach oben", "Gewicht zieht nach unten", "Neutraler Auftrieb ist perfekt", "Zu viel Blei ist ungefährlich", "Tarierung ist nur für Profis"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was passiert, wenn du die Luft aus dem Jacket lässt?",
                        options: ["Du steigst auf", "Du sinkst", "Du schwebst", "Du bleibst oben", "Du drehst dich"],
                        correct: 1
                    },
                    {
                        question: "Wann ist dein Blei perfekt?",
                        options: ["Wenn du bis zur Augenhöhe im Wasser stehst und beim Ausatmen langsam absinkst", "Wenn du sofort sinkst", "Wenn du oben treibst", "Wenn du schwebst", "Wenn du gar kein Blei hast"],
                        correct: 0
                    }
                ]
            }
        },
        {
            id: "kap2",
            title: "Kapitel 2: Unser Körper im blauen Element",
            intro: "Anatomische Anpassungen, Druckausgleich und die Funktion unserer Atemwege.",
            subsections: [
                {
                    id: "kap2-1",
                    title: "Anatomie des Ohrs",
                    text: `<p>Schau dir das Bild genau an. Unser Ohr ist wie ein kleiner, spannender Tunnel aufgebaut und unterteilt sich in drei Bereiche:</p>
					<p><strong>1. Das Außenohr (der Empfang)</strong><br>
					Ganz außen siehst du die Ohrmuschel. Sie funktioniert wie ein Trichter und fängt die Schallwellen auf. Diese wandern dann durch den äußeren Gehörgang tief hinein ins Ohr.</p>
					<p><strong>2. Das Mittelohr (der Verstärker)</strong><br>
					Am Ende des Gehörgangs ist eine ganz dünne, empfindliche Haut gespannt: das Trommelfell. Es trennt das Außenohr vom Mittelohr. Wenn Schallwellen ankommen, 
					bringt es das Trommelfell zum Schwingen. Dahinter liegen im Mittelohr die drei winzigen Gehörknöchelchen (sie heißen Hammer, Amboss und Steigbügel). 
					Sie nehmen die Schwingungen auf und geben sie weiter – wie bei einer kleinen Telefonkette.</p>
					<p><strong>3. Das Innenohr (das Gehirn des Ohrs)</strong><br>
					Hier gibt es zwei wichtige Teile:<br>
					•	Die Hörschnecke: Sie ist mit Flüssigkeit gefüllt. Die Schwingungen der Gehörknöchelchen werden hier in elektrische Signale umgewandelt, 
					die über den Hörnerv direkt ins Gehirn wandern. Erst dort verstehen wir das Geräusch.<br>
					•	Das Gleichgewichtsorgan: Es sorgt dafür, dass wir wissen, wo oben und unten ist, und dass wir nicht umfallen.</p>
					<p><strong>Warum "knackt" es beim Tauchen?</strong><br>
					Ganz wichtig beim Tauchen ist die Eustachische Röhre (die du auf dem Bild rechts siehst). Sie ist ein kleiner Verbindungsschlauch zwischen dem 
					Mittelohr und dem Nasen-Rachen-Raum. Sie sorgt dafür, dass der Luftdruck hinter dem Trommelfell immer gleich bleibt. Beim Tieftauchen presst das Wasser 
					von außen auf das Trommelfell. Wenn die Eustachische Röhre nicht gut geöffnet ist, tut das weh. Deshalb müssen Taucher immer wieder ausatmen und dabei die 
					Nase zuhalten (das nennt man "Druckausgleich"). Dann zischt oder knackt es kurz – und der Druck ist wieder ausgeglichen.</p>
					<p><strong>Wie hören wir unter Wasser?</strong><br>
					Unter Wasser ist das Hören etwas anders. Wenn Schallwellen durch das Wasser auf unseren Kopf treffen, versetzen sie den Schädelknochen direkt in Schwingung. 
					Diese Schwingungen werden dann direkt an das Innenohr weitergegeben. (Das ist der Grund, warum wir unter Wasser Geräusche oft dumpf hören und nicht so gut orten können, 
					wie wir bereits gelernt haben!)</p>`,
                    image: "bilder/2_1_Ohr.jpg"
                },
                {
                    id: "kap2-2",
                    title: "Hohlräume in unserem Körper",
                    text: `<p>Wusstest du, dass in deinem Körper viele kleine Lufträume stecken? Wenn wir tauchen, wirkt das Wasser von außen mit starkem Druck auf uns. 
					Weil sich Luft unter Druck zusammendrücken lässt (das haben wir bei der Tauchflasche schon gesehen), müssen diese Hohlräume besonders gut aufpassen. 
					Sonst entsteht ein gefährliches Ungleichgewicht. Schau dir die Grafik an:</p>
					<p><strong>1. Stirnhöhle & 2. Nasennebenhöhlen</strong><br>
					Diese Hohlräume sitzen in unserem Schädelknochen, direkt über und hinter der Nase. Sie sind mit Luft gefüllt und über kleine Gänge mit dem Rachenraum verbunden. 
					Beim Abtauchen muss hier der Druck ausgeglichen werden.</p>
					<p><strong>3. Mittelohr</strong><br>
					Das ist der Raum hinter deinem Trommelfell (das wir im letzten Bild gesehen haben). Auch hier muss die Luft „mitatmen“, damit das Trommelfell nicht nach innen gedrückt wird. 
					Über die Eustachische Röhre (der Verbindungsschlauch zum Rachen) kann Luft nachströmen – beim Druckausgleich „knackt“ es dann kurz.</p>
					<p><strong>4. Luftröhre & 5. Lunge</strong><br>
					Die Lunge ist der größte luftgefüllte Raum. Sie ist über die Luftröhre mit dem Mund verbunden. Beim Tauchen atmen wir aus der Tauchflasche ein, 
					deren Luft bereits den richtigen Druck hat. So bleibt die Lunge geschützt.</p>
					<p><strong>6. Die Tauchmaske</strong><br>
					Das ist ein künstlicher Lufthohlraum! Die Maske schließt mit einem Luftpolster vor deinen Augen ab. Beim Abtauchen presst das Wasser von außen dagegen. 
					Deshalb musst du beim Tauchen durch die Nase in die Maske ausatmen, um den Druck auszugleichen. Sonst würde sie wie ein Saugnapf auf deinem Gesicht kleben!</p>
					<p><strong>Warum ist der Druckausgleich so wichtig?</strong><br>
					Luft lässt sich unter Druck zusammendrücken. Wenn die Hohlräume das nicht können, entsteht ein starker Unterdruck. Das kann sehr wehtun. 
					Deshalb müssen Taucher beim Abtauchen immer wieder ausatmen und dabei die Nase zuhalten – so kann frische Luft in alle Hohlräume nachströmen.</p>
					<p><strong>Was passiert bei einer Erkältung?</strong><br>
					Es gibt Hohlräume, die nicht am Druckausgleich teilnehmen können, wie zum Beispiel kleine Knochenhöhlen im Schädel (die Siebbeinzellen) oder Kariesnester in Zähnen. 
					Wenn du eine Erkältung hast, schwellen deine Schleimhäute an. Die kleinen Verbindungsgänge in Nase und Rachen werden blockiert. 
					Der Druckausgleich schlägt fehl, und es drohen schmerzhafte Quetschungen (die Fachleute nennen das Barotrauma). Deshalb gilt: Nie mit einer Erkältung tauchen gehen!</p>`,
                    image: "bilder/2_2_Hohlraum.jpg"
                },
                {
                    id: "kap2-3",
                    title: "Druckausgleich",
                    text: `<p>Beim Tauchen presst das Wasser von außen auf unsere Ohren. Damit das nicht wehtut, müssen Taucher einen Trick anwenden: den Druckausgleich. Schau dir die linke Seite des Bildes an:</p>
					<p><strong>So funktioniert der Druckausgleich (die Valsalva-Methode):</strong><br>
					<strong>1. Normalzustand (ganz oben):</strong> Das Trommelfell ist entspannt, und die Eustachische Röhre (der Verbindungsschlauch zwischen Ohr und Rachen) ist frei. Alles ist im Gleichgewicht.<br>
					<strong>2. Beim Abtauchen (Mitte):</strong><br> Der Wasserdruck wird stärker. Das Trommelfell wird nach innen gedrückt (es "wölbt sich nach innen"). Das tut unangenehm weh!<br>
					<strong>3. Der Trick (unten):</strong> Jetzt kommt die Valsalva-Methode ins Spiel. So geht's: Du schließt den Mund fest, drückst deine Nasenflügel 
					mit den Fingern zu und presst ganz sanft Luft aus der Lunge durch die Nase nach oben. Durch diesen leichten Überdruck im Rachen öffnet sich die Eustachische Röhre. 
					Frische Luft strömt ins Mittelohr, das Trommelfell ploppt in seine Ausgangslage zurück – und der Schmerz verschwindet! Wichtig: Mache den Druckausgleich frühzeitig und regelmäßig alle paar Meter!</p>
					<p><strong>Die Gefahr bei einer Erkältung (rechte Seite)</strong><br>
					Ganz anders sieht es aus, wenn du erkältet bist. Wie du auf der rechten Seite siehst, sind bei einer Erkältung die Schleimhäute geschwollen und verstopft durch Schleim. 
					Die Eustachische Röhre ist dann dicht.</p>
					<p>Wenn du jetzt tauchst, kann die Luft nicht mehr ins Mittelohr nachströmen. Der Druck von außen wird immer stärker, das Trommelfell wird extrem nach innen gezogen – 
					das kann sehr schmerzhaft werden und sogar das Trommelfell verletzen (das nennt man Barotrauma).</p>
					<p>Deshalb gilt die eiserne Regel: <strong>Nie mit einer Erkältung tauchen gehen!</strong> (Das zeigt auch das Verbotsschild oben rechts). Warte lieber, bis deine Nase wieder frei ist!</p>`,
                    image: "bilder/2_3_Druckausgleich.jpg"
                },
                {
                    id: "kap2-4",
                    title: "Lunge & Druck",
                    text: `<p>Wenn wir tauchen, ist unsere Lunge der wichtigste Körperteil. Aber wusstest du, dass die Lunge beim Tauchen ganz unterschiedlich beansprucht wird, je nachdem, 
					wie du tauchst? Schau dir die beiden Seiten im Bild an:</p>
					<p><strong>Die linke Seite: Das Apnoe-Tauchen (Freitauchen)</strong><br>
					Beim Apnoe-Tauchen hältst du die Luft an und tauchst ohne Flasche. Wenn du tiefer sinkst, drückt das Wasser immer stärker auf deinen Brustkorb. 
					Wie du im kleinen Kreis siehst, wird die Lunge mit zunehmender Tiefe immer weiter zusammengedrückt – sie schrumpft regelrecht. Das ist für trainierte Freitaucher normal, 
					aber für uns eine große körperliche Anstrengung.</p>
					<p><strong>Die rechte Seite: Das Gerätetauchen</strong><br>
					Beim Gerätetauchen mit Flasche ist das ganz anders! Du atmest durch den Atemregler Luft ein, die bereits den exakten Druck deiner aktuellen Tauchtiefe hat. 
					Der Druck von außen und der Druck in deiner Lunge sind also immer im Gleichgewicht. Wie du im rechten Kreis siehst, wird die Lunge nicht zusammengedrückt, sondern bleibt prall gefüllt.</p>
					<p><strong>Das physikalische Gesetz (Boyle-Mariotte)</strong><br>
					Hier kommt ein wichtiges Gesetz ins Spiel: Wenn du mit der Flasche tief unten bist und dann langsam nach oben tauchst, wird der Wasserdruck weniger. 
					Die Luft in deiner Lunge dehnt sich dabei wieder aus – sie nimmt wieder mehr Platz ein.</p>
					<p><strong>⚠️ Die goldenen Regeln des Gerätetauchens</strong><br>
					Weil sich die Luft beim Auftauchen ausdehnt, gelten zwei absolute Grundregeln, die du unten im Kasten siehst:<br>
					<strong>1. Niemals die Luft anhalten beim Aufsteigen!</strong><br>
					Wenn du die Luft anhalten würdest, könnte die sich ausdehnende Luft nicht entweichen. Das würde deine Lunge aufblähen wie einen Luftballon und das empfindliche Lungengewebe schwer verletzen. 
					Deshalb: Atme auf dem Weg nach oben immer gleichmäßig weiter! (Siehst du das kleine Symbol mit der Hand und dem Mund? Es erinnert daran, immer auszuatmen.)<br>
					<strong>2. Niemals zu schnell aufsteigen!</strong><br>
					Wenn du zu schnell nach oben schießt, kann die Luft nicht schnell genug entweichen. Steige deshalb immer langsam und entspannt auf, damit sich deine Lunge an den geringer werdenden Druck anpassen kann.</p>`,
                    image: "bilder/2_4_Lunge.jpg"
                },
                {
                    id: "kap2-5",
                    title: "Was ist Apnoe?",
					type: "stacked",
                    subrows: [
                        {
							subTitle: "Tauchen ohne Flasche",					
							text: `<p>Vielleicht kennst du das schon aus dem Schwimmbad: Beim Streckentauchen hältst du die Luft an und tauchst eine Bahn entlang, ohne eine Tauchflasche zu benutzen. 
							Das nennt man <strong>Apnoe-Tauchen</strong>.</p>
							<p><strong>Eine echte Sportart</strong><br>
							Apnoe ist aber viel mehr als nur ein Spiel im Schwimmbad – es ist eine richtige Sportart! Trainierte Apnoe-Taucher können mit nur einem einzigen Atemzug unglaublich lange unter 
							Wasser bleiben oder sehr tief tauchen. Sie trainieren ihren Körper und ihren Geist über Jahre, um das zu schaffen.</p>
							<p><strong>Was ist möglich?</strong><br>
							Schau dir diese verrückten Rekorde an:</p>
							<p>• <strong>Zeit:</strong> Der Franzose Stéphane Mifsud hielt es ganze <strong>11 Minuten und 35 Sekunden</strong> unter Wasser aus – ohne einmal zu atmen!</p>
							<p>• <strong>Strecke:</strong> Der Pole Mateusz Malina tauchte mit einem Atemzug <strong>250 Meter</strong> weit – das sind zehn Bahnen in einem Schwimmbad!</p>
							<p>• <strong>Tiefe:</strong> Der Russe Alexey Molchanov tauchte mit nur einem Atemzug <strong>137 Meter</strong> tief ins Meer hinab. Das ist tiefer als ein 40-stöckiges Hochhaus hoch ist!</p>`,
							image: "bilder/2_5_Apnoe.jpg"
						},
						{
							subTitle: "Atmung bei Apnoe",
							text:`<p><strong>Die goldene Regel vor dem Tauchen: Richtig atmen!</strong><br>
							Bevor du losschwimmst, musst du deinen Körper vorbereiten. Atme ein paar Mal ruhig und tief ein und aus. <strong>Hyperventiliere nicht!</strong> 
							Das bedeutet, du darfst nicht hektisch und extrem schnell hintereinander ein- und ausatmen. Denn wenn du zu viel Luft einatmest, denkt dein Gehirn: 
							<em>„Alles super, ich habe genug Sauerstoff!“</em> – und du merkst nicht, dass dir eigentlich schon die Luft ausgeht. Das ist sehr gefährlich!</p>`,
							image: "bilder/2_5_1_Apnoe_Atmung.jpg"
						},
						{
							subTitle: "Schwimmbad-Blackout",
							text: `<p>Wenn du die Luft anhältst und tauchst, kann es passieren, dass dein Gehirn plötzlich keinen Sauerstoff mehr bekommt. Dann schaltest du einfach ab – du wirst ohnmächtig. 
							Das nennt man <strong>Blackout</strong>. Das Schlimme daran: Du merkst es oft nicht vorher. Du fühlst dich vielleicht noch super, aber plötzlich bist du weg.<br>
							<strong>Deshalb gilt:</strong> Tauche niemals allein! Immer ein Buddy (ein Freund oder Erwachsener) muss über Wasser sein und auf dich aufpassen. Und: Höre sofort auf, 
							wenn du ein Kribbeln oder Druck in der Lunge spürst.</p>`,
							image: "bilder/2_5_2_Apnoe_Blackout.jpg"
						}
					]                    
                }
			],
            quiz: {
                questionPool: [
                    {
                        question: "Aus wie vielen Bereichen besteht das Ohr?",
                        options: ["2", "3", "4", "5", "1"],
                        correct: 1
                    },
                    {
                        question: "Was ist das Außenohr?",
                        options: ["Die Ohrmuschel", "Das Trommelfell", "Die Hörschnecke", "Das Gleichgewichtsorgan", "Die Eustachische Röhre"],
                        correct: 0
                    },
                    {
                        question: "Was trennt das Außenohr vom Mittelohr?",
                        options: ["Die Hörschnecke", "Das Trommelfell", "Die Gehörknöchelchen", "Das Gleichgewichtsorgan", "Die Ohrmuschel"],
                        correct: 1
                    },
                    {
                        question: "Wie heißen die drei Gehörknöchelchen?",
                        options: ["Hammer, Amboss, Steigbügel", "Klinge, Griff, Spitze", "Rad, Achse, Speiche", "Trommel, Pfeife, Glocke", "Stein, Eisen, Glas"],
                        correct: 0
                    },
                    {
                        question: "Was macht die Hörschnecke?",
                        options: ["Sie fängt Schall auf", "Sie wandelt Schwingungen in elektrische Signale um", "Sie hält das Gleichgewicht", "Sie schützt das Trommelfell", "Sie verbindet Ohr und Rachen"],
                        correct: 1
                    },
                    {
                        question: "Was macht das Gleichgewichtsorgan?",
                        options: ["Es hört Geräusche", "Es sorgt dafür, dass wir wissen, wo oben und unten ist", "Es schützt vor Kälte", "Es leitet Schall weiter", "Es produziert Ohrenschmalz"],
                        correct: 1
                    },
                    {
                        question: "Was ist die Eustachische Röhre?",
                        options: ["Ein Verbindungsschlauch zwischen Mittelohr und Rachen", "Ein Knochen", "Ein Muskel", "Ein Sinnesorgan", "Ein Teil der Hörschnecke"],
                        correct: 0
                    },
                    {
                        question: "Welche Aussagen über das Ohr sind richtig? (Mehrere Antworten möglich)",
                        options: ["Es gibt drei Bereiche", "Das Trommelfell trennt außen und mittel", "Die Hörschnecke ist mit Flüssigkeit gefüllt", "Das Gleichgewichtsorgan ist im Außenohr", "Die Gehörknöchelchen heißen Hammer, Amboss und Steigbügel"],
                        correct: [0, 1, 2, 4]
                    },
                    {
                        question: "Warum knackt es beim Tauchen?",
                        options: ["Weil die Eustachische Röhre geöffnet wird", "Weil das Trommelfell platzt", "Weil Wasser ins Ohr läuft", "Weil die Hörschnecke schwingt", "Weil der Druck zu hoch ist"],
                        correct: 0
                    },
                    {
                        question: "Was passiert, wenn die Eustachische Röhre nicht geöffnet ist?",
                        options: ["Es tut weh", "Man hört besser", "Nichts", "Man wird ohnmächtig", "Das Trommelfell heilt"],
                        correct: 0
                    },
                    {
                        question: "Welche Hohlräume sitzen im Schädel? (Mehrere Antworten möglich)",
                        options: ["Stirnhöhle", "Nasennebenhöhlen", "Lunge", "Luftröhre", "Tauchmaske"],
                        correct: [0, 1]
                    },
                    {
                        question: "Wo muss überall Druck ausgeglichen werden? (Mehrere Antworten möglich)",
                        options: ["Im Mittelohr", "In den Nasennebenhöhlen", "In der Lunge", "In der Tauchmaske", "In den Flossen"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist die Tauchmaske für ein Hohlraum?",
                        options: ["Ein natürlicher", "Ein künstlicher Lufthohlraum", "Ein Wasserhohlraum", "Ein Knochen", "Ein Muskel"],
                        correct: 1
                    },
                    {
                        question: "Warum muss man in die Maske ausatmen?",
                        options: ["Um den Druck auszugleichen", "Um sie zu kühlen", "Um sie zu reinigen", "Um Wasser rauszulassen", "Um besser zu hören"],
                        correct: 0
                    },
                    {
                        question: "Was passiert, wenn der Druckausgleich nicht klappt? (Mehrere Antworten möglich)",
                        options: ["Es tut weh", "Es entsteht ein Unterdruck", "Das Trommelfell wird verletzt", "Nichts", "Man hört besser"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist ein Barotrauma?",
                        options: ["Eine Verletzung durch Druckunterschiede", "Eine Erkältung", "Ein Knochenbruch", "Eine Augenentzündung", "Ein Hautausschlag"],
                        correct: 0
                    },
                    {
                        question: "Warum darf man mit Erkältung nicht tauchen? (Mehrere Antworten möglich)",
                        options: ["Weil die Verbindungsgänge blockiert sind", "Weil der Druckausgleich fehlschlägt", "Weil es wehtut", "Weil man zu müde ist", "Weil die Maske beschlägt"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Welche Aussagen über Hohlräume sind richtig? (Mehrere Antworten möglich)",
                        options: ["Die Lunge ist der größte Hohlraum", "Die Tauchmaske ist ein künstlicher Hohlraum", "Bei Erkältung sind die Gänge blockiert", "Hohlräume brauchen keinen Druckausgleich", "Die Stirnhöhle sitzt im Bauch"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was passiert mit der Luft in den Hohlräumen beim Abtauchen?",
                        options: ["Sie wird zusammengedrückt", "Sie dehnt sich aus", "Sie bleibt gleich", "Sie entweicht", "Sie wird warm"],
                        correct: 0
                    },
                    {
                        question: "Welche Hohlräume nehmen nicht am Druckausgleich teil? (Mehrere Antworten möglich)",
                        options: ["Kariesnester in Zähnen", "Siebbeinzellen (wenn verschlossen)", "Die Lunge", "Das Mittelohr", "Die Nasennebenhöhlen"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was ist die Valsalva-Methode?",
                        options: ["Nase zuhalten und sanft Luft ausatmen", "Mund weit öffnen", "Schnell auftauchen", "Tief einatmen", "Die Maske abnehmen"],
                        correct: 0
                    },
                    {
                        question: "Was passiert beim Abtauchen mit dem Trommelfell?",
                        options: ["Es wölbt sich nach innen", "Es bleibt entspannt", "Es wölbt sich nach außen", "Es platzt", "Es schwingt"],
                        correct: 0
                    },
                    {
                        question: "Was macht die Eustachische Röhre beim Druckausgleich?",
                        options: ["Sie öffnet sich", "Sie schließt sich", "Sie platzt", "Sie schwillt an", "Sie bleibt gleich"],
                        correct: 0
                    },
                    {
                        question: "Wann sollte man den Druckausgleich machen?",
                        options: ["Frühzeitig und regelmäßig", "Nur wenn es wehtut", "Nur am Anfang", "Nur beim Auftauchen", "Gar nicht"],
                        correct: 0
                    },
                    {
                        question: "Welche Aussagen über den Druckausgleich sind richtig? (Mehrere Antworten möglich)",
                        options: ["Er ist wichtig", "Er verhindert Schmerzen", "Er öffnet die Eustachische Röhre", "Er ist nur für Profis", "Er funktioniert auch bei Erkältung"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Warum ist der Druckausgleich bei Erkältung gefährlich? (Mehrere Antworten möglich)",
                        options: ["Weil die Röhre verstopft ist", "Weil das Trommelfell verletzt werden kann", "Weil es zu Schmerzen kommt", "Weil die Nase läuft", "Weil man hustet"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was passiert, wenn man den Druckausgleich nicht macht? (Mehrere Antworten möglich)",
                        options: ["Es tut weh", "Das Trommelfell kann verletzt werden", "Nichts", "Man hört besser", "Man wird ohnmächtig"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was ist das „Ploppen“ im Ohr?",
                        options: ["Das Öffnen der Eustachischen Röhre", "Das Platzen des Trommelfells", "Das Eindringen von Wasser", "Das Schwingen der Hörschnecke", "Das Zuschlagen der Ohrmuschel"],
                        correct: 0
                    },
                    {
                        question: "Welche Methode gibt es noch für den Druckausgleich? (Mehrere Antworten möglich)",
                        options: ["Valsalva", "Schlucken", "Gähnen", "Schnell auftauchen", "Tief einatmen und Luft anhalten"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist die häufigste Ursache für Schmerzen beim Abtauchen?",
                        options: ["Fehlender Druckausgleich", "Zu kaltes Wasser", "Zu enge Maske", "Zu schnelles Schwimmen", "Zu viel Blei"],
                        correct: 0
                    },
                    {
                        question: "Was ist Apnoe?",
                        options: ["Tauchen mit Flasche", "Tauchen ohne Flasche mit angehaltener Luft", "Schwimmen an der Oberfläche", "Schnorcheln", "Tauchen mit Blei"],
                        correct: 1
                    },
                    {
                        question: "Wie lange hielt Stéphane Mifsud die Luft an?",
                        options: ["5 Minuten", "11 Minuten und 35 Sekunden", "3 Minuten", "20 Minuten", "1 Minute"],
                        correct: 1
                    },
                    {
                        question: "Wie weit tauchte Mateusz Malina mit einem Atemzug?",
                        options: ["50 m", "100 m", "250 m", "500 m", "10 m"],
                        correct: 2
                    },
                    {
                        question: "Wie tief tauchte Alexey Molchanov?",
                        options: ["50 m", "100 m", "137 m", "200 m", "10 m"],
                        correct: 2
                    },
                    {
                        question: "Was darf man vor dem Apnoe-Tauchen nicht machen?",
                        options: ["Hyperventilieren", "Ruhig atmen", "Tief einatmen", "Ausatmen", "Entspannen"],
                        correct: 0
                    },
                    {
                        question: "Was ist ein Schwimmbad-Blackout?",
                        options: ["Ohnmacht durch Sauerstoffmangel", "Ein Stromausfall", "Ein Sprung ins Wasser", "Ein Tauchrekord", "Eine Erkältung"],
                        correct: 0
                    },
                    {
                        question: "Warum ist Hyperventilieren gefährlich?",
                        options: ["Weil das Gehirn denkt, es sei genug Sauerstoff da", "Weil man zu viel Wasser trinkt", "Weil man zu schnell schwimmt", "Weil man zu tief taucht", "Weil man zu warm wird"],
                        correct: 0
                    },
                    {
                        question: "Was ist die goldene Regel beim Apnoe-Tauchen?",
                        options: ["Niemals allein tauchen", "Immer so tief wie möglich", "Immer so lange wie möglich", "Immer ohne Maske", "Immer mit Blei"],
                        correct: 0
                    },
                    {
                        question: "Welche Aussagen über Apnoe sind richtig? (Mehrere Antworten möglich)",
                        options: ["Es ist eine Sportart", "Rekorde sind beeindruckend", "Es ist gefährlich", "Man sollte immer einen Buddy haben", "Es ist ungefährlich"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was passiert bei einem Blackout? (Mehrere Antworten möglich)",
                        options: ["Man wird ohnmächtig", "Man merkt es oft nicht vorher", "Man braucht sofort Hilfe", "Man schwimmt weiter", "Man atmet tief ein"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was passiert mit der Lunge beim Auftauchen mit der Flasche?",
                        options: ["Die Luft dehnt sich aus", "Sie zieht sich zusammen", "Sie bleibt gleich", "Sie füllt sich mit Wasser", "Sie platzt"],
                        correct: 0
                    },
                    {
                        question: "Was ist das Boyle-Mariotte-Gesetz?",
                        options: ["Luft dehnt sich bei Druckabfall aus", "Wasser ist schwerer als Luft", "Schall ist schnell", "Licht wird gebrochen", "Blei zieht nach unten"],
                        correct: 0
                    },
                    {
                        question: "Was darf man beim Auftauchen niemals tun?",
                        options: ["Die Luft anhalten", "Ausatmen", "Langsam auftauchen", "Den Buddy ansehen", "Die Maske aufsetzen"],
                        correct: 0
                    },
                    {
                        question: "Warum darf man nicht zu schnell auftauchen?",
                        options: ["Weil die Luft nicht schnell genug entweichen kann", "Weil man sonst friert", "Weil man die Orientierung verliert", "Weil die Flasche leer wird", "Weil man zu viel Luft verbraucht"],
                        correct: 0
                    },
                    {
                        question: "Welche Aussagen über die Lunge sind richtig? (Mehrere Antworten möglich)",
                        options: ["Beim Apnoe-Tauchen wird sie zusammengedrückt", "Beim Gerätetauchen bleibt sie prall", "Beim Auftauchen dehnt sich die Luft aus", "Man darf die Luft anhalten", "Die Lunge ist der größte Hohlraum"],
                        correct: [0, 1, 2, 4]
                    },
                    {
                        question: "Was passiert, wenn man beim Auftauchen die Luft anhält?",
                        options: ["Die Lunge kann verletzt werden", "Nichts", "Man steigt schneller auf", "Man atmet besser", "Die Lunge zieht sich zusammen"],
                        correct: 0
                    },
                    {
                        question: "Wie schnell sollte man auftauchen?",
                        options: ["Maximal 10 m pro Minute", "So schnell wie möglich", "50 m pro Minute", "1 m pro Minute", "Egal"],
                        correct: 0
                    },
                    {
                        question: "Was ist die wichtigste Regel beim Auftauchen?",
                        options: ["Immer ausatmen", "Immer einatmen", "Luft anhalten", "Schnell auftauchen", "Die Augen zumachen"],
                        correct: 0
                    },
                    {
                        question: "Was passiert mit der Luft in der Lunge beim Abtauchen?",
                        options: ["Sie wird zusammengedrückt", "Sie dehnt sich aus", "Sie bleibt gleich", "Sie entweicht", "Sie wird warm"],
                        correct: 0
                    },
                    {
                        question: "Warum ist die Lunge beim Tauchen so wichtig? (Mehrere Antworten möglich)",
                        options: ["Sie ist der größte Hohlraum", "Sie muss den Druck aushalten", "Sie darf nicht verletzt werden", "Sie ist aus Stein", "Sie ist mit Wasser gefüllt"],
                        correct: [0, 1, 2]
                    }
                ]
            }
        },
        {
            id: "kap3",
            title: "Kapitel 3: Unsere Ausrüstung – Freunde fürs Leben",
            intro: "Die detaillierte Anatomie unserer Ausrüstungsgegenstände und deren korrekte Pflege.",
            subsections: [
                {
                    id: "kap3-1",
					title: "Die Grundausrüstung",
					type: "stacked",
                    subrows: [
                        {
							subTitle: "Die ABC",
							text: `<p>Wenn du ins Wasser willst, um die Unterwasserwelt zu erkunden, brauchst du nicht sofort eine schwere Tauchflasche. Für den Anfang reicht die <strong>ABC-Ausrüstung</strong>.</p>
							<p><strong>Was ist der Unterschied?</strong><br>
							Mit der ABC-Ausrüstung kannst du <strong>schnorcheln</strong>. Das heißt, du schwimmst an der Wasseroberfläche und schaust nach unten. 
							Wenn du aber wirklich nach unten tauchen und Fische aus der Nähe sehen willst, brauchst du eine Tauchflasche und einen Atemregler. Das nennt man dann <strong>Gerätetauchen</strong>.</p>
							<p><strong>Das „ABC“ steht für die drei wichtigsten Dinge. Merke dir: A ist eine Flosse, B ist wie eine Maske und C ist wie ein Schnorchel!</strong></p>
							<p><strong>A – sieht wie eine Flosse aus</strong><br>
							Flossen sind wie große Schwimmflossen für deine Füße. Sie geben dir einen starken Vortrieb, damit du dich im Wasser schnell und ohne viel Kraftaufwand fortbewegen kannst. 
							Aber wusstest du, dass es verschiedene Arten von Flossen gibt? Es gibt längere, härtere Flossen für starke Strömungen und kürzere, weichere Flossen, die wendiger sind.</p>
							<p><strong>B – sieht wie eine Maske aus</strong><br>
							Sie ist wie eine große Unterwasserbrille. Sie sorgt dafür, dass deine Augen geschützt sind und du ein Luftpolster vor der Nase hast. 
							So kannst du scharf sehen und auch durch die Nase ausatmen, um den Druck in der Maske auszugleichen. <em>(Das „B“ erinnert dich an das Wort „Brille“ – denn eine Maske ist ja eine große Brille!)</em></p>
							<p><strong>C – sieht wie ein Schnorchel aus</strong><br>
							Das ist der gelbe Schlauch. Er hat oben eine Öffnung und unten ein Mundstück. Wenn du an der Wasseroberfläche schwimmst, kannst du durch den Schnorchel atmen, 
							ohne deinen Kopf aus dem Wasser heben zu müssen. So kannst du stundenlang die Fische beobachten!</p>`,
							image: "bilder/3_1_ABC.jpg"
						},
						{
							subTitle: "Die Flossen",
							text: `<p><strong>Welche Flosse passt zu dir?</strong><br>
							•	<strong>Geräteflossen (offene Flossen):</strong> Bei diesen Flossen ist die Ferse offen. Du ziehst sie mit einem Band über spezielle Neopren-Füßlinge (das sind warme Socken aus Neopren). 
							Sie sind ideal für kalte Gewässer und schützen deine Füße an steinigen Ufern.<br>
							•	<strong>Fußteilflossen (geschlossene Flossen):</strong> Diese haben einen geschlossenen Schuh, den du wie einen normalen Schuh anziehst. Sie sind perfekt, 
							um barfuß im warmen Schwimmbad oder im Meer zu schwimmen.</p>
							<p><strong>Länge und Härte machen den Unterschied</strong><br>
							•	<strong>Längere, härtere Flossen</strong> geben dir einen enormen Vortrieb. Das ist super, wenn du gegen eine starke Strömung anschwimmen musst.<br>
							•	<strong>Kürzere, weichere Flossen</strong> sind kraftsparend und wendig. Sie sind ideal für flaches Wasser oder wenn du im Schwimmbad trainierst.</p>`,
							image: "bilder/3_1_1_Flossen.jpg"
						}
					]
                },
                {
                    id: "kap3-2",
                    title: "Die Tauchausrüstung",
					type: "stacked",
                    subrows: [
                        {
							subTitle: "Übersicht",
							text: `<p>Wenn ein Taucher ins Wasser geht, sieht er aus wie ein Astronaut! Er braucht nämlich eine ganze Menge Ausrüstung, um sicher atmen und sich bewegen zu können. 
							Schau dir das große Bild mit dem Taucher in der Mitte an. Das sind die wichtigsten Teile:</p>
							<p>•	<strong>Die Tauchflasche</strong> (mit zwei Ventilen oben): Darin ist die Pressluft, die wir schon kennengelernt haben – bis zu 300 bar!<br>
							•	<strong>Das Atemregler-Set:</strong> Das ist das Herzstück. Es besteht aus zwei ersten Stufen (die oben an der Flasche sitzen) und zwei zweiten Stufen (das sind die Atemregler). 
							Eine zweite Stufe hast du beim Tauchen im Mund – das ist dein Hauptregler. Die andere zweite Stufe ist dein Reserve-Regler. Er hängt an einem kurzen Schlauch, 
							der direkt mit der ersten Stufe verbunden ist, und ist mit einem Bungee (einem Gummiband) am Hals befestigt.<br>
							•	<strong>Das Manometer:</strong> Die kleine runde Anzeige, die dir zeigt, wie viel Luft noch in der Flasche ist.<br>
							•   <strong>Der Tauchcomputer:</strong> Das ist das kleine Gerät am Handgelenk (wie eine schlaue Uhr). Er misst die Zeit und die Tiefe und rechnet aus, wie lange du noch unter 
							Wasser bleiben darfst. So weißt du immer, wann du auftauchen musst.<br>
							•	<strong>Die Tauchmaske, der Schnorchel, die Flossen, die Tauchlampe</strong> und die <strong>Haube, Füßlinge und Handschuhe</strong> gegen die Kälte.<br>
							•	<strong>Das Jacket (BCD):</strong> deine Schwimmweste unter Wasser. Hast du dich schon gefragt, was das für eine dicke Weste ist, die der Taucher trägt? 
							Das ist das Jacket (manchmal auch BCD genannt). Es ist wie ein aufblasbarer Rettungsring. Wenn du an der Oberfläche treiben willst, drückst du auf einen Knopf und die 
							Weste füllt sich mit Luft aus der Flasche. Dann treibst du wie ein Korken oben. Wenn du abtauchen willst, lässt du die Luft wieder raus. So hilft du dir, im Wasser zu schweben 
							(das nennt man Tarierung).</p>`,
							image: "bilder/3_2_Ausruestung.jpg"
						},
						{
							subTitle: "Die Tauchmaske",
							text: `<p>Schau dir die linke Detailzeichnung an. Die Maske ist viel mehr als eine einfache Brille:</p>
							•	Das <strong>Maskenglas</strong> besteht aus gehärtetem Sicherheitsglas, damit es nicht so leicht zerbricht.<br>
							•	Der <strong>Maskenkörper</strong> aus Silikon ist flexibel und schmiegt sich an dein Gesicht an.<br>
							•	Ganz wichtig ist der <strong>Nasenerker</strong> unter der Nase! Durch ihn kannst du deine Nase zuhalten, um den Druckausgleich zu machen (das haben wir beim Ohr gelernt).<br>
							•	Mit der <strong>Maskenschnalle</strong> und dem <strong>Maskenband</strong> stellst du die Maske perfekt ein, damit kein Wasser eindringt.</p>`,
							image: "bilder/3_2_1_Maske.jpg",
						},
						{
							subTitle: "Das Jacket",
							text: `<p>•	Der <strong>Inflatorschlauch</strong> ist der dicke Schlauch vorne. Wenn du mitten im Wasser schweben willst, drückst du auf den Knopf an diesem Schlauch. 
							Dann strömt Luft aus der Flasche in deine Weste und du steigst ein Stück nach oben. Wenn du wieder sinken willst, hältst du den Schlauch hoch und drückst auf den Knopf oben am Jacket. 
							Dann entweicht die Luft mit einem lauten Zischen, und du sinkst langsam nach unten.<br>
							•	Die <strong>Schnellablässe</strong> (kleine Ventile oben und unten) lassen die Luft ganz schnell wieder entweichen, wenn du abtauchen willst.<br>
							•	Der <strong>Bauchgurt</strong> und der <strong>Flaschengurt</strong> halten alles fest am Körper.<br>
							•	In den <strong>Bleitasche</strong> kommt das Blei hinein, damit du nicht wie ein Korken nach oben treibst.<br>
							•	Und die <strong>D-Ringe</strong> sind kleine Ringe, an denen man die Taschenlampe oder andere Ausrüstung befestigen kann.</p>`,
							image: "bilder/3_2_2_Jacket.jpg",
						},
						{
							subTitle: "Der Atemregler-Set",
							text: `<p>Schau dir das Bild genau an. Oben auf der Flasche sitzen nicht ein, sondern <strong>zwei Ventile</strong> (das sind die Drehknöpfe, mit denen man die Flasche aufdreht). 
							An jedem Ventil ist eine <strong>1. Stufe</strong> befestigt – das ist der Teil, der den hohen Druck aus der Flasche reguliert.</p>
							<p><strong>Wichtig für die Sicherheit:</strong> Die <strong>primäre 1. Stufe</strong> (die Hauptstufe) sitzt auf dem <strong>rechten Ventil</strong>. 
							Die <strong>Reserve-1. Stufe</strong> (Backup) sitzt auf dem <strong>linken Ventil</strong>. So sind die beiden Systeme voneinander getrennt, und wenn eines ausfällt, 
							funktioniert das andere noch.</p>
							<p>Daran hängen verschiedene Schläuche mit jeweils einer <strong>2. Stufe</strong> (dem Atemregler für den Mund):</p>
							<p>• <strong>Der Hauptregler (Primär):</strong> Er hat einen <strong>langen, grünen Schlauch</strong>. Diesen Regler hast du beim Tauchen ganz normal im Mund. 
							Der lange Schlauch ist wichtig, damit du dich frei bewegen kannst und im Notfall genug Abstand zu deinem Partner hast.</p>
							<p>• <strong>Der Reserve-Regler (Backup):</strong> Er hat einen <strong>kurzen, gelben Schlauch</strong> und hängt an einem grünen Gummiband (Bungee) direkt unter deinem Kinn.</p>
							<p><strong>Was hängt noch an der Flasche?</strong><br>
							Neben den Atemreglern gibt es noch zwei wichtige Anschlüsse:</p>
							<p>• <strong>Der Finimeter (die Druckanzeige):</strong> Er hängt an einem <strong>roten Schlauch</strong> und zeigt dir an, wie viel Luft noch in der Flasche ist 
							(die Anzeige mit dem grünen, gelben und roten Bereich).</p>
							<p>• <strong>Der Inflatorschlauch:</strong> Er hängt an einem <strong>orangenen Schlauch</strong> und ist dafür da, dein Jacket (die Tarierweste) mit Luft zu füllen.</p>
							<h4>So funktioniert die Hilfe im Notfall:</h4>
							<p>Stell dir vor, dein Tauchpartner hat plötzlich keine Luft mehr. Dann gehst du so vor:</p>
							<p><strong>1.</strong> Du nimmst <strong>deinen eigenen Hauptregler (den langen grünen Schlauch) aus dem Mund</strong> und gibst ihn deinem Partner. 
							Der lange Schlauch ist dafür da, dass ihr genug Abstand habt und euch nicht in die Quere kommt.</p>
							<p><strong>2.</strong> Du selbst wechselst <strong>sofort auf deinen Reserve-Regler (den kurzen gelben Schlauch am Hals)</strong> und atmest daraus weiter.</p>
							<p><strong>Warum ist das so sicher?</strong><br>
							Weil du den Regler, der direkt vor deiner Nase hängt (den gelben), blind findest. Du musst nicht erst nach einem Schlauch suchen. So habt ihr beide 
							sofort wieder Luft, und keiner gerät in Panik. Das ist wie ein Zaubertrick – nur in echt und lebensrettend!</p>
							<p>Mit dieser Ausrüstung bist du perfekt ausgestattet für ein großes Unterwasser-Abenteuer!</p>`,
							image: "bilder/3_2_3_Atemregler.jpg"
						}
					]
                },
                {
                    id: "kap3-3",
                    title: "Die Tauchanzüge",
					type: "stacked",
                    subrows: [
                        {
							subTitle: "Anzugsarten",
							text: `<p>Stell dir vor, du springst im tiefsten Winter in einen kalten See – brrr, das wäre eiskalt! Deshalb tragen Taucher spezielle Anzüge. 
							Sie schützen nicht nur vor Kälte, sondern auch vor Kratzern an Felsen. Aber nicht jeder Anzug ist für jedes Wasser gleich.</p> 
							<p>Schau dir die fünf Bilder oben an (von links nach rechts):<br>
							1. <strong>Der Shorty</strong> (Warmes Wasser über 24 °C): Ein kurzer Anzug mit kurzen Armen und Beinen. Perfekt für einen Urlaub am warmen Strand, wo das Wasser wie eine warme Badewanne ist.<br>
							2. <strong>Der Nassanzug</strong> (Mäßig warm, 15–24 °C): Ein Einteiler (er bedeckt Arme und Beine). Hier kommt ein kleiner Trick ins Spiel: Durch den Kragen dringt ein bisschen Wasser in den Anzug. 
							Das ist aber Absicht! Der Körper wärmt dieses dünne Wasserpolster auf, und der Neoprenanzug hält die Wärme dann wie eine zweite Haut fest.<br>
							3. <strong>Nassanzug + Eisweste</strong> (Kühler, 10–18 °C): Wenn das Wasser kälter wird, reicht der normale Anzug nicht mehr. Taucher ziehen eine zusätzliche Weste über den Anzug und 
							setzen eine Kopfhaube auf. So bleibt die Körperwärme noch besser eingeschlossen.<br>
							4. <strong>Der Halbtrockenanzug</strong> (Kühl bis kalt, 12–20 °C): Er sieht aus wie ein normaler Nassanzug, hat aber an den Armen und Beinen enge Dichtungsmanschetten 
							(wie kleine Gummiringe). Dadurch kommt fast kein Wasser mehr rein und raus – er hält also viel wärmer!<br>
							5. <strong>Der Trockenanzug</strong> (Sehr kalt, unter 10 °C): Das ist der Super-Schutz für eiskalte Gewässer (oder sogar unter Eis!). Er ist meistens orange oder knallrot, 
							damit man gut gesehen wird. Hier dringt überhaupt kein Wasser ein. Der Taucher bleibt darin komplett trockenen – wie in einem wasserdichten Schneeanzug.</p>`,
							image: "bilder/3_3_Anzug.jpg"
						},
						{
							subTitle: "Achtung, Hitze an Land!",
							text: `<p>Neopren ist ein tolles Material, um im Wasser warm zu halten. Aber an Land, wenn die Sonne knallt, wird es in so einem Anzug ganz schnell superheiß! 
							Die Körperwärme kann nicht entweichen, und der Taucher schwitzt stark. Deshalb zieht man den Anzug an Land am besten erst kurz vor dem Tauchgang an oder rollt ihn an heißen Tagen bis zur Hüfte herunter.</p>
							<p><strong>Achtung, Sonnenlicht schadet dem Anzug! (Rechtes unteres Bild)</strong><br>
							So toll Neopren ist, es hat einen Feind: die <strong>UV-Strahlung</strong> der Sonne. Wie du auf dem rechten Bild siehst, wird das Material davon ganz trocken und brüchig. 
							Es bilden sich Risse, und die schönen Farben bleichen aus. Deshalb gilt die wichtige Regel: Tauchanzüge niemals in der pralle Sonne trocknen lassen! 
							Hänge sie lieber in den Schatten oder an einen schattigen Haken. So hast du länger Freude an deinem Anzug.</p>`,
							image: "bilder/3_3_1_Anzug.jpg"
						}
					]
                },
                {
                    id: "kap3-4",
                    title: "Richtiger Umgang & Pflege",
                    text: `<p>Deine Tauchausrüstung ist wie ein guter Freund – sie beschützt dich unter Wasser. Damit sie lange hält und immer sicher ist, musst du sie gut behandeln. 
					Hier sind die wichtigsten Regeln, die du auf den Bildern siehst:</p>
					<p><strong>1. Tauchflaschen immer hinlegen oder sichern!</strong><br>
					Eine Tauchflasche ist schwer und steht unter hohem Druck. Wenn sie umfällt, kann das gefährlich sein. Leg sie deshalb immer flach hin oder sichere sie gut, 
					damit sie nicht umkippen kann. (Und schwere Flaschen trägst du am besten gemeinsam mit einem Erwachsenen, wie unten rechts zu sehen ist!)</p>
					<p><strong>2. Flossen niemals auf das Flossenblatt stellen oder verbiegen!</strong><br>
					Flossen sind aus festem Kunststoff. Wenn du sie auf das Blatt stellst oder sie knickst, können sie brechen. Leg sie deshalb immer flach hin oder stelle sie auf den Fußteil.</p>
					<p><strong>3. Ausrüstung niemals werfen oder fallen lassen!</strong><br>
					Atemregler und Masken sind empfindlich. Wenn sie auf den Boden fallen, können sie kaputtgehen. Leg sie deshalb immer vorsichtig in deine Tauchtasche, anstatt sie hineinzuwerfen.</p>
					<p><strong>4. Nach jedem Tauchgang gründlich mit Süßwasser abspülen!</strong><br>
					Salzwasser und Sand können die Ausrüstung angreifen. Spüle deshalb alles – besonders den Atemregler und die Maske – nach dem Tauchen mit klarem Süßwasser ab.</p>
					<p><strong>5. Ausrüstung im Schatten lagern!</strong><br>
					Starke Hitze und direkte Sonne schaden dem Material. Leg deine Ausrüstung deshalb immer in den Schatten und nicht in die pralle Sonne.</p>
					<p><strong>6. Tauchanzüge gereinigt und gut getrocknet hängend lagern!</strong><br>
					Hänge deinen Anzug nach dem Abspülen auf einen Bügel, damit er gut trocknen kann. Am besten an einem schattigen, luftigen Ort. 
					(Und denk dran: Neopren besteht aus winzigen Gasbläschen, die durch UV-Strahlen spröde werden und ausbleichen – deshalb niemals in die Sonne hängen!)</p>
					<p><strong>7. Ausrüstung sauber halten und vor Sand und Dreck schützen!</strong><br>
					Sand in der Maske oder im Atemregler ist nicht nur unangenehm, sondern kann auch die Dichtungen kaputt machen. Bewahre deine Ausrüstung deshalb in einer sauberen Box auf.</p>
					<p><strong>8. Schwere Ausrüstung gemeinsam tragen!</strong><br>
					Eine Tauchflasche ist ganz schön schwer. Trage sie deshalb immer gemeinsam mit einem Erwachsenen oder benutze eine Tragehilfe.</p>
					<p><strong>Warum ist das alles so wichtig?</strong><br>
					Weil deine Ausrüstung dich unter Wasser schützt! Wenn sie gut gepflegt ist, funktioniert sie immer zuverlässig – und du kannst dich ganz auf dein Unterwasser-Abenteuer freuen.</p>`,
                    images: ["bilder/3_4_Pflege.jpg", "bilder/3_4_1_Pflege.jpg"]
                }
            ],
            quiz: {
                questionPool: [
                    {
                        question: "Wofür steht das „A“ in ABC?",
                        options: ["Atemregler", "Flosse", "Maske", "Schnorchel", "Jacket"],
                        correct: 1
                    },
                    {
                        question: "Wofür steht das „B“ in ABC?",
                        options: ["Flosse", "Maske (wie Brille)", "Schnorchel", "Blei", "Boot"],
                        correct: 1
                    },
                    {
                        question: "Wofür steht das „C“ in ABC?",
                        options: ["Flosse", "Maske", "Schnorchel", "Tauchcomputer", "Crème"],
                        correct: 2
                    },
                    {
                        question: "Was brauchst du zum Schnorcheln? (Mehrere Antworten möglich)",
                        options: ["Maske", "Schnorchel", "Flossen", "Tauchflasche", "Jacket"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist der Unterschied zwischen Schnorcheln und Tauchen? (Mehrere Antworten möglich)",
                        options: ["Beim Schnorcheln bleibt man an der Oberfläche", "Beim Tauchen geht man unter Wasser", "Schnorcheln braucht eine Flasche", "Tauchen braucht keine Maske", "Es gibt keinen Unterschied"],
                        correct: [0, 1]
                    },
                    {
                        question: "Welche Aussagen über die ABC-Ausrüstung sind richtig? (Mehrere Antworten möglich)",
                        options: ["Sie ist für Anfänger", "Sie besteht aus drei Teilen", "Sie ermöglicht Schnorcheln", "Sie ist schwerer als eine Tauchflasche", "Sie ist nur für Profis"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was macht die Maske? (Mehrere Antworten möglich)",
                        options: ["Sie schützt die Augen", "Sie schafft ein Luftpolster", "Sie lässt uns scharf sehen", "Sie filtert Wasser", "Sie zeigt den Druck an"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was macht der Schnorchel?",
                        options: ["Er lässt uns an der Oberfläche atmen", "Er filtert Wasser", "Er zeigt den Druck an", "Er wärmt die Luft", "Er schützt die Augen"],
                        correct: 0
                    },
                    {
                        question: "Was machen die Flossen?",
                        options: ["Sie geben Vortrieb", "Sie schützen die Füße", "Sie halten warm", "Sie zeigen den Druck an", "Sie filtern Wasser"],
                        correct: 0
                    },
                    {
                        question: "Welche Flossen gibt es? (Mehrere Antworten möglich)",
                        options: ["Geräteflossen (offen)", "Fußteilflossen (geschlossen)", "Lange, harte Flossen", "Kurze, weiche Flossen", "Elektrische Flossen"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was gehört zur Grundausrüstung? (Mehrere Antworten möglich)",
                        options: ["Tauchflasche", "Atemregler", "Jacket", "Tauchcomputer", "Fahrrad"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist die Tauchflasche? (Mehrere Antworten möglich)",
                        options: ["Sie enthält Pressluft", "Sie enthält Wasser", "Sie hat zwei Ventile", "Sie ist leicht", "Sie ist aus Glas"],
                        correct: [0, 2]
                    },
                    {
                        question: "Was macht der Tauchcomputer? (Mehrere Antworten möglich)",
                        options: ["Er misst die Zeit", "Er misst die Tiefe", "Er rechnet die Tauchzeit aus", "Er filtert Wasser", "Er wärmt die Luft"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist das Jacket? (Mehrere Antworten möglich)",
                        options: ["Eine aufblasbare Weste", "Ein Rettungsring", "Ein Atemregler", "Eine Flasche", "Ein Messgerät"],
                        correct: [0, 1]
                    },
                    {
                        question: "Wie füllt man das Jacket?",
                        options: ["Mit dem Inflatorschlauch", "Mit dem Mund", "Mit dem Finimeter", "Mit der Maske", "Mit den Flossen"],
                        correct: 0
                    },
                    {
                        question: "Welche Aussagen über die Grundausrüstung sind richtig? (Mehrere Antworten möglich)",
                        options: ["Die Flasche enthält bis zu 300 bar", "Der Atemregler hat zwei erste Stufen", "Das Jacket hilft beim Schweben", "Der Tauchcomputer ist eine Uhr", "Die Maske ist aus Glas"],
                        correct: [0, 1, 2, 3, 4]
                    },
                    {
                        question: "Was ist der Finimeter?",
                        options: ["Die Druckanzeige", "Ein Messgerät für die Tiefe", "Ein Atemregler", "Eine Flosse", "Ein Ventil"],
                        correct: 0
                    },
                    {
                        question: "Was ist der Inflatorschlauch?",
                        options: ["Er füllt das Jacket mit Luft", "Er misst den Druck", "Er atmet für uns", "Er schützt die Augen", "Er wärmt die Luft"],
                        correct: 0
                    },
                    {
                        question: "Was macht die Tauchmaske? (Mehrere Antworten möglich)",
                        options: ["Sie schützt die Augen", "Sie schafft ein Luftpolster", "Sie lässt uns scharf sehen", "Sie zeigt den Druck an", "Sie wärmt die Luft"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist der Nasenerker? (Mehrere Antworten möglich)",
                        options: ["Ein Teil der Maske", "Er hilft beim Druckausgleich", "Er ist unter der Nase", "Er ist aus Glas", "Er ist aus Metall"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Wie viele erste Stufen hat das Atemregler-Set?",
                        options: ["1", "2", "3", "4", "0"],
                        correct: 1
                    },
                    {
                        question: "Wo sitzt die primäre erste Stufe?",
                        options: ["Rechts", "Links", "In der Mitte", "Unten", "Oben"],
                        correct: 0
                    },
                    {
                        question: "Wo sitzt die Reserve-1. Stufe?",
                        options: ["Rechts", "Links", "In der Mitte", "Unten", "Oben"],
                        correct: 1
                    },
                    {
                        question: "Welche Farbe hat der Hauptregler-Schlauch?",
                        options: ["Grün", "Gelb", "Rot", "Blau", "Schwarz"],
                        correct: 0
                    },
                    {
                        question: "Welche Farbe hat der Reserve-Regler-Schlauch?",
                        options: ["Grün", "Gelb", "Rot", "Blau", "Schwarz"],
                        correct: 1
                    },
                    {
                        question: "Welche Farbe hat der Finimeter-Schlauch?",
                        options: ["Grün", "Gelb", "Rot", "Blau", "Schwarz"],
                        correct: 2
                    },
                    {
                        question: "Welche Farbe hat der Inflatorschlauch?",
                        options: ["Grün", "Gelb", "Rot", "Orange", "Blau"],
                        correct: 3
                    },
                    {
                        question: "Was machst du im Notfall, wenn dein Partner keine Luft hat? (Mehrere Antworten möglich)",
                        options: ["Du gibst ihm deinen Hauptregler", "Du wechselst auf den Reserve-Regler", "Du tauchst schnell auf", "Du hältst die Luft an", "Du gibst ihm deinen Finimeter"],
                        correct: [0, 1]
                    },
                    {
                        question: "Welche Aussagen über das Atemregler-Set sind richtig? (Mehrere Antworten möglich)",
                        options: ["Es hat zwei erste Stufen", "Es hat zwei zweite Stufen", "Der Reserve-Regler hängt am Hals", "Der Hauptregler hat einen langen Schlauch", "Der Finimeter ist ein Atemregler"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Warum ist der Reserve-Regler am Hals so sicher? (Mehrere Antworten möglich)",
                        options: ["Weil man ihn blind findet", "Weil er kurz ist", "Weil er gelb ist", "Weil er am Bungee hängt", "Weil er den Druck misst"],
                        correct: [0, 3]
                    },
                    {
                        question: "Wofür ist ein Shorty?",
                        options: ["Warmes Wasser über 24 °C", "Kaltes Wasser", "Sehr kaltes Wasser", "Eiswasser", "Immer"],
                        correct: 0
                    },
                    {
                        question: "Wofür ist ein Nassanzug?",
                        options: ["Mäßig warm (15–24 °C)", "Sehr kalt", "Warm", "Eiswasser", "Immer"],
                        correct: 0
                    },
                    {
                        question: "Wofür ist ein Trockenanzug?",
                        options: ["Sehr kalt (unter 10 °C)", "Warm", "Mäßig warm", "Immer", "Nie"],
                        correct: 0
                    },
                    {
                        question: "Was ist der Trick beim Nassanzug?",
                        options: ["Wasser dringt ein und wird vom Körper gewärmt", "Er ist wasserdicht", "Er ist aus Metall", "Er hat Heizung", "Er ist luftdicht"],
                        correct: 0
                    },
                    {
                        question: "Was ist der Unterschied zwischen Halbtrocken und Trocken? (Mehrere Antworten möglich)",
                        options: ["Halbtrocken hat Dichtungsmanschetten", "Trocken bleibt komplett trocken", "Halbtrocken ist für warmes Wasser", "Trocken ist aus Glas", "Es gibt keinen Unterschied"],
                        correct: [0, 1]
                    },
                    {
                        question: "Warum darf man den Anzug nicht in der prallen Sonne trocknen? (Mehrere Antworten möglich)",
                        options: ["Weil UV-Strahlung das Material brüchig macht", "Weil er schmilzt", "Weil er ausbleicht", "Weil er zu warm wird", "Weil er dann riecht"],
                        correct: [0, 2]
                    },
                    {
                        question: "Was passiert bei Hitze an Land im Anzug? (Mehrere Antworten möglich)",
                        options: ["Es wird superheiß", "Man schwitzt stark", "Man kühlt ab", "Man friert", "Nichts"],
                        correct: [0, 1]
                    },
                    {
                        question: "Welche Aussagen über Tauchanzüge sind richtig? (Mehrere Antworten möglich)",
                        options: ["Shorty ist für warmes Wasser", "Nassanzug lässt Wasser rein", "Trockenanzug bleibt trocken", "Halbtrocken hat Dichtungen", "Alle Anzüge sind gleich"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Welcher Anzug ist für 12–20 °C geeignet?",
                        options: ["Halbtrockenanzug", "Shorty", "Trockenanzug", "Nassanzug", "Eisweste"],
                        correct: 0
                    },
                    {
                        question: "Warum trägt man Neopren? (Mehrere Antworten möglich)",
                        options: ["Es hält warm", "Es schützt vor Kratzern", "Es ist leicht", "Es ist wasserdicht", "Es ist aus Glas"],
                        correct: [0, 1]
                    },
                    {
                        question: "Wie legt man Tauchflaschen ab? (Mehrere Antworten möglich)",
                        options: ["Hinlegen", "Sichern", "Aufrecht hinstellen", "Werfen", "In die Sonne legen"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was macht man mit Flossen? (Mehrere Antworten möglich)",
                        options: ["Nicht auf das Blatt stellen", "Nicht verbiegen", "Flach hinlegen", "Werfen", "In die Sonne legen"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was macht man mit Atemreglern und Masken? (Mehrere Antworten möglich)",
                        options: ["Nicht werfen", "Nicht fallen lassen", "Vorsichtig in die Tasche legen", "In die Sonne legen", "Mit Süßwasser abspülen"],
                        correct: [0, 1, 2, 4]
                    },
                    {
                        question: "Wie spült man die Ausrüstung?",
                        options: ["Mit Süßwasser", "Mit Salzwasser", "Mit Seife", "Mit Öl", "Gar nicht"],
                        correct: 0
                    },
                    {
                        question: "Wo lagert man die Ausrüstung?",
                        options: ["Im Schatten", "In der Sonne", "In der Hitze", "Im Wasser", "Im Sand"],
                        correct: 0
                    },
                    {
                        question: "Wie lagert man Tauchanzüge? (Mehrere Antworten möglich)",
                        options: ["Hängend", "Im Schatten", "In der Sonne", "Zusammengeknüllt", "Nass"],
                        correct: [0, 1]
                    },
                    {
                        question: "Warum schützt man die Ausrüstung vor Sand? (Mehrere Antworten möglich)",
                        options: ["Weil Sand die Dichtungen kaputt macht", "Weil Sand kratzt", "Weil Sand die Farbe ändert", "Weil Sand schwer ist", "Weil Sand nass ist"],
                        correct: [0, 1]
                    },
                    {
                        question: "Welche Aussagen über die Pflege sind richtig? (Mehrere Antworten möglich)",
                        options: ["Flaschen sichern", "Flossen nicht verbiegen", "Mit Süßwasser spülen", "Im Schatten lagern", "In der Sonne trocknen"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Warum trägt man schwere Ausrüstung gemeinsam?",
                        options: ["Weil sie schwer ist", "Weil sie groß ist", "Weil sie teuer ist", "Weil sie nass ist", "Weil sie kalt ist"],
                        correct: 0
                    },
                    {
                        question: "Was passiert, wenn man die Ausrüstung nicht pflegt? (Mehrere Antworten möglich)",
                        options: ["Sie geht kaputt", "Sie funktioniert nicht mehr sicher", "Sie bleibt gleich", "Sie wird besser", "Sie wird leichter"],
                        correct: [0, 1]
                    }
                ]
            }
        },
        {
            id: "kap4",
            title: "Kapitel 4: Vorbereitung ist alles – Der Start",
            intro: "Detailliertes Briefing, Handzeichen-Katalog und Checklisten für den sicheren Start.",
            subsections: [
                {
                    id: "kap4-1",
                    title: "Fitness, Hitze & Wohlbefinden",
                    text: `<p>Bevor du ins Wasser springst, musst du erst einmal checken, wie es dir geht. Tauchen ist nämlich anstrengend für deinen Körper. 
					Nur wenn du fit und gesund bist, macht es richtig Spaß! Achte vor dem Start auf diese drei Dinge:</p>
					<p><strong>Die Hitze: Ab in den Schatten!</strong><br>
					Stell dir vor, die Sonne knallt vom Himmel und du stehst in deinem dicken Neoprenanzug am Strand. Das ist wie in einem Backofen! Du schwitzt stark und dein Körper verliert viel Flüssigkeit.</p>
					<p><strong>Tipp:</strong> Halte dich vor dem Tauchgang im Schatten auf und trinke ausreichend Wasser. Ziehe den Neoprenanzug erst kurz vor dem Sprung ins Wasser an oder rolle ihn bis zur Hüfte herunter.</p>
					<p><strong>Der Körper: Frieren, Fieber oder Schmerzen?</strong><br>
					Dein Körper sendet dir Signale, wenn etwas nicht stimmt.</p>
					<p>• <strong>Frieren:</strong> Wenn dir jetzt schon kalt ist, wird es unter Wasser noch viel kälter. Du zitterst und dein Körper kann sich nicht mehr auf das Tauchen konzentrieren.</p>
					<p>• <strong>Fieber oder Schmerzen:</strong> Wenn du dich schlapp fühlst, Fieber hast, Kopfschmerzen oder Schnupfen (denk an den Druckausgleich!), darfst du nicht tauchen. 
					Dein Körper braucht dann Ruhe, um gesund zu werden.</p>
					<p><strong>Tipp:</strong> Wenn du dich nicht fit fühlst, verschiebe den Tauchgang lieber. Ein Tauchgang, der heute ausfällt, kann morgen nachgeholt werden – aber deine Gesundheit ist wichtiger!</p>
					<p><strong>Gruppenzwang: Trau dich, „Nein“ zu sagen!</strong><br>
					Manchmal wollen alle anderen tauchen, aber du fühlst dich nicht gut. Vielleicht hast du Angst oder fühlst dich krank. Das ist völlig in Ordnung!</p>
					<p><strong>Wichtig:</strong> Du musst nicht mitmachen, nur weil alle anderen es tun. Du bist der Chef über deinen eigenen Körper. Sagt dein Bauchgefühl „Nein“, 
					dann sag auch „Nein“ und bleib an Land. Ein guter Buddy versteht das und passt auf dich auf!</p>
					<p><strong>Merksatz für Kinder:</strong><br>
					<em>„Erst auf den Körper hören, dann ins Wasser gehen!“</em></p>`,
                    image: "bilder/4_1_Vorbereitung.jpg"
                },
                {
                    id: "kap4-2",
                    title: "Das professionelle Tauch-Briefing",
                    text: `<p>Bevor ein Taucher ins Wasser springt, wird erst einmal geredet! Das nennt man Briefing. Es ist wie ein wichtiges Team-Meeting vor dem großen Abenteuer. 
					Dabei besprechen die Taucher (die "Buddys") vier Hauptbereiche:</p>
					<p><strong>1. Mensch (Das Buddy-Team)</strong><br>
					•	Wie fühlt sich jeder heute? (Tagesform und Fitness prüfen)<br>
					•	Wer taucht mit wem? (Buddy-Teams einteilen)<br>
					•	Welche Handzeichen benutzen wir? (Kommunikation absprechen)</p>
					<p><strong>2. Tauchgang (Der Plan)</strong><br>
					•	Wie tief wollen wir tauchen? (Maximale Tiefe)<br>
					•	Wie lange bleiben wir unten? (Maximale Tauchzeit)<br>
					•	Wo schwimmen wir lang und wo tauchen wir wieder auf? (Route und Orientierung)</p>
					<p><strong>3. Gewässer (Die Umgebung)</strong><br>
					•	Gibt es gefährliche Strömungen oder Wellen?<br>
					•	Wie kalt ist das Wasser und wie weit können wir sehen?<br>
					•	Wo steigen wir ins Wasser ein und wo wieder aus?</p>
					<p><strong>4. Ausrüstung (Die Technik)</strong><br>
					•	Ist genug Luft in der Flasche? (Flaschendruck prüfen)<br>
					•	Funktionieren Atemregler und Jacket?<br>
					•	Haben wir alles dabei? (Maske, Flossen, Blei)</p>
					<p><strong>Die goldenen Regeln für Kinder (KTSA)</strong><br>
					Für Kinder gibt es beim Tauchen ganz besondere Regeln. Schau dir die Bilder oben an:<br>
					1. <strong>Tiefengrenzen einhalten:</strong> Kinder dürfen nicht so tief tauchen wie Erwachsene.<br>
					2. <strong>Maximal 1 Tauchgang am Tag:</strong> Kinder sollten nur einen Tauchgang pro Tag machen.<br>
					3. <strong>Immer langsam auftauchen:</strong> Nie nach oben schießen!<br>
					4. <strong>Nur mit einem erfahrenen Buddy tauchen:</strong> Niemals allein!<br>
					5. <strong>Erst ab 8 Jahren:</strong> Vor dem vollendeten 8. Lebensjahr darf man noch nicht tauchen. (Das zeigt das große "8+"-Schild).</p>
					<p><strong>Die KTSA-Stufen: Dein Tauch-Führerschein</strong><br>
					Unten im Bild siehst du die drei Stufen des KTSA (Kinder-Tauchsport-Abzeichen). Das ist wie ein Führerschein fürs Tauchen – du fängst klein an und wirst immer besser:<br>
					•	<strong>KTSA Bronze:</strong> Du darfst bis 5 Meter tief tauchen.<br>
					•	<strong>KTSA Silber:</strong> Du darfst bis 8 Meter tief tauchen.<br>
					•	<strong>KTSA Gold:</strong> Du darfst bis 12 Meter tief tauchen.</p>
					<p>Jede Stufe zeigt, dass du fleißig geübt hast und die Regeln perfekt beherrschst. So wirst du Schritt für Schritt ein echter Tauchprofi!</p>`,
                    images: ["bilder/4_2_Briefing.jpg", "bilder/4_2_1_Regeln.jpg"]
                },
                {
                    id: "kap4-3",
                    title: "Kommunikation unter Wasser",
                    type: "stacked",
                    subrows: [
                        {
                            subTitle: "Grundlegende Handzeichen",
                            text: `<p>Unter Wasser kann man nicht sprechen – der Atemregler ist ja im Mund! Damit sich Taucher trotzdem verständigen können, nutzen sie eine besondere Zeichensprache mit den Händen. 
							Diese Zeichen sind überall auf der Welt gleich, damit sich Taucher aus verschiedenen Ländern verstehen. Schau dir die Bilder genau an und mach die Zeichen am besten gleich mit!</p>
							<p><strong>Die wichtigsten Grundzeichen:</strong><br>
							👍 <strong>Das OK-Zeichen</strong><br>
							Daumen und Zeigefinger bilden einen Kreis, die anderen drei Finger zeigen nach oben. Das bedeutet: "Alles gut bei mir!" oder "Ich bin bereit!"</p>
							<p>✋ <strong>„Stimmt was nicht“ (Nicht OK)</strong><br>
							Wenn etwas nicht in Ordnung ist, hältst du deine flache Hand waagerecht vor die Brust und wippst damit hin und her (wie ein Boot auf Wellen). Das heißt: "Irgendetwas stimmt nicht!"</p>
							<p>👆 <strong>Problem mit dem Druckausgleich</strong><br>
							Du tippst mit dem Zeigefinger mehrfach an dein Ohr oder deine Schläfe. Das bedeutet: "Mein Ohr tut weh, ich brauche Hilfe beim Druckausgleich!"</p>
							<p>🥶 <strong>„Mir ist kalt“</strong><br>
							Du kreuzst die Arme vor der Brust und reibst deine Hände an den Schultern. Das ist das universelle Zeichen für: "Brrr, ich friere!"</p>
							<p>👉 <strong>„Du“</strong> und <strong>„Ich“</strong><br>
								Du: Du zeigst mit dem Zeigefinger direkt auf deinen Tauchpartner.<br>
								Ich: Du zeigst mit dem Zeigefinger auf deine eigene Brust.<br>
								So kannst du sagen: "Du sollst das machen" oder "Ich mache das."</p>
							<p>👍⬆️ <strong>„Nach oben / Auftauchen“</strong><br>
							Du ballst eine Faust und streckst den Daumen steil nach oben. Das bedeutet: "Lass uns auftauchen!"</p>
							<p>👎⬇️ <strong>„Nach unten / Abtauchen“</strong><br>
							Du ballst eine Faust und richtest den Daumen nach unten. Das bedeutet: "Lass uns tiefer gehen!"</p>
							<p>✋➡️ <strong>„Tiefe halten“</strong><br>
							Du hältst deine flache Hand waagerecht ausgestreckt und bewegst sie leicht hin und her. Das bedeutet: "Bleib auf dieser Höhe, tauche nicht tiefer!"</p>
							<p>🛑 <strong>„Stopp / Anhalten“</strong><br>
							Du streckst deine flache Hand wie ein Stoppschild nach vorne. Das bedeutet: "Halt an, geh nicht weiter!"</p>
							<p>✌️🖐️ <strong>„Frage nach dem Druck“</strong><br>
							Du tippst mit zwei flachen Fingern in die geöffnete Handfläche deiner anderen Hand. Damit fragst du deinen Partner: "Ist dein Druck in der Flasche noch in Ordnung?"</p>`,
                            image: "bilder/4_3_Zeichen.jpg"
                        },
						{
							subTitle: "Luftnot und Essoufflement",
							text: `<strong>Luftnot (Keine Luft / Atemnot)</strong>
							<p>Du hältst eine Hand waagerecht vor deinen Hals und bewegst sie von dir weg und wieder zum Hals zurück. Das bedeutet: <em>„Ich bekomme keine Luft!“</em> 
							oder <em>„Ich habe Atemnot!“</em> Dieses Zeichen ist ein absoluter Notfall und bedeutet, dass sofort geholfen werden muss!</p>
							<strong>Essoufflement (Panik-Atmung)</strong>
							<p>Du legst beide Hände flach auf die Brust und bewegst deine Arme vom Hals weg und wieder zurück (als würdest du nach Luft schnappen). 
							Deine Augen sind dabei weit aufgerissen oder fest zusammengekniffen. Das Zeichen zeigt an, dass du nicht mehr ein- oder ausatmen kannst und in Panik gerätst. 
							Auch hier muss der Partner sofort reagieren und dich beruhigen!</p>`,
							image: "bilder/4_3_0_Zeichen.jpg"
						},
                        {
                            subTitle: "Zahlen & Druckangabe in bar",
                            text: `<p>Unter Wasser kann man nicht rufen: „Wie viel Luft hast du noch?“ Deshalb nutzen Taucher ihre Hände, um Zahlen und den Druck in der Flasche anzuzeigen. 
							Damit es keine Verwirrung gibt, folgen sie einer klaren Philosophie: Es wird immer nur eine Hand benutzt, und jede Ziffer einer Zahl wird nacheinander einzeln gezeigt.</p>
							<p>Schau dir die Bilder an und achte genau darauf, wohin die Handfläche zeigt:</p>
							<p><strong>Die Zahlen von 1 bis 5</strong><br>
							Bei den Zahlen 1 bis 5 zeigst du die entsprechenden Finger (1 Finger, 2 Finger, bis zur ganzen Hand für die 5). Ganz wichtig dabei:
							<strong>Die Handfläche zeigt dabei immer zu deinem Tauchpartner.</strong> So kann er die Finger klar und deutlich erkennen.</p>
							<p><strong>Die Zahlen von 6 bis 9</strong><br>
							Bei den Zahlen 6 bis 9 drehst du deine Hand um! <strong>Die Handfläche zeigt jetzt zu dir selbst.</strong> Die Anzeige beginnt hier immer beim <strong>Zeigefinger</strong> (nicht beim Daumen).<br>
							•	Für die <strong>6</strong> nimmst Zeigefinger und machst mit der flachen Hand eine Drehbewegung nach rechts.<br>
							•	Für die <strong>7</strong> nimmst du Zeige- und Mittelfinger und drehst.<br>
							•	Für die <strong>8</strong> nimmst du Zeige-, Mittel- und Ringfinger und drehst.<br>
							•	Für die <strong>9</strong> hältst du alle Finger flach und drehst deine Hand nach rechts.</p>
							<p><strong>Die Null (0)</strong><br>
							Damit die Null nicht mit dem „OK“-Zeichen (Daumen und Zeigefinger zum Kreis) verwechselt wird, gibt es hier eine Sonderregel: Für die Null werden alle Finger benutzt! 
							Du formst mit der ganzen Hand eine kleine Faust oder einen Kreis, bei dem alle Finger mitmachen. So weiß jeder sofort: Das ist eine Null und kein „OK“.</p>
							<p><strong>Die wichtigsten Druck-Zeichen (für die Luft in der Flasche)</strong><br>
							•	<strong>50 bar (Druckwarnung)</strong>: Du ballst die Faust und streckst nur den kleinen Finger nach unten. Das ist das Zeichen für „Achtung, meine Luft wird knapp!“ 
							(50 bar ist die Grenze, bei der man den Tauchgang beenden und auftauchen sollte).<br>
							•	<strong>100 bar (Halbzeit)</strong>: Du zeigst den Zeigefinger nach oben (das ist die 1) und hältst darunter die flache Hand (das ist die 0). 
							Das bedeutet: „Ich habe noch 100 bar Luft, also die Hälfte meiner Flasche.“</p>
							<p><strong>Warum ist das so wichtig?</strong><br>
							Weil die Luft unter Wasser dein Lebenselixier ist! Wenn du deinem Tauchpartner genau sagen kannst, wie viel Luft du noch hast, kann er auf dich aufpassen und ihr könnt rechtzeitig auftauchen.</p>`,
                            image: "bilder/4_3_1_Zeichen.jpg"
                        },
                        {
                            subTitle: "Beispielanzeigen",
                            text: `<p>Damit du und dein Tauchpartner genau wissen, wie viel Luft noch in der Flasche ist, zeigt man den Druck Ziffer für Ziffer. Schau dir das obere Beispiel im Bild an: 180 bar.</p>
							<p>So geht's Schritt für Schritt:<br>
							1. <strong>Die Abfrage:</strong> Zuerst zeigst du das Druckabfrage-Zeichen (die zwei Finger in die offene Handfläche tippen) – so sagst du: „Ich zeige dir jetzt meinen Druck!“<br>
							2. <strong>Die 1:</strong> Du streckst kurz den Zeigefinger nach oben (Handfläche zum Partner). Das steht für die 100.<br>
							3. <strong>Die 8:</strong> Für die 80 zeigst du acht Finger. Wichtig: Dafür drehst du die Hand um, sodass die Handfläche zu dir zeigt (wie bei den Zahlen 6 bis 9 gelernt).<br>
							4. <strong>Die 0:</strong> Zum Schluss formst du mit allen Fingern einen Kreis (die Sonder-Null).</p>
							<p><strong>Und so funktioniert es bei anderen Zahlen:</strong><br>
							•	<strong>140 bar:</strong> Du zeigst die <strong>1</strong> (Zeigefinger nach oben), dann die <strong>4</strong> (vier Finger, Handfläche zum Partner) 
							und zum Schluss die <strong>0</strong> (Kreis mit allen Fingern).<br>
							•	<strong>60 bar:</strong> Du zeigst die <strong>6</strong> (Drehbewegung nach rechts, Handfläche zu dir, beginnend beim Zeigefinger) 
							und danach die <strong>0</strong> (Kreis mit allen Fingern).</p>
							<p>So weiß dein Buddy sofort ganz genau Bescheid, wie viel Luft du noch hast. Übe das am besten zu Hause vor dem Spiegel oder mit einem Freund!</p>`,
                            image: "bilder/4_3_2_Zeichen.jpg"
                        }
                    ]
                },
                {
                    id: "kap4-4",
                    title: "Der Buddy-Check & der Start",
                    text: `<p><strong>Der Buddycheck: Gemeinsam sicher starten</strong></p>
					<p>Bevor es ins Wasser geht, prüfen sich die beiden Tauchpartner (die „Buddys“) gegenseitig von oben bis unten. Dieses wichtige Sicherheitsritual nennt man <strong>Buddycheck</strong>. 
					Damit niemand einen Schritt vergisst, gibt es einen tollen Merksatz:</p>
					<p><strong>„Taucher brauchen saubere Luft, OK?“</strong></p>
					<p>Dieser Satz hilft dir, die fünf Kontrollen in der richtigen Reihenfolge durchzuführen. Schau dir die fünf Bilder an:</p>
					<p><strong>1. T – Taucher (Tarierweste / Jacket)</strong><br>
					Der eine Taucher drückt auf den Knopf der Tarierweste des anderen. Dabei wird geprüft, ob die Weste sich aufbläst und ob die Luft über die Ventile auch wieder entweichen kann. 
					So weiß man, dass sie dicht ist und funktioniert.</p>
					<p><strong>2. B – Brauchen (Blei)</strong><br>
					Jetzt wird der Bleigurt kontrolliert. Der Partner prüft, ob die Bleitasche sicher befestigt ist und ob der Schnellabwurf (der Mechanismus, um das Blei im Notfall ganz schnell abzuwerfen) 
					einwandfrei funktioniert.</p>
					<p><strong>3. S – Saubere (Schnallen &amp; Gurte)</strong><br>
					Hier werden alle Schnallen, der Flaschengurt und die Tragegurte überprüft. Der Partner zieht fest daran, um sicherzugehen, dass wirklich alles bombenfest sitzt und nicht verrutschen kann.</p>
					<p><strong>4. L – Luft (Hauptregler, Oktopus &amp; Manometer)</strong><br>
					Der Taucher atmet einmal tief durch den Hauptatemregler und durch den Reserve-Regler am Hals ein, um zu prüfen, ob bei beiden Luft kommt. 
					(Hier wird auch geprüft, ob beide ersten Stufen an der Flasche richtig funktionieren und ob das Bungee am Hals noch fest sitzt.)</p>
					<p><strong>5. OK – OK? (Gesamt-Check &amp; Freigabe)</strong><br>
					Zum Schluss werfen beide noch einen letzten Blick auf die Maske, die Flossen und die restliche Ausrüstung. Sie schauen sich in die Augen, geben sich gegenseitig 
					das <strong>OK-Zeichen</strong> (Daumen und Zeigefinger bilden einen Kreis) und fragen sich: <em>„Bist du bereit?“</em></p>
					<p>Wenn beide „OK“ zeigen, kann das Abenteuer beginnen!</p>`,
                    image: "bilder/4_4_BuddyCheck.jpg"
                }
            ],
            quiz: {
                questionPool: [
                    {
                        question: "Was macht man bei Hitze vor dem Tauchen? (Mehrere Antworten möglich)",
                        options: ["Im Schatten aufhalten", "Wasser trinken", "Anzug bis zur Hüfte runterrollen", "In der Sonne stehen", "Viel schwitzen"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Wann darf man nicht tauchen? (Mehrere Antworten möglich)",
                        options: ["Bei Fieber", "Bei Schmerzen", "Bei Schnupfen", "Bei guter Laune", "Bei Hunger"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist Gruppenzwang?",
                        options: ["Man macht mit, weil alle es tun", "Man entscheidet selbst", "Man bleibt zu Hause", "Man trinkt Wasser", "Man zieht den Anzug an"],
                        correct: 0
                    },
                    {
                        question: "Was soll man tun, wenn man sich nicht gut fühlt?",
                        options: ["Tauchgang verschieben", "Trotzdem tauchen", "Mehr trinken", "Schneller tauchen", "Die Gruppe fragen"],
                        correct: 0
                    },
                    {
                        question: "Welche Aussagen über Fitness sind richtig? (Mehrere Antworten möglich)",
                        options: ["Tauchen ist anstrengend", "Man muss fit sein", "Man darf bei Krankheit nicht tauchen", "Man muss immer mitmachen", "Man darf Nein sagen"],
                        correct: [0, 1, 2, 4]
                    },
                    {
                        question: "Warum ist Trinken wichtig? (Mehrere Antworten möglich)",
                        options: ["Weil man schwitzt", "Weil man Flüssigkeit verliert", "Weil es schmeckt", "Weil es kühlt", "Weil es die Ausrüstung reinigt"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was ist ein Zeichen, dass man nicht tauchen sollte? (Mehrere Antworten möglich)",
                        options: ["Frieren", "Fieber", "Schmerzen", "Lachen", "Müdigkeit"],
                        correct: [0, 1, 2, 4]
                    },
                    {
                        question: "Was macht man, wenn alle anderen tauchen wollen, man aber nicht? (Mehrere Antworten möglich)",
                        options: ["Nein sagen", "An Land bleiben", "Trotzdem mitgehen", "Die Gruppe fragen", "Schnell tauchen"],
                        correct: [0, 1]
                    },
                    {
                        question: "Warum ist der Neoprenanzug an Land heiß?",
                        options: ["Weil die Körperwärme nicht entweichen kann", "Weil er aus Metall ist", "Weil er schwarz ist", "Weil er zu eng ist", "Weil er nass ist"],
                        correct: 0
                    },
                    {
                        question: "Was ist der Merksatz?",
                        options: ["Erst auf den Körper hören, dann ins Wasser gehen", "Erst ins Wasser, dann hören", "Immer mitmachen", "Nie trinken", "Immer in der Sonne stehen"],
                        correct: 0
                    },
                    {
                        question: "Was ist ein Briefing?",
                        options: ["Ein Team-Meeting vor dem Tauchen", "Ein Tauchgang", "Eine Übung", "Ein Test", "Ein Buch"],
                        correct: 0
                    },
                    {
                        question: "Welche vier Bereiche werden besprochen? (Mehrere Antworten möglich)",
                        options: ["Mensch", "Tauchgang", "Gewässer", "Ausrüstung", "Wetter"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was bespricht man im Bereich „Mensch“? (Mehrere Antworten möglich)",
                        options: ["Tagesform", "Buddy-Teams", "Handzeichen", "Tiefe", "Strömung"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was bespricht man im Bereich „Tauchgang“? (Mehrere Antworten möglich)",
                        options: ["Maximale Tiefe", "Maximale Zeit", "Route", "Handzeichen", "Strömung"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was bespricht man im Bereich „Gewässer“? (Mehrere Antworten möglich)",
                        options: ["Strömungen", "Wellen", "Sichtweite", "Temperatur", "Handzeichen"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was bespricht man im Bereich „Ausrüstung“? (Mehrere Antworten möglich)",
                        options: ["Flaschendruck", "Atemregler", "Jacket", "Maske", "Wetter"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Welche Aussagen über das Briefing sind richtig? (Mehrere Antworten möglich)",
                        options: ["Es ist wichtig", "Es hat vier Bereiche", "Es dient der Sicherheit", "Es ist optional", "Es wird vor dem Tauchen gemacht"],
                        correct: [0, 1, 2, 4]
                    },
                    {
                        question: "Warum bespricht man die Handzeichen? (Mehrere Antworten möglich)",
                        options: ["Damit man sich verständigen kann", "Weil man unter Wasser nicht sprechen kann", "Weil es Spaß macht", "Weil es Pflicht ist", "Weil es die Ausrüstung schont"],
                        correct: [0, 1]
                    },
                    {
                        question: "Wer macht das Briefing? (Mehrere Antworten möglich)",
                        options: ["Die Buddys", "Der Tauchlehrer", "Die Gruppe", "Nur der Kapitän", "Niemand"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist das Ziel des Briefings? (Mehrere Antworten möglich)",
                        options: ["Sicherheit", "Spaß", "Planung", "Kommunikation", "Essen"],
                        correct: [0, 2, 3]
                    },
                    {
                        question: "Ab welchem Alter darf man tauchen?",
                        options: ["6", "8", "10", "12", "18"],
                        correct: 1
                    },
                    {
                        question: "Wie viele Tauchgänge pro Tag?",
                        options: ["1", "2", "3", "4", "So viele wie möglich"],
                        correct: 0
                    },
                    {
                        question: "Wie tief darf man mit KTSA Bronze tauchen?",
                        options: ["3 m", "5 m", "8 m", "12 m", "20 m"],
                        correct: 1
                    },
                    {
                        question: "Wie tief darf man mit KTSA Silber tauchen?",
                        options: ["5 m", "8 m", "12 m", "15 m", "20 m"],
                        correct: 1
                    },
                    {
                        question: "Wie tief darf man mit KTSA Gold tauchen?",
                        options: ["5 m", "8 m", "12 m", "15 m", "20 m"],
                        correct: 2
                    },
                    {
                        question: "Welche Regeln gelten für Kinder? (Mehrere Antworten möglich)",
                        options: ["Tiefengrenzen einhalten", "Maximal 1 Tauchgang am Tag", "Langsam auftauchen", "Nur mit Buddy", "Allein tauchen"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist KTSA?",
                        options: ["Kinder-Tauchsport-Abzeichen", "Ein Tauchcomputer", "Ein Atemregler", "Ein Boot", "Eine Flosse"],
                        correct: 0
                    },
                    {
                        question: "Welche Aussagen über die KTSA-Stufen sind richtig? (Mehrere Antworten möglich)",
                        options: ["Bronze ist die erste Stufe", "Silber ist die zweite Stufe", "Gold ist die dritte Stufe", "Gold ist die erste Stufe", "Es gibt nur eine Stufe"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Warum dürfen Kinder nicht so tief tauchen? (Mehrere Antworten möglich)",
                        options: ["Weil ihr Körper noch wächst", "Weil sie weniger Erfahrung haben", "Weil sie kleiner sind", "Weil sie mehr Luft brauchen", "Weil sie schneller frieren"],
                        correct: [0, 1, 4]
                    },
                    {
                        question: "Was zeigt die KTSA-Stufe? (Mehrere Antworten möglich)",
                        options: ["Dass man geübt hat", "Dass man die Regeln beherrscht", "Dass man ein Profi ist", "Dass man tauchen darf", "Dass man schwimmen kann"],
                        correct: [0, 1, 3]
                    },
                    {
                        question: "Warum nutzt man Handzeichen? (Mehrere Antworten möglich)",
                        options: ["Weil man nicht sprechen kann", "Weil der Atemregler im Mund ist", "Weil es Spaß macht", "Weil es international ist", "Weil es leise ist"],
                        correct: [0, 1, 3]
                    },
                    {
                        question: "Was bedeutet das OK-Zeichen? (Mehrere Antworten möglich)",
                        options: ["Alles gut", "Ich bin bereit", "Ich habe keine Luft", "Ich friere", "Ich möchte auftauchen"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was bedeutet „Nicht OK“?",
                        options: ["Etwas stimmt nicht", "Alles gut", "Ich tauche auf", "Ich friere", "Ich habe keine Luft"],
                        correct: 0
                    },
                    {
                        question: "Was bedeutet das Zeichen für „Kalt“? (Mehrere Antworten möglich)",
                        options: ["Arme kreuzen", "Hände reiben", "Daumen hoch", "Hand vor den Hals", "Faust"],
                        correct: [0, 1]
                    },
                    {
                        question: "Welches Zeichen bedeutet „Nach oben“?",
                        options: [
							"<img src='bilder/zeichen/0.jpg' alt='Option A' style='max-width:100px;'>",
							"<img src='bilder/zeichen/1.jpg' alt='Option B' style='max-width:100px;'>",
							"<img src='bilder/zeichen/nach_oben.jpg' alt='Option C' style='max-width:100px;'>",
							"<img src='bilder/zeichen/nach_unten.jpg' alt='Option D' style='max-width:100px;'>",
							"<img src='bilder/zeichen/ok.jpg' alt='Option E' style='max-width:100px;'>"
							],
                        correct: 2
                    },
                    {
                        question: "Welches Zeichen bedeutet „Nach unten“?",
                        options: [
							"<img src='bilder/zeichen/0.jpg' alt='Option A' style='max-width:100px;'>",
							"<img src='bilder/zeichen/1.jpg' alt='Option B' style='max-width:100px;'>",
							"<img src='bilder/zeichen/nach_oben.jpg' alt='Option C' style='max-width:100px;'>",
							"<img src='bilder/zeichen/nach_unten.jpg' alt='Option D' style='max-width:100px;'>",
							"<img src='bilder/zeichen/ok.jpg' alt='Option E' style='max-width:100px;'>"
							],
                        correct: 3
                    },
                    {
                        question: "Welches Zeichen bedeutet „Stopp“?",
                        options: [
							"<img src='bilder/zeichen/druckabfrage.jpg' alt='Option A' style='max-width:100px;'>",
							"<img src='bilder/zeichen/0.jpg' alt='Option B' style='max-width:100px;'>",
							"<img src='bilder/zeichen/100.jpg' alt='Option C' style='max-width:100px;'>",
							"<img src='bilder/zeichen/stopp.jpg' alt='Option D' style='max-width:100px;'>",
							"<img src='bilder/zeichen/ok.jpg' alt='Option E' style='max-width:100px;'>"
							],
                        correct: 3
                    },
                    {
                        question: "Welches Zeichen bedeutet „Frage nach dem Druck“?",
                        options: [
							"<img src='bilder/zeichen/druckabfrage.jpg' alt='Option A' style='max-width:100px;'>",
							"<img src='bilder/zeichen/0.jpg' alt='Option B' style='max-width:100px;'>",
							"<img src='bilder/zeichen/100.jpg' alt='Option C' style='max-width:100px;'>",
							"<img src='bilder/zeichen/druck.jpg' alt='Option D' style='max-width:100px;'>",
							"<img src='bilder/zeichen/du.jpg' alt='Option E' style='max-width:100px;'>"
							],
                        correct: 0
                    },
                    {
                        question: "Welches Zeichen bedeutet „Luftnot“?",
                        options: [
							"<img src='bilder/zeichen/ich_friere.jpg' alt='Option A' style='max-width:100px;'>",
							"<img src='bilder/zeichen/du.jpg' alt='Option B' style='max-width:100px;'>",
							"<img src='bilder/zeichen/druckabfrage.jpg' alt='Option C' style='max-width:100px;'>",
							"<img src='bilder/zeichen/luftnot.jpg' alt='Option D' style='max-width:100px;'>",
							"<img src='bilder/zeichen/ich.jpg' alt='Option E' style='max-width:100px;'>"
							],
                        correct: 3
                    },
                    {
                        question: "Welches Zeichen bedeutet „Essoufflement“?",
                        options: [
							"<img src='bilder/zeichen/ich_friere.jpg' alt='Option A' style='max-width:100px;'>",
							"<img src='bilder/zeichen/du.jpg' alt='Option B' style='max-width:100px;'>",
							"<img src='bilder/zeichen/ich.jpg' alt='Option E' style='max-width:100px;'>",
							"<img src='bilder/zeichen/druckabfrage.jpg' alt='Option C' style='max-width:100px;'>",
							"<img src='bilder/zeichen/essouflement.jpg' alt='Option D' style='max-width:100px;'>"
							],
                        correct: 4
                    },
                    {
                        question: "Wie viele Hände benutzt man für Zahlen?",
                        options: ["1", "2", "3", "4", "Egal"],
                        correct: 0
                    },
                    {
                        question: "Wohin zeigt die Handfläche bei 1–5?",
                        options: ["Zum Partner", "Zu sich selbst", "Nach oben", "Nach unten", "Egal"],
                        correct: 0
                    },
                    {
                        question: "Wohin zeigt die Handfläche bei 6–9?",
                        options: ["Zu sich selbst", "Zum Partner", "Nach oben", "Nach unten", "Egal"],
                        correct: 0
                    },
                    {
                        question: "Wie zeigt man die 0? (Mehrere Antworten möglich)",
                        options: ["Alle Finger", "Nur Daumen und Zeigefinger", "Faust", "Ein Finger", "Zwei Finger"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was bedeutet 50 bar?",
                        options: ["Druckwarnung", "Halbzeit", "Alles gut", "Keine Luft", "Auftauchen"],
                        correct: 0
                    },
                    {
                        question: "Was bedeutet 100 bar?",
                        options: ["Halbzeit", "Druckwarnung", "Alles gut", "Keine Luft", "Auftauchen"],
                        correct: 0
                    },
                    {
                        question: "Welches Zeichen bedeutet 6?",
                        options: [
							"<img src='bilder/zeichen/0.jpg' alt='Option A' style='max-width:100px;'>",
							"<img src='bilder/zeichen/6.jpg' alt='Option B' style='max-width:100px;'>",
							"<img src='bilder/zeichen/1.jpg' alt='Option E' style='max-width:100px;'>",
							"<img src='bilder/zeichen/7.jpg' alt='Option C' style='max-width:100px;'>",
							"<img src='bilder/zeichen/8.jpg' alt='Option D' style='max-width:100px;'>"
							],
                        correct: 1
                    },
                    {
                        question: "Welches Zeichen bedeutet 8?",
                        options: [
							"<img src='bilder/zeichen/3.jpg' alt='Option A' style='max-width:100px;'>",
							"<img src='bilder/zeichen/4.jpg' alt='Option B' style='max-width:100px;'>",
							"<img src='bilder/zeichen/7.jpg' alt='Option E' style='max-width:100px;'>",
							"<img src='bilder/zeichen/8.jpg' alt='Option C' style='max-width:100px;'>",
							"<img src='bilder/zeichen/0.jpg' alt='Option D' style='max-width:100px;'>"
							],
                        correct: 3
                    },
                    {
                        question: "Welche Aussagen über die Zahlen sind richtig? (Mehrere Antworten möglich)",
                        options: ["Nur eine Hand", "Ziffern einzeln", "1–5 Handfläche zum Partner", "6–9 Handfläche zu sich", "0 ist wie OK"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Wie zeigt man 180 bar? (Mehrere Antworten möglich)",
                        options: ["1", "8", "0", "2", "5"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist der Buddy-Check?",
                        options: ["Gegenseitige Prüfung vor dem Tauchen", "Ein Tauchgang", "Ein Test", "Ein Spiel", "Ein Werkzeug"],
                        correct: 0
                    },
                    {
                        question: "Was ist der Merksatz?",
                        options: ["Taucher brauchen saubere Luft, OK?", "Erst tauchen, dann prüfen", "Allein tauchen", "Schnell tauchen", "Tief tauchen"],
                        correct: 0
                    },
                    {
                        question: "Was bedeutet das „T“ im Merksatz?",
                        options: ["Taucher (Tarierweste/Jacket)", "Tiefe", "Tauchgang", "Taschenlampe", "Taucherbrille"],
                        correct: 0
                    },
                    {
                        question: "Was bedeutet das „B“?",
                        options: ["Brauchen (Blei)", "Boot", "Buddy", "Brille", "Bauchgurt"],
                        correct: 0
                    },
                    {
                        question: "Was bedeutet das „S“?",
                        options: ["Saubere (Schnallen & Gurte)", "Sicherheit", "Sauerstoff", "Schnorchel", "Seil"],
                        correct: 0
                    },
                    {
                        question: "Was bedeutet das „L“?",
                        options: ["Luft (Hauptregler, Reserve-Regler, Manometer)", "Lampe", "Leine", "Lunge", "Luftdruck"],
                        correct: 0
                    },
                    {
                        question: "Was bedeutet das „OK“? (Mehrere Antworten möglich)",
                        options: ["Gesamt-Check", "Alles gut", "Freigabe", "Ende", "Start"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Welche Aussagen über den Buddy-Check sind richtig? (Mehrere Antworten möglich)",
                        options: ["Er ist wichtig", "Er wird vor dem Tauchen gemacht", "Er prüft die Ausrüstung", "Er prüft die Luft", "Er ist optional"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was prüft man beim „T“? (Mehrere Antworten möglich)",
                        options: ["Jacket aufblasen", "Ventile", "Dichtigkeit", "Blei", "Maske"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was prüft man beim „L“? (Mehrere Antworten möglich)",
                        options: ["Hauptregler", "Reserve-Regler", "Manometer", "Flaschendruck", "Jacket"],
                        correct: [0, 1, 2, 3]
                    }
                ]
            }
        },
        {
            id: "kap5",
            title: "Kapitel 5: Im Wasser",
            intro: "Sichere Einstiegsarten, Unterwasser-Ehrenkodex und Verhaltensbiologie von Fischen.",
            subsections: [
                {
                    id: "kap5-1",
                    title: "Der Weg nach unten",
                    text: `<p><strong>Der Weg nach unten: So kommen Taucher ins Wasser</strong></p>
					<p>Bevor ein Taucher die Unterwasserwelt erkunden kann, muss er erst einmal sicher ins Wasser kommen. Je nachdem, wo man startet, gibt es dafür verschiedene Tricks. Schau dir die drei Bilder an:</p>
					<p><strong>1. Einstieg vom Steg: Der Riesen-Schritt</strong><br>
					Wenn du von einem festen Steg oder einer Kaimauer ins Wasser steigst, machst du den <strong>Riesen-Schritt</strong>. Dabei hältst du mit einer Hand deine Maske 
					und den Atemregler fest (damit sie nicht verrutschen oder verloren gehen). Du schaust geradeaus nach vorne, machst einen großen Ausfallschritt ins Wasser und 
					gibst nach dem Auftauchen sofort das <strong>OK-Zeichen</strong>. Ein wichtiger Tipp: Vom Ufer aus watest du am besten vorsichtig über sichere Sandwege oder flache 
					Stellen hinein, damit du den empfindlichen Meeresboden nicht aufwirbelst.</p>
					<p><strong>2. Einstieg vom Boot: Die Rückwärts-Rolle</strong><br>
					Wenn du von einem kleinen Boot oder einem Schlauchboot ins Wasser willst, machst du die <strong>Rückwärts-Rolle</strong>. Du setzt dich mit deiner Ausrüstung auf 
					den Rand des Bootes. Dann rollst du dich einfach rückwärts ins Wasser. Das klingt verrückt, ist aber eine extrem sichere und bequeme Methode, weil du dich nicht an 
					der schweren Flasche auf dem Rücken verletzen kannst und nicht kopfüber ins Wasser stürzt.</p>
					<p><strong>3. Sicheres Abtauchen an der Leine</strong><br>
					Wenn du dann im Wasser bist und nach unten willst, hilft dir oft eine <strong>Leine</strong> (ein dickes Seil, das vom Boot oder von einem Bojen-System nach unten hängt). 
					Du hältst dich an der Leine fest und ziehst dich daran Stück für Stück nach unten. Das ist besonders praktisch, wenn die Strömung stark ist oder du dich beim Abtauchen 
					orientieren musst. So kannst du ganz in Ruhe deinen Druckausgleich machen, während du dich am Seil festhältst.</p>`,
                    image: "bilder/5_1_Abtauchen.jpg"
                },
                {
                    id: "kap5-2",
                    title: "Der Unterwasser-Ehrenkodex",
                    text: `<p><strong>Der Unterwasser-Ehrenkodex: Schützt die Meere!</strong></p>
					<p>Als Taucher lieben und schätzen wir die Natur. Die Unterwasserwelt ist der Lebensraum von unzähligen Tieren und Pflanzen – und wir sind nur zu Gast. 
					Damit wir auch in Zukunft noch faszinierende Abenteuer unter Wasser erleben können, halten sich alle Taucher an fünf wichtige Regeln:</p>
					<p><strong>1. Tiere nicht jagen, stressen oder anfassen!</strong><br>
					Beobachte die Fische und anderen Meeresbewohner immer nur aus sicherer Entfernung. Wenn du sie anfasst oder jagst, erschrecken sie und fühlen sich bedroht. 
					Mit den Augen schauen ist viel spannender als mit den Händen anfassen!</p>
					<p><strong>2. Immer auf den vorgeschriebenen Wegen und im Freiwasser bleiben.</strong><br>
					Unter Wasser gibt es oft markierte Wege (ähnlich wie Wanderwege). Bleib auf diesen Wegen und schwebe am besten frei im Wasser. So schonst du die empfindlichen 
					Lebensräume der Tiere und zerstörst keine Pflanzen.</p>
					<p><strong>3. Korallen und Unterwasserlebewesen niemals berühren – sie sind sehr empfindlich!</strong><br>
					Korallen sehen zwar aus wie Steine, sind aber lebendige Tiere. Sie wachsen ganz langsam. Schon eine winzige Berührung mit der Hand oder dem Flossenschlag kann sie 
					für immer verletzen. Schau sie dir lieber aus der Ferne an!</p>
					<p><strong>4. Flossenschlag kontrollieren, damit kein Schlamm aufgewirbelt wird.</strong><br>
					Wenn du wild mit den Flossen schlägst, wirbelst du den Sand oder Schlamm vom Grund auf. Dann wird das Wasser trüb und die Fische können nichts mehr sehen. Eine ruhige, 
					gleichmäßige Bewegung schützt den Meeresboden. (Deshalb ist die richtige Tarierung so wichtig!)</p>
					<p><strong>5. Keinerlei Müll hinterlassen – im Gegenteil: Plastikmüll einsammeln!</strong><br>
					Nimm alles, was du mit ins Wasser genommen hast, auch wieder mit an Land. Und wenn du unterwegs Plastikmüll siehst, sammle ihn ein! So hilfst du mit, dass die Meere 
					sauber bleiben und keine Tiere daran ersticken.</p><br>
					<hr>
					<p><strong>Merksatz für Kinder:</strong><br>
					<em>„Schauen ja – Anfassen nein! Dann sind alle Meeresbewohner happy.“</em></p>`,
                    image: "bilder/5_2_Umwelt.jpg"
                },
                {
                    id: "kap5-3",
                    title: "Die Unterwasser-Welt",
                    type: "stacked",
                    subrows: [
                        {
                            subTitle: "Die heimischen Fische und wie du sie beobachten kannst",
                            text: `<p>In unseren heimischen Seen und Flüssen gibt es eine spannende Unterwasserwelt! Wenn du diese Tiere in der Natur beobachten möchtest, brauchst du vor allem eines: 
							Geduld. Und du musst ihr natürliches Verhalten kennen. Schau dir die Bilder an, dort siehst du einige der wichtigsten Bewohner:</p>
							<p>•	<strong>Flussbarsch:</strong> Erkennbar an seinen dunklen Streifen. Er lebt oft in Schwärmen in der Nähe von Pflanzen.<br>
							•	<strong>Hecht:</strong> Ein blitzschneller Jäger mit einem langen, torpedoförmigen Körper und einem gefleckten Muster.<br>
							•	<strong>Wels:</strong> Ein riesiger, dunkler Fisch mit langen „Schnurrhaaren“ (Barteln) am Maul, der gerne in der Nähe von Schlamm und am Grund lebt.<br>
							•	<strong>Aal:</strong> Er sieht aus wie eine lange Schlange und versteckt sich gerne zwischen Steinen.<br>
							•	<strong>Brasse:</strong> Ein silbrig glänzender Fisch mit einer hohen Rückenflosse, der oft am sandigen Grund nach Futter sucht.<br>
							•	<strong>Karpfen:</strong> Ein großer, schuppiger Fisch mit einem dicken Körper und einem kleinen Maul.<br>
							•	<strong>Edelkrebs:</strong> Kein Fisch, sondern ein Krebstier! Er versteckt sich gerne unter Steinen oder Wurzeln und hat große Scheren.</p>
							<p><strong>Tipps zum Beobachten:</strong></p>
							<p>•	<strong>Der getarnte Hecht:</strong> Einen Hecht entdeckst du am besten, indem du nicht direkt nach dem Fisch selbst suchst. Sein geflecktes 
							Rückenmuster tarnt ihn perfekt im Kraut. Halte stattdessen nach unnatürlichen, geraden Linien im Wasser Ausschau – das ist oft sein Rücken!<br>
							•	<strong>Der hektische Schwarm:</strong> Wenn du an einer Stelle viele kleine Fische hektisch umherschwimmen siehst, ist oft ein Raubfisch 
							(wie ein Hecht) in der Nähe. Die kleinen Fische haben Angst und versuchen zu fliehen.</p>
							<p>Wenn du dich leise und ruhig verhältst, kannst du diese faszinierenden Tiere in ihrem natürlichen Lebensraum entdecken!</p>`,
                            image: "bilder/5_3_Fische.jpg"
                        },
                        {
                            subTitle: "Die faszinierende Welt der Meeresbewohner",
                            text: `<p>Das Meer ist voller aufregender Tiere! Jedes von ihnen hat besondere Eigenschaften, die ihm helfen, in der großen blauen Unterwasserwelt zu überleben. 
							Schau dir die Bilder an und lerne einige der berühmtesten Meeresbewohner kennen:</p>
							<p>•	<strong>Die Meeresschildkröte:</strong> Sie ist eine wahre Weltreisende! Mit ihren kräftigen Flossen schwimmt sie viele Kilometer durch die Ozeane. 
							Sie legt ihre Eier aber immer am Strand ab, an dem sie selbst geboren wurde.<br>
							•	<strong>Der Hai:</strong> Er ist ein Jäger mit einem starken Gebiss und einem unheimlich guten Geruchssinn. Haie gibt es schon seit Millionen von 
							Jahren auf der Erde – sie sind echte Urzeitwesen!<br>
							•	<strong>Der Delfin:</strong> Delfine sind sehr schlaue Tiere. Sie verständigen sich untereinander mit lustigen Klick- und Pfeiftönen und springen oft fröhlich aus dem Wasser.<br>
							•	<strong>Der Papageifisch:</strong> Er hat seinen Namen von seinem bunten Aussehen und seinem schnabelartigen Maul. Mit diesem „Schnabel“ knabbert er Korallen ab und frisst sie.<br>
							•	<strong>Der Mantarochen:</strong> Er sieht aus wie ein riesiger, fliegender Teppich im Wasser. Er ist ein sanfter Riese, der durch das Meer „gleitet“ und winzige Plankton-Tierchen frisst.<br>
							•	<strong>Der Wal:</strong> Wale sind keine Fische, sondern Säugetiere! Sie müssen zum Atmen an die Wasseroberfläche kommen. Der Blauwal ist das größte Tier der Erde.<br>
							•	<strong>Der Doktorfisch:</strong> Er ist wunderschön bunt und hat oft einen kleinen „Dorn“ am Schwanzansatz. Er lebt in den warmen Korallenriffen.<br>
							•	<strong>Der Anemonenfisch:</strong> Kennst du ihn als „Nemo“? Er lebt in einer engen Freundschaft mit einer giftigen Anemone. Der Fisch ist gegen das Gift immun und findet dort Schutz.<br>
							•	<strong>Der Igel- oder Kugelfisch:</strong> Wenn er sich bedroht fühlt, pumpt er sich mit Wasser auf und wird zur stacheligen Kugel. So kann ihn kein Raubfisch fressen!</p>`,
                            image: "bilder/5_3_1_Fische.jpg"
                        }
                    ]
                },
                {
                    id: "kap5-4",
                    title: "Abbruch des Tauchgangs",
                    text: `<p><strong>Wann wird der Tauchgang beendet? Die Stopp-Liste</strong></p>
					<p>Tauchen ist ein tolles Abenteuer, aber es gibt Momente, in denen man sofort aufhören und auftauchen muss. Das ist keine Schande, sondern zeigt, 
					dass du ein kluger und sicherer Taucher bist! <strong>Sicherheit geht immer vor!</strong></p>
					<p>Ein Tauchgang wird sofort beendet, wenn einer dieser four Gründe zutrifft:</p>
					<p>• <strong>Das Gruppenführer-Signal (Stopp-Zeichen):</strong> Der Tauchlehrer oder Gruppenführer gibt das Stopp-Signal (eine flache Hand, die Halt bedeutet). 
					Dann wird sofort abgebrochen. Er hat immer den Überblick und weiß, wann es Zeit ist, nach oben zu gehen.</p>
					<p>• <strong>Starkes Frieren:</strong> Wenn dir eiskalt wird und du am ganzen Körper zitterst, ist das ein Warnsignal deines Körpers. Dann musst du sofort raus 
					aus dem Wasser, damit du dich nicht unterkühlst.</p>
					<p>• <strong>Abbruchwunsch:</strong> Jeder Taucher darf jederzeit selbst entscheiden: „Ich möchte jetzt auftauchen.“ Das ist völlig in Ordnung! Auch wenn ein 
					Buddy (Tauchpartner) das Zeichen gibt, dass er aufhören möchte, gehen beide gemeinsam nach oben. Ihr seid ein Team!</p>
					<p>• <strong>Luftvorrat von 50 bar:</strong> Das Manometer (die Druckanzeige) zeigt, wie viel Luft noch in der Flasche ist. Wenn nur noch 50 bar übrig sind, 
					ist das die rote Grenze. Dann wird der Tauchgang beendet und du tauchst langsam zur Oberfläche auf.</p>
					<p><strong>Wichtig:</strong><br>
					Wenn einer dieser Gründe eintritt, wird der Tauchgang sofort beendet. Das gilt für dich, deinen Buddy und die ganze Gruppe. Sicherheit ist das Wichtigste – 
					ein neuer Tauchgang kann immer noch kommen, aber deine Gesundheit steht an erster Stelle!</p>`,
                    image: "bilder/5_4_Abbruch.jpg"
                },
                {
                    id: "kap5-5",
                    title: "Was ist ein Essoufflement?",
                    text: `<p>Manchmal kann es unter Wasser passieren, dass man plötzlich keine Luft mehr bekommt, obwohl noch genug in der Flasche ist. Man fängt an, ganz schnell und hektisch zu atmen. 
					Das nennt man <strong>Essoufflement</strong> (sprich: Ess-u-fle-mang).</p>
					<p><strong>Wie entsteht das?</strong><br>
					Das kann verschiedene Gründe haben: Vielleicht bist du zu schnell geschwommen, die Strömung war zu stark, es war zu kalt, oder du hast plötzlich Angst bekommen. 
					Wenn du in Panik gerätst, atmet dein Körper ganz flach und schnell. Dann kann er die Luft nicht mehr richtig verarbeiten, und du fühlst dich, als würdest du ersticken.</p>
					<p><strong>Was kann man tun? (So beruhigst du dich und deinen Partner)</strong></p>
					<p><strong>1. Stoppen:</strong> Bleib sofort stehen oder halte dich an deinem Buddy fest. Bewege dich nicht weiter.</p>
					<p><strong>2. Beruhigen:</strong> Schau deinem Partner in die Augen. Atme ganz langsam und tief aus (als würdest du durch einen Strohhalm pusten).</p>
					<p><strong>3. Sicher auftauchen:</strong> Wenn du dich beruhigt hast, taucht ihr gemeinsam ganz langsam und ruhig auf.</p>
					<p><strong>4. Nicht allein lassen:</strong> Lass deinen Partner niemals allein, bis ihr sicher an der Oberfläche oder am Boot seid.</p>`,
                    image: "bilder/5_4_1_Essouflement.jpg"
                }
            ],
            quiz: {
                questionPool: [
                    {
                        question: "Wie steigt man vom Steg ins Wasser?",
                        options: ["Riesen-Schritt", "Rückwärts-Rolle", "Kopfsprung", "Leine", "Arschbombe"],
                        correct: 0
                    },
                    {
                        question: "Wie steigt man vom Boot ins Wasser?",
                        options: ["Rückwärts-Rolle", "Riesen-Schritt", "Kopfsprung", "Leine", "Arschbombe"],
                        correct: 0
                    },
                    {
                        question: "Was hält man beim Riesen-Schritt fest?",
                        options: ["Maske", "Atemregler", "Flossen", "Jacket", "Blei"],
                        correct: [0, 1]
                    },
                    {
                        question: "Warum taucht man an der Leine ab? (Mehrere Antworten möglich)",
                        options: ["Zur Orientierung", "Bei starker Strömung", "Weil es Spaß macht", "Weil es schneller geht", "Weil man dann besser sieht"],
                        correct: [0, 1]
                    },
                    {
                        question: "Welche Aussagen über den Einstieg sind richtig? (Mehrere Antworten möglich)",
                        options: ["Riesen-Schritt vom Steg", "Rückwärts-Rolle vom Boot", "Leine zum Abtauchen", "Immer Kopfsprung", "Immer Arschbombe"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was macht man nach dem Auftauchen?",
                        options: ["OK-Zeichen geben", "Sofort weiter tauchen", "Die Maske abnehmen", "Die Flossen ausziehen", "Nichts"],
                        correct: 0
                    },
                    {
                        question: "Warum watet man vorsichtig ins Wasser?",
                        options: ["Um den Boden nicht aufzuwirbeln", "Um nicht zu frieren", "Um schneller zu sein", "Um die Fische zu erschrecken", "Um die Flossen zu testen"],
                        correct: 0
                    },
                    {
                        question: "Was ist eine Rückwärts-Rolle?",
                        options: ["Man rollt sich rückwärts ins Wasser", "Man springt vorwärts", "Man taucht kopfüber", "Man schwimmt rückwärts", "Man dreht sich im Kreis"],
                        correct: 0
                    },
                    {
                        question: "Warum ist die Rückwärts-Rolle sicher? (Mehrere Antworten möglich)",
                        options: ["Man verletzt sich nicht an der Flasche", "Man stürzt nicht kopfüber", "Sie ist bequem", "Sie ist schnell", "Sie ist laut"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist eine Leine? (Mehrere Antworten möglich)",
                        options: ["Ein dickes Seil", "Ein Hilfsmittel zum Abtauchen", "Ein Werkzeug", "Eine Flosse", "Ein Atemregler"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was ist der Ehrenkodex?",
                        options: ["Fünf Regeln zum Schutz der Natur", "Ein Tauchgang", "Ein Test", "Ein Spiel", "Ein Werkzeug"],
                        correct: 0
                    },
                    {
                        question: "Was macht man mit Tieren? (Mehrere Antworten möglich)",
                        options: ["Nicht jagen", "Nicht stressen", "Nicht anfassen", "Beobachten", "Fangen"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Wo soll man schwimmen? (Mehrere Antworten möglich)",
                        options: ["Auf vorgeschriebenen Wegen", "Im Freiwasser", "Überall", "Nur am Grund", "Nur an der Oberfläche"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was macht man mit Korallen? (Mehrere Antworten möglich)",
                        options: ["Nicht berühren", "Sie sind empfindlich", "Sie sind Steine", "Sie sind Tiere", "Man kann sie anfassen"],
                        correct: [0, 1, 3]
                    },
                    {
                        question: "Was macht man mit dem Flossenschlag? (Mehrere Antworten möglich)",
                        options: ["Kontrollieren", "Keinen Schlamm aufwirbeln", "Wild schlagen", "Langsam bewegen", "Schnell bewegen"],
                        correct: [0, 1, 3]
                    },
                    {
                        question: "Was macht man mit Müll? (Mehrere Antworten möglich)",
                        options: ["Keinen hinterlassen", "Plastikmüll einsammeln", "Ins Wasser werfen", "Am Strand liegen lassen", "Mitnehmen"],
                        correct: [0, 1, 4]
                    },
                    {
                        question: "Welche Aussagen über den Ehrenkodex sind richtig? (Mehrere Antworten möglich)",
                        options: ["Tiere beobachten", "Korallen schützen", "Müll einsammeln", "Auf Wegen bleiben", "Tiere anfassen"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist der Merksatz?",
                        options: ["Schauen ja – Anfassen nein", "Anfassen ja – Schauen nein", "Alles anfassen", "Nichts anschauen", "Müll ins Wasser"],
                        correct: 0
                    },
                    {
                        question: "Warum soll man keine Korallen berühren? (Mehrere Antworten möglich)",
                        options: ["Sie sind lebendig", "Sie wachsen langsam", "Sie können verletzt werden", "Sie sind aus Stein", "Sie sind giftig"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Warum soll man keinen Müll hinterlassen? (Mehrere Antworten möglich)",
                        options: ["Tiere ersticken daran", "Es sieht hässlich aus", "Es schadet der Natur", "Es ist verboten", "Es ist egal"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Welche Fische leben in heimischen Seen? (Mehrere Antworten möglich)",
                        options: ["Flussbarsch", "Hecht", "Wels", "Aal", "Hai"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Wie erkennt man einen Hecht? (Mehrere Antworten möglich)",
                        options: ["Lang", "Torpedoförmig", "Gefleckt", "Blitzschnell", "Bunt"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Wie erkennt man einen Flussbarsch? (Mehrere Antworten möglich)",
                        options: ["Dunkle Streifen", "Schwarm", "Pflanzen", "Groß", "Silbrig"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist ein Edelkrebs? (Mehrere Antworten möglich)",
                        options: ["Kein Fisch", "Krebstier", "Scheren", "Unter Steinen", "Ein Fisch"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Wie beobachtet man einen Hecht? (Mehrere Antworten möglich)",
                        options: ["Nach geraden Linien suchen", "Nach dem Muster suchen", "Nach Bewegung suchen", "Nach Farbe suchen", "Nach Größe suchen"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was bedeutet ein hektischer Fischschwarm?",
                        options: ["Ein Raubfisch ist in der Nähe", "Die Fische spielen", "Die Fische fressen", "Die Fische schlafen", "Die Fische laichen"],
                        correct: 0
                    },
                    {
                        question: "Welche Meeresfische gibt es? (Mehrere Antworten möglich)",
                        options: ["Hai", "Delfin", "Wal", "Papageifisch", "Flussbarsch"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist ein Mantarochen? (Mehrere Antworten möglich)",
                        options: ["Sanfter Riese", "Fliegender Teppich", "Frisst Plankton", "Groß", "Aggressiv"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist an einem Anemonenfisch besonders? (Mehrere Antworten möglich)",
                        options: ["Nemo", "Lebt mit Anemone", "Immun gegen Gift", "Bunt", "Groß"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was macht ein Kugelfisch? (Mehrere Antworten möglich)",
                        options: ["Pumpt sich auf", "Wird stachelig", "Schützt sich", "Ist giftig", "Ist immer klein"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Wann bricht man ab? (Mehrere Antworten möglich)",
                        options: ["Gruppenführer-Signal", "Starkes Frieren", "Abbruchwunsch", "50 bar", "Bei guter Laune"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist das Gruppenführer-Signal? (Mehrere Antworten möglich)",
                        options: ["Stopp-Zeichen", "Flache Hand", "Halt", "Daumen hoch", "Faust"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was macht man bei starkem Frieren?",
                        options: ["Abbruch", "Weiter tauchen", "Schneller tauchen", "Tiefe halten", "Nichts"],
                        correct: 0
                    },
                    {
                        question: "Was bedeutet 50 bar? (Mehrere Antworten möglich)",
                        options: ["Druckwarnung", "Abbruch", "Rote Grenze", "Halbzeit", "Alles gut"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was ist ein Essoufflement? (Mehrere Antworten möglich)",
                        options: ["Atemnot", "Panik", "Hektisches Atmen", "Keine Luft in der Flasche", "Alles gut"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Wie entsteht ein Essoufflement? (Mehrere Antworten möglich)",
                        options: ["Zu schnell geschwommen", "Strömung", "Kälte", "Angst", "Zu viel Luft"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was macht man bei Essoufflement? (Mehrere Antworten möglich)",
                        options: ["Stoppen", "Beruhigen", "Langsam auftauchen", "Nicht allein lassen", "Schnell auftauchen"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Welche Aussagen über den Abbruch sind richtig? (Mehrere Antworten möglich)",
                        options: ["Sicherheit geht vor", "Abbruch ist keine Schande", "Jeder darf abbrechen", "Bei 50 bar abbrechen", "Abbruch ist verboten"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Warum ist der Abbruch wichtig? (Mehrere Antworten möglich)",
                        options: ["Sicherheit", "Gesundheit", "Kein Zwang", "Team", "Spaß"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist die eiserne Regel beim Essoufflement? (Mehrere Antworten möglich)",
                        options: ["Ruhig bleiben", "Partner festhalten", "Langsam auftauchen", "Nicht allein lassen", "Schnell auftauchen"],
                        correct: [0, 1, 2, 3]
                    }
                ]
            }
        },
        {
            id: "kap6",
            title: "Kapitel 6: Aufstieg & Notfall",
            intro: "Detaillierte Rettungskette und sichere Ausstiegsprozeduren.",
            subsections: [
                {
                    id: "kap6-1",
                    title: "Der perfekte Tauchgang-Abschluss",
                    text: `<p>Ein Tauchgang endet nicht einfach damit, dass man auftaucht. Ein sicherer Abschluss ist genauso wichtig wie der Start! Schau dir die fünf Schritte im Bild an:</p>
					<p><strong>1. Der Aufstieg – Langsamer als Luftblasen</strong><br>
					Der Beginn des Ausstiegs erfordert höchste Konzentration. Der Aufstieg erfolgt immer langsam und kontrolliert. Eine wichtige Faustregel lautet: <strong>Niemals 
					schneller aufsteigen als die eigenen Luftblasen!</strong> Das sind maximal 10 Meter pro Minute. Die Luftblasen zeigen dir den Weg nach oben – wenn du langsamer 
					bist als sie, bist du auf der sicheren Seite. Viele Tauchcomputer haben dafür eine farbige Skala (grün, gelb, rot), die dir zeigt, ob du im sicheren grünen Bereich bist.</p>
					<p><strong>2. Der Sicherheitsstopp bei 5 Metern</strong><br>
					Bevor du das Wasser verlässt, ist ein ganz wichtiger Schritt unverzichtbar: der <strong>Sicherheitsstopp</strong>. Du bleibst genau 3 Minuten lang in 5 Metern 
					Tiefe (am Seil oder frei im Wasser) stehen. Warum? Dein Körper hat unter Wasser Stickstoff aufgenommen. Der Sicherheitsstopp gibt ihm die Zeit, 
					diesen überschüssigen Stickstoff sicher abzuatmen. Dein Tauchcomputer überwacht dabei genau die Tiefe (5 Meter) und die Dauer (3 Minuten).<br>
					<strong>Warum ist der Sicherheitsstopp so wichtig?</strong><br>
					Unter Wasser atmen wir Luft unter Druck. Dabei löst sich Stickstoff in unserem Blut. Wenn wir zu schnell auftauchen, kann der Stickstoff wie kleine 
					Bläschen im Blut aufsteigen. Das kann sehr gefährlich werden (die Fachleute nennen das Dekompressionskrankheit). Der Sicherheitsstopp gibt dem Körper die Zeit, 
					den Stickstoff ganz langsam und sicher abzuatmen. Deshalb ist er so wichtig wie das Atmen selbst!</p>
					<p><strong>3. Gemeinsam auftauchen</strong><br>
					Nach dem Sicherheitsstopp tauchen die beiden Taucher (die Buddys) gemeinsam und kontrolliert an die Wasseroberfläche auf. Oben angekommen, wird sofort 
					das <strong>OK-Zeichen</strong> gegeben. Damit signalisierst du deinem Team oder dem Boot: <em>„Alles in Ordnung!“</em> Danach wird das Jacket (die Tarierweste) mit Luft aufgefüllt, damit du wie ein Korken sicher an der Oberfläche treibst.</p>
					<p><strong>4. An Land: Vollständigkeits- und Befindlichkeits-Check</strong><br>
					Zurück am Boot oder am Ufer angekommen, wird erst einmal durchgeatmet. Jetzt folgt der direkte Austausch: Wie fühlt sich jeder? Die Ausrüstung wird 
					schrittweise abgelegt und anhand einer Checkliste überprüft, ob auch wirklich alles vollständig ist.</p>
					<p><strong>5. Ausrüstung versorgen</strong><br>
					Zum Schluss werden alle Ausrüstungsgegenstände in einem trockenen und sauberen Raum fachgerecht versorgt. Die Tauchflaschen werden sicher in speziellen Ecken 
					aufgestellt, die Neoprenanzüge hängen ordentlich zum Trocknen auf, und das restliche Equipment wird sauber auf Regalen verstaut. So ist alles für den nächsten Einsatz bestens vorbereitet!</p>`,
                    image: "bilder/6_1_Aufstieg.jpg"
                },
                {
                    id: "kap6-2",
                    title: "Die Rettungskette bei einem Tauchunfall: So helfen wir richtig!",
                    text: `<p>Hoffentlich passiert nie etwas, aber im Notfall muss jeder Handgriff sitzen. Die Rettungskette funktioniert wie Zahnräder, die perfekt ineinandergreifen. Jeder Schritt ist wichtig:</p>
					<p><strong>1. Erkennen und Bergen</strong><br>
					Wenn ein Taucher in Not gerät, zählt jede Sekunde. Zuerst muss man die Situation schnell erkennen. Dann wird der verunfallte Taucher sicher an die Wasseroberfläche 
					und anschließend an Land oder ins Boot gebracht. Wichtig: Das Auftauchen muss kontrolliert und ruhig erfolgen!</p>
					<p><strong>2. Notruf absetzen – die 112</strong><br>
					Sofort die <strong>112</strong> rufen! Das ist die europaweite Notrufnummer. Dabei machst du klare Angaben. Die Rettungskräfte fragen dich nach dem 
					<strong>WO</strong> (Wo ist es passiert?), dem <strong>WAS</strong> (Was ist passiert?), dem <strong>WER</strong> (Wer ist betroffen?) und dem <strong>WIE VIEL</strong> (Wie viele Verletzte gibt es?). Danach bleibst du in der Leitung und <strong>WARTEST</strong> auf weitere Anweisungen.</p>
					<p><strong>3. Erste Hilfe und Sauerstoff</strong><br>
					Jetzt beginnt die lebensrettende Versorgung. Den Betroffenen in die stabile Seitenlage bringen (falls er atmet) und <strong>100 % medizinischen 
					Sauerstoff</strong> geben. Das ist bei Tauchunfällen besonders wichtig! Außerdem werden die Vitalfunktionen (Atmung und Puls) überprüft. Wenn nötig, werden sofort Wiederbelebungsmaßnahmen eingeleitet.</p>
					<p><strong>4. Rettungsdienst und Notarzt</strong><br>
					Der professionelle Rettungsdienst und der Notarzt übernehmen die Versorgung und Stabilisierung vor Ort. Du übergibst den Betroffenen an die Profis und erzählst genau, was passiert ist.</p>
					<p><strong>5. Spezialbehandlung in der Druckkammer</strong><br>
					Bei schweren Tauchunfällen organisiert der Rettungsdienst den Transport in die nächstgelegene spezialisierte <strong>Tauch-Druckkammer</strong>. 
					Dort wird der Patient mit einer speziellen Sauerstofftherapie (hyperbare Sauerstofftherapie) behandelt. Das hilft dem Körper, sich von den Folgen des Tauchunfalls zu erholen.</p>
					<p><strong>Wichtig:</strong> Ruhe bewahren, laut und deutlich sprechen und keine Panik machen. Die Rettungskette funktioniert nur, wenn alle Schritte nacheinander ablaufen!</p>`,
                    image: "bilder/6_4_Rettungskette.jpg"
                }
            ],
            quiz: {
                questionPool: [
                    {
                        question: "Wie schnell darf man aufsteigen? (Mehrere Antworten möglich)",
                        options: ["Langsamer als die Luftblasen", "Maximal 10 m pro Minute", "So schnell wie möglich", "20 m pro Minute", "50 m pro Minute"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was ist der Sicherheitsstopp?",
                        options: ["3 Minuten bei 5 Metern", "5 Minuten bei 3 Metern", "10 Minuten bei 5 Metern", "1 Minute bei 3 Metern", "3 Minuten bei 10 Metern"],
                        correct: 0
                    },
                    {
                        question: "Warum macht man den Sicherheitsstopp?",
                        options: ["Um Stickstoff abzuatmen", "Um zu entspannen", "Um zu warten", "Um zu fotografieren", "Um zu essen"],
                        correct: 0
                    },
                    {
                        question: "Was passiert, wenn man zu schnell auftaucht? (Mehrere Antworten möglich)",
                        options: ["Stickstoffbläschen", "Dekompressionskrankheit", "Gefahr", "Nichts", "Man wird ohnmächtig"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was macht man nach dem Auftauchen? (Mehrere Antworten möglich)",
                        options: ["OK-Zeichen", "Jacket aufblasen", "Sofort weiter tauchen", "Maske abnehmen", "Flossen ausziehen"],
                        correct: [0, 1]
                    },
                    {
                        question: "Was macht man an Land? (Mehrere Antworten möglich)",
                        options: ["Befindlichkeits-Check", "Vollständigkeits-Check", "Ausrüstung ablegen", "Sofort gehen", "Nichts"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Was macht man mit der Ausrüstung? (Mehrere Antworten möglich)",
                        options: ["Versorgen", "Trocknen", "Verstauen", "Wegwerfen", "In die Sonne legen"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Welche Aussagen über den Abschluss sind richtig? (Mehrere Antworten möglich)",
                        options: ["Langsam auftauchen", "Sicherheitsstopp", "Gemeinsam auftauchen", "OK-Zeichen", "Schnell auftauchen"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Warum ist der Sicherheitsstopp so wichtig? (Mehrere Antworten möglich)",
                        options: ["Stickstoff abatmen", "Gesundheit", "Sicherheit", "Keine Bläschen", "Zeitvertreib"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist die Faustregel für den Aufstieg?",
                        options: ["Langsamer als die Luftblasen", "Schneller als die Luftblasen", "Gleich schnell", "Egal", "Immer 20 m/min"],
                        correct: 0
                    },
                    {
                        question: "Was ist die Rettungskette?",
                        options: ["Fünf Schritte im Notfall", "Ein Tauchgang", "Ein Test", "Ein Spiel", "Ein Werkzeug"],
                        correct: 0
                    },
                    {
                        question: "Was ist der erste Schritt?",
                        options: ["Erkennen und Bergen", "Notruf", "Erste Hilfe", "Rettungsdienst", "Druckkammer"],
                        correct: 0
                    },
                    {
                        question: "Welche Nummer ruft man?",
                        options: ["112", "110", "911", "115", "0800"],
                        correct: 0
                    },
                    {
                        question: "Was gibt man beim Notruf an? (Mehrere Antworten möglich)",
                        options: ["WO", "WAS", "WER", "WIE VIEL", "WIE ALT"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was macht man bei der Ersten Hilfe? (Mehrere Antworten möglich)",
                        options: ["Stabile Seitenlage", "Sauerstoff", "Vitalfunktionen prüfen", "Wiederbelebung", "Wasser geben"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist die Druckkammer? (Mehrere Antworten möglich)",
                        options: ["Spezialbehandlung", "Sauerstofftherapie", "Für schwere Tauchunfälle", "Ein Raum", "Ein Boot"],
                        correct: [0, 1, 2]
                    },
                    {
                        question: "Welche Aussagen über die Rettungskette sind richtig? (Mehrere Antworten möglich)",
                        options: ["5 Schritte", "112", "Sauerstoff", "Druckkammer", "Man ruft 110"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Warum ist die Rettungskette wichtig? (Mehrere Antworten möglich)",
                        options: ["Leben retten", "Sicherheit", "Struktur", "Schnelligkeit", "Spaß"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was macht der Rettungsdienst? (Mehrere Antworten möglich)",
                        options: ["Versorgung", "Stabilisierung", "Transport", "Erste Hilfe", "Nichts"],
                        correct: [0, 1, 2, 3]
                    },
                    {
                        question: "Was ist die wichtigste Regel im Notfall? (Mehrere Antworten möglich)",
                        options: ["Ruhe bewahren", "Laut sprechen", "Keine Panik", "Schnell handeln", "Weglaufen"],
                        correct: [0, 2, 3]
                    }
                ]
            }
        },
        {
            id: "kap7",
            title: "Kapitel 7: Die Praxis",
            intro: "Deine Prüfung für das KTSA Silber. Du hast viel gelernt und geübt! Jetzt wird es ernst: Bei der Prüfung für das KTSA Silber zeigst du, was du alles drauf hast. Die Prüfung besteht aus zwei Teilen: den Übungen im Schwimmbad und den Übungen im Freiwasser.",
            subsections: [
                {
                    id: "kap7-1",
                    title: "Die Bad-Übungen (mit der ABC-Ausrüstung)",
                    text: `<p>Im Schwimmbad zeigst du, dass du dich ohne schwere Tauchflasche sicher im Wasser bewegen kannst.</p>
					<p>• <strong>Zeittauchen:</strong> Du tauchst 25 Sekunden lang unter Wasser und schwimmst dabei etwa 10 Meter weit. Das zeigt, dass du dich unter Wasser 
					orientieren kannst und nicht die Luft anhältst, sondern ruhig bleibst.</p>
					<p>• <strong>Streckentauchen:</strong> Du tauchst 20 Meter weit mit einem Atemzug. Wenn du eine Neoprenjacke und -hose trägst (die dich etwas mehr Auftrieb geben), 
					reichen auch 15 Meter. <em>Tipp: Atme vorher ruhig und tief ein, aber hyperventiliere nicht!</em></p>
					<p>• <strong>Abtauchen und Schnorchel ausblasen:</strong> Du tauchst dreimal stilgerecht ab und bläst am Ende den Schnorchel an der Wasseroberfläche wieder aus. 
					Das ist wichtig, damit kein Wasser im Schnorchel bleibt.</p>
					<p>• <strong>Maske absetzen und wieder aufsetzen:</strong> Du nimmst unter Wasser deine Maske ab, setzt sie wieder auf und bläst sie aus. Das ist eine wichtige 
					Sicherheitsübung für den Fall, dass dir die Maske mal verrutscht.</p>
					<p>• <strong>Schnorcheln:</strong> Du schwimmst 300 Meter mit dem Schnorchel. Dabei wechselst du die Lagen: Brustlage (auf dem Bauch), Seitenlage (auf der Seite) 
					und Rückenlage (auf dem Rücken).</p>
					<p>• <strong>Partnerübung (Wechselatmung):</strong> Du schwimmst 50 Meter mit deinem Partner zusammen. Dabei atmet ihr abwechselnd durch den Schnorchel 
					(einer taucht, der andere atmet). Das zeigt, dass ihr als Team zusammenarbeitet.</p>`,
                    images: ["bilder/7_1_ABC.jpg"]
                },
                {
                    id: "kap7-2",
                    title: "Die Freiwasser-Übungen (mit dem Tauchgerät)",
                    text: `<p>Jetzt geht es ins tiefe Wasser! Hier zeigst du, dass du mit deiner Tauchausrüstung sicher umgehen kannst.</p>
					<p><strong>Der erste Tauchgang:</strong> Du tauchst mit deinem Ausbilder auf eine Tiefe von 5 bis 8 Metern und bleibst 15 bis 30 Minuten unter Wasser.</p>
					<p>• <strong>Maske abnehmen in 3 Metern Tiefe:</strong> Du tauchst mit dem Gerät auf 3 Meter Tiefe, nimmst deine Tauchermaske ab, setzt sie wieder auf 
					und bläst sie aus. Das ist eine echte Herausforderung, aber du schaffst das!</p>
					<p>• <strong>Luft teilen (25 Meter):</strong> Du schwimmst 25 Meter unter Wasser. Dabei atmest du einmal aus dem Hauptatemregler deines Partners (du bist der Luftnehmer) 
					und einmal gibst du deinem Partner deinen Regler (du bist der Luftgeber). <em>Erinnerst du dich an die VDST-Regel? Der Partner bekommt den Hauptregler, du wechselst auf den Reserve-Regler am Hals!</em></p>
					<p>• <strong>Schnorcheln mit Gerät:</strong> Du schnorchelst 10 Minuten mit deiner kompletten Tauchausrüstung an der Oberfläche.</p>
					<p><strong>Der zweite Tauchgang:</strong> Noch einmal 5 bis 8 Meter tief für 15 bis 30 Minuten.</p>
					<p>• <strong>Abstand halten und Zeichen geben:</strong> Du tauchst 10 Minuten lang mit deutlichem Abstand über dem Grund (damit du keine Pflanzen oder Tiere verletzt). 
					Dabei reagierst du richtig auf 5 Unterwasser-Pflichtzeichen (z.B. „Stopp“, „Kalt“, „OK“).</p>
					<p>• <strong>Der Aufstieg:</strong> Am Ende des Tauchgangs steigst du gemeinsam mit deinem Partner langsam und kontrolliert auf. Du achtest darauf, nicht zu schnell zu sein.</p>
					<p>• <strong>Ausrüstung versorgen:</strong> Nach dem Tauchgang baust du deine Ausrüstung ab und versorgst sie richtig (Flaschen sichern, Anzug aufhängen, etc.).</p>
					<p><strong>Du hast es geschafft!</strong> Wenn du alle diese Übungen gemeistert hast, bist du offiziell ein KTSA-Silber-Taucher!</p>`,
                    images: ["bilder/7_2_Freiwasser.jpg"]
                }
            ]
        }
    ]
};