const path = require("node:path");
const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");

const app = express();
const port = Number(process.env.PORT) || 3000;
const root = __dirname;
const whatsappNumber = (process.env.WHATSAPP_NUMBER || "2347052336068").replace(/\D/g, "");
const email = process.env.CONTACT_EMAIL || "qultiv8@gmail.com";
const allowedServices = new Set([
  "Social media management",
  "Content & design",
  "Short-form video",
  "A campaign launch pack",
  "Not sure yet"
]);

app.disable("x-powered-by");
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      frameAncestors: ["'self'"],
      imgSrc: ["'self'", "data:"],
      objectSrc: ["'none'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"]
    }
  },
  referrerPolicy: { policy: "strict-origin-when-cross-origin" }
}));
app.use(compression());
app.use(express.json({ limit: "10kb", strict: true }));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 30,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again later." }
});
app.use("/api", apiLimiter);

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function validName(value) {
  return value.length >= 2 && value.length <= 100 && /^[\p{L}\p{M} .'-]+$/u.test(value);
}

app.get("/api/config", (_request, response) => {
  response.json({
    email,
    links: {
      instagram: process.env.INSTAGRAM_URL || "https://www.instagram.com/qultiv8_26/",
      linkedin: process.env.LINKEDIN_URL || "https://www.linkedin.com/company/146896014/",
      twitter: process.env.TWITTER_URL || "https://x.com/QULTIV8_26",
      facebook: process.env.FACEBOOK_URL || "#",
      whatsapp: `https://wa.me/${whatsappNumber}`
    }
  });
});

app.post("/api/contact", (request, response) => {
  const body = request.body && typeof request.body === "object" ? request.body : {};
  const name = clean(body.name, 100);
  const business = clean(body.business, 120);
  const service = clean(body.service, 60);
  const message = clean(body.message, 2000);
  const honeypot = clean(body.website, 100);

  if (honeypot || !validName(name) || (business && business.length < 2) || !allowedServices.has(service)) {
    return response.status(400).json({ error: "Please check the form and try again." });
  }

  const text = `Hello Qultiv8, my name is ${name}${business ? ` from ${business}` : ""}. I’m interested in: ${service}. ${message}`;
  response.json({
    ok: true,
    whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  });
});

app.get("/", (_request, response) => response.sendFile(path.join(root, "index.html")));
app.get("/styles.css", (_request, response) => response.sendFile(path.join(root, "styles.css"), { maxAge: "1d" }));
app.get("/script.js", (_request, response) => response.sendFile(path.join(root, "script.js"), { maxAge: "1d" }));
app.use((_request, response) => response.status(404).json({ error: "Not found" }));

app.listen(port, () => {
  console.log(`Qultiv8 running at http://localhost:${port}`);
});
