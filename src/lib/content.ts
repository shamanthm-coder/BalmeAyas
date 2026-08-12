export const company = {
  name: "Balme Ayas",
  legalName: "Balme Ayas",
  tagline: "Precision Engineering & Advanced Manufacturing Solutions",
  website: "https://balmeayas.in",
  websiteLabel: "balmeayas.in",
  email: "sales@balmeayas.in",
  phones: ["9741562847"],
  whatsapp: "919741562847",
  brochurePath: "/docs/balme-ayas-brochure.pdf",
  about:
    "Balme Ayas is an innovative manufacturing startup focused on precision engineering solutions for defense, automotive, aerospace, aeronautics, and renewable energy industries. Founded with a vision to revolutionize traditional manufacturing, we use cutting-edge technology and agile production methods.",
  capabilities:
    "At Balme Ayas, we combine advanced manufacturing technology with precision engineering expertise to deliver exceptional results across diverse industries. Our state-of-the-art facility houses cutting-edge CNC and EDM machines, enabling us to handle complex projects with micron-level accuracy.",
  approach:
    "Our team combines fresh engineering talent with industry expertise to deliver high-quality components that meet demanding specifications. As a nimble startup, we offer personalized service and flexible solutions that adapt quickly to our clients' evolving needs.",
};

export const services = [
  {
    title: "CNC Machining",
    description:
      "High-precision milling, turning, and multi-axis machining for complex geometries.",
  },
  {
    title: "EDM Services",
    description:
      "Wire and sinker EDM for intricate cuts and complex cavity machining.",
  },
  {
    title: "Prototype Development",
    description:
      "Rapid prototyping and small-batch production with quick turnaround.",
  },
  {
    title: "Tool & Die Making",
    description:
      "Custom tooling solutions and precision die manufacturing.",
  },
  {
    title: "Quality Assurance",
    description:
      "Comprehensive inspection and quality control processes.",
  },
  {
    title: "Engineering Support",
    description:
      "Design consultation and manufacturing optimization.",
  },
];

export const industries = [
  {
    name: "Defense",
    details: "Mission-critical components engineered for reliability under demanding conditions.",
  },
  {
    name: "Automotive",
    details: "Engine components, transmission parts, and custom fixtures.",
  },
  {
    name: "Aerospace & Aeronautics",
    details: "Precision components, brackets, and specialized flight-ready parts.",
  },
  {
    name: "Renewable Energy",
    details: "Durable, efficient components for cleaner industrial systems.",
  },
  {
    name: "Industrial Manufacturing",
    details: "Machine components, tooling, and production parts.",
  },
  {
    name: "Medical Devices",
    details: "Surgical instruments and implant-grade component manufacturing.",
  },
  {
    name: "Tool & Die",
    details: "Injection molds, stamping dies, and custom tooling.",
  },
];

export const materials = {
  metals: [
    "Aluminum alloys",
    "Stainless steel",
    "Carbon steel",
    "Titanium",
    "Brass",
    "Copper",
    "Tool steels (H13, D2, P20)",
  ],
  plastics: ["ABS", "Nylon", "PEEK", "Delrin", "Polycarbonate", "HDPE"],
  specialty: ["Inconel", "Hastelloy", "Ceramic composites", "Graphite"],
};

export const reasons = [
  {
    title: "Precision Excellence",
    description: "Tolerances down to ±0.002 mm with consistent quality.",
  },
  {
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality.",
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art CNC and EDM equipment.",
  },
  {
    title: "Expert Team",
    description: "Skilled engineers and machinists with deep industry experience.",
  },
];

export const machines = [
  {
    category: "CNC Vertical Machining Center",
    model: "COSMOS VM Series (CVM 800)",
    specs: [
      { label: "Table Size", value: "800 × 400 mm" },
      { label: "X-Axis Travel", value: "800 mm" },
      { label: "Y-Axis Travel", value: "400 mm" },
      { label: "Z-Axis Travel", value: "500 mm" },
      { label: "Spindle Speed", value: "8000 RPM" },
      { label: "Tool Capacity", value: "24 Tools ATC" },
    ],
  },
  {
    category: "CNC Machining Center",
    model: "BFW BMV 50 TC24",
    specs: [
      { label: "Table Size", value: "1000 × 500 mm" },
      { label: "Max Load", value: "500 kg" },
      { label: "Spindle Power", value: "15 kW" },
      { label: "Spindle Speed", value: "12000 RPM" },
      { label: "Tool Magazine", value: "24 Tools" },
      { label: "Positioning Accuracy", value: "±0.005 mm" },
    ],
  },
  {
    category: "Wire EDM Machine",
    model: "FANUC ROBOCUT α-C1",
    specs: [
      { label: "Work Table", value: "400 × 300 mm" },
      { label: "Max Workpiece", value: "300 × 200 × 100 mm" },
      { label: "Wire Diameter", value: "0.1 – 0.3 mm" },
      { label: "Cutting Speed", value: "Up to 300 mm²/min" },
      { label: "Precision", value: "±0.002 mm" },
      { label: "Surface Finish", value: "Ra 0.1 μm" },
    ],
  },
  {
    category: "Sinker EDM Machine",
    model: "ALTRA ZNC 6530",
    specs: [
      { label: "Work Tank", value: "650 × 300 mm" },
      { label: "Z-Axis Travel", value: "300 mm" },
      { label: "Application", value: "Complex cavity machining" },
      { label: "Capability", value: "Intricate die & mold work" },
    ],
  },
];

export type WorkItem = {
  src: string;
  title: string;
  description: string;
  category: "process" | "component";
  tag: string;
};

export const works: WorkItem[] = [
  {
    src: "/works/img1.webp",
    title: "In-process inspection",
    description:
      "Dial-indicator setup on the spindle verifying alignment before the next cut — micron-level control on the shop floor.",
    category: "process",
    tag: "Quality",
  },
  {
    src: "/works/img2.webp",
    title: "CNC face machining",
    description:
      "Circular aluminum workpiece under active coolant, showing clean tool paths and multi-hole precision drilling.",
    category: "process",
    tag: "CNC",
  },
  {
    src: "/works/img3.webp",
    title: "Complex cavity tooling",
    description:
      "Mirrored mold cavities with organic contours and boss features for high-spec production tooling.",
    category: "component",
    tag: "Tooling",
  },
  {
    src: "/works/img4.webp",
    title: "Multi-bore mounting plate",
    description:
      "Flat precision plate with varied-diameter bores and edge notches for specialized industrial assemblies.",
    category: "component",
    tag: "Plate",
  },
  {
    src: "/works/img5.webp",
    title: "Anodized mounting flange",
    description:
      "Dark-finished circular flange with recessed bolt pockets and a large central bore for structural interfaces.",
    category: "component",
    tag: "Flange",
  },
  {
    src: "/works/img6.png",
    title: "Housing with internal bosses",
    description:
      "Charcoal-finished circular housing featuring threaded bosses, alignment holes, and a clean central aperture.",
    category: "component",
    tag: "Housing",
  },
  {
    src: "/works/img7.png",
    title: "Concentric-finish disc",
    description:
      "Reflective machined disc with concentric tool marks, counterbored mounts, and micro-drill features.",
    category: "component",
    tag: "Disc",
  },
  {
    src: "/works/img9.jpeg",
    title: "Mold base",
    description:
      "Precision mold base with machined cavity, guide-pin bores, and multi-level pocketing prepared for production tooling.",
    category: "component",
    tag: "Mold",
  },
];
