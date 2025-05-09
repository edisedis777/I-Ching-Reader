# ✨ I-Ching Reader ☯️

A web-based I-Ching (Book of Changes) simulator that allows users to cast hexagrams, receive interpretations, and learn about this ancient phylosophical divination system.

# 📸 Screenshots!

- Main casting interface:
- <img width="459" alt="Screenshot_casting" src="https://github.com/user-attachments/assets/10f81551-62d5-4e03-8efc-5ef7635d9017" />

- Example of a reading result:
- <img width="440" alt="Screenshot_reading" src="https://github.com/user-attachments/assets/0a056c71-fef9-4c38-8aea-ba59d2790d61" />

- History page:
- <img width="460" alt="Screenshot_history" src="https://github.com/user-attachments/assets/9e29ea5e-772c-4ece-9f69-cbf27e663570" />

- About page:
- <img width="459" alt="Screenshot_about" src="https://github.com/user-attachments/assets/cc03dda5-8ba8-498f-a5ce-25357d3fd30c" />


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
└── complete_hexagram_data.js       # Contains the data for all 64 hexagrams
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
    - The most recent 10 Readings will be saved to the history. This can be configured in the script.js file code. 
    - Your can reset the history by clicking on the **🗑️ Reset History** button. 
4.  **Learn More:**
    - Visit the "ℹ️ About I-Ching" section for detailed background information on the I-Ching, its components, and the Yi-globe.
  

## 🌐 Companion Project: I-Ching Sphere

For a 3D visual exploration of the Yi-globe and its hexagram arrangements, check out the [I-Ching Sphere](https://github.com/edisedis777/I-Ching-Sphere) project.

## 🌱 Future Enhancements (Ideas)

- More detailed interpretations for individual changing lines.
- Ability to manually input hexagram lines.
- User accounts to sync history across devices (would require a backend).
- Visual representation of the Yi-globe.
- Export/import reading history.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 🙏 Credits
- This project was inspired by the work of Drasny József on the I Ching Globe. You can read more about it here: [I Ching Globe PDF](https://www.pascal-man.com/navigation/faq-java-browser/PDF-I-Ching/yiglobe.pdf)
- [I Ching on Wikibooks](https://en.wikibooks.org/wiki/I_Ching/The_64_Hexagrams) for the hexagram data

## 📜 License

This project is licensed under the GNU Affero General Public License v3.0 License. See the `LICENSE` file for details.

---

Enjoy your journey with the I-Ching Reader!
