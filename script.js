console.log("Rahul Sahu Website Loaded Successfully!");


// Scroll animation (future use)
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#111";
    } else {
        header.style.background = "black";
    }
});
// 🔐 अपनी OpenAI API Key यहाँ डालें
const apiKey = "sk-855b8af8f4b2d5b1c8d8bb6be411b48c";

// 🧠 Function: Generate Voiceover + Script
async function generateVideoScript() {
    const promptText = document.getElementById("prompt").value;

    if (!promptText) {
        alert("Please enter a topic first!");
        return;
    }

    document.getElementById("result").innerHTML = "⏳ Generating script...";

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "user", content: `Write a short YouTube-style script on: ${promptText}` }
                ]
            })
        });

        const data = await response.json();
        const script = data.choices[0].message.content;

        document.getElementById("result").innerHTML = script;

    } catch (error) {
        document.getElementById("result").innerHTML = "❌ Error generating script!";
        console.error(error);
    }
}

// 🎥 In future: Here we will add real video generation API
