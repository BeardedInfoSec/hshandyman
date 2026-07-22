(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initReveals() {
    const elements = document.querySelectorAll("[data-reveal]");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px" });

    elements.forEach((element) => observer.observe(element));
  }

  function initComparison() {
    document.querySelectorAll("[data-comparison]").forEach((comparison) => {
      const range = comparison.querySelector(".comparison-range");
      const beforeImage = comparison.querySelector(".comparison-before img");

      const updateWidth = () => {
        comparison.style.setProperty("--comparison-width", `${comparison.clientWidth}px`);
      };

      const updatePosition = () => {
        comparison.style.setProperty("--position", `${range.value}%`);
      };

      updateWidth();
      updatePosition();
      range.addEventListener("input", updatePosition);
      window.addEventListener("resize", updateWidth, { passive: true });

      if ("ResizeObserver" in window) {
        const resizeObserver = new ResizeObserver(updateWidth);
        resizeObserver.observe(comparison);
      }

      // Keep the full-size before image aligned underneath its clipped wrapper.
      beforeImage.draggable = false;
    });
  }

  const reviews = [
    {
      quote: "Fixed our fence, pressure-washed the drive, and rebuilt a flowerbed—all in one visit. Unreal work ethic.",
      name: "— Dana R.",
      area: "East Nashville"
    },
    {
      quote: "He replaced a rotted exterior door and it looks better than the day we moved in. On time, spotless cleanup.",
      name: "— Jessica M.",
      area: "Bellevue"
    },
    {
      quote: "Rebuilt the whole fascia after water damage. Honest pricing and he showed me every step. Highly recommend.",
      name: "— Travis K.",
      area: "Donelson"
    },
    {
      quote: "Best money I've spent on this house. He treats your place like it's his own. Already booked him again.",
      name: "— Marcus & Lynn B.",
      area: "Antioch"
    }
  ];

  function initTestimonials() {
    const section = document.querySelector("[data-testimonial]");
    if (!section) return;

    const quote = section.querySelector("[data-review-quote]");
    const name = section.querySelector("[data-review-name]");
    const area = section.querySelector("[data-review-area]");
    const dots = section.querySelector(".review-dots");
    let active = 0;
    let timer;

    const render = (index) => {
      active = index;
      quote.textContent = reviews[index].quote;
      name.textContent = reviews[index].name;
      area.textContent = reviews[index].area;
      dots.querySelectorAll("button").forEach((button, buttonIndex) => {
        button.setAttribute("aria-current", String(buttonIndex === index));
      });
    };

    const startTimer = () => {
      if (reducedMotion) return;
      window.clearInterval(timer);
      timer = window.setInterval(() => render((active + 1) % reviews.length), 5000);
    };

    reviews.forEach((review, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "review-dot";
      button.setAttribute("aria-label", `Show testimonial ${index + 1} from ${review.name.replace("— ", "")}`);
      button.addEventListener("click", () => {
        render(index);
        startTimer();
      });
      dots.appendChild(button);
    });

    section.addEventListener("mouseenter", () => window.clearInterval(timer));
    section.addEventListener("mouseleave", startTimer);
    section.addEventListener("focusin", () => window.clearInterval(timer));
    section.addEventListener("focusout", startTimer);
    render(0);
    startTimer();
  }

  function initQuoteForm() {
    const form = document.querySelector("#quote-form");
    if (!form) return;

    const error = document.querySelector("#form-error");
    const requiredFields = [...form.querySelectorAll("[required]")];

    const showError = (message, field) => {
      error.textContent = message;
      error.hidden = false;
      field.setAttribute("aria-invalid", "true");
      field.focus();
    };

    requiredFields.forEach((field) => {
      field.addEventListener("input", () => {
        field.removeAttribute("aria-invalid");
        error.hidden = true;
      });
      field.addEventListener("change", () => {
        field.removeAttribute("aria-invalid");
        error.hidden = true;
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      requiredFields.forEach((field) => field.removeAttribute("aria-invalid"));
      error.hidden = true;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const service = String(data.get("service") || "").trim();
      const notes = String(data.get("notes") || "").trim();

      if (!name) return showError("Please add your name so we know who to reach.", form.elements.name);
      if (!phone) return showError("Please add a phone number for your quote.", form.elements.phone);
      if (!/^[+()\-\s\d.]{7,}$/.test(phone)) return showError("Please enter a valid phone number.", form.elements.phone);
      if (!service) return showError("Please choose the service you need.", form.elements.service);

      const message = [
        "Hi Hot Shot Handyman! I'd like a free quote.",
        `Name: ${name}`,
        `My phone: ${phone}`,
        `Service: ${service}`,
        notes ? `Job details: ${notes}` : ""
      ].filter(Boolean).join("\n");

      window.location.href = `sms:+16156336489?&body=${encodeURIComponent(message)}`;
    });
  }

  initReveals();
  initComparison();
  initTestimonials();
  initQuoteForm();
})();
