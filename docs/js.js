
        document.addEventListener('DOMContentLoaded', function() {
            const dayCards = document.querySelectorAll('.day-card');
            const modal = document.getElementById('githubModal');
            const modalDayInfo = document.getElementById('modalDayInfo');
            const goToGithubBtn = document.getElementById('goToGithub');
            const cancelGithubBtn = document.getElementById('cancelGithub');
            
            let currentDay = 1;
            let currentTask = '';
            
            // GitHub URL template (ganti dengan username repository Anda)
            const githubUrlTemplate = 'https://github.com/username/MYTHS/tree/main/day-';
            
            // Add click event to each day card
            dayCards.forEach(card => {
                card.addEventListener('click', function() {
                    currentDay = this.getAttribute('data-day');
                    currentTask = this.getAttribute('data-task');
                    
                    modalDayInfo.textContent = `Day ${currentDay}: ${currentTask}`;
                    modal.style.display = 'block';
                });
            });
            
            // Go to GitHub button
            goToGithubBtn.addEventListener('click', function() {
                const githubUrl = githubUrlTemplate + currentDay;
                window.open(githubUrl, '_blank');
                modal.style.display = 'none';
            });
            
            // Cancel button
            cancelGithubBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            
            // Close modal when clicking outside of it
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            // Add a function to mark days as completed (for demonstration)
            function markDayAsCompleted(dayNumber) {
                const dayCard = document.querySelector(`.day-card[data-day="${dayNumber}"]`);
                if (dayCard) {
                    dayCard.classList.add('completed');
                    dayCard.querySelector('.day-status').textContent = '✓';
                }
            }
            
            // Example: Mark Day 1 as completed (already done in HTML)
            // markDayAsCompleted(1);
        });
