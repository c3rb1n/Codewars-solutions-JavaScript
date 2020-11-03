const fix = paragraph => paragraph && paragraph.split(".")
    .map(w => w.trim())
        .map(w => w && w[0].toUpperCase() + w.slice(1)).join(". ").trim();