const bookData = {
    cover: {
        title: "Willkommen in der Unterwasserwelt",
        subTitle: "Schön, dass du dabei bist!",
        text1: "Das Tauchen eröffnet einen Zugang zu einer eigenen, faszinierenden Welt. Unter Wasser bewegt sich der Taucher ruhig und nahezu schwerelos durch das blaue Element, beobachtet die Tierwelt und erlebt die Natur aus einer ungewöhnlichen Perspektive.",
        text2: "Dieses Buch begleitet den Weg zum VDST-Kindertauchsportabzeichen (KTSA) Silber. Es vermittelt Schritt für Schritt die sichere Bewegung unter Wasser, den korrekten Umgang mit der Tauchausrüstung und die Bedeutung des Umweltschutzes für die Unterwasserwelt.",
        footer: "Der Weg zum KTSA Silber beginnt hier.",
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
							id: "luftdruck",
                            subTitle: "Luftdruck",
                            text: `<p>Luft hat ein Gewicht und drückt auf alles, was sich auf der Erde befindet. Diese Kraft wird <strong>Luftdruck</strong> genannt. Der Luftdruck ist nicht überall gleich, er ändert sich mit der Höhe.</p>
							<p>In einer Höhe von <strong>10.000 Metern</strong>, in der Reiseflughöhe von Flugzeugen, ist die Luft sehr dünn. Der Druck liegt hier bei etwa <strong>0,2 bar</strong>. Aus diesem Grund muss die Kabine eines 
							Flugzeugs künstlich belüftet werden. Auf einem <strong>5.000 Meter</strong> hohen Berg sinkt der Druck auf etwa <strong>0,5 bar</strong>. Die Atmung wird dadurch erschwert, weshalb Bergsteiger 
							oft Sauerstoffflaschen mitführen.</p>
							<p>Am Meeresspiegel (0 Meter) beträgt der Luftdruck <strong>1 bar</strong>. Dieser Wert wird als <strong>Normaldruck</strong> bezeichnet. Der menschliche Körper ist an diesen Druck gewöhnt. 
							In einer Tiefe von <strong>5.000 Metern</strong> im Ozean addiert sich zum Luftdruck der Druck des Wassers. Da Wasser kaum komprimierbar ist, herrscht in dieser Tiefe ein gewaltiger Druck von 
							etwa <strong>501 bar</strong>.</p>`,
                            image: "bilder/1_1_Luftdruck.jpg"
                        },
                        {
							id: "wasserdruck",
                            subTitle: "Wasserdruck",
                            text: `<p>Wasser ist dichter und schwerer als Luft. Beim Tauchen lastet mit zunehmender Tiefe immer mehr Wasser auf dem Körper. Die physikalische Regel lautet: Pro <strong>10 Meter</strong> 
							Wassertiefe erhöht sich der Druck um <strong>1 bar</strong>.</p>
							<p>An der Wasseroberfläche wirkt nur der Luftdruck von <strong>1 bar</strong>.<br>
							In <strong>10 Metern</strong> Tiefe addiert sich der Wasserdruck hinzu, der Gesamtdruck beträgt <strong>2 bar</strong>. <br>
							In <strong>20 Metern</strong> Tiefe sind es <strong>3 bar</strong>, <br>
							in <strong>30 Metern</strong> <strong>4 bar</strong><br>
							und in <strong>40 Metern</strong> Tiefe bereits <strong>5 bar</strong>.</p>
							<p>Ein anschauliches Beispiel für diesen Druck ist ein Luftballon. Wird er in die Tiefe geführt, drückt das Wasser von allen Seiten auf ihn. Die Luft im Inneren wird komprimiert, 
							der Ballon verkleinert sich. Aus dem gleichen Grund können Menschen unter Wasser nicht atmen. Taucher verwenden <strong>Atemregler</strong>, die die Luft mit dem exakten Umgebungsdruck der jeweiligen Tiefe liefern.</p>`,
                            image: "bilder/1_1_1_Wasserdruck.jpg"
                        }
                    ]
                },
                {
                    id: "kap1-2",
                    title: "Was haben wir in der Flasche?",
					text: `<p>In einer Tauchflasche befindet sich keine reine Sauerstoffmischung, sondern hochreine, gefilterte Atemluft. Die Zusammensetzung entspricht genau der Luft, die wir auch über Wasser einatmen. Ein Blick auf die beiden Diagramme in der Grafik verdeutlicht den Unterschied zwischen Ein- und Ausatemluft.</p>
					<h4>Diagramm 1: Die Einatemluft</h4>
					<p>Wenn Luft eingeatmet wird, besteht sie aus drei Hauptbestandteilen:</p>
					<ul style="margin-bottom: 15px; padding-left: 20px;">
						<li><strong>78 % Stickstoff:</strong> Dieses Gas macht den größten Anteil aus. Es wird vom Körper nicht verbraucht.</li>
						<li><strong>21 % Sauerstoff:</strong> Dieser Anteil ist lebensnotwendig. Der Körper benötigt ihn für die Energiegewinnung.</li>
						<li><strong>1 % Edelgase und Kohlendioxid:</strong> Dazu zählen Spurengase wie Argon oder das bereits ausgeatmete Kohlendioxid.</li>
					</ul>
					<h4>Diagramm 2: Die Ausatemluft</h4>
					<p>Nachdem die Luft die Lunge passiert hat, hat sich ihre Zusammensetzung verändert:</p>
					<ul style="margin-bottom: 15px; padding-left: 20px;">
						<li><strong>Der Sauerstoffanteil sinkt auf 16 %:</strong> Der Körper hat einen Teil des Sauerstoffs aufgenommen und verbraucht.</li>
						<li><strong>Der Kohlendioxidanteil steigt auf 4 %:</strong> Dieses Gas entsteht als Abfallprodukt im Stoffwechsel und wird ausgeatmet.</li>
						<li><strong>Der Stickstoffanteil bleibt bei 78 %:</strong> Stickstoff wird vom Körper weder aufgenommen noch abgegeben. Er bleibt unverändert.</li>
						<li><strong>2 % Edelgase und Wasserdampf:</strong> Der Wasserdampf entsteht durch die Atmung und die Feuchtigkeit in der Lunge.</li>
					</ul>
					<h4>Die Komprimierung in der Tauchflasche</h4>
					<p>Damit ausreichend Atemluft in die kompakte Flasche passt, wird sie von starken Kompressoren extrem stark zusammengedrückt (komprimiert). Dieser Vorgang erzeugt <strong>Pressluft</strong> mit einem Druck von oft <strong>200 bis 300 bar</strong>.</p>
					<p>Ein entscheidender Punkt ist die Qualität dieser Pressluft. Sie muss absolut trocken und sauber sein. Wäre Feuchtigkeit in der Flasche, würde der hohe Druck in der Tiefe oder das kalte Wasser dazu führen, dass Wassertröpfchen gefrieren. Zudem würde das Metall der Flasche von innen korrodieren (rosten). Die Gaszusammensetzung und die Reinheit müssen exakt stimmen, damit der Körper beim Atmen unter Druck keinen Schaden nimmt.</p>`,
                    image: "bilder/1_2_Atemluft.jpg"
                },
                {
                    id: "kap1-3",
                    title: "Licht und Farben unter Wasser",
                    text: `<p>Wasser absorbiert Sonnenlicht. Es wirkt wie ein Filter, der Farben mit zunehmender Tiefe verschluckt. Die Farbe <strong>Rot</strong> verschwindet bereits in <strong>1 bis 5 Metern</strong> Tiefe.
					<strong>Orange</strong> verschwindet bei etwa <strong>10 Metern</strong>, <strong>Gelb</strong> bei <strong>15 bis 20 Metern</strong>. Ab <strong>30 Metern</strong> wird auch <strong>Grün</strong> absorbiert. 
					In <strong>40 Metern</strong> Tiefe dominiert nur noch die Farbe <strong>Blau</strong>.</p>
					<p>Aus diesem Grund benötigen Taucher Taschenlampen. Das künstliche Licht der Lampe dringt nur über eine kurze Distanz und bringt die ursprünglichen Farben in unmittelbarer Nähe wieder zum Vorschein. 
					So können Objekte und Lebewesen direkt vor dem Taucher in ihrer echten Farbe betrachtet werden, während die Umgebung weiterhin blau bleibt.</p>
					<p>Neonfarbene Ränder an Tauchausrüstung sind ebenfalls auf dieses Phänomen zurückzuführen. Sie bleiben auch in größeren Tiefen sichtbar und ermöglichen die schnelle Wiedererkennung des Tauchpartners.</p>`,
                    image: "bilder/1_3_Farben.jpg"
                },
                {
                    id: "kap1-4",
                    title: "Sehen unter Wasser",
                    text: `<p>Das menschliche Auge ist für das Sehen in Luft ausgelegt. Wasser hat eine andere Dichte und bricht das Licht anders. Ohne Tauchmaske wäre die Sicht unter Wasser unscharf. 
					Die Maske erzeugt ein Luftpolster vor den Augen und ermöglicht klares Sehen.</p>
					<p>Durch die Glasscheibe entsteht ein Brechungseffekt. Objekte erscheinen unter Wasser etwa <strong>33 % größer</strong> und <strong>25 % näher</strong>, als sie tatsächlich sind. 
					Ein Fisch, der scheinbar 4 Meter entfernt ist, befindet sich in Wirklichkeit weiter weg. Taucher müssen diese optische Täuschung bei der Einschätzung von Entfernungen berücksichtigen.</p>`,
                    image: "bilder/1_4_Sehen.jpg"
                },
                {
                    id: "kap1-5",
                    title: "Hören unter Wasser",
                    text: `<p>Schall breitet sich in Wasser etwa viermal schneller aus als in Luft (ca. <strong>1.500 m/s</strong> statt <strong>343 m/s</strong>). Dadurch erreicht ein Geräusch beide Ohren nahezu gleichzeitig. 
					Das menschliche Gehirn kann die Richtung des Schalls nicht mehr berechnen. Eine akustische Ortung ist unter Wasser nicht möglich.</p>
					<p>Aus diesem Grund gilt eine wichtige Sicherheitsregel: Schall darf niemals als Signal zum Auftauchen genutzt werden. Geräusche können irreführend sein. Vor dem Auftauchen muss die Umgebung visuell kontrolliert werden.</p>
					<p>Fische nutzen die Schallausbreitung über ihre Seitenlinienorgane, um Erschütterungen wahrzunehmen. Wale nutzen die Physik für ihren Gesang, der sich über hunderte Kilometer im Ozean ausbreiten kann.</p>`,
                    image: "bilder/1_5_Hoeren.jpg"
                },
                {
                    id: "kap1-6",
                    title: "Auftrieb und Tarierung",
                    text: `<p>Im Wasser wirken zwei Kräfte: Der <strong>Auftrieb</strong> (zum Beispiel durch den Neoprenanzug) zieht nach oben, das <strong>Gewicht</strong> (Blei) zieht nach unten. 
					Das Ziel ist der <strong>neutrale Auftrieb</strong>, bei dem der Taucher schwerelos im Wasser schwebt.</p>
					<p>Bei zu wenig Blei treibt der Taucher an der Oberfläche. Bei zu viel Blei sinkt er unkontrolliert. Die perfekte Bleimenge wird im <strong>Bleicheck</strong> ermittelt: 
					Der Taucher lässt die Luft aus dem Jacket ab und atmet normal. Steht er bis zur Augenhöhe im Wasser und sinkt erst beim Ausatmen langsam ab, ist die Bleimenge korrekt.</p>`,
                    image: "bilder/1_6_Auftrieb.jpg"
                }
            ],
            quiz: {
				questionPool: [
					{
						question: "Was versteht man unter dem Begriff 'Luftdruck'?",
						options: ["Die Kraft, die von der Sonne ausgeht.", "Das Gewicht der Luft, die auf uns und unsere Umgebung drückt.", "Die Menge an Sauerstoff, die in der Luft enthalten ist.", "Der Wind, der durch die Atmosphäre weht.", "Die Temperatur der Luft."],
						correct: 1
					},
					{
						question: "Wie hoch ist der Luftdruck auf Meeresspiegelhöhe?",
						options: ["0,2 bar", "0,5 bar", "1 bar", "5 bar", "10 bar"],
						correct: 2
					},
					{
						question: "Warum spüren wir den Luftdruck am Meeresspiegel nicht?",
						options: ["Weil der Druck zu schwach ist, um wahrgenommen zu werden.", "Weil der Druck von allen Seiten gleichmäßig auf uns wirkt.", "Weil er nur nachts vorhanden ist.", "Weil er ausschließlich unter Wasser wirkt.", "Weil unser Körper keinen Druck wahrnehmen kann."],
						correct: 1
					},
					{
						question: "Welche Aussagen über den Luftdruck sind richtig?",
						options: ["Der Luftdruck ist überall auf der Erde gleich.", "Der Luftdruck ändert sich mit der Höhe.", "Im Gebirge ist der Luftdruck niedriger als am Meer.", "Unter Wasser ist der Luftdruck höher als an der Oberfläche.", "Luft hat kein Gewicht."],
						correct: [1, 2, 3]
					},
					{
						question: "Was bezeichnet man als 'Normaldruck'?",
						options: ["0 bar", "0,5 bar", "1 bar", "2 bar", "10 bar"],
						correct: 2
					},
					{
						question: "In welcher Situation ist der Luftdruck am niedrigsten?",
						options: ["Am Meeresspiegel.", "Auf einem 5.000 Meter hohen Berg.", "Im Flugzeug in 10.000 Metern Höhe.", "In einem U-Boot in 5.000 Metern Tiefe.", "Im Schwimmbad."],
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
						options: ["Weil sie platzen.", "Weil das Wasser sie von allen Seiten zusammendrückt.", "Weil die Luft aus ihnen entweicht.", "Weil sie kalt werden.", "Weil sie schwerer werden."],
						correct: 1
					},
					{
						question: "Was passiert mit dem Druck, wenn du tiefer tauchst?",
						options: ["Er bleibt gleich.", "Er sinkt.", "Er steigt.", "Er verschwindet.", "Er wird leichter."],
						correct: 2
					},
					{
						question: "Welche Aussagen über den Wasserdruck sind richtig?",
						options: ["Wasser ist dichter als Luft.", "Alle 10 Meter Tiefe kommt 1 bar Druck hinzu.", "Der Wasserdruck ist überall gleich.", "In 30 Metern Tiefe herrschen insgesamt 4 bar.", "Wasser lässt sich leicht zusammendrücken."],
						correct: [0, 1, 3]
					},
					{
						question: "Was machen Atemregler?",
						options: ["Sie filtern das Wasser.", "Sie liefern Luft mit dem passenden Umgebungsdruck.", "Sie kühlen die Luft ab.", "Sie speichern die Luft.", "Sie zeigen den Druck an."],
						correct: 1
					},
					{
						question: "Wie viel Druck lastet in 40 Metern Tiefe auf dir?",
						options: ["1 bar", "2 bar", "3 bar", "4 bar", "5 bar"],
						correct: 4
					},
					{
						question: "Was ist der Unterschied zwischen Luftdruck und Wasserdruck?",
						options: ["Der Luftdruck ist stärker als der Wasserdruck.", "Der Wasserdruck steigt schneller mit der Tiefe an.", "Luftdruck gibt es nur im Wasser.", "Der Wasserdruck beträgt immer 1 bar.", "Es gibt keinen Unterschied."],
						correct: 1
					},
					{
						question: "Warum ist Wasser schwerer als Luft?",
						options: ["Weil es kälter ist.", "Weil es dichter ist.", "Weil es mehr Sauerstoff enthält.", "Weil es salzig ist.", "Weil es blau ist."],
						correct: 1
					},
					{
						question: "Was befindet sich in einer Tauchflasche?",
						options: ["Reiner Sauerstoff.", "Normale, hochreine und gefilterte Atemluft.", "Nur Stickstoff.", "Wasser.", "Helium."],
						correct: 1
					},
					{
						question: "Wie viel Prozent Sauerstoff ist in der Einatemluft enthalten?",
						options: ["78 %", "21 %", "1 %", "16 %", "50 %"],
						correct: 1
					},
					{
						question: "Wie viel Prozent Stickstoff ist in der Luft enthalten?",
						options: ["21 %", "78 %", "1 %", "4 %", "50 %"],
						correct: 1
					},
					{
						question: "Was passiert mit dem Sauerstoff, wenn wir ausatmen?",
						options: ["Er steigt auf 78 % an.", "Er sinkt auf 16 % ab.", "Er bleibt gleich.", "Er verschwindet ganz.", "Er wird zu Stickstoff."],
						correct: 1
					},
					{
						question: "Welche Gase sind in der Atemluft enthalten?",
						options: ["Sauerstoff", "Stickstoff", "Kohlendioxid", "Helium", "Wasserstoff"],
						correct: [0, 1, 2]
					},
					{
						question: "Warum befindet sich in der Tauchflasche kein reiner Sauerstoff?",
						options: ["Weil der zu teuer wäre.", "Weil normale Atemluft die richtige Mischung für unseren Körper ist.", "Weil Sauerstoff giftig ist.", "Weil sie zu schwer wäre.", "Weil sie nicht gefiltert werden kann."],
						correct: 1
					},
					{
						question: "Wie viel Prozent Kohlendioxid atmen wir aus?",
						options: ["1 %", "4 %", "16 %", "21 %", "78 %"],
						correct: 1
					},
					{
						question: "Was versteht man unter Pressluft?",
						options: ["Luft, die kalt ist.", "Luft, die stark zusammengedrückt wurde.", "Luft, die gefiltert wurde.", "Luft, die aus dem Wasser kommt.", "Luft, die mit Sauerstoff angereichert ist."],
						correct: 1
					},
					{
						question: "Warum muss die Luft in der Flasche trocken sein?",
						options: ["Damit sie leichter ist.", "Damit kein Wasser in der Flasche gefriert oder das Metall von innen rostet.", "Damit sie besser schmeckt.", "Damit sie schneller fließt.", "Damit sie kälter ist."],
						correct: 1
					},
					{
						question: "Welche Aussagen über die Atemluft sind richtig?",
						options: ["Sie besteht zu 78 % aus Stickstoff.", "Sie enthält 21 % Sauerstoff.", "Sie enthält 1 % Edelgase.", "Sie besteht aus reinem Sauerstoff.", "Sie enthält 50 % Kohlendioxid."],
						correct: [0, 1, 2]
					},
					{
						question: "Welche Farbe verschwindet zuerst im Wasser?",
						options: ["Blau", "Rot", "Grün", "Gelb", "Orange"],
						correct: 1
					},
					{
						question: "Ab welcher Tiefe verschwindet die Farbe Gelb?",
						options: ["1–5 Meter", "10 Meter", "15–20 Meter", "30 Meter", "40 Meter"],
						correct: 2
					},
					{
						question: "Warum brauchen Taucher eine Taschenlampe?",
						options: ["Um Fische zu fangen.", "Um die echten Farben wieder sichtbar zu machen.", "Um sich warm zu halten.", "Um den Weg zu finden.", "Um den Druck zu messen."],
						correct: 1
					},
					{
						question: "Welche Farbe bleibt in 40 Metern Tiefe übrig?",
						options: ["Rot", "Gelb", "Grün", "Blau", "Orange"],
						correct: 3
					},
					{
						question: "In welcher Reihenfolge verschwinden die Farben im Wasser?",
						options: ["Rot, Orange, Gelb, Grün", "Blau, Grün, Gelb, Rot", "Gelb, Rot, Blau, Grün", "Grün, Blau, Rot, Gelb", "Orange, Rot, Grün, Gelb"],
						correct: 0
					},
					{
						question: "Warum ist Tauchausrüstung oft bunt (Neon-Pink, Leuchtgelb)?",
						options: ["Weil es schön aussieht.", "Damit man den Tauchpartner in der Tiefe schnell wiedererkennt.", "Weil bunte Farben länger halten.", "Weil sie teurer ist.", "Weil sie wärmer ist."],
						correct: 1
					},
					{
						question: "Ab welcher Tiefe verschwindet die Farbe Grün?",
						options: ["5 Meter", "10 Meter", "20 Meter", "30 Meter", "40 Meter"],
						correct: 3
					},
					{
						question: "Was passiert mit dem Sonnenlicht im Wasser?",
						options: ["Es wird stärker.", "Es wird Stück für Stück verschluckt.", "Es wird zu Wärme.", "Es wird reflektiert.", "Es bleibt gleich."],
						correct: 1
					},
					{
						question: "Welche Aussagen über Farben unter Wasser sind richtig?",
						options: ["Rot verschwindet zuerst.", "Blau bleibt am längsten sichtbar.", "Alle Farben verschwinden gleichzeitig.", "Eine Taschenlampe bringt die Farben zurück.", "Gelb verschwindet bei 30 Metern."],
						correct: [0, 1, 3]
					},
					{
						question: "Warum sieht die Welt in 40 Metern Tiefe fast wie ein Schwarz-Weiß-Film aus?",
						options: ["Weil das Wasser trüb ist.", "Weil fast alle Farben verschluckt wurden.", "Weil die Taucherbrille beschlägt.", "Weil es dort dunkel ist.", "Weil die Fische grau sind."],
						correct: 1
					},
					{
						question: "Warum sehen wir unter Wasser ohne Maske verschwommen?",
						options: ["Weil das Wasser kalt ist.", "Weil das Wasser eine andere Dichte hat als Luft.", "Weil unsere Augen zu klein sind.", "Weil es zu dunkel ist.", "Weil wir keine Luft bekommen."],
						correct: 1
					},
					{
						question: "Was bewirkt die Tauchmaske?",
						options: ["Sie vergrößert die Augen.", "Sie schafft ein Luftpolster vor den Augen.", "Sie filtert das Wasser.", "Sie schützt vor Kälte.", "Sie zeigt den Druck an."],
						correct: 1
					},
					{
						question: "Um wie viel größer erscheinen Gegenstände unter Wasser?",
						options: ["10 %", "25 %", "33 %", "50 %", "100 %"],
						correct: 2
					},
					{
						question: "Um wie viel näher erscheinen Gegenstände unter Wasser?",
						options: ["10 %", "25 %", "33 %", "50 %", "100 %"],
						correct: 1
					},
					{
						question: "Welche Aussagen über das Sehen unter Wasser sind richtig?",
						options: ["Die Maske schafft ein Luftpolster.", "Alles erscheint etwa 33 % größer.", "Alles erscheint etwa 25 % näher.", "Wasser bricht das Licht anders als Luft.", "Ohne Maske sehen wir scharf."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was ist der 'Brechungsindex'?",
						options: ["Ein Werkzeug.", "Ein optischer Effekt an der Glasscheibe.", "Ein Teil der Maske.", "Ein Messgerät.", "Eine Farbe."],
						correct: 1
					},
					{
						question: "Warum brauchen Taucher die Maske?",
						options: ["Um besser zu hören.", "Um scharf zu sehen.", "Um den Druck zu messen.", "Um zu atmen.", "Um warm zu bleiben."],
						correct: 1
					},
					{
						question: "Wie schnell breitet sich Schall im Wasser aus?",
						options: ["343 m/s", "1.500 m/s", "3.000 m/s", "100 m/s", "10.000 m/s"],
						correct: 1
					},
					{
						question: "Warum können wir unter Wasser die Richtung eines Geräusches nicht orten?",
						options: ["Weil der Schall zu langsam ist.", "Weil der Schall beide Ohren gleichzeitig erreicht.", "Weil Wasser zu kalt ist.", "Weil wir keine Ohren haben.", "Weil der Schall zu leise ist."],
						correct: 1
					},
					{
						question: "Wie schnell ist der Schall in der Luft?",
						options: ["343 m/s", "1.500 m/s", "100 m/s", "3.000 m/s", "10.000 m/s"],
						correct: 0
					},
					{
						question: "Welche Tiere nutzen die schnelle Schallausbreitung im Wasser?",
						options: ["Fische", "Wale", "Hunde", "Katzen", "Vögel"],
						correct: [0, 1]
					},
					{
						question: "Was sind Seitenlinienorgane?",
						options: ["Augen von Fischen.", "Sinnesorgane an der Seite von Fischen.", "Flossen.", "Kiemen.", "Schuppen."],
						correct: 1
					},
					{
						question: "Welche Aussagen über das Hören unter Wasser sind richtig?",
						options: ["Schall ist im Wasser schneller als in der Luft.", "Man kann die Richtung nicht orten.", "Schall erreicht beide Ohren gleichzeitig.", "Wale nutzen Schall für ihren Gesang.", "Man hört unter Wasser besser als über Wasser."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Warum klingen Schiffe unter Wasser manchmal näher, als sie sind?",
						options: ["Weil der Schall reflektiert wird.", "Weil der Schall so schnell ist und die Richtung nicht geortet werden kann.", "Weil das Wasser trüb ist.", "Weil die Motoren zu laut sind.", "Weil die Taucher Angst haben."],
						correct: 1
					},
					{
						question: "Wie nehmen Fische Erschütterungen wahr?",
						options: ["Mit den Augen.", "Mit den Seitenlinienorganen.", "Mit der Nase.", "Mit den Flossen.", "Mit den Kiemen."],
						correct: 1
					},
					{
						question: "Was versteht man unter Tarierung?",
						options: ["Das Aufblasen der Tauchflasche.", "Das Schweben im Wasser.", "Das Atmen unter Wasser.", "Das Schwimmen an der Oberfläche.", "Das Tauchen mit Flossen."],
						correct: 1
					},
					{
						question: "Was zieht dich nach oben?",
						options: ["Das Blei.", "Der Auftrieb.", "Die Schwerkraft.", "Die Flasche.", "Das Wasser."],
						correct: 1
					},
					{
						question: "Was zieht dich nach unten?",
						options: ["Der Auftrieb.", "Das Gewicht (Blei).", "Die Luft.", "Die Flossen.", "Das Jacket."],
						correct: 1
					},
					{
						question: "Was ist neutraler Auftrieb?",
						options: ["Du sinkst.", "Du steigst.", "Du schwebst schwerelos im Wasser.", "Du schwimmst an der Oberfläche.", "Du liegst am Grund."],
						correct: 2
					},
					{
						question: "Was passiert bei zu wenig Blei?",
						options: ["Du sinkst.", "Du treibst oben.", "Du schwebst.", "Du erstickst.", "Du frierst."],
						correct: 1
					},
					{
						question: "Was passiert bei zu viel Blei?",
						options: ["Du treibst oben.", "Du sinkst schnell nach unten.", "Du schwebst.", "Du bist schwerelos.", "Du schwimmst."],
						correct: 1
					},
					{
						question: "Was ist der Bleicheck?",
						options: ["Ein Test für die richtige Bleimenge.", "Ein Werkzeug.", "Eine Flosse.", "Ein Atemregler.", "Ein Messgerät."],
						correct: 0
					},
					{
						question: "Welche Aussagen über die Tarierung sind richtig?",
						options: ["Auftrieb zieht nach oben.", "Gewicht zieht nach unten.", "Neutraler Auftrieb ist der perfekte Zustand.", "Zu viel Blei ist ungefährlich.", "Tarierung ist nur für Profis."],
						correct: [0, 1, 2]
					},
					{
						question: "Was passiert, wenn du die Luft aus dem Jacket lässt?",
						options: ["Du steigst auf.", "Du sinkst.", "Du schwebst.", "Du bleibst oben.", "Du drehst dich."],
						correct: 1
					},
					{
						question: "Wann ist dein Blei perfekt portioniert?",
						options: ["Wenn du bis zur Augenhöhe im Wasser stehst und beim Ausatmen langsam absinkst.", "Wenn du sofort sinkst.", "Wenn du oben treibst.", "Wenn du schwebst.", "Wenn du gar kein Blei hast."],
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
                    text: `<p>Das Ohr besteht aus drei Bereichen. Das <strong>Außenohr</strong> fängt die Schallwellen auf. Das <strong>Mittelohr</strong> wird durch das <strong>Trommelfell</strong> vom Außenohr getrennt. 
					Die drei Gehörknöchelchen (Hammer, Amboss, Steigbügel) leiten die Schwingungen weiter. Im <strong>Innenohr</strong> befindet sich die <strong>Hörschnecke</strong>, 
					die Schwingungen in elektrische Signale umwandelt, sowie das <strong>Gleichgewichtsorgan</strong>.</p>
					<p>Die <strong>Eustachische Röhre</strong> verbindet das Mittelohr mit dem Rachenraum. Sie reguliert den Druckausgleich hinter dem Trommelfell. Beim Abtauchen drückt Wasser auf das Trommelfell. 
					Ist die Röhre nicht geöffnet, entsteht Schmerz. Durch den Druckausgleich (Nase zuhalten und sanft ausatmen) wird die Röhre geöffnet.</p>`,
                    image: "bilder/2_1_Ohr.jpg"
                },
                {
                    id: "kap2-2",
                    title: "Hohlräume in unserem Körper",
                    text: `<p>Der menschliche Körper besitzt verschiedene luftgefüllte Hohlräume. Beim Tauchen wirkt der Wasserdruck von außen auf diese Räume. Da sich Luft unter Druck zusammendrücken lässt, 
					müssen alle Hohlräume beim Abtauchen einen Druckausgleich erhalten. Die Grafik zeigt die betroffenen Bereiche:</p>
					<ol style="padding-left: 20px;">
						<li><strong>Stirnhöhle:</strong> Ein luftgefüllter Raum im Schädelknochen über der Nase.</li>
						<li><strong>Nasennebenhöhlen:</strong> Hohlräume hinter der Nase, die über kleine Gänge mit dem Rachen verbunden sind.</li>
						<li><strong>Mittelohr:</strong> Der Raum hinter dem Trommelfell.</li>
						<li><strong>Luftröhre:</strong> Verbindet den Mund mit der Lunge.</li>
						<li><strong>Lunge:</strong> Der größte luftgefüllte Raum des Körpers. Beim Gerätetauchen wird sie mit Luft unter dem exakten Umgebungsdruck versorgt.</li>
						<li><strong>Tauchmaske:</strong> Ein künstlicher Lufthohlraum. Beim Abtauchen presst Wasser von außen dagegen. Durch Ausatmen durch die Nase in die Maske wird der Druck ausgeglichen.</li>
					</ol>`,
                    image: "bilder/2_2_Hohlraum.jpg"
                },
                {
                    id: "kap2-3",
                    title: "Druckausgleich",
                    text: `<p>Beim Abtauchen erhöht sich der Wasserdruck auf das Trommelfell. Ohne einen Druckausgleich wird das Trommelfell nach innen gedrückt. Das verursacht Schmerzen. Die Grafik zeigt links 
					den Ablauf des Druckausgleichs und rechts die Gefahr bei einer Erkältung.</p>
					<p><strong>So funktioniert der Druckausgleich:</strong><br>
					<ul style="padding-left: 20px;">
						<li><strong>Normalzustand:</strong> Das Trommelfell ist entspannt, und die Eustachische Röhre (der Verbindungsschlauch zwischen Ohr und Rachen) ist frei. Der Druck ist im Gleichgewicht.</li>
						<li><strong>Beim Abtauchen:</strong> Der Wasserdruck steigt. Das Trommelfell wölbt sich nach innen. Das ist schmerzhaft.</li>
						<li><strong>Die Valsalva-Methode:</strong> Der Taucher schließt den Mund, hält die Nase zu und presst sanft Luft aus der Lunge durch die Nase nach oben. Dadurch öffnet sich die Eustachische Röhre. 
						Luft strömt ins Mittelohr, das Trommelfell entspannt sich wieder, und der Schmerz verschwindet. Der Druckausgleich muss frühzeitig und regelmäßig alle paar Meter erfolgen.</li>
					</ul></p>
					<p><strong>Die Gefahr bei einer Erkältung:</strong><br>
					Bei einer Erkältung sind die Schleimhäute geschwollen und die Eustachische Röhre ist durch Schleim verstopft. Ein Druckausgleich ist dann nicht möglich. Beim Abtauchen wird das 
					Trommelfell extrem nach innen gezogen. Das kann zu einer schmerzhaften Verletzung des Trommelfells führen (<strong>Barotrauma</strong>). Aus diesem Grund gilt: <strong>Tauchen mit einer Erkältung ist strikt untersagt.</strong></p>`,
                    image: "bilder/2_3_Druckausgleich.jpg"
                },
                {
                    id: "kap2-4",
                    title: "Lunge und Druck",
                    text: `<p>Beim <strong>Apnoe-Tauchen</strong> (ohne Flasche) wird die Lunge durch den Wasserdruck komprimiert. Beim <strong>Gerätetauchen</strong> (mit Flasche) wird Luft mit dem exakten 
					Umgebungsdruck eingeatmet, die Lunge bleibt gefüllt.</p>
					<p>Beim Auftauchen verringert sich der Wasserdruck. Die Luft in der Lunge dehnt sich gemäß dem <strong>Boyle-Mariotte-Gesetz</strong> aus. Daraus ergeben sich zwei fundamentale Regeln:</p>
					<ol style="margin-bottom: 15px; padding-left: 20px;">
						<li>Die Luft beim Aufsteigen niemals anhalten.</li>
						<li>Niemals zu schnell aufsteigen. Die Luft muss kontinuierlich entweichen können.</li>
					</ol>`,
                    image: "bilder/2_4_Lunge.jpg"
                },
                {
                    id: "kap2-5",
                    title: "Was ist Apnoe?",
					type: "stacked",
                    subrows: [
                        {
							id: "tg_ohne_flasche",
							subTitle: "Tauchen ohne Flasche",					
							text: `<p>Apnoe bezeichnet das Tauchen mit angehaltenem Atem, ohne Verwendung einer Tauchflasche. Eine bekannte Form ist das Streckentauchen im Schwimmbad, bei dem eine Bahn mit einem Atemzug zurückgelegt wird.</p>
							<p><strong>Eine eigenständige Sportart</strong><br>
							Apnoe ist eine eigenständige Sportart. Trainierte Apnoe-Taucher erreichen mit nur einem Atemzug große Tiefen oder weite Strecken. Dies erfordert ein jahrelanges Training von Körper und Geist.</p>
							<p><strong>Rekorde im Apnoe-Tauchen</strong><br>
							Die aktuellen Rekorde zeigen die Leistungsfähigkeit des menschlichen Körpers unter kontrollierten Bedingungen:</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Zeit:</strong> Der Franzose Stéphane Mifsud hielt sich 11 Minuten und 35 Sekunden unter Wasser auf, ohne zu atmen.</li>
								<li><strong>Strecke:</strong> Der Pole Mateusz Malina tauchte mit einem Atemzug 250 Meter weit. Dies entspricht zehn Bahnen in einem Schwimmbad.</li>
								<li><strong>Tiefe:</strong> Der Russe Alexey Molchanov tauchte mit einem Atemzug 137 Meter tief ins Meer. Diese Tiefe übertrifft die Höhe eines 40-stöckigen Hochhauses.</li>
							</ul>`,
							image: "bilder/2_5_Apnoe.jpg"
						},
						{
							id: "atmung_bei_apnoe",
							subTitle: "Atmung bei Apnoe",
							text:`<p>Bevor ein Apnoe-Taucher abtaucht, ist eine kontrollierte Atmung entscheidend. Die Atmung erfolgt ruhig und tief. Eine hilfreiche Technik zur Kontrolle ist die <strong>Bauchatmung</strong>: 
							Der Taucher legt eine Hand auf den Bauch und atmet so, dass sich die Bauchdecke hebt und senkt. Die Schultern bleiben dabei entspannt. Diese Methode beruhigt den Körper und bereitet ihn auf den Atemstillstand vor.</p>
							<p>Ein häufiger Fehler ist die <strong>Hyperventilation</strong>. Dabei atmet der Taucher hektisch und schnell hintereinander ein und aus. Das ist gefährlich, weil dadurch der Kohlendioxidgehalt im Blut sinkt. 
							Kohlendioxid ist aber das Signal, das dem Gehirn meldet, wann der Körper wieder atmen muss. Bei Hyperventilation fällt dieses Warnsignal aus. Der Taucher bemerkt den Sauerstoffmangel nicht 
							rechtzeitig und kann das Bewusstsein verlieren.</p>`,
							image: "bilder/2_5_1_Apnoe_Atmung.jpg"
						},
						{
							id: "blackout",
							subTitle: "Schwimmbad-Blackout",
							text: `<p>Ein <strong>Blackout</strong> tritt auf, wenn das Gehirn plötzlich keinen Sauerstoff mehr erhält. Der Taucher wird ohne Vorwarnung ohnmächtig. Der gefährliche Aspekt dabei ist: 
							Der Taucher spürt in der Regel keine Warnzeichen. Er fühlt sich oft noch völlig normal, bevor die Ohnmacht einsetzt.</p>
							<p>Ein <strong>Schwimmbad-Blackout</strong> ist häufig die direkte Folge von Hyperventilation vor dem Abtauchen. Durch das hektische Atmen wird das natürliche Warnsignal des Körpers ausgeschaltet, 
							sodass der Taucher den kritischen Sauerstoffmangel nicht bemerkt.</p>
							<p>Deshalb gilt eine absolute Sicherheitsregel: <strong>Apnoe-Tauchen ohne einen aufmerksamen Partner (Buddy) ist strengstens verboten.</strong> Der Buddy muss den Taucher an der 
							Wasseroberfläche beobachten und im Notfall sofort eingreifen können.</p>`,
							image: "bilder/2_5_2_Apnoe_Blackout.jpg"
						}
					]                    
                }
			],
            quiz: {
				questionPool: [
					{
						question: "Was ist das Außenohr?",
						options: ["Die Ohrmuschel.", "Das Trommelfell.", "Die Hörschnecke.", "Das Gleichgewichtsorgan.", "Die Eustachische Röhre."],
						correct: 0
					},
					{
						question: "Was trennt das Außenohr vom Mittelohr?",
						options: ["Die Hörschnecke.", "Das Trommelfell.", "Die Gehörknöchelchen.", "Das Gleichgewichtsorgan.", "Die Ohrmuschel."],
						correct: 1
					},
					{
						question: "Wie heißen die drei Gehörknöchelchen?",
						options: ["Hammer, Amboss und Steigbügel.", "Klinge, Griff und Spitze.", "Rad, Achse und Speiche.", "Trommel, Pfeife und Glocke.", "Stein, Eisen und Glas."],
						correct: 0
					},
					{
						question: "Was macht die Hörschnecke?",
						options: ["Sie fängt Schall auf.", "Sie wandelt Schwingungen in elektrische Signale um.", "Sie hält das Gleichgewicht.", "Sie schützt das Trommelfell.", "Sie verbindet Ohr und Rachen."],
						correct: 1
					},
					{
						question: "Was macht das Gleichgewichtsorgan?",
						options: ["Es hört Geräusche.", "Es sorgt dafür, dass wir wissen, wo oben und unten ist.", "Es schützt vor Kälte.", "Es leitet Schall weiter.", "Es produziert Ohrenschmalz."],
						correct: 1
					},
					{
						question: "Was ist die Eustachische Röhre?",
						options: ["Ein Verbindungsschlauch zwischen Mittelohr und Rachen.", "Ein Knochen.", "Ein Muskel.", "Ein Sinnesorgan.", "Ein Teil der Hörschnecke."],
						correct: 0
					},
					{
						question: "Warum knackt es beim Tauchen?",
						options: ["Weil die Eustachische Röhre geöffnet wird.", "Weil das Trommelfell platzt.", "Weil Wasser ins Ohr läuft.", "Weil die Hörschnecke schwingt.", "Weil der Druck zu hoch ist."],
						correct: 0
					},
					{
						question: "Was passiert, wenn die Eustachische Röhre nicht geöffnet ist?",
						options: ["Es tut weh.", "Man hört besser.", "Nichts.", "Man wird ohnmächtig.", "Das Trommelfell heilt."],
						correct: 0
					},
					{
						question: "Welche Hohlräume sitzen im Schädel?",
						options: ["Stirnhöhle", "Nasennebenhöhlen", "Lunge", "Luftröhre", "Tauchmaske"],
						correct: [0, 1]
					},
					{
						question: "Wo muss überall Druck ausgeglichen werden?",
						options: ["Im Mittelohr", "In den Nasennebenhöhlen", "In der Lunge", "In der Tauchmaske", "In den Flossen"],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was ist die Tauchmaske für ein Hohlraum?",
						options: ["Ein natürlicher Hohlraum.", "Ein künstlicher Lufthohlraum.", "Ein Wasserhohlraum.", "Ein Knochen.", "Ein Muskel."],
						correct: 1
					},
					{
						question: "Warum muss man in die Maske ausatmen?",
						options: ["Um den Druck auszugleichen.", "Um sie zu kühlen.", "Um sie zu reinigen.", "Um Wasser rauszulassen.", "Um besser zu hören."],
						correct: [0, 3]
					},
					{
						question: "Was passiert, wenn der Druckausgleich nicht klappt?",
						options: ["Es tut weh.", "Es entsteht ein Unterdruck.", "Das Trommelfell wird verletzt.", "Nichts.", "Man hört besser."],
						correct: [0, 1, 2]
					},
					{
						question: "Was ist ein Barotrauma?",
						options: ["Eine Verletzung durch Druckunterschiede.", "Eine Erkältung.", "Ein Knochenbruch.", "Eine Augenentzündung.", "Ein Hautausschlag."],
						correct: 0
					},
					{
						question: "Warum darf man mit einer Erkältung nicht tauchen?",
						options: ["Weil die Verbindungsgänge blockiert sind.", "Weil der Druckausgleich fehlschlägt.", "Weil es wehtut.", "Weil man zu müde ist.", "Weil die Maske beschlägt."],
						correct: [0, 1, 2]
					},
					{
						question: "Welche Aussagen über Hohlräume sind richtig?",
						options: ["Die Lunge ist der größte Hohlraum.", "Die Tauchmaske ist ein künstlicher Hohlraum.", "Bei Erkältung sind die Gänge blockiert.", "Hohlräume brauchen keinen Druckausgleich.", "Die Stirnhöhle sitzt im Bauch."],
						correct: [0, 1, 2]
					},
					{
						question: "Was passiert mit der Luft in den Hohlräumen beim Abtauchen?",
						options: ["Sie wird zusammengedrückt.", "Sie dehnt sich aus.", "Sie bleibt gleich.", "Sie entweicht.", "Sie wird warm."],
						correct: 0
					},
					{
						question: "Welche Hohlräume nehmen nicht am Druckausgleich teil?",
						options: ["Kariesnester in Zähnen.", "Siebbeinzellen (wenn verschlossen).", "Die Lunge.", "Das Mittelohr.", "Die Nasennebenhöhlen."],
						correct: [0, 1]
					},
					{
						question: "Was ist die Valsalva-Methode?",
						options: ["Nase zuhalten und sanft Luft ausatmen.", "Mund weit öffnen.", "Schnell auftauchen.", "Tief einatmen.", "Die Maske abnehmen."],
						correct: 0
					},
					{
						question: "Was passiert beim Abtauchen mit dem Trommelfell?",
						options: ["Es wölbt sich nach innen.", "Es bleibt entspannt.", "Es wölbt sich nach außen.", "Es platzt.", "Es schwingt."],
						correct: 0
					},
					{
						question: "Was macht die Eustachische Röhre beim Druckausgleich?",
						options: ["Sie öffnet sich.", "Sie schließt sich.", "Sie platzt.", "Sie schwillt an.", "Sie bleibt gleich."],
						correct: 0
					},
					{
						question: "Wann sollte man den Druckausgleich machen?",
						options: ["Frühzeitig und regelmäßig.", "Nur wenn es wehtut.", "Nur am Anfang.", "Nur beim Auftauchen.", "Gar nicht."],
						correct: 0
					},
					{
						question: "Welche Aussagen über den Druckausgleich sind richtig?",
						options: ["Er ist wichtig.", "Er verhindert Schmerzen.", "Er öffnet die Eustachische Röhre.", "Er ist nur für Profis.", "Er funktioniert auch bei Erkältung."],
						correct: [0, 1, 2]
					},
					{
						question: "Warum ist der Druckausgleich bei einer Erkältung gefährlich?",
						options: ["Weil die Röhre verstopft ist.", "Weil das Trommelfell verletzt werden kann.", "Weil es zu Schmerzen kommt.", "Weil die Nase läuft.", "Weil man hustet."],
						correct: [0, 1, 2]
					},
					{
						question: "Was passiert, wenn man den Druckausgleich nicht macht?",
						options: ["Es tut weh.", "Das Trommelfell kann verletzt werden.", "Nichts.", "Man hört besser.", "Man wird ohnmächtig."],
						correct: [0, 1]
					},
					{
						question: "Was ist das 'Ploppen' im Ohr?",
						options: ["Das Öffnen der Eustachischen Röhre.", "Das Platzen des Trommelfells.", "Das Eindringen von Wasser.", "Das Schwingen der Hörschnecke.", "Das Zuschlagen der Ohrmuschel."],
						correct: 0
					},
					{
						question: "Was ist die häufigste Ursache für Schmerzen beim Abtauchen?",
						options: ["Fehlender Druckausgleich.", "Zu kaltes Wasser.", "Zu enge Maske.", "Zu schnelles Schwimmen.", "Zu viel Blei."],
						correct: 0
					},
					{
						question: "Was ist Apnoe?",
						options: ["Tauchen mit Flasche.", "Tauchen ohne Flasche mit angehaltener Luft.", "Schwimmen an der Oberfläche.", "Schnorcheln.", "Tauchen mit Blei."],
						correct: 1
					},
					{
						question: "Was darf man vor dem Apnoe-Tauchen nicht machen?",
						options: ["Hyperventilieren.", "Ruhig atmen.", "Tief einatmen.", "Ausatmen.", "Entspannen."],
						correct: 0
					},
					{
						question: "Was ist ein Schwimmbad-Blackout?",
						options: ["Ohnmacht durch Sauerstoffmangel.", "Ein Stromausfall.", "Ein Sprung ins Wasser.", "Ein Tauchrekord.", "Eine Erkältung."],
						correct: 0
					},
					{
						question: "Warum ist Hyperventilieren gefährlich?",
						options: ["Weil das Gehirn denkt, es sei genug Sauerstoff da.", "Weil man zu viel Wasser trinkt.", "Weil man zu schnell schwimmt.", "Weil man zu tief taucht.", "Weil man zu warm wird."],
						correct: 0
					},
					{
						question: "Was ist die goldene Regel beim Apnoe-Tauchen?",
						options: ["Niemals allein tauchen.", "Immer so tief wie möglich.", "Immer so lange wie möglich.", "Immer ohne Maske.", "Immer mit Blei."],
						correct: 0
					},
					{
						question: "Was passiert bei einem Blackout?",
						options: ["Man wird ohnmächtig.", "Man merkt es oft nicht vorher.", "Man braucht sofort Hilfe.", "Man schwimmt weiter.", "Man atmet tief ein."],
						correct: [0, 1, 2]
					},
					{
						question: "Was passiert mit der Lunge beim Auftauchen mit der Flasche?",
						options: ["Die Luft dehnt sich aus.", "Sie zieht sich zusammen.", "Sie bleibt gleich.", "Sie füllt sich mit Wasser.", "Sie platzt."],
						correct: 0
					},
					{
						question: "Was besagt das Boyle-Mariotte-Gesetz?",
						options: ["Luft dehnt sich bei Druckabfall aus.", "Wasser ist schwerer als Luft.", "Schall ist schnell.", "Licht wird gebrochen.", "Blei zieht nach unten."],
						correct: 0
					},
					{
						question: "Was darf man beim Auftauchen niemals tun?",
						options: ["Die Luft anhalten.", "Ausatmen.", "Langsam auftauchen.", "Den Buddy ansehen.", "Die Maske aufsetzen."],
						correct: 0
					},
					{
						question: "Warum darf man nicht zu schnell auftauchen?",
						options: ["Weil die Luft nicht schnell genug entweichen kann.", "Weil man sonst friert.", "Weil man die Orientierung verliert.", "Weil die Flasche leer wird.", "Weil man zu viel Luft verbraucht."],
						correct: 0
					},
					{
						question: "Welche Aussagen über die Lunge sind richtig?",
						options: ["Beim Apnoe-Tauchen wird sie zusammengedrückt.", "Beim Gerätetauchen bleibt sie prall gefüllt.", "Beim Auftauchen dehnt sich die Luft aus.", "Man darf die Luft anhalten.", "Die Lunge ist der größte Hohlraum."],
						correct: [0, 1, 2, 4]
					},
					{
						question: "Was passiert, wenn man beim Auftauchen die Luft anhält?",
						options: ["Die Lunge kann verletzt werden.", "Nichts.", "Man steigt schneller auf.", "Man atmet besser.", "Die Lunge zieht sich zusammen."],
						correct: 0
					},
					{
						question: "Wie schnell sollte man auftauchen?",
						options: ["Maximal 10 Meter pro Minute.", "So schnell wie möglich.", "50 Meter pro Minute.", "1 Meter pro Minute.", "Das ist egal."],
						correct: 0
					},
					{
						question: "Was ist die wichtigste Regel beim Auftauchen?",
						options: ["Immer ausatmen.", "Immer einatmen.", "Luft anhalten.", "Schnell auftauchen.", "Die Augen zumachen."],
						correct: 0
					},
					{
						question: "Was passiert mit der Luft in der Lunge beim Abtauchen?",
						options: ["Sie wird zusammengedrückt.", "Sie dehnt sich aus.", "Sie bleibt gleich.", "Sie entweicht.", "Sie wird warm."],
						correct: 0
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
							id: "abc",
							subTitle: "Die ABC",
							text: `<p>Die <strong>ABC-Ausrüstung</strong> bildet die Basis für das Tauchen. Der Name leitet sich aus den drei Hauptbestandteilen ab, die man sich leicht merken kann: 
							<strong>A</strong> sieht aus wie eine Flosse, <strong>B</strong> steht für die Maske (ähnlich einer Brille) und <strong>C</strong> sieht aus wie ein Schnorchel.</p>
							<p>Die drei Teile haben spezifische Funktionen: Die <strong>Flossen</strong> liefern den nötigen Vortrieb im Wasser. Die <strong>Maske</strong> schützt die Augen, 
							schafft ein Luftpolster und ermöglicht eine klare Sicht. Der <strong>Schnorchel</strong> ermöglicht die Atmung, während man an der Wasseroberfläche schwimmt.</p>
							<p>Mit der ABC-Ausrüstung ist das <strong>Schnorcheln</strong> möglich. Wer jedoch in die Tiefe tauchen möchte, benötigt zusätzlich eine Tauchflasche mit Atemregler. 
							Dieser Vorgang wird als <strong>Gerätetauchen</strong> bezeichnet.</p>`,
							image: "bilder/3_1_ABC.jpg"
						},
						{
							id: "flossen",
							subTitle: "Die Flossen",
							text: `<p>Flossen sind ein zentraler Bestandteil der ABC-Ausrüstung. Sie liefern den Vortrieb im Wasser. Es gibt verschiedene Arten von Flossen, die sich in ihrer Bauweise 
							und ihrem Einsatzgebiet unterscheiden. Ein Blick auf die Grafik zeigt den Unterschied zwischen zwei grundlegenden Typen.</p>
							<h4>Vollfußflossen für das Hallenbad</h4>
							<p><strong>Vollfußflossen</strong> (auch Fußteilflossen genannt) besitzen ein geschlossenes Fußteil. Der Fuß wird komplett vom Flossenmaterial umschlossen, ähnlich wie bei einem festen Schuh. 
							Diese Flossen werden barfuß getragen. Sie sind die optimale Wahl für das Schwimmbad, da sie einfach anzuziehen sind und im flachen, warmen Wasser einen guten Vortrieb bieten.</p>
							<h4>Geräteflossen für den See</h4>
							<p><strong>Geräteflossen</strong> (auch offene Flossen genannt) haben ein offenes Fußteil mit einem Fersenband. Sie werden nicht barfuß getragen, sondern über spezielle Neopren-Füßlinge gezogen. 
							Diese Füßlinge schützen die Füße vor Kälte und Verletzungen an steinigen Ufern. Das Fersenband sorgt dafür, dass die Flosse fest am Fuß sitzt. Geräteflossen sind daher ideal für den Einsatz 
							in kälteren Gewässern wie Seen oder im Meer.</p>
							<h4>Länge und Härte der Flossen</h4>
							<p>Neben der Bauweise spielen auch die Länge und die Härte des Flossenblatts eine wichtige Rolle:</p>
							<ul style="padding-left: 20px;">
								<li><strong>Längere, härtere Flossen</strong> erzeugen einen enormen Vortrieb. Sie sind besonders dann von Vorteil, wenn man gegen eine starke Strömung anschwimmen muss.</li>
								<li><strong>Kürzere, weichere Flossen</strong> sind kraftsparender und wendiger. Sie eignen sich hervorragend für flaches Wasser oder für Trainingseinheiten im Schwimmbad.</li>
							</ul>`,
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
							id: "uebersicht",
							subTitle: "Übersicht",
							text: `<p>Für einen Tauchgang ist eine umfangreiche Ausrüstung erforderlich. Sie dient der sicheren Atmung, der Fortbewegung und dem Schutz des Tauchers. Die Grafik zeigt die wichtigsten Bestandteile im Überblick.</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Die Tauchflasche (mit zwei Ventilen):</strong> Sie enthält die Pressluft mit einem Druck von bis zu 300 bar.</li>
								<li><strong>Das Atemregler-Set:</strong> Es besteht aus zwei ersten Stufen (an der Flasche) und zwei zweiten Stufen (den Atemreglern). Eine zweite Stufe wird im Mund getragen (Hauptregler). 
								Die andere zweite Stufe ist der Reserve-Regler. Er hängt an einem kurzen Schlauch, der direkt mit der ersten Stufe verbunden ist, und ist mit einem Bungee (Gummiband) am Hals befestigt.</li>
								<li><strong>Das Manometer:</strong> Die runde Anzeige zeigt den aktuellen Luftvorrat in der Flasche an.</li>
								<li><strong>Der Tauchcomputer:</strong> Das Gerät am Handgelenk misst Zeit und Tiefe. Es berechnet die verbleibende Tauchzeit und zeigt an, wann der Aufstieg eingeleitet werden muss.</li>
								<li><strong>Die ABC-Ausrüstung:</strong> Dazu gehören die Tauchmaske, der Schnorchel und die Flossen. Sie ermöglichen die Fortbewegung und die klare Sicht unter Wasser.</li>
								<li><strong>Der Kälteschutz (Extremitäten):</strong> Dazu gehören die <strong>Kopfhaube</strong> (schützt Kopf und Ohren), die <strong>Füßlinge</strong> (Neopren-Socken unter den Flossen) 
								und die <strong>Handschuhe</strong>. Sie sind wichtig, um den Wärmeverlust an Händen, Füßen und Kopf zu reduzieren.</li>
								<li><strong>Das Jacket (BCD):</strong> Es ist die Tarierweste des Tauchers. Über einen Knopf wird die Weste mit Luft aus der Flasche befüllt, um an der Oberfläche zu treiben. 
								Beim Abtauchen wird die Luft wieder abgelassen. Das Jacket ermöglicht die Regelung des Auftriebs (Tarierung).</li>
							</ul>`,
							image: "bilder/3_2_Ausruestung.jpg"
						},
						{
							id: "tauchmaske",
							subTitle: "Die Tauchmaske",
							text: `<p>Die Tauchmaske ist weit mehr als eine einfache Schwimmbrille. Sie besteht aus mehreren wichtigen Bauteilen, die in der Grafik beschriftet sind:</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Das Maskenglas:</strong> Es besteht aus gehärtetem Sicherheitsglas, damit es unter Wasser nicht so leicht zerbricht.</li>
								<li><strong>Der Maskenkörper:</strong> Er besteht aus flexiblem Silikon und schmiegt sich an das Gesicht an. So entsteht ein wasserdichter Abschluss.</li>
								<li><strong>Der Nasenerker:</strong> Dies ist ein besonders wichtiges Bauteil. Er umschließt die Nase und ermöglicht es dem Taucher, die Nase zum Druckausgleich zuzuhalten. 
								Ohne ihn wäre der Druckausgleich unter Wasser nicht möglich.</li>
								<li><strong>Das Maskenband und die Maskenschnalle:</strong> Mit ihnen wird die Maske individuell eingestellt und am Kopf fixiert, damit sie fest sitzt und kein Wasser eindringt.</li>
							</ul>`,
							image: "bilder/3_2_1_Maske.jpg",
						},
						{
							id: "jacket",
							subTitle: "Das Jacket",
							text: `<p>Das Jacket ist die aufblasbare Weste des Tauchers. Es hat zwei Hauptaufgaben: Es hält die Tauchflasche auf dem Rücken und reguliert den Auftrieb im Wasser (Tarierung). 
							Die Grafik zeigt die wichtigsten Bestandteile:</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Der Inflatorschlauch:</strong> Über diesen dicken Schlauch wird das Jacket mit Luft aus der Flasche befüllt. Drückt der Taucher auf den Knopf, strömt Luft in die Weste und er steigt auf.</li>
								<li><strong>Die Schnellablässe:</strong> Dies sind kleine Ventile, meist oben an der Schulter und unten am Gesäß. Über sie kann die Luft schnell und kontrolliert entweichen, wenn der Taucher abtauchen möchte.</li>
								<li><strong>Der Bauchgurt und der Flaschengurt:</strong> Sie fixieren das Jacket und die Flasche fest am Körper.</li>
								<li><strong>Die Bleitasche:</strong> In ihr wird das Blei verstaut, das den Auftrieb des Neoprenanzugs ausgleicht.</li>
								<li><strong>Die D-Ringe:</strong> Sie dienen als Befestigungspunkte für zusätzliche Ausrüstung wie eine Taucherlampe.</li>
							</ul>`,
							image: "bilder/3_2_2_Jacket.jpg",
						},
						{
							id: "atemregler",
							subTitle: "Der Atemregler-Set",
							text: `<p>Die Luft aus der Tauchflasche steht unter hohem Druck und kann nicht direkt eingeatmet werden. Deshalb ist ein Atemregler-Set erforderlich, das den Druck reguliert. 
							Die Grafik zeigt den Aufbau dieses Systems. Zur besseren Orientierung sind die Schläuche in der Grafik farbig markiert. In der Praxis können die Farben der Schläuche abweichen.</p>
							<h4>Die Ventile und die 1. Stufen</h4>
							<p>Oben auf der Tauchflasche befinden sich zwei Ventile. Das sind die Drehknöpfe, mit denen die Flasche aufgedreht wird. An jedem Ventil ist eine <strong>1. Stufe</strong> befestigt. 
							Diese Stufe hat die Aufgabe, den hohen Druck aus der Flasche (bis zu 300 bar) auf einen mittleren Druck zu reduzieren.</p>
							<p>Für die Sicherheit ist dieses System doppelt ausgelegt: Die <strong>primäre 1. Stufe</strong> (Hauptstufe) sitzt auf dem rechten Ventil. 
							Die <strong>Reserve-1. Stufe</strong> (Backup) sitzt auf dem linken Ventil. Dadurch sind die beiden Systeme voneinander getrennt. Fällt ein System aus, bleibt das andere funktionsfähig.</p>

							<h4>Die 2. Stufen (Atemregler)</h4>
							<p>An den 1. Stufen hängen verschiedene Schläuche, die zu den 2. Stufen führen. Die <strong>2. Stufe</strong> ist der eigentliche Atemregler, der in den Mund genommen wird. Es gibt zwei davon:</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Der Hauptregler (Primär):</strong> Er ist in der Grafik mit dem langen, grünen Schlauch verbunden. Dieser Regler wird beim Tauchen normalerweise im Mund getragen. 
								Der lange Schlauch ermöglicht Bewegungsfreiheit und sorgt im Notfall für ausreichend Abstand zum Tauchpartner.</li>
								<li><strong>Der Reserve-Regler (Backup):</strong> Er ist in der Grafik mit dem kurzen, gelben Schlauch verbunden. Dieser Regler hängt an einem grünen Gummiband (Bungee) direkt unter dem Kinn des Tauchers.</li>
							</ul>
							<h4>Weitere Anschlüsse an der Flasche</h4>
							<p>Neben den Atemreglern gibt es zwei weitere wichtige Anschlüsse:</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Der Finimeter (Druckanzeige):</strong> Er hängt in der Grafik an dem roten Schlauch. Die Anzeige zeigt den aktuellen Druck in der Flasche an. 
								Der grüne, gelbe und rote Bereich auf dem Ziffernblatt gibt Auskunft über den verbleibenden Luftvorrat.</li>
								<li><strong>Der Inflatorschlauch:</strong> Er hängt in der Grafik an dem orangefarbenen Schlauch und dient dazu, das Tarierjacket (die Weste) mit Luft aus der Flasche zu befüllen.</li>
							</ul>
							<h4>Die Hilfe im Notfall</h4>
							<p>Ein Notfall liegt vor, wenn der Tauchpartner plötzlich keine Luft mehr hat. In dieser Situation greift die doppelte Auslegung des Systems:</p>
							<ol style="margin-bottom: 15px; padding-left: 20px;">
								<li>Der Taucher nimmt seinen eigenen <strong>Hauptregler</strong> (den langen grünen Schlauch) aus dem Mund und gibt ihn an den Partner weiter. 
								Der lange Schlauch stellt sicher, dass beide Taucher genügend Abstand zueinander halten können.</li>
								<li>Der Taucher wechselt sofort auf seinen <strong>Reserve-Regler</strong> (den kurzen gelben Schlauch am Hals) und atmet daraus weiter.</li>
							</ol>
							<p>Dieses Vorgehen bietet einen entscheidenden Sicherheitsvorteil: Der Reserve-Regler hängt direkt vor der Nase des Tauchers. Er ist ohne Suchen zu finden. 
							Dadurch sind beide Taucher innerhalb kürzester Zeit wieder mit Atemluft versorgt.</p>`,
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
							id: "anzugsarten",
							subTitle: "Anzugsarten",
							text: `<p>Taucher benötigen spezielle Anzüge. Sie schützen den Körper vor Kälte und bieten einen gewissen Schutz vor Kratzern an Felsen oder Korallen. Da die Wassertemperaturen weltweit sehr unterschiedlich sind, 
							gibt es verschiedene Anzugstypen. Die Grafik zeigt fünf Varianten.</p>
							<h4>1. Der Shorty (Warmes Wasser)</h4>
							<p>Der Shorty ist ein kurzer Anzug mit kurzen Armen und Beinen. Er wird in warmen Gewässern (z. B. im Urlaub in den Tropen) getragen. Er bietet maximale Bewegungsfreiheit und verhindert eine Überhitzung des Tauchers.</p>
							<h4>2. Der Nassanzug (Mäßig warm)</h4>
							<p>Der Nassanzug ist ein Einteiler, der Arme und Beine vollständig bedeckt. Er funktioniert nach einem physikalischen Prinzip: Durch den Kragen dringt eine geringe Menge Wasser in den Anzug. 
							Dieses Wasser wird vom Körper erwärmt und bildet ein isolierendes Polster. In unseren heimischen Seen ist das Wasser oft kühler. 
							Deshalb wird der Nassanzug hier fast immer in Kombination mit <strong>Kopfhaube, Füßlingen und Handschuhen</strong> getragen, um den Wärmeverlust an den Extremitäten zu minimieren.</p>
							<h4>3. Nassanzug mit Eisweste (Kühler)</h4>
							<p>Bei kühleren Temperaturen reicht ein normaler Nassanzug nicht mehr aus. Der Taucher zieht zusätzlich eine sogenannte <strong>Eisweste</strong> über den Anzug. 
							Zusammen mit der Kopfhaube, Handschuhen und Füßlingen reduzieren diese zusätzlichen Schichten den Wärmeverlust des Körpers deutlich.</p>
							<h4>4. Der Halbtrockenanzug (Kühl bis kalt)</h4>
							<p>Der Halbtrockenanzug ähnelt in seinem Aufbau einem Nassanzug. Er besitzt jedoch an den Armen, den Beinen und am Hals sogenannte <strong>Dichtungsmanschetten</strong>. 
							Das sind enge Gummiringe, die den Wasseraustausch stark minimieren. Zusätzlich verfügt er über einen <strong>gasdichten Reißverschluss</strong>, der von Schulter zu Schulter verläuft. 
							Bei einer guten Passform dringt dadurch kaum oder gar kein Wasser in den Anzug ein. Der Taucher bleibt besser vor dem Eindringen von Wasser geschützt und kühlt deutlich langsamer aus.</p>
							<h4>5. Der Trockenanzug (Sehr kalt)</h4>
							<p>Der Trockenanzug ist für extrem kalte Gewässer konzipiert, teilweise auch für Tauchgänge unter Eis. Er ist oft in Signalfarben wie Orange oder Rot gehalten, 
							um die Sichtbarkeit zu erhöhen. Beim Trockenanzug dringt kein Wasser in den Anzug ein. Der Taucher bleibt vollständig trocken. Zusätzliche Kleidung unter dem Anzug sorgt für Wärmeisolierung.</p>`,
							image: "bilder/3_3_Anzug.jpg"
						},
						{
							id: "hitze",
							subTitle: "Achtung, Hitze an Land!",
							text: `<p>Neopren ist ein effektives Material zur Wärmeisolierung im Wasser. An Land, bei direkter Sonneneinstrahlung, führt diese Eigenschaft jedoch zu einem Problem: 
							Die Körperwärme kann nicht entweichen, und der Taucher überhitzt schnell. Der Körper reagiert mit starkem Schwitzen. Aus diesem Grund sollte der Tauchanzug erst unmittelbar 
							vor dem Tauchgang angezogen werden. An heißen Tagen kann der obere Teil des Anzugs bis zur Hüfte heruntergerollt werden, um eine Überhitzung zu vermeiden.</p>
							<h4>Achtung: Materialschaden durch UV-Licht</h4>
							<p>Neopren ist empfindlich gegenüber UV-Strahlung. Wie auf dem rechten Bild zu erkennen ist, führt intensive Sonneneinstrahlung dazu, dass das Material austrocknet und brüchig wird. 
							Es entstehen Risse, und die Farben bleichen aus. Dadurch verliert der Anzug seine isolierende Wirkung und seine Elastizität.</p>
							<p>Daraus ergibt sich eine wichtige Pflegeregel: <strong>Tauchanzüge dürfen niemals in der prallen Sonne trocknen.</strong> Sie müssen nach dem Abspülen im Schatten aufgehängt werden. 
							Nur so bleibt das Material intakt und der Anzug funktionsfähig.</p>`,
							image: "bilder/3_3_1_Anzug.jpg"
						}
					]
                },
                {
                    id: "kap3-4",
                    title: "Richtiger Umgang und Pflege",
                    text: `<p>Die Tauchausrüstung schützt den Taucher unter Wasser. Damit sie zuverlässig funktioniert und lange hält, ist eine korrekte Behandlung und Pflege notwendig. Die beiden Grafiken zeigen die wichtigsten Regeln.</p>
					<h4>Regeln für den Transport und die Lagerung</h4>
					<ul style="margin-bottom: 15px; padding-left: 20px;">
						<li><strong>Tauchflaschen immer hinlegen oder sichern:</strong> Eine Tauchflasche ist schwer und steht unter hohem Druck. Sie muss flach hingelegt oder gegen Umkippen gesichert werden. 
						Beim Tragen ist die Hilfe eines Erwachsenen erforderlich.</li>
						<li><strong>Flossen niemals auf das Flossenblatt stellen oder verbiegen:</strong> Flossen bestehen aus festem Kunststoff. Werden sie auf das Blatt gestellt oder geknickt, 
						können sie brechen. Sie müssen flach hingelegt oder auf den Fußteil gestellt werden.</li>
						<li><strong>Ausrüstung niemals werfen oder fallen lassen:</strong> Atemregler und Masken sind empfindlich. Sie müssen vorsichtig in die Tauchtasche gelegt werden.</li>
						<li><strong>Ausrüstung im Schatten lagern:</strong> Starke Hitze und direkte Sonneneinstrahlung schädigen das Material. Die Ausrüstung muss im Schatten gelagert werden.</li>
						<li><strong>Ausrüstung sauber halten und vor Sand und Dreck schützen:</strong> Sand in der Maske oder im Atemregler kann die Dichtungen beschädigen. Die Ausrüstung sollte in einer sauberen Box aufbewahrt werden.</li>
					</ul>
					<h4>Regeln für die Reinigung und Trocknung</h4>
					<ul style="margin-bottom: 15px; padding-left: 20px;">
						<li><strong>Nach jedem Tauchgang gründlich mit Süßwasser abspülen:</strong> Salzwasser und Sand greifen die Ausrüstung an. Besonders Atemregler und Maske müssen nach dem Tauchen mit klarem Süßwasser abgespült werden.</li>
						<li><strong>Tauchanzüge gereinigt und gut getrocknet hängend lagern:</strong> Der Anzug muss nach dem Abspülen auf einen Bügel gehängt werden. Er sollte an einem schattigen, 
						luftigen Ort trocknen. Neopren besteht aus winzigen Gasbläschen, die durch UV-Strahlung spröde werden und ausbleichen. Direkte Sonneneinstrahlung ist daher zu vermeiden.</li>
					</ul>
					<h4>Warum ist die Pflege wichtig?</h4>
					<p>Eine gut gepflegte Ausrüstung funktioniert zuverlässig. Sie bietet dem Taucher die notwendige Sicherheit, sodass er sich vollständig auf den Tauchgang konzentrieren kann.</p>`,
                    images: ["bilder/3_4_Pflege.jpg", "bilder/3_4_1_Pflege.jpg"]
                }
            ],
            quiz: {
				questionPool: [
					{
						question: "Wofür steht das 'A' in der ABC-Ausrüstung?",
						options: ["Atemregler.", "Flosse.", "Maske.", "Schnorchel.", "Jacket."],
						correct: 1
					},
					{
						question: "Wofür steht das 'B' in der ABC-Ausrüstung?",
						options: ["Flosse.", "Maske (wie Brille).", "Schnorchel.", "Blei.", "Boot."],
						correct: 1
					},
					{
						question: "Wofür steht das 'C' in der ABC-Ausrüstung?",
						options: ["Flosse.", "Maske.", "Schnorchel.", "Computer.", "Crème."],
						correct: 2
					},
					{
						question: "Was brauchst du zum Schnorcheln?",
						options: ["Maske", "Schnorchel", "Flossen", "Tauchflasche", "Jacket"],
						correct: [0, 1, 2]
					},
					{
						question: "Was ist der Unterschied zwischen Schnorcheln und Tauchen?",
						options: ["Beim Schnorcheln bleibt man an der Wasseroberfläche.", "Beim Tauchen geht man unter Wasser.", "Schnorcheln braucht eine Flasche.", "Tauchen braucht keine Maske.", "Es gibt keinen Unterschied."],
						correct: [0, 1]
					},
					{
						question: "Welche Aussagen über die ABC-Ausrüstung sind richtig?",
						options: ["Sie ist für Anfänger geeignet.", "Sie besteht aus drei Teilen.", "Sie ermöglicht das Schnorcheln.", "Sie ist schwerer als eine Tauchflasche.", "Sie ist nur für Profis."],
						correct: [0, 1, 2]
					},
					{
						question: "Was macht die Maske?",
						options: ["Sie schützt die Augen.", "Sie schafft ein Luftpolster.", "Sie lässt uns scharf sehen.", "Sie filtert Wasser.", "Sie zeigt den Druck an."],
						correct: [0, 1, 2]
					},
					{
						question: "Was macht der Schnorchel?",
						options: ["Er lässt uns an der Oberfläche atmen.", "Er filtert Wasser.", "Er zeigt den Druck an.", "Er wärmt die Luft.", "Er schützt die Augen."],
						correct: 0
					},
					{
						question: "Was machen die Flossen?",
						options: ["Sie geben Vortrieb.", "Sie schützen die Füße.", "Sie halten warm.", "Sie zeigen den Druck an.", "Sie filtern Wasser."],
						correct: 0
					},
					{
						question: "Was gehört zur Grundausrüstung eines Tauchers?",
						options: ["Tauchflasche", "Atemregler", "Jacket", "Tauchcomputer", "Fahrrad"],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was ist die Tauchflasche?",
						options: ["Sie enthält Pressluft.", "Sie enthält Wasser.", "Sie hat zwei Ventile.", "Sie ist leicht.", "Sie ist aus Glas."],
						correct: [0, 2]
					},
					{
						question: "Was macht der Tauchcomputer?",
						options: ["Er misst die Zeit.", "Er misst die Tiefe.", "Er rechnet aus, wie lange du noch unter Wasser bleiben darfst.", "Er filtert Wasser.", "Er wärmt die Luft."],
						correct: [0, 1, 2]
					},
					{
						question: "Was ist das Jacket?",
						options: ["Eine aufblasbare Weste.", "Ein Rettungsring.", "Ein Atemregler.", "Eine Flasche.", "Ein Messgerät."],
						correct: [0, 1]
					},
					{
						question: "Wie füllt man das Jacket mit Luft?",
						options: ["Mit dem Inflatorschlauch.", "Mit dem Mund.", "Mit dem Finimeter.", "Mit der Maske.", "Mit den Flossen."],
						correct: 0
					},
					{
						question: "Was ist der Finimeter?",
						options: ["Die Druckanzeige.", "Ein Messgerät für die Tiefe.", "Ein Atemregler.", "Eine Flosse.", "Ein Ventil."],
						correct: 0
					},
					{
						question: "Was ist der Inflatorschlauch?",
						options: ["Er füllt das Jacket mit Luft.", "Er misst den Druck.", "Er atmet für uns.", "Er schützt die Augen.", "Er wärmt die Luft."],
						correct: 0
					},
					{
						question: "Was macht die Tauchmaske?",
						options: ["Sie schützt die Augen.", "Sie schafft ein Luftpolster.", "Sie lässt uns scharf sehen.", "Sie zeigt den Druck an.", "Sie wärmt die Luft."],
						correct: [0, 1, 2]
					},
					{
						question: "Was ist der Nasenerker?",
						options: ["Ein Teil der Maske.", "Er hilft beim Druckausgleich.", "Er ist unter der Nase.", "Er ist aus Glas.", "Er ist aus Metall."],
						correct: [0, 1, 2]
					},
					{
						question: "Wie viele erste Stufen hat das Atemregler-Set?",
						options: ["1", "2", "3", "4", "0"],
						correct: 1
					},
					{
						question: "Wo sitzt die primäre erste Stufe?",
						options: ["Rechts.", "Links.", "In der Mitte.", "Unten.", "Oben."],
						correct: 0
					},
					{
						question: "Wo sitzt die Reserve-1. Stufe?",
						options: ["Rechts.", "Links.", "In der Mitte.", "Unten.", "Oben."],
						correct: 1
					},
					{
						question: "Was machst du im Notfall, wenn dein Partner keine Luft hat?",
						options: ["Ich gebe ihm meinen Hauptregler.", "Ich wechsle auf den Reserve-Regler.", "Ich tauche schnell auf.", "Ich halte die Luft an.", "Ich gebe ihm meinen Finimeter."],
						correct: [0, 1]
					},
					{
						question: "Welche Aussagen über das Atemregler-Set sind richtig?",
						options: ["Es hat zwei erste Stufen.", "Es hat zwei zweite Stufen.", "Der Reserve-Regler hängt am Hals.", "Der Hauptregler hat einen langen Schlauch.", "Der Finimeter ist ein Atemregler."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Warum ist der Reserve-Regler am Hals so sicher?",
						options: ["Weil man ihn blind findet.", "Weil er kurz ist.", "Weil er gelb ist.", "Weil er am Bungee hängt.", "Weil er den Druck misst."],
						correct: [0, 1, 3]
					},
					{
						question: "Was ist der Trick beim Nassanzug?",
						options: ["Wasser dringt ein und wird vom Körper gewärmt.", "Er ist wasserdicht.", "Er ist aus Metall.", "Er hat eine Heizung.", "Er ist luftdicht."],
						correct: 0
					},
					{
						question: "Warum darf man den Anzug nicht in der prallen Sonne trocknen?",
						options: ["Weil UV-Strahlung das Material brüchig macht.", "Weil er schmilzt.", "Weil er ausbleicht.", "Weil er zu warm wird.", "Weil er dann riecht."],
						correct: [0, 2]
					},
					{
						question: "Was passiert bei Hitze an Land im Neoprenanzug?",
						options: ["Es wird superheiß.", "Man schwitzt stark.", "Man kühlt ab.", "Man friert.", "Nichts."],
						correct: [0, 1]
					},
					{
						question: "Warum trägt man Neopren?",
						options: ["Es hält warm.", "Es schützt vor Kratzern.", "Es ist leicht.", "Es ist nicht wasserdicht.", "Es ist aus Glas."],
						correct: [0, 1]
					},
					{
						question: "Wie lagert man Tauchflaschen?",
						options: ["Hinlegen.", "Sichern.", "Aufrecht hinstellen.", "Werfen.", "In die Sonne legen."],
						correct: [0, 1]
					},
					{
						question: "Wie spült man die Ausrüstung?",
						options: ["Mit Süßwasser.", "Mit Salzwasser.", "Mit Seife.", "Mit Öl.", "Gar nicht."],
						correct: 0
					},
					{
						question: "Wo lagert man die Ausrüstung?",
						options: ["Im Schatten.", "In der Sonne.", "In der Hitze.", "Im Wasser.", "Im Sand."],
						correct: 0
					},
					{
						question: "Wie lagert man Tauchanzüge?",
						options: ["Hängend.", "Im Schatten.", "In der Sonne.", "Zusammengeknüllt.", "Nass."],
						correct: [0, 1]
					},
					{
						question: "Warum schützt man die Ausrüstung vor Sand?",
						options: ["Weil Sand die Dichtungen kaputt macht.", "Weil Sand kratzt.", "Weil Sand die Farbe ändert.", "Weil Sand schwer ist.", "Weil Sand nass ist."],
						correct: 0
					},
					{
						question: "Welche Aussagen über die Pflege sind richtig?",
						options: ["Flaschen sichern.", "Flossen nicht verbiegen.", "Mit Süßwasser spülen.", "Im Schatten lagern.", "In der Sonne trocknen."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Warum trägt man schwere Ausrüstung gemeinsam?",
						options: ["Weil sie schwer ist.", "Weil sie groß ist.", "Weil sie teuer ist.", "Weil sie nass ist.", "Weil sie kalt ist."],
						correct: 0
					},
					{
						question: "Was passiert, wenn man die Ausrüstung nicht pflegt?",
						options: ["Sie geht kaputt.", "Sie funktioniert nicht mehr sicher.", "Sie bleibt gleich.", "Sie wird besser.", "Sie wird leichter."],
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
                    title: "Fitness, Hitze und Wohlbefinden",
                    text: `<p>Tauchen ist eine körperlich anstrengende Aktivität. Vor jedem Tauchgang muss der eigene Gesundheitszustand überprüft werden. Nur wer fit und gesund ist, kann sicher tauchen. 
					Die Grafik zeigt drei wichtige Faktoren, die vor dem Start beachtet werden müssen.</p>
					<h4>Die Hitze: Ab in den Schatten</h4>
					<p>Neoprenanzüge speichern die Körperwärme sehr gut. Bei direkter Sonneneinstrahlung und hohen Temperaturen führt das zu einer schnellen Überhitzung des Körpers. Der Körper verliert dabei viel Flüssigkeit.</p>
					<ul style="margin-bottom: 15px; padding-left: 20px;">
						<li><strong>Verhalten:</strong> Vor dem Tauchgang sollte man sich im Schatten aufhalten und ausreichend Wasser trinken. Der Neoprenanzug wird erst kurz vor dem Tauchgang angezogen oder bis zur Hüfte heruntergerollt.</li>
					</ul>
					<h4>Der Körper: Frieren, Fieber oder Schmerzen</h4>
					<p>Der Körper sendet Warnsignale, wenn er nicht bereit für das Tauchen ist. Diese Signale müssen ernst genommen werden.</p>
					<ul style="margin-bottom: 15px; padding-left: 20px;">
						<li><strong>Frieren:</strong> Wenn dem Körper bereits an Land kalt ist, kühlt er unter Wasser weiter aus. Zittern führt zu einem Kontrollverlust über die Bewegungen.</li>
						<li><strong>Fieber oder Schmerzen:</strong> Bei Krankheitssymptomen wie Fieber, Kopfschmerzen, Schwäche oder Schnupfen ist Tauchen nicht erlaubt. 
						Besonders bei Schnupfen ist der Druckausgleich nicht möglich. Der Körper benötigt Ruhe zur Genesung.</li>
						<li><strong>Verhalten:</strong> Wenn man sich nicht fit fühlt, muss der Tauchgang verschoben werden. Die Gesundheit hat Vorrang.</li>
					</ul>
					<h4>Gruppenzwang: Die eigene Entscheidung treffen</h4>
					<p>Es kann vorkommen, dass andere Taucher in der Gruppe tauchen möchten, man selbst sich aber nicht wohlfühlt. Die eigene Entscheidung ist hier entscheidend. 
					Niemand muss tauchen, nur weil die Gruppe es tut. Jeder ist für seinen eigenen Körper verantwortlich. Wenn das Gefühl „Nein“ sagt, bleibt man an Land. Ein verantwortungsvoller Buddy akzeptiert diese Entscheidung.</p>
					<p><strong>Merksatz:</strong> „Erst auf den Körper hören, dann ins Wasser gehen.“</p>`,
                    image: "bilder/4_1_Vorbereitung.jpg"
                },
                {
                    id: "kap4-2",
                    title: "Vor dem Start: Regeln und Briefing",
					type: "stacked",
					subrows: [
						{
							id: "briefing",
							subTitle: "Das professionelle Tauch-Briefing",
							text: `<p>Vor jedem Tauchgang findet ein Briefing statt. Dabei handelt es sich um eine strukturierte Besprechung, in der das Tauchteam alle relevanten Sicherheitsaspekte durchgeht. 
							Die Grafik zeigt die vier Hauptbereiche, die dabei abgedeckt werden müssen.</p>
							<h4>1. Mensch (Buddy-Team)</h4>
							<p>Im ersten Schritt wird das Team organisiert.</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Partner-Check und Team-Zusammensetzung:</strong> Es wird festgelegt, wer mit wem taucht.</li>
								<li><strong>Gesundheit und Tagesform:</strong> Alle Teilnehmer prüfen ihren aktuellen Gesundheitszustand.</li>
								<li><strong>Handzeichen:</strong> Die Kommunikation unter Wasser wird wiederholt und geklärt.</li>
								<li><strong>Rollen und Aufgaben:</strong> Besondere Aufgaben werden verteilt.</li>
								<li><strong>Buddy-Kontakt:</strong> Der Abstand und die Kontaktregeln zwischen den Tauchpartnern werden besprochen.</li>
							</ul>
							<h4>2. Tauchgang (Der Plan)</h4>
							<p>Hier wird der eigentliche Ablauf des Tauchgangs festgelegt.</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Ziele und Zweck:</strong> Was ist das Ziel des Tauchgangs (z. B. ein Fototauchgang oder eine Kursübung)?</li>
								<li><strong>Tiefe und Dauer:</strong> Die maximale Tiefe und die geplante Tauchzeit werden bestimmt.</li>
								<li><strong>Aufstiegsroute:</strong> Die Route für den Aufstieg und die Sicherheitsstopps werden festgelegt.</li>
								<li><strong>Umkehrpunkte:</strong> Es wird definiert, wann der Tauchgang umgedreht wird.</li>
								<li><strong>Team-Regeln:</strong> Die Regeln für das Tauchen im Team werden besprochen.</li>
							</ul>
							<h4>3. Gewässer (Umgebung)</h4>
							<p>Die Umgebung des Tauchgangs wird analysiert.</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Unterwasserwelt und Topografie:</strong> Wie sieht der Grund aus? Gibt es Hindernisse?</li>
								<li><strong>Strömungen:</strong> Strömungsverhältnisse und -richtungen werden geprüft.</li>
								<li><strong>Temperatur:</strong> Die Wassertemperatur und mögliche Temperaturschichten werden besprochen.</li>
								<li><strong>Sichtweite:</strong> Die Sichtweiten und mögliche Trübung werden eingeschätzt.</li>
								<li><strong>Ein- und Ausstieg:</strong> Die Stellen für den Einstieg ins Wasser und den Ausstieg werden geplant.</li>
							</ul>
							<h4>4. Ausrüstung (Technik)</h4>
							<p>Zum Schluss wird die Ausrüstung geprüft.</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Luftvorrat:</strong> Der Flaschendruck wird kontrolliert.</li>
								<li><strong>Atemregler:</strong> Die Funktion der Atemregler wird getestet.</li>
								<li><strong>Tarierjacket:</strong> Die Funktion des Jackets wird geprüft.</li>
								<li><strong>Tauchcomputer:</strong> Der Tauchcomputer wird kontrolliert (z. B. auf MOD oder O2-Einstellungen).</li>
								<li><strong>Abschluss:</strong> Der Partner-Check wird abgeschlossen mit der Frage: „Sind wir bereit?“</li>
							</ul>`,
							image: "bilder/4_2_Briefing.jpg"
						},
						{
							id: "regeln",
							subTitle: "KTSA-Regeln",
							text: `<p>Für das Tauchen mit Kindern und Jugendlichen gelten spezifische Sicherheitsregeln. Die Grafik zeigt die fünf wichtigsten Grundregeln, die zwingend eingehalten werden müssen.</p>
							<h4>Die 5 wichtigsten Grundregeln</h4>
							<ol style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Tiefengrenzen einhalten:</strong> Kinder und Jugendliche dürfen nicht so tief tauchen wie Erwachsene. Die jeweiligen Tiefengrenzen müssen unbedingt eingehalten werden.</li>
								<li><strong>Maximal 1 Tauchgang am Tag:</strong> Pro Tag ist nur ein Tauchgang erlaubt. Das begrenzt die körperliche Belastung.</li>
								<li><strong>Immer langsam aus der Tiefe aufsteigen:</strong> Der Aufstieg muss kontrolliert und langsam erfolgen. Ein schnelles Auftauchen ist verboten.</li>
								<li><strong>Nur mit einem erfahrenen Buddy tauchen:</strong> Das Tauchen ist nur mit einem erfahrenen Partner erlaubt (mindestens DTSA** oder Gold). Tauchen ohne Buddy ist verboten.</li>
								<li><strong>Erst ab 8 Jahren:</strong> Vor dem vollendeten 8. Lebensjahr ist das Tauchen nicht gestattet. Das zeigt das Symbol mit der Zahl 8.</li>
							</ol>
							<h4>Die VDST-Tiefengrenzen für KTSA</h4>
							<p>Die KTSA-Stufen (Kinder-Tauchsport-Abzeichen) regeln die maximale Tauchtiefe für Kinder und Jugendliche. Sie sind in drei Stufen unterteilt:</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>KTSA Bronze:</strong> Maximale Tiefe 5 Meter.</li>
								<li><strong>KTSA Silber:</strong> Maximale Tiefe 8 Meter.</li>
								<li><strong>KTSA Gold:</strong> Maximale Tiefe 12 Meter.</li>
							</ul>
							<p>Jede Stufe dokumentiert den Ausbildungsfortschritt und die sichere Beherrschung der Regeln für die jeweilige Tiefe.</p>`,
							image: "bilder/4_2_1_Regeln.jpg"
							
						}
					]				
                },
                {
                    id: "kap4-3",
                    title: "Kommunikation unter Wasser",
                    type: "stacked",
                    subrows: [
                        {
                            id: "grundzeichen",
							subTitle: "Grundlegende Handzeichen",
                            text: `<p>Unter Wasser ist eine verbale Kommunikation nicht möglich, da sich der Atemregler im Mund befindet. Aus diesem Grund nutzen Taucher eine standardisierte Zeichensprache mit den Händen. 
							Diese Handzeichen sind international genormt, damit sich Taucher weltweit verständigen können. Die Grafik zeigt die wichtigsten Grundzeichen.</p>
							<h4>Status- und Befindlichkeitszeichen</h4>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>OK:</strong> Daumen und Zeigefinger bilden einen Kreis, die restlichen drei Finger zeigen nach oben. Das Zeichen bedeutet: Alles ist in Ordnung, oder: Ich bin bereit.</li>
								<li><strong>Nicht OK / Stimmt was nicht:</strong> Die flache Hand wird waagerecht vor der Brust gehalten und hin und her gekippt. Das signalisiert ein Problem.</li>
								<li><strong>Problem mit dem Druckausgleich:</strong> Der Zeigefinger tippt mehrmals an das eigene Ohr. Das bedeutet: Der Druckausgleich funktioniert nicht, es gibt Schmerzen.</li>
								<li><strong>Kalt:</strong> Ein Arm wird angewinkelt, die Handfläche streicht über den Unterarm. Das Zeichen bedeutet, dass dem Taucher kalt ist.</li>
							</ul>
							<h4>Richtungs- und Positionsangaben</h4>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Du / Ich:</strong> Der Zeigefinger zeigt entweder nach vorne auf den Tauchpartner (Du) oder auf die eigene Brust (Ich).</li>
								<li><strong>Nach oben / Auftauchen:</strong> Die Faust wird geballt, der Daumen zeigt steil nach oben. Das bedeutet: Auftauchen.</li>
								<li><strong>Nach unten / Abtauchen:</strong> Die Faust wird geballt, der Daumen zeigt nach unten. Das bedeutet: Tiefer tauchen.</li>
								<li><strong>Tiefe halten:</strong> Die flache Hand wird waagerecht ausgestreckt und leicht hin und her bewegt. Das bedeutet: Die aktuelle Tiefe beibehalten.</li>
							</ul>
							<h4>Sicherheits- und Kontrollzeichen</h4>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Stopp / Anhalten:</strong> Die geöffnete Handfläche wird nach vorne gestreckt (wie ein Stoppschild). Das bedeutet: Sofort anhalten.</li>
								<li><strong>Frage nach dem Druck:</strong> Zwei Finger tippen flach auf die geöffnete Handfläche der anderen Hand. Damit wird der Partner aufgefordert, den aktuellen Flaschendruck anzuzeigen.</li>
								<li><strong>Abbruch (Tauchgang / Übung beenden):</strong> Du kreuzst beide Unterarme vor deiner Brust, sodass sie ein deutliches „X" bilden. Dieses Zeichen hat zwei wichtige Bedeutungen:
								Es kann vom Gruppenführer oder Tauchlehrer gegeben werden, um den Tauchgang oder eine Übung sofort zu beenden. Und jeder einzelne Taucher darf es auch selbst zeigen, wenn
								er den Tauchgang beenden möchte. In beiden Fällen gehen die Buddy-Partner gemeinsam und kontrolliert nach oben. Sicherheit geht immer vor – ein Abbruch ist keine Schande!</li>
							</ul>
							<h4>Nottfallzeichen</h4>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Luftnot (Keine Luft / Atemnot):</strong> Bei diesem Zeichen hält der Taucher eine Hand waagerecht vor den Hals und bewegt sie von sich weg und wieder zum Hals zurück. 
								Dieses Signal bedeutet: „Ich bekomme keine Luft“ oder „Ich habe Atemnot“. Es handelt sich um einen absoluten Notfall. Der Tauchpartner muss sofort reagieren und Hilfe leisten.</li>
								<li><strong>Essoufflement (Panik-Atmung):</strong> Beim Essoufflement legt der Taucher beide Hände flach auf die Brust und bewegt die Arme vom Hals weg und wieder zurück. 
								Das Zeichen zeigt an, dass der Taucher nicht mehr ein- oder ausatmen kann und in Panik gerät. 
								Auch hier muss der Partner sofort eingreifen, den Taucher beruhigen und die Situation kontrollieren.</li>
							</ul>`,
                            image: "bilder/4_3_Zeichen.jpg"
                        },
                        {
                            id: "zahlen",
							subTitle: "Zahlen und Druckangabe in bar",
                            text: `<p>Um den aktuellen Druck in der Tauchflasche zu übermitteln, nutzen Taucher ihre Hände. Dabei gilt eine klare Regel: 
							Es wird immer nur eine Hand verwendet, und jede Ziffer einer Zahl wird einzeln nacheinander angezeigt. Die Grafik zeigt die genaue Ausführung.</p>
							<h4>Die Zahlen von 0 bis 5</h4>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Die 0 (Null):</strong> Damit die Null nicht mit dem OK-Zeichen verwechselt wird, werden alle Finger benutzt. Die Hand formt eine kleine Faust oder einen Kreis, bei dem alle Finger mitwirken.</li>
								<li><strong>Die Zahlen 1 bis 5:</strong> Es werden die entsprechenden Finger ausgestreckt (1 Finger für die 1, bis zur ganzen Hand für die 5). Wichtig: Die Handfläche zeigt dabei immer zum Tauchpartner. 
								So kann er die Finger klar erkennen.</li>
							</ul>
							<h4>Die Zahlen von 6 bis 9</h4>
							<p>Bei diesen Zahlen wird die Hand umgedreht. Die Handfläche zeigt nun zum eigenen Körper. Die Anzeige beginnt immer beim Zeigefinger (nicht beim Daumen).</p>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Die 6:</strong> Der Zeigefinger wird ausgestreckt, mit der flachen Hand wird eine Drehbewegung nach rechts ausgeführt.</li>
								<li><strong>Die 7:</strong> Zeige- und Mittelfinger werden ausgestreckt, die Drehbewegung nach rechts wird ausgeführt.</li>
								<li><strong>Die 8:</strong> Zeige-, Mittel- und Ringfinger werden ausgestreckt, die Drehbewegung nach rechts wird ausgeführt.</li>
								<li><strong>Die 9:</strong> Alle Finger werden flach gehalten, die Hand wird nach rechts gedreht.</li>
							</ul>
							<h4>Die Druck-Zeichen für die Flasche</h4>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>50 bar (Druckwarnung):</strong> Die Faust wird geballt, nur der kleine Finger wird nach unten gestreckt. Dieses Zeichen bedeutet: 
								Achtung, die Luft wird knapp. 50 bar ist die Grenze, bei der der Tauchgang beendet und aufgetaucht werden sollte.</li>
								<li><strong>100 bar (Halbzeit):</strong> Der Zeigefinger wird nach oben gestreckt (die 1), darunter wird die flache Hand gehalten (die 0). 
								Das bedeutet: Es sind noch 100 bar Luft in der Flasche, also die Hälfte des Vorrats.</li>
							</ul>
							<p>Die genaue Übermittlung des Luftvorrats ist essenziell. Nur so kann der Tauchpartner die verbleibende Zeit einschätzen und den Aufstieg rechtzeitig einleiten.</p>`,
                            image: "bilder/4_3_2_Zeichen.jpg"
                        },
                        {
                            id: "beispiel",
							subTitle: "Beispielanzeigen",
                            text: `<p>Die Übermittlung des Flaschendrucks erfolgt Ziffer für Ziffer. Die Grafik zeigt drei konkrete Beispiele, wie der Druck mit den Händen angezeigt wird.</p>
							<h4>Beispiel 180 bar</h4>
							<ol style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Die Abfrage:</strong> Zuerst wird das Druckabfrage-Zeichen gezeigt (zwei Finger tippen in die offene Handfläche). Das signalisiert dem Partner: Jetzt wird der Druck angezeigt.</li>
								<li><strong>Die 1:</strong> Der Zeigefinger wird kurz nach oben gestreckt (Handfläche zum Partner). Das steht für die 100.</li>
								<li><strong>Die 8:</strong> Acht Finger werden gezeigt. Dafür wird die Hand umgedreht, sodass die Handfläche zum eigenen Körper zeigt (wie bei den Zahlen 6 bis 9).</li>
								<li><strong>Die 0:</strong> Zum Schluss wird mit allen Fingern ein Kreis geformt (die Sonder-Null).</li>
							</ol>
							<h4>Beispiel 140 bar</h4>
							<p>Es wird die 1 gezeigt (Zeigefinger nach oben), dann die 4 (vier Finger, Handfläche zum Partner) und zum Schluss die 0 (Kreis mit allen Fingern).</p>
							<h4>Beispiel 60 bar</h4>
							<p>Es wird die 6 gezeigt (Drehbewegung nach rechts, Handfläche zum eigenen Körper, beginnend beim Zeigefinger) und danach die 0 (Kreis mit allen Fingern).</p>
							<p>Durch diese standardisierte Zeichenfolge kann der Tauchpartner den verbleibenden Luftvorrat exakt ablesen und die weitere Tauchgangsplanung entsprechend anpassen.</p>`,
                            image: "bilder/4_3_3_Zeichen.jpg"
                        }
                    ]
                },
                {
                    id: "kap4-4",
                    title: "Der Buddy-Check und der Start",
                    text: `<p>Vor jedem Tauchgang führen die beiden Tauchpartner (die Buddys) eine gegenseitige Kontrolle ihrer Ausrüstung durch. Dieses Sicherheitsritual wird 
					als <strong>Buddy-Check</strong> bezeichnet. Um die Reihenfolge der fünf Kontrollen nicht zu vergessen, dient der Merksatz:</p>
					<p><strong>„Taucher brauchen saubere Luft, OK?“</strong></p>
					<p>Die Grafik zeigt die fünf aufeinanderfolgenden Schritte.</p>
					<h4>1. T – Taucher (Tarierweste / Jacket)</h4>
					<p>Ein Taucher betätigt den Knopf der Tarierweste des Partners. Dabei wird überprüft, ob sich die Weste aufbläst und ob die Luft über die Ventile wieder entweichen kann. 
					So wird die Dichtigkeit und Funktion der Weste sichergestellt.</p>
					<h4>2. B – Brauchen (Blei)</h4>
					<p>Der Bleigurt wird kontrolliert. Der Partner prüft, ob die Bleitasche sicher befestigt ist und ob der Schnellabwurf (der Mechanismus zum schnellen Abwerfen des Bleis im Notfall) einwandfrei funktioniert.</p>
					<h4>3. S – Saubere (Schnallen &amp; Gurte)</h4>
					<p>Alle Schnallen, der Flaschengurt und die Tragegurte werden überprüft. Der Partner zieht fest daran, um sicherzustellen, dass alle Verbindungen fest sitzen und nicht verrutschen können.</p>
					<h4>4. L – Luft (Hauptregler, Reserve-Regler &amp; Manometer)</h4>
					<p>Der Taucher atmet einmal tief durch den Hauptatemregler und durch den Reserve-Regler am Hals ein. So wird geprüft, ob bei beiden Reglern Luft austritt.Zusätzlich wird kontrolliert, 
					ob beide ersten Stufen an der Flasche korrekt funktionieren und ob das Bungee am Hals fest sitzt. Der Flaschendruck wird am Manometer abgelesen.</p>
					<h4>5. OK – OK? (Gesamt-Check und Freigabe)</h4>
					<p>Zum Abschluss werfen beide Taucher einen letzten Blick auf die Maske, die Flossen und die restliche Ausrüstung. Sie stellen Blickkontakt her, geben sich gegenseitig das OK-Zeichen 
					(Daumen und Zeigefinger bilden einen Kreis) und bestätigen: „Bist du bereit?“</p>
					<p>Wenn beide Taucher das OK-Zeichen geben, ist die Ausrüstung vollständig geprüft und der Tauchgang kann beginnen.</p>`,
                    image: "bilder/4_4_BuddyCheck.jpg"
                }
            ],
            quiz: {
				questionPool: [
					{
						question: "Was sollte man bei Hitze vor dem Tauchen beachten?",
						options: ["Man sollte sich im Schatten aufhalten.", "Man sollte ausreichend Wasser trinken.", "Man sollte den Anzug bis zur Hüfte herunterrollen.", "Man sollte in der prallen Sonne stehen.", "Man sollte möglichst viel schwitzen."],
						correct: [0, 1, 2]
					},
					{
						question: "Wann darf man nicht tauchen?",
						options: ["Bei Fieber.", "Bei Schmerzen.", "Bei Schnupfen.", "Bei guter Laune.", "Bei Hunger."],
						correct: [0, 1, 2]
					},
					{
						question: "Was versteht man unter Gruppenzwang?",
						options: ["Man macht mit, nur weil alle anderen es tun.", "Man entscheidet selbst.", "Man bleibt zu Hause.", "Man trinkt Wasser.", "Man zieht den Anzug an."],
						correct: 0
					},
					{
						question: "Was sollte man tun, wenn man sich nicht gut fühlt?",
						options: ["Den Tauchgang verschieben.", "Trotzdem tauchen.", "Mehr trinken.", "Schneller tauchen.", "Die Gruppe fragen."],
						correct: 0
					},
					{
						question: "Welche Aussagen über Fitness und Tauchen sind richtig?",
						options: ["Tauchen ist anstrengend für den Körper.", "Man muss fit und gesund sein, um zu tauchen.", "Man darf bei Krankheit nicht tauchen.", "Man muss immer mitmachen, wenn alle anderen tauchen.", "Man darf 'Nein' sagen, wenn man sich nicht wohlfühlt."],
						correct: [0, 1, 2, 4]
					},
					{
						question: "Warum ist Trinken vor dem Tauchen wichtig?",
						options: ["Weil man schwitzt.", "Weil der Körper Flüssigkeit verliert.", "Weil es schmeckt.", "Weil es kühlt.", "Weil es die Ausrüstung reinigt."],
						correct: [0, 1]
					},
					{
						question: "Was ist ein Zeichen dafür, dass man nicht tauchen sollte?",
						options: ["Frieren.", "Fieber.", "Schmerzen.", "Lachen.", "Müdigkeit."],
						correct: [0, 1, 2, 4]
					},
					{
						question: "Was macht man, wenn alle anderen tauchen wollen, man selbst aber nicht?",
						options: ["Man sagt 'Nein'.", "Man bleibt an Land.", "Man geht trotzdem mit.", "Man fragt die Gruppe.", "Man taucht schnell."],
						correct: [0, 1]
					},
					{
						question: "Warum ist der Neoprenanzug an Land so heiß?",
						options: ["Weil die Körperwärme nicht entweichen kann.", "Weil er aus Metall ist.", "Weil er schwarz ist.", "Weil er zu eng ist.", "Weil er nass ist."],
						correct: 0
					},
					{
						question: "Was ist ein Briefing?",
						options: ["Ein Team-Meeting vor dem Tauchen.", "Ein Tauchgang.", "Eine Übung.", "Ein Test.", "Ein Buch."],
						correct: 0
					},
					{
						question: "Welche vier Bereiche werden beim Briefing besprochen?",
						options: ["Mensch", "Tauchgang", "Gewässer", "Ausrüstung", "Wetter"],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was bespricht man im Bereich 'Mensch'?",
						options: ["Die Tagesform und Fitness.", "Die Buddy-Teams.", "Die Handzeichen.", "Die maximale Tiefe.", "Die Strömung."],
						correct: [0, 1, 2]
					},
					{
						question: "Was bespricht man im Bereich 'Tauchgang'?",
						options: ["Die maximale Tiefe.", "Die maximale Tauchzeit.", "Die Route und Orientierung.", "Die Handzeichen.", "Die Strömung."],
						correct: [0, 1, 2]
					},
					{
						question: "Was bespricht man im Bereich 'Gewässer'?",
						options: ["Strömungen.", "Wellen.", "Sichtweite.", "Temperatur.", "Handzeichen."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was bespricht man im Bereich 'Ausrüstung'?",
						options: ["Den Flaschendruck.", "Den Atemregler.", "Das Jacket.", "Die Maske.", "Das Wetter."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Welche Aussagen über das Briefing sind richtig?",
						options: ["Es ist wichtig für die Sicherheit.", "Es hat vier Bereiche.", "Es dient der Sicherheit.", "Es ist optional.", "Es wird vor dem Tauchen gemacht."],
						correct: [0, 1, 2, 4]
					},
					{
						question: "Warum bespricht man die Handzeichen?",
						options: ["Damit man sich unter Wasser verständigen kann.", "Weil man unter Wasser nicht sprechen kann.", "Weil es Spaß macht.", "Weil es Pflicht ist.", "Weil es die Ausrüstung schont."],
						correct: [0, 1]
					},
					{
						question: "Ab welchem Alter darf man tauchen?",
						options: ["6 Jahre", "8 Jahre", "10 Jahre", "12 Jahre", "18 Jahre"],
						correct: 1
					},
					{
						question: "Wie viele Tauchgänge pro Tag sind für Kinder mit KSTA Silber erlaubt?",
						options: ["1", "2", "3", "4", "So viele wie möglich."],
						correct: 0
					},
					{
						question: "Wie tief darf man mit KTSA Silber tauchen?",
						options: ["5 Meter", "8 Meter", "12 Meter", "15 Meter", "20 Meter"],
						correct: 1
					},
					{
						question: "Welche Regeln gelten für Kinder beim Tauchen?",
						options: ["Tiefengrenzen einhalten.", "Maximal 1 Tauchgang am Tag.", "Langsam auftauchen.", "Nur mit einem erfahrenen Buddy tauchen.", "Allein tauchen."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was ist KTSA?",
						options: ["Das Kinder-Tauchsport-Abzeichen.", "Ein Tauchcomputer.", "Ein Atemregler.", "Ein Boot.", "Eine Flosse."],
						correct: 0
					},
					{
						question: "Welche Aussagen über die KTSA-Stufen sind richtig?",
						options: ["Bronze ist die erste Stufe.", "Silber ist die zweite Stufe.", "Gold ist die dritte Stufe.", "Gold ist die erste Stufe.", "Es gibt nur eine Stufe."],
						correct: [0, 1, 2]
					},
					{
						question: "Warum dürfen Kinder nicht so tief tauchen wie Erwachsene?",
						options: ["Weil ihr Körper noch wächst.", "Weil sie weniger Erfahrung haben.", "Weil sie kleiner sind.", "Weil sie mehr Luft brauchen.", "Weil sie schneller frieren."],
						correct: [0, 1, 4]
					},
					{
						question: "Warum nutzt man unter Wasser Handzeichen?",
						options: ["Weil man nicht sprechen kann.", "Weil der Atemregler im Mund ist.", "Weil es Spaß macht.", "Weil sie international gleich sind.", "Weil es leise ist."],
						correct: [0, 1, 3]
					},
					{
						question: "Was bedeutet das OK-Zeichen?",
						options: ["'Alles gut bei mir!'", "'Ich bin bereit!'", "'Ich habe keine Luft!'", "'Mir ist kalt!'", "'Ich möchte auftauchen!'"],
						correct: [0, 1]
					},
					{
						question: "Was bedeutet das Zeichen 'Nicht OK'?",
						options: ["'Irgendetwas stimmt nicht!'", "'Alles gut!'", "'Ich tauche auf!'", "'Mir ist kalt!'", "'Ich habe keine Luft!'"],
						correct: 0
					},
					{
						question: "Wie zeigt man das Zeichen für 'Mir ist kalt'?",
						options: ["Man kreuzt die Arme vor der Brust.", "Man reibt die Hände an den Schultern.", "Man streckt den Daumen nach oben.", "Man hält die Hand vor den Hals.", "Man ballt die Faust."],
						correct: [0, 1]
					},
					{
						question: "Was bedeutet das Zeichen 'Nach oben / Auftauchen'?",
						options: ["Eine Faust mit steil nach oben gestrecktem Daumen.", "Eine Faust mit nach unten gestrecktem Daumen.", "Eine flache Hand.", "Eine geballte Faust.", "Ein ausgestreckter Zeigefinger."],
						correct: 0
					},
					{
						question: "Was bedeutet das Zeichen 'Nach unten / Abtauchen'?",
						options: ["Eine Faust mit nach unten gerichtetem Daumen.", "Eine Faust mit nach oben gestrecktem Daumen.", "Eine flache Hand.", "Eine geballte Faust.", "Ein ausgestreckter Zeigefinger."],
						correct: 0
					},
					{
						question: "Was bedeutet das Zeichen 'Stopp / Anhalten'?",
						options: ["Eine flache Hand, die wie ein Stoppschild nach vorne zeigt.", "Ein Daumen nach oben.", "Eine geballte Faust.", "Eine Hand vor dem Hals.", "Ein ausgestreckter Zeigefinger."],
						correct: 0
					},
					{
						question: "Was bedeutet das Zeichen 'Frage nach dem Druck'?",
						options: ["Man tippt mit zwei flachen Fingern in die offene Handfläche der anderen Hand.", "Man streckt den Daumen nach oben.", "Man hält die Hand vor den Hals.", "Man ballt die Faust.", "Man streckt den Zeigefinger aus."],
						correct: 0
					},
					{
						question: "Was bedeutet das Zeichen für 'Luftnot'?",
						options: ["Man hält eine Hand waagerecht vor den Hals.", "Man bewegt die Hand vom Hals weg und wieder zurück.", "Man streckt den Daumen nach oben.", "Man ballt die Faust.", "Man kreuzt die Arme."],
						correct: [0, 1]
					},
					{
						question: "Was bedeutet das Zeichen für 'Essoufflement' (Panik-Atmung)?",
						options: ["Man legt beide Hände flach auf die Brust.", "Man bewegt die Arme vom Hals weg und wieder zurück.", "Die Augen sind weit aufgerissen oder fest zusammengekniffen.", "Man streckt den Daumen nach oben.", "Man ballt die Faust."],
						correct: [0, 1, 2]
					},
					{
						question: "Wie viele Hände benutzt man für die Zahlenzeichen?",
						options: ["Eine Hand.", "Zwei Hände.", "Drei Hände.", "Vier Hände.", "Das ist egal."],
						correct: 0
					},
					{
						question: "Wohin zeigt die Handfläche bei den Zahlen 1 bis 5?",
						options: ["Zum Tauchpartner.", "Zu sich selbst.", "Nach oben.", "Nach unten.", "Das ist egal."],
						correct: 0
					},
					{
						question: "Wohin zeigt die Handfläche bei den Zahlen 6 bis 9?",
						options: ["Zu sich selbst.", "Zum Tauchpartner.", "Nach oben.", "Nach unten.", "Das ist egal."],
						correct: 0
					},
					{
						question: "Wie zeigt man die Null (0)?",
						options: ["Man formt mit allen Fingern einen Kreis oder eine kleine Faust.", "Man zeigt nur Daumen und Zeigefinger als Kreis.", "Man ballt nur die Faust.", "Man streckt einen Finger aus.", "Man streckt zwei Finger aus."],
						correct: 0
					},
					{
						question: "Was bedeutet das Zeichen für 50 bar?",
						options: ["Druckwarnung – die Luft wird knapp.", "Halbzeit – die Flasche ist halb voll.", "Alles gut.", "Keine Luft mehr.", "Auftauchen."],
						correct: 0
					},
					{
						question: "Was bedeutet wenn dein Buddy 100 bar anzeigt?",
						options: ["Halbzeit – die Flasche ist halb voll.", "Druckwarnung.", "Alles gut.", "Keine Luft mehr.", "Auftauchen."],
						correct: 0
					},
					{
						question: "Wie zeigt man die Zahl 6?",
						options: ["Mit dem Zeigefinger und einer Drehbewegung nach rechts.", "Mit einer Drehbewegung der flachen Hand.", "Mit der Handfläche zu sich selbst.", "Mit der Handfläche zum Partner.", "Mit allen Fingern."],
						correct: [0, 1, 2]
					},
					{
						question: "Wie zeigt man die Zahl 8?",
						options: ["Mit Zeige-, Mittel- und Ringfinger.", "Mit einer Drehbewegung.", "Mit der Handfläche zu sich selbst.", "Mit der Handfläche zum Partner.", "Mit allen Fingern."],
						correct: [0, 1, 2]
					},
					{
						question: "Welche Aussagen über die Zahlenzeichen sind richtig?",
						options: ["Es wird nur eine Hand benutzt.", "Jede Ziffer wird einzeln gezeigt.", "Bei 1–5 zeigt die Handfläche zum Partner.", "Bei 6–9 zeigt die Handfläche zu sich selbst.", "Die Null wird wie das OK-Zeichen gezeigt."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Wie zeigt man 180 bar?",
						options: ["Zuerst die 1.", "Dann die 8.", "Zum Schluss die 0.", "Zuerst die 2.", "Zuerst die 5."],
						correct: [0, 1, 2]
					},
					{
						question: "Was ist der Buddy-Check?",
						options: ["Die gegenseitige Prüfung der Ausrüstung vor dem Tauchen.", "Ein Tauchgang.", "Ein Test.", "Ein Spiel.", "Ein Werkzeug."],
						correct: 0
					},
					{
						question: "Wie lautet der Merksatz für den Buddy-Check?",
						options: ["'Taucher brauchen saubere Luft, OK?'", "'Erst tauchen, dann prüfen.'", "'Allein tauchen ist besser.'", "'Schnell tauchen, tief tauchen.'", "'Tauchen ohne Check.'"],
						correct: 0
					},
					{
						question: "Wofür steht das 'T' im Merksatz des Buddy-Checks?",
						options: ["Taucher (Tarierweste / Jacket).", "Tiefe.", "Tauchgang.", "Taschenlampe.", "Taucherbrille."],
						correct: 0
					},
					{
						question: "Wofür steht das 'B' im Merksatz des Buddy-Checks?",
						options: ["Brauchen (Blei).", "Boot.", "Buddy.", "Brille.", "Bauchgurt."],
						correct: 0
					},
					{
						question: "Wofür steht das 'S' im Merksatz des Buddy-Checks?",
						options: ["Saubere (Schnallen & Gurte).", "Sicherheit.", "Sauerstoff.", "Schnorchel.", "Seil."],
						correct: 0
					},
					{
						question: "Wofür steht das 'L' im Merksatz des Buddy-Checks?",
						options: ["Luft (Hauptregler, Reserve-Regler, Manometer).", "Lampe.", "Leine.", "Lunge.", "Luftdruck."],
						correct: 0
					},
					{
						question: "Was bedeutet das 'OK' im Merksatz des Buddy-Checks?",
						options: ["Gesamt-Check.", "Alles gut.", "Freigabe.", "Ende.", "Start."],
						correct: [0, 1, 2]
					},
					{
						question: "Welche Aussagen über den Buddy-Check sind richtig?",
						options: ["Er ist wichtig für die Sicherheit.", "Er wird vor dem Tauchen gemacht.", "Er prüft die Ausrüstung.", "Er prüft die Luft.", "Er ist optional."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was prüft man beim 'T' (Taucher / Jacket)?",
						options: ["Ob sich die Weste aufbläst.", "Ob die Ventile funktionieren.", "Ob die Weste dicht ist.", "Das Blei.", "Die Maske."],
						correct: [0, 1, 2]
					},
					{
						question: "Was prüft man beim 'L' (Luft)?",
						options: ["Den Hauptregler.", "Den Reserve-Regler.", "Das Manometer.", "Den Flaschendruck.", "Das Jacket."],
						correct: [0, 1, 2, 3]
					},
					{
                        question: "Welches Zeichen bedeutet 'Nach oben'?",
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
                        question: "Welches Zeichen bedeutet 'Nach unten'?",
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
                        question: "Welches Zeichen bedeutet 'Stopp'?",
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
                        question: "Welches Zeichen bedeutet 'Frage nach dem Druck'?",
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
                        question: "Welches Zeichen bedeutet 'Luftnot'?",
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
                        question: "Welches Zeichen bedeutet 'Essoufflement'?",
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
                    text: `<p>Bevor die Unterwasserwelt erkundet werden kann, muss der Taucher sicher ins Wasser gelangen. Je nach Ausgangspunkt gibt es dafür unterschiedliche Methoden. Die Grafik zeigt drei Vorgehensweisen.</p>
						<h4>1. Einstieg vom Steg: Der Riesen-Schritt</h4>
						<p>Beim Einstieg von einem festen Steg oder einer Kaimauer wird der <strong>Riesen-Schritt</strong> angewendet. Eine Hand hält dabei die Maske und den Atemregler fest, damit diese nicht verrutschen. 
						Der Blick ist geradeaus nach vorne gerichtet. Es wird ein großer Ausfallschritt ins Wasser ausgeführt. Nach dem Auftauchen wird sofort das <strong>OK-Zeichen</strong> gegeben. 
						Beim Einstieg vom Ufer aus sollte vorsichtig über flache Stellen oder Sandwege gewatet werden, um den empfindlichen Grund nicht aufzuwirbeln.</p>
						<h4>2. Einstieg vom Boot: Die Rückwärts-Rolle</h4>
						<p>Beim Einstieg von einem kleinen Boot oder Schlauchboot wird die <strong>Rückwärts-Rolle</strong> angewendet. Der Taucher sitzt mit vollständiger Ausrüstung auf dem Bootsrand und rollt sich rückwärts ins Wasser. 
						Diese Methode ist sehr sicher, da der Taucher nicht kopfüber ins Wasser stürzt und die schwere Flasche auf dem Rücken keinen Schaden nimmt.</p>
						<h4>3. Kontrolliertes Abtauchen</h4>
						<p>Nach dem Einstieg ins Wasser folgt das <strong>Abtauchen</strong>. Der Taucher lässt die Luft aus dem Jacket ab und sinkt langsam in die Tiefe. 
						Während des Abstiegs muss der <strong>Druckausgleich</strong> regelmäßig durchgeführt werden. Das Abtauchen erfolgt kontrolliert und ohne Hektik, 
						damit sich der Körper an den zunehmenden Wasserdruck anpassen kann. Der Blick ist dabei nach unten gerichtet, um Hindernisse frühzeitig zu erkennen.</p>`,
                    image: "bilder/5_1_Abtauchen.jpg"
                },
                {
                    id: "kap5-2",
                    title: "Der Unterwasser-Ehrenkodex",
                    text: `<p>Die Unterwasserwelt ist der Lebensraum von unzähligen Tieren und Pflanzen. Taucher sind dort nur zu Gast. Um diesen Lebensraum zu schützen und auch in Zukunft 
					zu erhalten, gelten fünf grundlegende Regeln. Die Grafik zeigt diese Regeln im Überblick.</p>
					<h4>1. Tiere nicht jagen, stressen oder anfassen</h4>
					<p>Fische und andere Meeresbewohner müssen aus sicherer Entfernung beobachtet werden. Werden sie angefasst oder gejagt, erschrecken sie und fühlen sich bedroht. 
					Die reine Beobachtung ist die schonendste Form der Interaktion.</p>
					<h4>2. Immer auf den vorgeschriebenen Wegen und im Freiwasser bleiben</h4>
					<p>Unter Wasser gibt es oft markierte Wege, ähnlich wie Wanderwege. Diese Wege müssen eingehalten werden. Am besten schwebt der Taucher frei im Wasser. 
					So werden empfindliche Lebensräume der Tiere geschont und Pflanzen nicht zerstört.</p>
					<h4>3. Korallen und Unterwasserlebewesen niemals berühren</h4>
					<p>Korallen sehen zwar aus wie Steine, sind aber lebendige Tiere. Sie wachsen sehr langsam. Bereits eine winzige Berührung mit der Hand oder dem Flossenschlag kann sie dauerhaft verletzen. 
					Korallen sollten daher nur aus der Ferne betrachtet werden.</p>
					<h4>4. Flossenschlag kontrollieren</h4>
					<p>Ein unkontrollierter Flossenschlag wirbelt Sand oder Schlamm vom Grund auf. Das Wasser wird dadurch trüb und die Sicht für alle Taucher und Fische verschlechtert sich. 
					Eine ruhige, gleichmäßige Bewegung schützt den Meeresboden. Eine korrekte Tarierung ist dabei entscheidend.</p>
					<h4>5. Keinerlei Müll hinterlassen</h4>
					<p>Alles, was mit ins Wasser genommen wird, muss auch wieder mit an Land genommen werden. Zusätzlich sollte Plastikmüll eingesammelt werden, wenn er unterwegs gesehen wird. 
					So wird verhindert, dass Meere verschmutzen und Tiere daran ersticken.</p>
					<p><strong>Merksatz zum Einprägen:</strong> „Schauen ja – Anfassen nein!“</p>`,
                    image: "bilder/5_2_Umwelt.jpg"
                },
                {
                    id: "kap5-3",
                    title: "Die Unterwasser-Welt",
					type: "stacked",
					isSelfStudy: true,
					badge: "Nicht prüfungsrelevant (Selbststudium)",
					summaryTitle: "Die Unterwasser-Welt...",
                    subrows: [
                        {
                            id: "fische_heim",
							subTitle: "Die heimischen Fische",
                            text: `<p>In heimischen Seen und Flüssen leben zahlreiche Fischarten sowie Krebstiere. Für die Beobachtung dieser Tiere sind Geduld und die Kenntnis ihres natürlichen Verhaltens erforderlich. 
							Die Grafik zeigt die wichtigsten heimischen Bewohner.</p>
							<h4>Die heimischen Arten im Überblick</h4>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Flussbarsch:</strong> Erkennbar an den dunklen Streifen. Er lebt oft in Schwärmen in der Nähe von Wasserpflanzen.</li>
								<li><strong>Hecht:</strong> Ein schneller Jäger mit einem langen, torpedoförmigen Körper und einem gefleckten Muster.</li>
								<li><strong>Wels:</strong> Ein großer, dunkler Fisch mit langen Barteln am Maul. Er hält sich bevorzugt in der Nähe von Schlamm und am Gewässergrund auf.</li>
								<li><strong>Aal:</strong> Er hat eine schlangenähnliche Form und versteckt sich häufig zwischen Steinen.</li>
								<li><strong>Brasse:</strong> Ein silbrig glänzender Fisch mit einer hohen Rückenflosse, der am sandigen Grund nach Nahrung sucht.</li>
								<li><strong>Karpfen:</strong> Ein großer, schuppiger Fisch mit einem kräftigen Körper und einem kleinen Maul.</li>
								<li><strong>Edelkrebs:</strong> Kein Fisch, sondern ein Krebstier. Er versteckt sich unter Steinen oder Wurzeln und besitzt große Scheren.</li>
							</ul>
							<h4>Tipps zur Beobachtung</h4>
							<ul style="margin-bottom: 15px; padding-left: 20px;">
								<li><strong>Der getarnte Hecht:</strong> Das gefleckte Rückenmuster des Hechts tarnt ihn optimal im Pflanzenbewuchs. Zur Entdeckung sollte nicht direkt nach dem Fisch, 
								sondern nach unnatürlichen, geraden Linien im Wasser gesucht werden. Diese Linien sind oft der Rücken des Hechts.</li>
								<li><strong>Der hektische Schwarm:</strong> Wenn kleine Fische an einer Stelle hektisch umherschwimmen, befindet sich oft ein Raubfisch wie ein Hecht in der Nähe. 
								Die kleinen Fische reagieren mit Fluchtverhalten auf die Bedrohung.</li>
							</ul>
							<p>Eine ruhige und zurückhaltende Verhaltensweise ermöglicht die Beobachtung dieser Tiere in ihrem natürlichen Lebensraum.</p>`,
                            image: "bilder/5_3_Fische.jpg"
                        },
                        {
                            id: "fische_meer",
							subTitle: "Die faszinierende Welt der Meeresbewohner",
                            text: `<p>Das Meer beherbergt eine Vielzahl unterschiedlicher Tierarten. Jede Art hat spezifische Eigenschaften entwickelt, die ihr das Überleben im Ozean ermöglichen. Die Grafik zeigt neun bekannte Meeresbewohner.</p>
							<h4>Die Meeresschildkröte</h4>
							<p>Sie legt weite Strecken im Ozean zurück. Ihre kräftigen Flossen dienen als Antrieb. Zur Eiablage kehrt sie an den Strand zurück, an dem sie selbst geschlüpft ist.</p>
							<h4>Der Hai</h4>
							<p>Haie sind Jäger mit einem starken Gebiss und einem ausgeprägten Geruchssinn. Sie existieren seit Millionen von Jahren auf der Erde und gelten als evolutionär sehr alte Tierarten.</p>
							<h4>Der Delfin</h4>
							<p>Delfine zählen zu den intelligentesten Meeresbewohnern. Sie kommunizieren über Klick- und Pfeiftöne und sind für ihre Sprünge aus dem Wasser bekannt.</p>
							<h4>Der Papageifisch</h4>
							<p>Seinen Namen verdankt er seinem bunten Aussehen und seinem schnabelartigen Maul. Mit diesem Maul raspelt er Korallen ab und ernährt sich von ihnen.</p>
							<h4>Der Mantarochen</h4>
							<p>Der Mantarochen ist ein großer, friedlicher Meeresbewohner. Er bewegt sich gleitend durch das Wasser und ernährt sich von Plankton.</p>
							<h4>Der Wal</h4>
							<p>Wale sind keine Fische, sondern Säugetiere. Sie müssen zum Atmen an die Wasseroberfläche kommen. Der Blauwal ist das größte Tier der Erde.</p>
							<h4>Der Doktorfisch</h4>
							<p>Er ist für seine auffällige Färbung bekannt und besitzt oft einen kleinen Dorn am Schwanzansatz. Sein Lebensraum sind warme Korallenriffe.</p>
							<h4>Der Anemonenfisch</h4>
							<p>Der Anemonenfisch lebt in enger Symbiose mit einer giftigen Anemone. Er ist gegen das Gift der Anemone immun und findet dort Schutz vor Fressfeinden.</p>
							<h4>Der Igel- oder Kugelfisch</h4>
							<p>Bei Bedrohung pumpt sich dieser Fisch mit Wasser auf und verwandelt sich in eine stachelige Kugel. Dieser Mechanismus schützt ihn vor Raubfischen.</p>`,
                            image: "bilder/5_3_1_Fische.jpg"
                        }
                    ]
                },
                {
                    id: "kap5-4",
                    title: "Abbruch des Tauchgangs",
                    text: `<p>Ein Tauchgang muss in bestimmten Situationen sofort beendet werden. Die Entscheidung zum Abbruch ist ein wichtiger Bestandteil der Sicherheitskultur im Tauchen und dient dem Schutz aller Beteiligten. 
					Die Grafik zeigt eine Stopp-Liste mit vier Gründen, die einen sofortigen Abbruch erforderlich machen.</p>
					<h4>1. Das Gruppenführer-Signal (Abbruch-Zeichen)</h4>
					<p>Der Tauchlehrer oder Gruppenführer gibt das Abbruch-Signal. Dieses wird durch <strong>zwei gekreuzte Arme vor dem Körper</strong> (ein „X“) dargestellt. Dieses Signal führt zum sofortigen Abbruch. Der Gruppenführer behält den Überblick über die Situation und entscheidet, wann der Aufstieg eingeleitet wird.</p>
					<h4>2. Starkes Frieren</h4>
					<p>Wenn der Körper stark auskühlt und der Taucher am ganzen Körper zittert, ist das ein Warnsignal. Der Tauchgang muss sofort beendet werden, um eine Unterkühlung zu vermeiden.</p>
					<h4>3. Abbruchwunsch</h4>
					<p>Jeder Taucher hat das Recht, den Tauchgang jederzeit zu beenden. Gibt ein Buddy (Tauchpartner) das Zeichen zum Abbruch, wird der Tauchgang gemeinsam beendet. Beide Taucher steigen zusammen auf.</p>
					<h4>4. Luftvorrat von 50 bar</h4>
					<p>Das Manometer (die Druckanzeige) zeigt den verbleibenden Luftvorrat an. Bei einem Restdruck von 50 bar ist die Grenze erreicht. Der Tauchgang wird beendet und der Aufstieg zur Oberfläche eingeleitet.</p>
					<h4>Wichtiger Hinweis</h4>
					<p>Trifft einer dieser Gründe zu, wird der Tauchgang sofort beendet. Diese Regel gilt für jeden einzelnen Taucher, den Buddy und die gesamte Gruppe. Die Sicherheit und die Gesundheit haben jederzeit Vorrang vor der Fortsetzung des Tauchgangs.</p>`,
                    image: "bilder/5_4_Abbruch.jpg"
                },
                {
                    id: "kap5-5",
                    title: "Was ist ein Essoufflement?",
                    text: `<p>Unter Wasser kann es vorkommen, dass ein Taucher plötzlich keine Luft mehr bekommt, obwohl die Flasche noch ausreichend gefüllt ist. Die Atmung wird schnell und hektisch. 
					Dieses Phänomen wird als <strong>Essoufflement</strong> (Aussprache: Ess-u-fle-mang) bezeichnet. Die Grafik zeigt die Situation und die erforderlichen Maßnahmen.</p>
					<h4>Wie entsteht ein Essoufflement?</h4>
					<p>Ein Essoufflement kann verschiedene Ursachen haben. Häufig entsteht es durch zu schnelles Schwimmen, starke Strömung oder Kälte. Auch plötzliche Angst oder Panik können Auslöser sein. 
					In einer Paniksituation atmet der Körper flach und schnell. Dadurch kann die eingeatmete Luft nicht mehr effizient verarbeitet werden, und der Taucher hat das Gefühl zu ersticken.</p>
					<h4>Was ist zu tun? (Maßnahmen zur Beruhigung)</h4>
					<p>Die Grafik zeigt die richtigen Verhaltensweisen für den betroffenen Taucher und seinen Buddy:</p>
					<ol style="margin-bottom: 15px; padding-left: 20px;">
						<li><strong>Stoppen:</strong> Die Bewegung wird sofort eingestellt. Der Taucher hält sich am Buddy fest, um Sicherheit zu geben.</li>
						<li><strong>Beruhigen:</strong> Der Buddy hält Blickkontakt. Die Atmung wird bewusst verlangsamt und tief ausgeführt.</li>
						<li><strong>Sicher auftauchen:</strong> Sobald sich der Taucher beruhigt hat, erfolgt der gemeinsame, langsame und kontrollierte Aufstieg.</li>
						<li><strong>Nicht allein lassen:</strong> Der Buddy begleitet den Taucher, bis beide sicher die Wasseroberfläche oder das Boot erreicht haben.</li>
					</ol>`,
                    image: "bilder/5_4_1_Essouflement.jpg"
                }
            ],
            quiz: {
				questionPool: [
					{
						question: "Wie steigt man von einem Steg ins Wasser?",
						options: ["Mit dem Riesen-Schritt.", "Mit der Rückwärts-Rolle.", "Mit einem Kopfsprung.", "An der Leine.", "Mit einer Arschbombe."],
						correct: 0
					},
					{
						question: "Wie steigt man von einem kleinen Boot ins Wasser?",
						options: ["Mit der Rückwärts-Rolle.", "Mit dem Riesen-Schritt.", "Mit einem Kopfsprung.", "An der Leine.", "Mit einer Arschbombe."],
						correct: 0
					},
					{
						question: "Was hält man beim Riesen-Schritt fest?",
						options: ["Die Maske.", "Den Atemregler.", "Die Flossen.", "Das Jacket.", "Das Blei."],
						correct: [0, 1]
					},
					{
						question: "Welche Aussagen über den Einstieg ins Wasser sind richtig?",
						options: ["Vom Steg macht man den Riesen-Schritt.", "Von einem kleinen Boot macht man die Rückwärts-Rolle.", "Die Leine hilft beim Abtauchen.", "Man springt immer kopfüber.", "Man macht immer eine Arschbombe."],
						correct: [0, 1, 2]
					},
					{
						question: "Was macht man nach dem Auftauchen?",
						options: ["Man gibt sofort das OK-Zeichen.", "Man taucht sofort weiter.", "Man nimmt die Maske ab.", "Man zieht die Flossen aus.", "Nichts."],
						correct: 0
					},
					{
						question: "Warum watet man vorsichtig ins Wasser?",
						options: ["Um den empfindlichen Boden nicht aufzuwirbeln.", "Um nicht zu frieren.", "Um schneller zu sein.", "Um die Fische zu erschrecken.", "Um die Flossen zu testen."],
						correct: 0
					},
					{
						question: "Was ist eine Rückwärts-Rolle?",
						options: ["Man rollt sich rückwärts vom Boot ins Wasser.", "Man springt vorwärts ins Wasser.", "Man taucht kopfüber.", "Man schwimmt rückwärts.", "Man dreht sich im Kreis."],
						correct: 0
					},
					{
						question: "Warum ist die Rückwärts-Rolle sicher?",
						options: ["Man verletzt sich nicht an der schweren Flasche auf dem Rücken.", "Man stürzt nicht kopfüber ins Wasser.", "Sie ist bequem.", "Sie ist schnell.", "Sie ist laut."],
						correct: [0, 1, 2]
					},
					{
						question: "Wie verhält man sich gegenüber Tieren unter Wasser?",
						options: ["Man jagt sie nicht.", "Man stresst sie nicht.", "Man fasst sie nicht an.", "Man beobachtet sie aus sicherer Entfernung.", "Man fängt sie."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Wie verhält man sich gegenüber Müll am Wasser?",
						options: ["Man hinterlässt keinen Müll.", "Man sammelt Plastikmüll ein.", "Man nimmt den eigenen Müll wieder mit an Land.", "Man wirft Müll ins Wasser.", "Man lässt Müll am Strand liegen."],
						correct: [0, 1, 2]
					},
					{
						question: "Welche Aussagen über den Unterwasser-Ehrenkodex sind richtig?",
						options: ["Tiere werden beobachtet, nicht angefasst.", "Korallen werden geschützt.", "Müll wird eingesammelt.", "Man bleibt auf den vorgeschriebenen Wegen.", "Tiere dürfen angefasst werden."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Wie lautet der Merksatz für Kinder zum Ehrenkodex?",
						options: ["'Schauen ja – Anfassen nein!'", "'Anfassen ja – Schauen nein!'", "'Alles anfassen!'", "'Nichts anschauen!'", "'Müll ins Wasser!'"],
						correct: 0
					},
					{
						question: "Warum soll man keine Korallen berühren?",
						options: ["Sie sind lebendige Tiere.", "Sie wachsen ganz langsam.", "Schon eine winzige Berührung kann sie für immer verletzen.", "Sie sind aus Stein.", "Sie sind giftig."],
						correct: [0, 1, 2]
					},
					{
						question: "Warum soll man keinen Müll hinterlassen?",
						options: ["Tiere können daran ersticken.", "Es schadet der Natur.", "Die Meere sollen sauber bleiben.", "Es ist egal.", "Es sieht hässlich aus."],
						correct: [0, 1, 2, 4]
					},
					{
						question: "Wann wird ein Tauchgang sofort beendet?",
						options: ["Wenn der Gruppenführer das Abbruch-Zeichen gibt.", "Bei starkem Frieren.", "Wenn ein Taucher den Abbruch wünscht.", "Wenn nur noch 50 bar Luft in der Flasche sind.", "Bei guter Laune."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was ist das Gruppenführer-Abbruch-Signal?",
						options: ["Das Abbruch-Zeichen.", "Gekreuzte Arme.", "Ein Daumen nach oben.", "Eine geballte Faust.", "Ein ausgestreckter Zeigefinger."],
						correct: [0, 1]
					},
					{
						question: "Was macht man bei starkem Frieren?",
						options: ["Man bricht den Tauchgang ab.", "Man taucht weiter.", "Man taucht schneller.", "Man hält die Tiefe.", "Man macht nichts."],
						correct: 0
					},
					{
						question: "Was bedeutet die 50-bar-Grenze?",
						options: ["Sie ist die Druckwarnung.", "Sie ist die rote Grenze, bei der man den Tauchgang beendet.", "Sie bedeutet, dass man langsam zur Oberfläche auftauchen soll.", "Sie bedeutet Halbzeit.", "Sie bedeutet, dass alles gut ist."],
						correct: [0, 1, 2]
					},
					{
						question: "Was ist ein Essoufflement?",
						options: ["Atemnot.", "Panik-Atmung.", "Hektisches Atmen, obwohl noch genug Luft in der Flasche ist.", "Keine Luft mehr in der Flasche.", "Alles gut."],
						correct: [0, 1, 2]
					},
					{
						question: "Wie entsteht ein Essoufflement?",
						options: ["Durch zu schnelles Schwimmen.", "Durch zu starke Strömung.", "Durch Kälte.", "Durch plötzliche Angst.", "Durch zu viel Luft in der Flasche."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was macht man bei einem Essoufflement?",
						options: ["Man stoppt sofort.", "Man beruhigt sich und atmet langsam und tief aus.", "Man taucht gemeinsam langsam und ruhig auf.", "Man lässt den Partner nicht allein.", "Man taucht schnell auf."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Welche Aussagen über den Abbruch eines Tauchgangs sind richtig?",
						options: ["Sicherheit geht immer vor.", "Ein Abbruch ist keine Schande.", "Jeder Taucher darf jederzeit selbst entscheiden abzubrechen.", "Bei 50 bar wird der Tauchgang beendet.", "Ein Abbruch ist verboten."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Welche Regeln befolgt man bei einem Essoufflement?",
						options: ["Ruhig bleiben.", "Den Partner festhalten.", "Langsam auftauchen.", "Den Partner nicht allein lassen.", "Schnell auftauchen."],
						correct: [0, 1, 2, 3]
					}
				]
			}
        },
        {
            id: "kap6",
            title: "Kapitel 6: Aufstieg und Notfall",
            intro: "Detaillierte Rettungskette und sichere Ausstiegsprozeduren.",
            subsections: [
                {
                    id: "kap6-1",
                    title: "Der perfekte Tauchgang-Abschluss",
                    text: `<p>Ein Tauchgang endet nicht mit dem Erreichen der Wasseroberfläche. Ein sicherer Abschluss ist ebenso wichtig wie der Start. Die Grafik zeigt die fünf aufeinanderfolgenden Schritte.</p>
					<h4>1. Der Aufstieg – Langsamer als Luftblasen</h4>
					<p>Der Aufstieg erfordert höchste Konzentration und erfolgt langsam und kontrolliert. Die Faustregel lautet: <strong>Niemals schneller aufsteigen als die eigenen Luftblasen.
					</strong> Das entspricht maximal <strong>10 Metern pro Minute</strong>. Die Luftblasen dienen als visuelle Orientierung für die Aufstiegsgeschwindigkeit. 
					Moderne Tauchcomputer zeigen die Geschwindigkeit über eine farbige Skala (grün, gelb, rot) an. Der grüne Bereich markiert die sichere Aufstiegsgeschwindigkeit.</p>
					<h4>2. Der Sicherheitsstopp bei 5 Metern</h4>
					<p>Vor dem Verlassen des Wassers ist ein Sicherheitsstopp zwingend erforderlich. Der Taucher verbleibt genau <strong>3 Minuten</strong> in einer Tiefe von <strong>5 Metern</strong> 
					(am Seil oder frei im Wasser). Der Grund: Der Körper hat unter Wasser Stickstoff aufgenommen. Der Sicherheitsstopp ermöglicht den sicheren Abbau dieses überschüssigen Stickstoffs. 
					Der Tauchcomputer überwacht dabei präzise die Tiefe (5 Meter) und die Dauer (3 Minuten).</p>
					<p><strong>Hintergrund:</strong> Unter Wasser wird Luft unter Druck geatmet. Dabei löst sich Stickstoff im Blut. Bei einem zu schnellen Aufstieg kann der Stickstoff in Form von Bläschen 
					im Blut aufsteigen. Dies kann zu schwerwiegenden gesundheitlichen Problemen führen, die als <strong>Dekompressionskrankheit</strong> bezeichnet werden. Der Sicherheitsstopp gibt dem Körper die notwendige Zeit, 
					den Stickstoff langsam und sicher abzuatmen.</p>
					<h4>3. Gemeinsam auftauchen</h4>
					<p>Nach dem Sicherheitsstopp tauchen die beiden Buddys gemeinsam und kontrolliert an die Wasseroberfläche auf. An der Oberfläche angekommen, wird sofort das <strong>OK-Zeichen</strong> gegeben. 
					Dies signalisiert dem Team oder dem Boot: Alles ist in Ordnung. Anschließend wird das Jacket (die Tarierweste) mit Luft befüllt, um den Auftrieb an der Oberfläche zu erhöhen und sicher zu treiben.</p>
					<h4>4. An Land: Vollständigkeits- und Befindlichkeits-Check</h4>
					<p>Zurück am Boot oder am Ufer wird der Gesundheitszustand aller Taucher überprüft. Die Ausrüstung wird schrittweise abgelegt und anhand einer Checkliste auf Vollständigkeit kontrolliert.</p>
					<h4>5. Ausrüstung versorgen</h4>
					<p>Abschließend wird die gesamte Ausrüstung fachgerecht versorgt. Die Tauchflaschen werden sicher aufgestellt, die Neoprenanzüge hängen zum Trocknen, und das restliche Equipment wird sauber verstaut. 
					Dies gewährleistet die Einsatzbereitschaft für den nächsten Tauchgang.</p>`,
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
						question: "Wie schnell darf man beim Tauchen aufsteigen?",
						options: ["Langsamer als die eigenen Luftblasen.", "Maximal 10 Meter pro Minute.", "So schnell wie möglich.", "20 Meter pro Minute.", "50 Meter pro Minute."],
						correct: [0, 1]
					},
					{
						question: "Was ist der Sicherheitsstopp?",
						options: ["3 Minuten bei 5 Metern Tiefe.", "5 Minuten bei 3 Metern Tiefe.", "10 Minuten bei 5 Metern Tiefe.", "1 Minute bei 3 Metern Tiefe.", "3 Minuten bei 10 Metern Tiefe."],
						correct: 0
					},
					{
						question: "Warum macht man den Sicherheitsstopp?",
						options: ["Um den überschüssigen Stickstoff sicher abzuatmen.", "Um sich zu entspannen.", "Um zu warten.", "Um zu fotografieren.", "Um zu essen."],
						correct: 0
					},
					{
						question: "Was passiert, wenn man zu schnell auftaucht?",
						options: ["Stickstoff kann wie kleine Bläschen im Blut aufsteigen.", "Es kann zur Dekompressionskrankheit kommen.", "Es kann sehr gefährlich werden.", "Nichts.", "Man wird ohnmächtig."],
						correct: [0, 1, 2]
					},
					{
						question: "Was macht man nach dem Auftauchen an der Oberfläche?",
						options: ["Man gibt sofort das OK-Zeichen.", "Man füllt das Jacket mit Luft auf.", "Man taucht sofort weiter.", "Man nimmt die Maske ab.", "Man zieht die Flossen aus."],
						correct: [0, 1]
					},
					{
						question: "Was macht man an Land nach dem Tauchgang?",
						options: ["Man macht einen Befindlichkeits-Check.", "Man macht einen Vollständigkeits-Check der Ausrüstung.", "Man legt die Ausrüstung schrittweise ab.", "Man geht sofort nach Hause.", "Man macht nichts."],
						correct: [0, 1, 2]
					},
					{
						question: "Was macht man mit der Ausrüstung nach dem Tauchgang?",
						options: ["Man versorgt sie fachgerecht.", "Man trocknet sie.", "Man verstaut sie sauber.", "Man wirft sie weg.", "Man legt sie in die pralle Sonne."],
						correct: [0, 1, 2]
					},
					{
						question: "Welche Aussagen über den Tauchgang-Abschluss sind richtig?",
						options: ["Man taucht langsam auf.", "Man macht einen Sicherheitsstopp.", "Man taucht gemeinsam mit dem Buddy auf.", "Man gibt das OK-Zeichen.", "Man taucht so schnell wie möglich auf."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Warum ist der Sicherheitsstopp so wichtig?",
						options: ["Er gibt dem Körper Zeit, den Stickstoff abzuatmen.", "Er schützt die Gesundheit.", "Er verhindert gefährliche Stickstoffbläschen.", "Er dient der Sicherheit.", "Er ist nur Zeitvertreib."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Wie lautet die Faustregel für den Aufstieg?",
						options: ["Niemals schneller aufsteigen als die eigenen Luftblasen.", "Schneller als die Luftblasen aufsteigen.", "Genauso schnell wie die Luftblasen.", "Das ist egal.", "Immer 20 Meter pro Minute."],
						correct: 0
					},
					{
						question: "Was ist die Rettungskette?",
						options: ["Fünf Schritte, die im Notfall nacheinander ablaufen.", "Ein Tauchgang.", "Ein Test.", "Ein Spiel.", "Ein Werkzeug."],
						correct: 0
					},
					{
						question: "Was ist der erste Schritt der Rettungskette?",
						options: ["Erkennen und Bergen.", "Notruf absetzen.", "Erste Hilfe.", "Rettungsdienst.", "Druckkammer."],
						correct: 0
					},
					{
						question: "Welche Notrufnummer ruft man in Europa?",
						options: ["112.", "110.", "911.", "115.", "0800."],
						correct: 0
					},
					{
						question: "Welche Angaben macht man beim Notruf?",
						options: ["WO ist es passiert?", "WAS ist passiert?", "WER ist betroffen?", "WIE VIELE Verletzte gibt es?", "WIE ALT ist der Betroffene?"],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was macht man bei der Ersten Hilfe?",
						options: ["Man bringt den Betroffenen in die stabile Seitenlage (falls er atmet).", "Man gibt 100 % medizinischen Sauerstoff.", "Man überprüft die Vitalfunktionen (Atmung und Puls).", "Man leitet bei Bedarf Wiederbelebungsmaßnahmen ein.", "Man gibt dem Betroffenen Wasser zu trinken."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was ist die Druckkammer?",
						options: ["Eine spezialisierte Einrichtung für schwere Tauchunfälle.", "Dort wird eine hyperbare Sauerstofftherapie durchgeführt.", "Sie hilft dem Körper, sich von den Folgen des Tauchunfalls zu erholen.", "Ein normaler Raum.", "Ein Boot."],
						correct: [0, 1, 2]
					},
					{
						question: "Welche Aussagen über die Rettungskette sind richtig?",
						options: ["Sie besteht aus fünf Schritten.", "Man ruft die 112.", "Man gibt Sauerstoff.", "Bei schweren Unfällen geht es in die Druckkammer.", "Man ruft die 110."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Warum ist die Rettungskette wichtig?",
						options: ["Um Leben zu retten.", "Für die Sicherheit.", "Sie gibt eine klare Struktur im Notfall.", "Um schnell Hilfe zu holen", "Aus Spaß."],
						correct: [0, 1, 2, 3]
					},
					{
						question: "Was sind die wichtigsten Regeln im Notfall?",
						options: ["Ruhe bewahren.", "Laut und deutlich sprechen.", "Keine Panik machen.", "Schnell handeln.", "Weglaufen."],
						correct: [0, 1, 2, 3]
					}
				]
			}
        },
        {
            id: "kap7",
            title: "Kapitel 7: Die Praxis",
            intro: "Die Prüfung für das KTSA Silber besteht aus einem theoretischen und einem praktischen Teil. Der praktische Teil gliedert sich in Übungen im Schwimmbad und Übungen im Freiwasser.",
            subsections: [
                {
                    id: "kap7-1",
                    title: "Die Bad-Übungen (mit der ABC-Ausrüstung)",
                    text: `<p>Im Schwimmbad wird der sichere Umgang mit der ABC-Ausrüstung ohne schwere Tauchflasche geprüft. Die Grafik zeigt drei zentrale Übungen.</p>
					<h4>Übung A: Zeittauchen</h4>
					<p>Der Prüfling taucht 25 Sekunden lang unter Wasser und legt dabei eine Strecke von etwa 10 Metern zurück. Die Grafik zeigt die Stoppuhr und die 10-Meter-Marke. 
					Diese Übung prüft die Orientierung unter Wasser und die Fähigkeit, ruhig zu bleiben, ohne die Luft anzuhalten.</p>
					<h4>Übung B: Maske absetzen und wieder aufsetzen</h4>
					<p>Unter Wasser wird die Maske abgenommen, wieder aufgesetzt und ausgeblasen. Dies ist eine wichtige Sicherheitsübung für den Fall, dass die Maske während eines Tauchgangs verrutscht.</p>
					<h4>Übung C: Partnerübung (Wechselatmung)</h4>
					<p>Zwei Taucher schwimmen 50 Meter zusammen. Dabei atmen sie abwechselnd durch den Schnorchel (einer taucht, der andere atmet). Die Grafik zeigt die Übergabe des Schnorchels. 
					Diese Übung demonstriert die Teamarbeit und die sichere Weitergabe der Atemluft.</p>
					<h4>Weitere Prüfungsinhalte im Schwimmbad</h4>
					<p>Neben den drei dargestellten Übungen umfasst die Prüfung weitere Aufgaben:</p>
					<ul style="margin-bottom: 15px; padding-left: 20px;">
						<li><strong>Streckentauchen:</strong> 20 Meter mit einem Atemzug (bei Neoprenjacke und -hose 15 Meter). Vor dem Tauchen ist ruhiges Atmen erforderlich, Hyperventilation ist zu vermeiden.</li>
						<li><strong>Abtauchen und Schnorchel ausblasen:</strong> Dreimaliges stilgerechtes Abtauchen mit anschließendem Ausblasen des Schnorchels an der Wasseroberfläche.</li>
						<li><strong>Schnorcheln:</strong> 300 Meter mit dem Schnorchel in verschiedenen Lagen (Brustlage, Seitenlage, Rückenlage).</li>
					</ul>`,
                    images: ["bilder/7_1_ABC.jpg"]
                },
                {
                    id: "kap7-2",
                    title: "Die Freiwasser-Übungen (mit dem Tauchgerät)",
                    text: `<p>Die Freiwasser-Übungen finden im tiefen Wasser statt und prüfen den sicheren Umgang mit der vollständigen Tauchausrüstung. Die Grafik zeigt drei zentrale Übungen.</p>
					<h4>Übung A: Maske abnehmen in 3 Metern Tiefe</h4>
					<p>Der Taucher begibt sich auf 3 Meter Tiefe, nimmt die Tauchermaske ab, setzt sie wieder auf und bläst sie aus. Diese Übung trainiert die Orientierung und den sicheren Umgang mit der Maske unter Wasser.</p>
					<h4>Übung B: Luft teilen (25 Meter)</h4>
					<p>Zwei Taucher legen eine Strecke von 25 Metern unter Wasser zurück. Dabei wird die Atemluft geteilt. Der eine Taucher agiert als Luftnehmer (atmet aus dem Hauptregler des Partners), 
					der andere als Luftgeber. Es gilt die VDST-Regel: Der Partner erhält den Hauptregler (langen grünen Schlauch), der Geber wechselt auf den Reserve-Regler am Hals. Die Grafik zeigt den Wechsel des Reglers.</p>
					<h4>Übung C: Abstand halten (ca. 50 cm)</h4>
					<p>Der Taucher bewegt sich mit deutlichem Abstand über dem Grund. Die Grafik zeigt einen Abstand von etwa 50 cm. Dadurch werden Pflanzen und Tiere geschützt, und es wird kein Schlamm aufgewirbelt. 
					Während dieser Übung müssen zudem fünf Unterwasser-Pflichtzeichen (z. B. Stopp, Kalt, OK) korrekt umgesetzt werden.</p>
					<h4>Weitere Prüfungsinhalte im Freiwasser</h4>
					<p>Neben den drei dargestellten Übungen umfasst die Prüfung weitere Aufgaben:</p>
					<ul style="margin-bottom: 15px; padding-left: 20px;">
						<li><strong>Tauchgänge:</strong> Zwei Tauchgänge mit dem Ausbilder in einer Tiefe von 5 bis 8 Metern und einer Dauer von 15 bis 30 Minuten.</li>
						<li><strong>Schnorcheln mit Gerät:</strong> 10 Minuten Schnorcheln mit kompletter Tauchausrüstung an der Wasseroberfläche.</li>
						<li><strong>Aufstieg:</strong> Gemeinsamer, langsamer und kontrollierter Aufstieg mit dem Partner.</li>
						<li><strong>Ausrüstung versorgen:</strong> Fachgerechter Abbau und Versorgung der Ausrüstung nach dem Tauchgang (Flaschen sichern, Anzug aufhängen etc.).</li>
					</ul>
					<h4>Abschluss</h4>
					<p>Nach erfolgreicher Absolvierung aller Übungen ist die Prüfung für das KTSA Silber bestanden.</p>`,
                    images: ["bilder/7_2_Freiwasser.jpg"]
                }
            ]
        }
    ]
};