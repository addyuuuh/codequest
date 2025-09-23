    // List of questions
    const questions = [
      "Write a PHP program that takes two numbers, adds them together, and prints the result.",
      "Create a PHP program that checks if a number is even or odd and prints the result."
    ];

    let currentIndex = 0;
    const questionText = document.getElementById("questionText");
    const qNumber = document.getElementById("qNumber");
    const progressText = document.getElementById("progressText");
    const answerField = document.getElementById("answer");
    const submitBtn = document.getElementById("submitBtn");

    // Store answers
    const answers = [];

    // Load question
    function loadQuestion() {
      if (currentIndex < questions.length) {
        qNumber.textContent = currentIndex + 1;
        questionText.textContent = questions[currentIndex];
        progressText.textContent = `Question ${currentIndex + 1} of ${questions.length}`;
        answerField.value = "";
      } else {
        // Show summary when finished
        document.querySelector(".row").innerHTML = `
          <div class="col-12">
            <div class="p-4 bg-success text-white rounded shadow-sm">
              <h4>All questions answered!</h4>
              <p>Here are your responses:</p>
              <ul>
                ${answers.map((ans, i) => `<li><strong>Q${i+1}:</strong> ${questions[i]}<br>Answer: ${ans}</li>`).join("")}
              </ul>
            </div>
          </div>
        `;
      }
    }

    // Handle submit
    submitBtn.addEventListener("click", () => {
      const userAnswer = answerField.value.trim();
      if (userAnswer === "") {
        alert("Please enter an answer before proceeding!");
        return;
      }
      answers.push(userAnswer);
      currentIndex++;
      loadQuestion();
    });

    // Initialize
    loadQuestion();