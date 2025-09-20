document.addEventListener('DOMContentLoaded', () => {
    const symptomSelect = document.getElementById('symptoms');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const clearBtn = document.getElementById('clearBtn');
    const selectedDisplay = document.querySelector('#selectedSymptomsDisplay span');

    // Update the display of selected symptoms
    symptomSelect.addEventListener('change', () => {
        const selectedOptions = Array.from(symptomSelect.selectedOptions).map(option => option.textContent);
        if (selectedOptions.length > 0) {
            selectedDisplay.textContent = selectedOptions.join(', ');
        } else {
            selectedDisplay.textContent = 'None';
        }
    });

    // Handle the analysis button click
    analyzeBtn.addEventListener('click', () => {
        const selectedSymptoms = Array.from(symptomSelect.selectedOptions).map(option => option.value);

        if (selectedSymptoms.length === 0) {
            alert('Please select at least one symptom.');
            return;
        }

        // Show a loading indicator (optional, but good UX)
        document.getElementById('loadingSpinner').style.display = 'block';

        // Encode the symptoms array into a single string to pass in the URL
        const queryString = encodeURIComponent(selectedSymptoms.join(','));
        
        // Redirect to the results page with the symptoms as a URL parameter
        window.location.href = `result.html?symptoms=${queryString}`;
    });

    // Handle the clear button click
    clearBtn.addEventListener('click', () => {
        symptomSelect.selectedIndex = -1; // Deselect all options
        selectedDisplay.textContent = 'None';
    });
});