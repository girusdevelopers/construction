// Your JavaScript code for dynamically adding FAQ items here

// Example usage in JavaScript:
const faqList = document.querySelector(".faq-list");

function createFAQItem(question, answer) {
    const mainMatter = document.createElement("div");
    mainMatter.classList.add("main-mater");

    const header = document.createElement("div");
    header.classList.add("header");

    const link = document.createElement("a");

    const mainQuestion = document.createElement("div");
    mainQuestion.classList.add("main-question");
    mainQuestion.textContent = question;

    const plusIcon = document.createElement("div");
    plusIcon.classList.add("plus-icon");
    plusIcon.style.transition = "all 200ms ease-in";

    link.appendChild(mainQuestion);
    link.appendChild(plusIcon);
    header.appendChild(link);

    const matter = document.createElement("div");
    matter.classList.add("matter");
    matter.style.maxHeight = "0";

    const answerParagraph = document.createElement("p");
    answerParagraph.textContent = answer;

    matter.appendChild(answerParagraph);

    mainMatter.appendChild(header);
    mainMatter.appendChild(matter);

    faqList.appendChild(mainMatter);

    mainMatter.addEventListener("click", () => {
        matter.style.maxHeight = matter.style.maxHeight === "0px" ? "200px" : "0px";
        plusIcon.style.transform = plusIcon.style.transform === "rotate(0deg)" ? "rotate(45deg)" : "rotate(0deg)";
    });
}

// Usage:
createFAQItem("What services do you provide as a construction company?", "Our construction company offers a diverse range of services, encompassing residential and commercial construction, remodeling, renovation, and architectural design.");
createFAQItem("How can I request a quote for my construction project? ","Requesting a quote is a breeze. Simply complete our online contact form, and our dedicated team will promptly provide you with a tailored estimate.");
createFAQItem("Can you showcase some of your past construction projects?", "Certainly, we invite you to explore our portfolio page, where you'll find photographs and in-depth information about our successfully completed projects.");
createFAQItem("Is your construction company licensed and insured?", "Absolutely, our construction company is fully licensed and insured. This ensures the safety and security of both our clients and their valuable projects.");
createFAQItem("What distinguishes your construction company from competitors?", "What truly sets us apart in the construction industry is our unwavering commitment to exceptional craftsmanship, meticulous attention to detail, and an unwavering dedication to customer satisfaction.");
createFAQItem("Do you provide both design and architectural services, or just construction?", "Yes, we offer comprehensive services that encompass not only architectural design but also the construction phase. We're here to bring your unique vision to life.");
createFAQItem("How long does a typical construction project usually take from start to finish?", "Project timelines can vary depending on factors like scope and complexity. Rest assured, during the consultation phase, we provide detailed schedules tailored to your specific project.");
createFAQItem("Could you explain the payment process for your construction services?", "Our payment process is transparent and typically involves milestone payments that align with project progress. We're happy to discuss the specifics further during your consultation.");
createFAQItem("Do you handle permits and regulatory approvals for construction projects? ", "Yes, we take care of all the necessary permits and regulatory approvals to ensure that your project complies with local regulations and standards");
createFAQItem("Can I easily track the progress of my construction project online?", "Absolutely, we provide our clients with secure access to an online portal. Through this portal, you can conveniently monitor project updates, timelines, and stay in direct communication with our team.");
// Repeat for other FAQ items
