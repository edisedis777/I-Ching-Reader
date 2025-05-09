# ✨ I-Ching Reader ☯️

A web-based I-Ching (Book of Changes) simulator that allows users to cast hexagrams, receive interpretations, and learn about this ancient phylosophical divination system.

# 📸 Screenshots (Placeholder)

- _Main casting interface_
- _Example of a reading result_
- _History page_
- _About page_

## 🌟 Features

- **Hexagram Casting:** Simulate casting hexagrams using the three-coin method.
- **Enter a Question:** Users can input a question or focus for their reading.
- **Comprehensive Readings:** Displays:
  - 🔮 **Primary Hexagram:** The initial hexagram representing the current situation.
  - ✨ **Changing Lines:** Highlights dynamic lines and their specific positional meanings.
  - 📜 **Resulting Hexagram:** The hexagram the primary one transforms into if changing lines are present.
  - ⚛️ **Nuclear Hexagram:** Reveals the underlying core influence of the primary hexagram.
- **Detailed Interpretations:** Provides the name, binary representation, description, image, and judgment for each hexagram.
- **Reading History:** Saves past readings (question, date, and hexagrams) to the browser's localStorage for review.
- **Educational "About" Section:**
  - Introduction to the I-Ching.
  - Explanation of the Yi-globe and its cosmological significance.
  - Details on the coin casting method.
  - Clear explanations of what Primary Hexagrams, Changing Lines, Resulting Hexagrams, and Nuclear Hexagrams mean.
- **Mobile-Friendly Design:** Responsive layout for a good experience on various screen sizes.
- **Emoji-Enhanced UI:** Uses emojis for a more engaging visual experience.

## 🛠️ Technologies Used

- **HTML:** Structure
- **CSS:** Styling
- **JavaScript:** Core logic for:
  - Hexagram casting.
  - DOM manipulation to display results.
  - Handling user interactions.
  - Managing reading history via localStorage.

## 📁 Project Structure

```
I_Ching_reader/
├── index.html                      # Main HTML file for the application
├── styles.css                      # CSS styles for layout and appearance
├── script.js                       # Core JavaScript logic for the application
└── complete_hexagram_data.js # Contains the data for all 64 hexagrams
```

## 🚀 Setup and Installation

1.  **Clone the repository or download the files:**
    Get all the project files onto your local machine.

2.  **Open in Browser:**
    Open the `/index.html` file in your preferred web browser.

## 💡 How to Use

1.  **Navigate Sections:** Use the top navigation buttons (🔮 Cast Hexagram, 📚 View History, ℹ️ About I-Ching) to switch between different parts of the application.
2.  **Cast a Hexagram:**

- Go to the "🔮 Cast Hexagram" section.
- Optionally, type your question or focus into the input field.
- Click the "Toss Coins & Cast" button.
- The reading results, including the Primary, Changing Lines (if any), Resulting, and Nuclear hexagrams, along with their interpretations, will be displayed.

3.  **View History:**
    - Go to the "📚 View History" section to see a list of your past readings.
4.  **Learn More:**
    - Visit the "ℹ️ About I-Ching" section for detailed background information on the I-Ching, its components, and the Yi-globe.

## 🌱 Future Enhancements (Ideas)

- More detailed interpretations for individual changing lines.
- Ability to manually input hexagram lines.
- User accounts to sync history across devices (would require a backend).
- Visual representation of the Yi-globe.
- Export/import reading history.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📜 License

This project is licensed under the GNU Affero General Public License v3.0 License. See the `LICENSE` file for details.

---

Enjoy your journey with the I-Ching Reader!
