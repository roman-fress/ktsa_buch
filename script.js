document.addEventListener("DOMContentLoaded", () => {
    renderBookContent();
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker erfolgreich registriert!', reg))
            .catch(err => console.log('Service Worker Fehler:', err));
    });
}

// Rendert das gesamte Buch aus der bookData (content.js)
function renderBookContent() {
    const container = document.getElementById("contentContainer");
    if (!container || typeof bookData === "undefined") return;

    let html = "";

    // 1. Cover rendern
    if (bookData.cover) {
        const cover = bookData.cover;
        html += `
            <section id="cover" class="book-cover">
                <h1>${cover.title}</h1>
                <h2>${cover.subTitle}</h2>
                <div class="content-row" style="margin-top: 25px;">
                    <div class="text-col">
                        <p>${cover.text1}</p>
                        <p style="margin-top: 15px;">${cover.text2}</p>
                        <p class="cover-footer" style="margin-top: 25px;"><em>${cover.footer}</em></p>
                    </div>
                    ${cover.image ? `
                        <div class="image-col">
                            <img src="${cover.image}" alt="Cover Bild" onclick="openImageModal('${cover.image}')">
                        </div>
                    ` : ""}
                </div>
            </section>
        `;
    }

    // 2. Kapitel rendern
    if (bookData.chapters && Array.isArray(bookData.chapters)) {
        bookData.chapters.forEach((chapter, chapterIndex) => {
            html += `
                <section id="${chapter.id}" class="chapter-section">
                    <h2 class="chapter-title">${chapter.title}</h2>
                    ${chapter.intro ? `<p class="chapter-intro">${chapter.intro}</p>` : ""}
            `;

            // Unterkapitel (subsections)
            if (chapter.subsections && Array.isArray(chapter.subsections)) {
                chapter.subsections.forEach((sub, subIndex) => {
                    html += `<div id="${sub.id}" class="subsection">`;
                    html += `<h3 class="subsection-title">${sub.title}</h3>`;

                    if (sub.type === "stacked") {
                        const rows = sub.rows || sub.subrows || [];
                        rows.forEach((row, rowIndex) => {
                            html += `
                                <div class="content-row">
                                    <div class="text-col">
                                        ${row.title ? `<h3>${row.title}</h3>` : ""}
                                        ${row.subTitle ? `<h4 class="sub-title">${row.subTitle}</h4>` : ""}
                                        ${row.text}
                                    </div>
                                    ${row.image ? `
                                        <div class="image-col">
                                            <img src="${row.image}" alt="${row.title || row.subTitle || 'Bild'}" onclick="openImageModal('${row.image}')">
                                        </div>
                                    ` : ""}
                                </div>
                                ${rowIndex < rows.length - 1 ? '<hr class="sub-divider">' : ''}
                            `;
                        });
                    } else {
                        html += `
                            <div class="content-row">
                                <div class="text-col">
                                    ${sub.text || ""}
                                </div>
                                ${sub.image || (sub.images && Array.isArray(sub.images)) ? `
                                    <div class="image-col">
                                        ${sub.image ? `<img src="${sub.image}" alt="${sub.title}" onclick="openImageModal('${sub.image}')">` : ""}
                                        ${sub.images && Array.isArray(sub.images) ? sub.images.map(img => `<img src="${img}" alt="${sub.title}" onclick="openImageModal('${img}')" style="margin-top: 15px;">`).join("") : ""}
                                    </div>
                                ` : ""}
                            </div>
                        `;
                    }

                    html += `</div>`; // End subsection

                    if (subIndex < chapter.subsections.length - 1) {
                        html += `<hr class="subsection-divider">`;
                    }
                });
            }

            // Quiz-Bereich am Ende des Kapitels generieren
            if (chapter.quiz) {
                html += generateQuizHtml(chapter.quiz, `quiz-box-${chapter.id}`, chapter.id);
            }

            html += `</section>`;
        });
    }

    container.innerHTML = html;
}

// Generierung des Quizzes mit allen Fragen und EINEM gemeinsamen Prüf-Button am Ende
function generateQuizHtml(quizData, containerId, chapterId) {
    if (!quizData) return '';

    let questionsList = quizData.questions;

    if (!questionsList && quizData.questionPool && Array.isArray(quizData.questionPool)) {
        let shuffled = [...quizData.questionPool].sort(() => 0.5 - Math.random());
        questionsList = shuffled.slice(0, 3);
    }

    if (!questionsList && quizData.question) {
        questionsList = [quizData];
    }
    
    if (!questionsList || questionsList.length === 0) return '';

    let html = `
        <div class="quiz-box" id="quiz-${chapterId}">
            <div class="quiz-header" onclick="toggleQuiz('${containerId}')">
                <span>🧠 Kapiteltest: Teste dein Wissen! (Klicken zum Starten)</span>
                <span id="quiz-arrow-${containerId}" class="quiz-arrow">▼</span>
            </div>
            <div id="quiz-content-${containerId}" class="quiz-content-hidden">
                <form id="quiz-chapter-form-${chapterId}">
    `;

    questionsList.forEach((q, qIndex) => {
        const correctArray = Array.isArray(q.correct) ? q.correct : [q.correct];
        const isMultiple = correctArray.length > 1;
        const inputType = isMultiple ? "checkbox" : "radio";
        const hintText = isMultiple ? "(Mehrere Antworten sind möglich)" : "(Nur eine Antwort ist richtig)";
        const uniqueQId = `${containerId}-q${qIndex}`;

        html += `
            <div class="quiz-question-block" data-question-id="${uniqueQId}" data-correct='${JSON.stringify(correctArray)}'>
                ${questionsList.length > 1 ? `<p class="quiz-question"><strong>Frage ${qIndex + 1}:</strong> ${q.question}</p>` : `<p class="quiz-question">${q.question}</p>`}
                <p class="quiz-hint">${hintText}</p>
        `;

        q.options.forEach((option, optionIndex) => {
            html += `
                <label class="quiz-option" id="label-${uniqueQId}-${optionIndex}">
                    <input type="${inputType}" name="quiz-${uniqueQId}" value="${optionIndex}">
                    <span>${option}</span>
                </label>
            `;
        });

        html += `
                <div id="quiz-feedback-${uniqueQId}" class="quiz-feedback"></div>
            </div>
            ${qIndex < questionsList.length - 1 ? '<hr class="quiz-divider-line">' : ''}
        `;
    });

    html += `
                </form>
                <button class="quiz-btn" type="button" onclick="checkChapterQuiz('${chapterId}')">Kapitel-Test auswerten</button>
                <div id="chapter-quiz-summary-${chapterId}" class="quiz-feedback" style="margin-top: 15px; font-weight: bold;"></div>
            </div>
        </div>
    `;
    
    return html;
}

