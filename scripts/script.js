// Load All Issues
const loadIssues = () => {
  manageSpinner(true);

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      displayIssues(data.data);
    });
};

// Display Issues

const displayIssues = (issues) => {
  const container = document.getElementById("allCards");

  container.innerHTML = "";

  document.getElementById("issues-count").innerText = issues.length;

  issues.forEach((issue) => {
    const card = document.createElement("div");

    const borderColor =
      issue.status === "open"
        ? "border-t-4 border-green-500"
        : "border-t-4 border-purple-500";

    card.className = "h-full";

    card.innerHTML = `
    
    <div onclick="loadIssueDetails(${issue.id})"
    class="bg-white rounded-xl shadow-sm p-5 cursor-pointer ${borderColor} flex flex-col h-full">

        <!-- Header -->
        <div class="flex justify-between items-center mb-3">

            <span>
                ${
                  issue.status === "open"
                    ? `<img src="./assets/Open-Status.png" class="w-4 h-4">`
                    : `<img src="./assets/Closed-Status.png" class="w-4 h-4">`
                }
            </span>

            <span class="text-xs px-2 py-1 rounded-full ${
              issue.priority === "high"
                ? "text-red-500 bg-red-100"
                : issue.priority === "medium"
                  ? "text-orange-500 bg-orange-100"
                  : "text-gray-500 bg-gray-100"
            }">
                ${issue.priority.toUpperCase()}
            </span>

        </div>

        <!-- Content -->
        <div class="flex-1">
            <h2 class="font-bold text-lg line-clamp-2 mb-2">
                ${issue.title}
            </h2>

            <p class="text-gray-500 text-sm line-clamp-2">
                ${issue.description}
            </p>
        </div>

        <!-- Labels -->
        <div class="flex gap-2 flex-wrap mt-3 min-h-[32px]">
        ${issue.labels
          .map((label) => {
            const labelName = label.toLowerCase();

            const labelConfig = {
              bug: {
                text: "text-red-500",
                bg: "bg-red-100",
                border: "border-red-600",
                iconImg: "",
                iconFA: `<i class="fa-solid fa-bug" style="color: #ef4444;"></i>`,
              },
              "help wanted": {
                text: "text-orange-500",
                bg: "bg-orange-100",
                border: "border-orange-600",
                iconImg: "",
                iconFA: `<i class="fa-solid fa-life-ring" style="color: #d97706;"></i>`,
              },
              enhancement: {
                text: "text-green-500",
                bg: "bg-green-100",
                border: "border-green-600",
                iconImg: "",
                iconFA: `<i class="fa-solid fa-wand-magic-sparkles" style="color: #00a96e;"></i>`,
              },
            };

            const style = labelConfig[labelName] || {
              text: "text-gray-500",
              bg: "bg-gray-100",
              border: "border-gray-600",
              iconImg: "",
              iconFA: `<i class="fa-solid fa-circle-info" style="color: #9ca3af;"></i>`,
            };

            return `
        <span class="flex items-center gap-0.25 text-sm px-1 pr-2 pl-2 py-[1px] rounded-full border ${style.border} ${style.text} ${style.bg}">
            ${
              style.iconImg
                ? `<img src="${style.iconImg}" class="w-2 h-2">`
                : style.iconFA
            }
            ${label.toUpperCase()}
        </span>
        `;
          })
          .join("")}
        </div>


        <!-- Divider line -->
        <div class="border-t border-gray-300 mt-3 w-full"></div>
                
        <!-- Footer -->
        <div class="text-xs text-gray-400 mt-3">
            #${issue.id} by ${issue.author}
            <br/>
            ${new Date(issue.createdAt).toLocaleDateString()}
        </div>

        </div>
    
    `;

    container.append(card);
  });

  manageSpinner(false);
};