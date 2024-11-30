

      // Show menu button on smaller screens
      window.addEventListener("resize", () => {
        if (window.innerWidth <= 768) {
          menuToggle.style.display = "block";
        } else {
          menuToggle.style.display = "none";
          nav.classList.remove("active");
        }
      });

      // categories  page js

      
      // Trigger resize event to set initial state
      window.dispatchEvent(new Event("resize"));
      
       // JavaScript to implement search and filtering functionality
       document.getElementById("applyFilters").addEventListener("click", () => {
        const searchInput = document
          .getElementById("searchInput")
          .value.toLowerCase();
        const filterValue = document.getElementById("filterSelect").value;
        const categoryGrid = document.getElementById("categoryGrid");
        const cards = categoryGrid.querySelectorAll(".category-card");

        // Convert NodeList to Array for sorting
        let cardArray = Array.from(cards);

        // Filter by search term
        cardArray.forEach((card) => {
          const title = card.querySelector("h3").innerText.toLowerCase();
          if (searchInput && !title.includes(searchInput)) {
            card.style.display = "none";
          } else {
            card.style.display = "block";
          }
        });

        // Sort cards based on filter
        if (filterValue) {
          cardArray = cardArray.filter((card) => card.style.display !== "none");
          cardArray.sort((a, b) => {
            const aValue = parseInt(a.dataset[filterValue.split("-")[0]]);
            const bValue = parseInt(b.dataset[filterValue.split("-")[0]]);
            if (filterValue.includes("asc")) return aValue - bValue;
            if (filterValue.includes("desc")) return bValue - aValue;
            return 0; // Default (popularity or new)
          });

          // Reorder the cards in the grid
          cardArray.forEach((card) => categoryGrid.appendChild(card));
        }
      });