// Auf- und Zuklappen des Kapiteltests per Klick
function toggleQuiz(containerId) {
    const content = document.getElementById(`quiz-content-${containerId}`);
    const arrow = document.getElementById(`quiz-arrow-${containerId}`);
    
    if (!content) return;

    if (content.classList.contains("quiz-content-hidden")) {
        content.classList.remove("quiz-content-hidden");
        if (arrow) arrow.style.transform = "rotate(180deg)";
    } else {
        content.classList.add("quiz-content-hidden");
        if (arrow) arrow.style.transform = "rotate(0deg)";
    }
}

// Öffnet das Quiz automatisch, wenn der Link im Menü geklickt wird
function jumpToQuiz(chapterId) {
    const quizBox = document.getElementById(`quiz-${chapterId}`);
    const containerId = `quiz-box-${chapterId}`;
    const content = document.getElementById(`quiz-content-${containerId}`);
    const arrow = document.getElementById(`quiz-arrow-${containerId}`);

    const details = document.getElementById(`details-${chapterId}`);
    if (details) details.open = true;

    if (quizBox) {
        if (content && content.classList.contains("quiz-content-hidden")) {
            content.classList.remove("quiz-content-hidden");
            if (arrow) arrow.style.transform = "rotate(180deg)";
        }
        setTimeout(() => {
            quizBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// Überprüfung des gesamten Kapitel-Tests auf einmal
function checkChapterQuiz(chapterId) {
    const form = document.getElementById(`quiz-chapter-form-${chapterId}`);
    const summaryDiv = document.getElementById(`chapter-quiz-summary-${chapterId}`);
    if (!form) return;

    const questionBlocks = form.querySelectorAll('.quiz-question-block');
    let correctCount = 0;
    let totalQuestions = questionBlocks.length;

    questionBlocks.forEach(block => {
        const uniqueQId = block.getAttribute('data-question-id');
        const correctArray = JSON.parse(block.getAttribute('data-correct'));
        const feedbackDiv = document.getElementById(`quiz-feedback-${uniqueQId}`);
        const inputs = block.querySelectorAll('input');

        let selectedValues = [];

        inputs.forEach((input, index) => {
            if (input.checked) {
                selectedValues.push(index);
            }
            const label = document.getElementById(`label-${uniqueQId}-${index}`);
            if (label) {
                label.classList.remove('correct-answer', 'wrong-answer');
            }
        });

        if (selectedValues.length === 0) {
            feedbackDiv.innerHTML = '<span class="text-warning">Keine Antwort ausgewählt.</span>';
            return;
        }

        const isCorrect = correctArray.length === selectedValues.length && 
                          correctArray.every(val => selectedValues.includes(val));

        // Markierungen setzen: Nur bei Richtigkeit grün markieren. Bei Falschheit nur die gewählten falschen rot markieren.
        inputs.forEach((input, index) => {
            const label = document.getElementById(`label-${uniqueQId}-${index}`);
            if (label) {
                if (isCorrect && correctArray.includes(index)) {
                    label.classList.add('correct-answer');
                } else if (!isCorrect && input.checked && !correctArray.includes(index)) {
                    label.classList.add('wrong-answer');
                }
            }
        });

        if (isCorrect) {
            feedbackDiv.innerHTML = '<span class="text-success">Richtig! 🎉</span>';
            correctCount++;
        } else {
            feedbackDiv.innerHTML = '<span class="text-danger">Leider falsch. 💡</span>';
        }
    });

    if (summaryDiv) {
        summaryDiv.innerHTML = `Du hast ${correctCount} von ${totalQuestions} Fragen richtig beantwortet!`;
    }
}

// Hilfsfunktionen für Navigation und Bilder-Modal
function openChapterAndScroll(event, chapterId) {
    const details = document.getElementById(`details-${chapterId}`);
    if (details) details.open = true;
    if (window.innerWidth <= 820) toggleMobileMenu();
}

function toggleChapter(event, detailsId) {
    event.preventDefault();
    event.stopPropagation();
    const details = document.getElementById(detailsId);
    if (details) details.open = !details.open;
}

function toggleMobileMenu() {
    const navContent = document.getElementById("navContent");
    if (navContent) navContent.classList.toggle("active");
}

function openImageModal(imgSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
    }
}

function closeImageModal() {
    const modal = document.getElementById("imageModal");
    if (modal) modal.style.display = "none";
}