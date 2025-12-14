const historyEvents = [
    {
        year: "1939",
        title: "Foundation",
        description: "Egerton University was founded as Egerton Farm School by Lord Maurice Egerton of Tatton, a British national who settled in Kenya in the 1920s. He donated 300 hectares of land for the school."
    },
    {
        year: "1950",
        title: "Agricultural College",
        description: "The school was upgraded to an Agricultural College offering diploma programmes. It became the premier institution for agricultural training in East Africa."
    },
    {
        year: "1986",
        title: "Constituent College",
        description: "Egerton Agricultural College was gazetted as a constituent college of the University of Nairobi, marking a major step towards university status."
    },
    {
        year: "1987",
        title: "University Status",
        description: "Egerton University was established as an independent public university by an Act of Parliament (Act No. 11 of 1987), becoming Kenya's fourth public university."
    },
    {
        year: "1990",
        title: "Library Expansion",
        description: "The Main University Library building was completed and occupied, significantly boosting the institution's capacity to support research and academic excellence."
    },
    {
        year: "2010",
        title: "Digital Era",
        description: "Launch of the E-Library and Institutional Repository, digitizing thousands of theses and research papers to providing global access to Egerton's scholarly output."
    },
    {
        year: "Present",
        title: "A World-Class University",
        description: "Today, Egerton University stands as a center of excellence in Agriculture and beyond, with multiple campuses and a robust library system serving thousands of students annually."
    }
];

function renderHistory() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    container.innerHTML = historyEvents.map((event, index) => `
        <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
            <div class="timeline-content">
                <div class="year-badge">${event.year}</div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderHistory);
