const books = [
    {
        title: "The Nature and Properties of Soils (15th ed.)",
        image: "../images/c1.jpg",
        description: "Core text for agriculture and environmental science—soil classification, fertility, and management, widely used at Egerton."
    },
    {
        title: "Campbell Biology (12th Edition)",
        image: "../images/c2.jpg",
        description: "Comprehensive biology reference covering molecular biology, evolution, and ecology for undergraduate programs."
    },
    {
        title: "Engineering Mechanics: Statics (Hibbeler)",
        image: "../images/c3.jpg",
        description: "Fundamental principles of mechanics with examples suited for engineering courses."
    },
    {
        title: "Research Design (Creswell & Creswell)",
        image: "../images/c4.jpg",
        description: "Planning qualitative, quantitative, and mixed methods research—useful across faculties."
    },
    {
        title: "Introduction to Algorithms (CLRS)",
        image: "../images/c5.jpg",
        description: "Comprehensive coverage of modern algorithms for computing and data science."
    },
    {
        title: "Environmental Science (Wright & Boorse)",
        image: "../images/c6.jpg",
        description: "Sustainability, ecosystems, and environmental management relevant to Kenyan contexts."
    },
    {
        title: "Financial Management (Brigham & Ehrhardt)",
        image: "../images/c7.jpg",
        description: "Corporate finance principles, valuation, and decision-making frameworks."
    },
    {
        title: "Linear Algebra and Its Applications (Lay)",
        image: "../images/c8.jpg",
        description: "Vector spaces, matrices, and linear transformations for science and engineering."
    }
];

function renderBooks() {
    const container = document.getElementById('books-container');
    if (!container) return;

    container.innerHTML = books.map(book => `
        <div class="book-card">
            <div class="book-image">
                <img src="${book.image}" alt="${book.title}">
            </div>
            <div class="book-content">
                <h3>${book.title}</h3>
                <p class="book-description">${book.description}</p>
                <a href="#" class="get-button">Find in Library</a>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderBooks);
