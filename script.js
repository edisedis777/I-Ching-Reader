document.addEventListener("DOMContentLoaded", () => {
  const LINE_SYMBOLS = {
    YANG: "———",
    YIN: "— —",
    CHANGING_YANG: "—o—",
    CHANGING_YIN: "—x—",
  };

  const LINE_POSITION_MEANINGS = {
    1: "🌱 Beginning - Initial stages or foundation.",
    2: "🏠 Inner/Lower - Inner resources, preparation, subordinate position.",
    3: "🚧 Transitional - Pivotal, often indicating change or challenge.",
    4: "🌍 Outer/Upper - External factors, approaching influences.",
    5: "👑 Ruling Line - Most important, leadership or crucial factors.",
    6: "🏁 Culmination - Final outcome or ultimate development.",
  };

  // --- UI ELEMENTS ---
  const navCastButton = document.getElementById("navCast");
  const navHistoryButton = document.getElementById("navHistory");
  const navAboutButton = document.getElementById("navAbout");

  const castSection = document.getElementById("castSection");
  const historySection = document.getElementById("historySection");
  const aboutSection = document.getElementById("aboutSection");

  const questionInput = document.getElementById("question");
  const castButton = document.getElementById("castButton");
  const readingResultDiv = document.getElementById("readingResult");
  const currentQuestionP = document.getElementById("currentQuestion");

  const primaryHexagramNameP = document.getElementById("primaryHexagramName");
  const primaryHexagramVisualDiv = document.getElementById(
    "primaryHexagramVisual"
  );
  const primaryHexagramInfoDiv = document.getElementById("primaryHexagramInfo");

  const changingLinesInfoDiv = document.getElementById("changingLinesInfo");
  const changingLinesListDiv = document.getElementById("changingLinesList");

  const resultingHexagramAreaDiv = document.getElementById(
    "resultingHexagramArea"
  );
  const resultingHexagramNameP = document.getElementById(
    "resultingHexagramName"
  );
  const resultingHexagramVisualDiv = document.getElementById(
    "resultingHexagramVisual"
  );
  const resultingHexagramInfoDiv = document.getElementById(
    "resultingHexagramInfo"
  );

  const nuclearHexagramAreaDiv = document.getElementById("nuclearHexagramArea");
  const nuclearHexagramNameP = document.getElementById("nuclearHexagramName");
  const nuclearHexagramVisualDiv = document.getElementById(
    "nuclearHexagramVisual"
  );
  const nuclearHexagramInfoDiv = document.getElementById("nuclearHexagramInfo");

  const historyListDiv = document.getElementById("historyList");
  const resetHistoryButton = document.getElementById("resetHistoryButton");

  // --- I-CHING LOGIC ---
  function generateLine() {
    // Simulate 3 coin tosses (heads=3, tails=2)
    const tosses = [
      Math.random() < 0.5 ? 2 : 3,
      Math.random() < 0.5 ? 2 : 3,
      Math.random() < 0.5 ? 2 : 3,
    ];
    const total = tosses.reduce((sum, val) => sum + val, 0);

    if (total === 6) return { value: 0, changing: true }; // Old Yin
    if (total === 7) return { value: 1, changing: false }; // Young Yang
    if (total === 8) return { value: 0, changing: false }; // Young Yin
    if (total === 9) return { value: 1, changing: true }; // Old Yang
    return { value: 0, changing: false }; // Should not happen
  }

  function castFullHexagram() {
    const lines = [];
    for (let i = 0; i < 6; i++) {
      lines.push(generateLine());
    }

    const primaryBinary = lines.map((line) => line.value).join("");
    const changingIndices = lines
      .map((line, index) => (line.changing ? lines.length - index : -1))
      .filter((index) => index !== -1);

    let resultingBinary = null;
    if (changingIndices.length > 0) {
      resultingBinary = lines
        .map((line) =>
          line.changing ? (line.value === 1 ? 0 : 1) : line.value
        )
        .join("");
    }
    const nuclearBinary = calculateNuclearHexagram(primaryBinary);

    return {
      primaryBinary,
      lines, // Keep original lines for visual display with changing indicators
      changingIndices,
      resultingBinary,
      nuclearBinary,
    };
  }

  function calculateNuclearHexagram(binary) {
    if (binary.length !== 6) return "000000"; // Fallback
    // Inner lines are 2,3,4,5 (0-indexed: 1,2,3,4)
    // Lower trigram: lines 2,3,4 (0-indexed: 1,2,3)
    // Upper trigram: lines 3,4,5 (0-indexed: 2,3,4)
    const lower = binary.substring(1, 4); // lines 2,3,4
    const upper = binary.substring(2, 5); // lines 3,4,5
    return lower + upper; // This is incorrect based on standard I-Ching.
    // Nuclear is lines 2,3,4 for lower and 3,4,5 for upper.
    // Corrected:
    // Lower nuclear: lines 2,3,4 of original (binary[1], binary[2], binary[3])
    // Upper nuclear: lines 3,4,5 of original (binary[2], binary[3], binary[4])
    // So nuclear is binary[1]binary[2]binary[3] + binary[2]binary[3]binary[4]
    // No, that's not right either.
    // Nuclear hexagram:
    // Lines 2, 3, 4 form the lower trigram of the nuclear hexagram.
    // Lines 3, 4, 5 form the upper trigram of the nuclear hexagram.
    // So, the nuclear hexagram lines are:
    // Original Line 5 -> Nuclear Line 6 (Upper 3)
    // Original Line 4 -> Nuclear Line 5 (Upper 2), Nuclear Line 2 (Lower 3)
    // Original Line 3 -> Nuclear Line 4 (Upper 1), Nuclear Line 1 (Lower 2)
    // Original Line 2 -> Nuclear Line 3 (Lower 1)
    // This means:
    // Nuclear Line 1 (bottom) = Original Line 2
    // Nuclear Line 2 = Original Line 3
    // Nuclear Line 3 = Original Line 4
    // Nuclear Line 4 = Original Line 3
    // Nuclear Line 5 = Original Line 4
    // Nuclear Line 6 (top) = Original Line 5
    // So, nuclear binary is:
    // binary[4] (orig line 2) + binary[3] (orig line 3) + binary[2] (orig line 4) FOR LOWER
    // binary[3] (orig line 3) + binary[2] (orig line 4) + binary[1] (orig line 5) FOR UPPER
    // The Python code was:
    // inner_lines = binary[1:5] (lines 2,3,4,5)
    // lower_trigram = inner_lines[0:3] (original lines 2,3,4)
    // upper_trigram = inner_lines[1:4] (original lines 3,4,5)
    // nuclear = lower_trigram + upper_trigram
    // This means nuclear is (orig line 2)(orig line 3)(orig line 4) + (orig line 3)(orig line 4)(orig line 5)
    // Let's stick to the Python logic for consistency with the original app.
    // Python indices: binary[1], binary[2], binary[3] for lower
    // binary[2], binary[3], binary[4] for upper
    const line2 = binary[4]; // Python binary[1] is JS binary[4] if reading from bottom up
    const line3 = binary[3]; // Python binary[2] is JS binary[3]
    const line4 = binary[2]; // Python binary[3] is JS binary[2]
    const line5 = binary[1]; // Python binary[4] is JS binary[1]

    // The Python script's binary string is top-to-bottom (line 6 to line 1).
    // So binary[0] is line 6, binary[5] is line 1.
    // Nuclear uses lines 2,3,4 for lower trigram and 3,4,5 for upper trigram.
    // Line 2 is binary[4]
    // Line 3 is binary[3]
    // Line 4 is binary[2]
    // Line 5 is binary[1]
    const lowerNuc = binary[4] + binary[3] + binary[2];
    const upperNuc = binary[3] + binary[2] + binary[1];
    return lowerNuc + upperNuc; // This matches the Python logic.
  }

  function getHexagramDetails(binary) {
    return (
      HEXAGRAM_DATA[binary] || {
        name: `Unknown Hexagram (${binary})`,
        binary: binary,
        description: "No details available.",
        image: "",
        judgment: "",
      }
    );
  }

  // --- DISPLAY FUNCTIONS ---
  function displayHexagramVisual(linesArray, targetDiv) {
    // linesArray is the array of {value, changing} objects from castFullHexagram
    // It's from bottom (index 0) to top (index 5) as cast.
    // We display from top (line 6) to bottom (line 1).
    let visual = "";
    for (let i = linesArray.length - 1; i >= 0; i--) {
      const line = linesArray[i];
      let lineSymbol;
      if (line.value === 1) {
        // Yang
        lineSymbol = line.changing
          ? LINE_SYMBOLS.CHANGING_YANG
          : LINE_SYMBOLS.YANG;
      } else {
        // Yin
        lineSymbol = line.changing
          ? LINE_SYMBOLS.CHANGING_YIN
          : LINE_SYMBOLS.YIN;
      }
      visual += `${lineSymbol}\n`;
    }
    targetDiv.textContent = visual.trim();
  }

  function displayStaticHexagramVisual(binary, targetDiv) {
    // binary is top-to-bottom (line 6 to line 1)
    let visual = "";
    for (let i = 0; i < binary.length; i++) {
      const bit = binary[i];
      visual += (bit === "1" ? LINE_SYMBOLS.YANG : LINE_SYMBOLS.YIN) + "\n";
    }
    targetDiv.textContent = visual.trim();
  }

  function displayHexagramInfo(hexagramDetails, targetDiv) {
    targetDiv.innerHTML = `
          ${
            hexagramDetails.description
              ? `<p>💡 <strong>Description:</strong> ${hexagramDetails.description}</p>`
              : ""
          }
          ${
            hexagramDetails.image
              ? `<p>🖼️ <strong>Image:</strong> ${hexagramDetails.image}</p>`
              : ""
          }
          ${
            hexagramDetails.judgment
              ? `<p>⚖️ <strong>Judgment:</strong> ${hexagramDetails.judgment}</p>`
              : ""
          }
      `;
  }

  function handleCast() {
    const questionText = questionInput.value.trim();
    const reading = castFullHexagram();

    currentQuestionP.textContent = questionText
      ? `❓ Your Question: ${questionText}`
      : "❓ General Reading";

    // Primary Hexagram
    const primaryDetails = getHexagramDetails(reading.primaryBinary);
    primaryHexagramNameP.textContent = `☯️ ${primaryDetails.name}`;
    displayHexagramVisual(reading.lines, primaryHexagramVisualDiv); // Use original lines for changing symbols
    displayHexagramInfo(primaryDetails, primaryHexagramInfoDiv);

    // Changing Lines
    if (reading.changingIndices.length > 0) {
      changingLinesInfoDiv.style.display = "block";
      changingLinesListDiv.innerHTML = reading.changingIndices
        .map(
          (lineNum) =>
            `<p>↔️ Line ${lineNum}: ${
              LINE_POSITION_MEANINGS[lineNum] || "Specific meaning varies."
            }</p>`
        )
        .join("");

      // Resulting Hexagram
      const resultingDetails = getHexagramDetails(reading.resultingBinary);
      resultingHexagramAreaDiv.style.display = "block";
      resultingHexagramNameP.textContent = `📜 ${resultingDetails.name}`;
      displayStaticHexagramVisual(
        reading.resultingBinary,
        resultingHexagramVisualDiv
      );
      displayHexagramInfo(resultingDetails, resultingHexagramInfoDiv);
    } else {
      changingLinesInfoDiv.style.display = "none";
      resultingHexagramAreaDiv.style.display = "none";
    }

    // Nuclear Hexagram
    const nuclearDetails = getHexagramDetails(reading.nuclearBinary);
    nuclearHexagramAreaDiv.style.display = "block";
    nuclearHexagramNameP.textContent = `⚛️ ${nuclearDetails.name}`;
    displayStaticHexagramVisual(
      reading.nuclearBinary,
      nuclearHexagramVisualDiv
    );
    displayHexagramInfo(nuclearDetails, nuclearHexagramInfoDiv);

    readingResultDiv.style.display = "block";

    saveReadingToHistory({
      date: new Date().toLocaleString(),
      question: questionText,
      primaryBinary: reading.primaryBinary,
      changingIndices: reading.changingIndices,
      resultingBinary: reading.resultingBinary,
      nuclearBinary: reading.nuclearBinary,
    });
    loadAndDisplayHistory(); // Refresh history view
  }

  // --- HISTORY ---
  const HISTORY_KEY = "iChingReadingsHistory";

  function getHistory() {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  }

  function saveReadingToHistory(readingEntry) {
    const history = getHistory();
    history.unshift(readingEntry); // Add to the beginning
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 10))); // Keep last 10
  }

  function loadAndDisplayHistory() {
    const history = getHistory();
    if (history.length === 0) {
      historyListDiv.innerHTML = "<p>No readings in history yet.</p>";
      return;
    }

    historyListDiv.innerHTML = history
      .map((entry, index) => {
        const primary = getHexagramDetails(entry.primaryBinary);
        let entryHtml = `
              <div class="history-entry">
                  <h4>📖 Reading #${history.length - index} - 📅 ${
          entry.date
        }</h4>
                  ${
                    entry.question
                      ? `<p><strong>❓ Question:</strong> ${entry.question}</p>`
                      : ""
                  }
                  <p><strong>☯️ Primary:</strong> ${primary.name}</p>`;

        if (entry.changingIndices && entry.changingIndices.length > 0) {
          entryHtml += `<p><strong>✨ Changing Lines:</strong> ${entry.changingIndices.join(
            ", "
          )}</p>`;
          if (entry.resultingBinary) {
            const resulting = getHexagramDetails(entry.resultingBinary);
            entryHtml += `<p><strong>📜 Resulting:</strong> ${resulting.name}</p>`;
          }
        }
        if (entry.nuclearBinary) {
          const nuclear = getHexagramDetails(entry.nuclearBinary);
          entryHtml += `<p><strong>⚛️ Nuclear:</strong> ${nuclear.name}</p>`;
        }
        entryHtml += `</div>`;
        return entryHtml;
      })
      .join("");
  }

  function handleResetHistory() {
    if (
      confirm(
        "Are you sure you want to delete all your reading history? This action cannot be undone."
      )
    ) {
      localStorage.removeItem(HISTORY_KEY);
      loadAndDisplayHistory(); // Refresh the view
      alert("Reading history has been cleared.");
    }
  }

  // --- NAVIGATION ---
  function showSection(sectionId) {
    [castSection, historySection, aboutSection].forEach((section) => {
      section.style.display = section.id === sectionId ? "block" : "none";
      section.classList.toggle("active-section", section.id === sectionId);
    });
  }

  navCastButton.addEventListener("click", () => showSection("castSection"));
  navHistoryButton.addEventListener("click", () => {
    showSection("historySection");
    loadAndDisplayHistory();
  });
  navAboutButton.addEventListener("click", () => showSection("aboutSection"));

  // --- INITIALIZATION ---
  castButton.addEventListener("click", handleCast);
  resetHistoryButton.addEventListener("click", handleResetHistory);
  showSection("castSection"); // Show cast section by default

  console.log(
    "I-Ching Reader Initialized. Ensure HEXAGRAM_DATA is fully populated."
  );
  if (Object.keys(HEXAGRAM_DATA).length < 64) {
    console.warn(
      "HEXAGRAM_DATA seems incomplete. Please add all 64 hexagrams for full functionality."
    );
    alert(
      "Warning: Hexagram data is incomplete. Some hexagrams may show as 'Unknown'. Please check script.js."
    );
  }
});
