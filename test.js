const questions = [
    { text: "Saya merasa terisi energi saat berada dalam keramaian atau di antara banyak orang.", type: 'EI' },
    { text: "Dalam membuat keputusan, saya lebih mempertimbangkan bagaimana perasaan orang lain daripada menggunakan logika.", type: 'TF' },
    { text: "Saya lebih suka memiliki jadwal terperinci yang diatur terlebih dahulu daripada bersikap spontan.", type: 'JP' },
    { text: "Saya lebih tertarik pada ide-ide abstrak dan konsep yang tidak biasa daripada fakta-fakta praktis.", type: 'SN' },
    { text: "Saya cenderung fokus pada saat ini dan detail kecil daripada pada gambaran besar.", type: 'SN' },
    { text: "Saya merasa mudah untuk memahami perasaan orang lain.", type: 'TF' },
    { text: "Saya lebih nyaman mengambil keputusan setelah mempertimbangkan semua fakta.", type: 'JP' },
    { text: "Saya lebih suka bekerja sendiri daripada dalam kelompok.", type: 'EI' },
    { text: "Saya lebih memilih spontanitas daripada perencanaan dalam aktivitas sehari-hari.", type: 'JP' },
    { text: "Saya merasa bahwa emosi orang lain sangat memengaruhi saya.", type: 'TF' }
  ];
  
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  const answers = [];
  
  function renderQuestions() {
    const questionsContainer = document.getElementById("questions");
    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
      questionDiv.innerHTML = `<p>${index + 1}. ${question.text}</p>`;
      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options");
      const choices = [
        { text: 'Setuju', value: 1 },
        { text: 'Netral', value: 0 },
        { text: 'Tidak Setuju', value: -1 }
      ];
      choices.forEach(choice => {
        const optionDiv = document.createElement("div");
        optionDiv.innerText = choice.text;
        optionDiv.onclick = () => selectAnswer(index, choice.value);
        optionsDiv.appendChild(optionDiv);
      });
      questionDiv.appendChild(optionsDiv);
      questionsContainer.appendChild(questionDiv);
    });
  }
  
  function selectAnswer(questionIndex, choiceValue) {
    const question = questions[questionIndex];
    answers[questionIndex] = choiceValue;
    if (choiceValue === 1) {
      scores[question.type.charAt(0)]++;
    } else if (choiceValue === -1) {
      scores[question.type.charAt(1)]++;
    }
    highlightSelectedOption(questionIndex, choiceValue);
  }
  
  function highlightSelectedOption(questionIndex, choiceValue) {
    const options = document.querySelectorAll(`.question:nth-child(${questionIndex + 1}) .options div`);
    options.forEach((option, index) => {
      if (index === choiceValue + 1) {
        option.style.backgroundColor = "#b0e0e6";
      } else {
        option.style.backgroundColor = "#d3d3d3";
      }
    });
  }
  
  function calculatePersonality() {
    let result = "";
    result += scores.E > scores.I ? "E" : "I";
    result += scores.S > scores.N ? "S" : "N";
    result += scores.T > scores.F ? "T" : "F";
    result += scores.J > scores.P ? "J" : "P";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerText = "Hasil Kepribadian Anda: " + result;
    document.querySelector(".finish-button").style.display = "block";
  }
  
  function finishTest() {
    window.location.href = "index.html";
  }
  
  renderQuestions();
  